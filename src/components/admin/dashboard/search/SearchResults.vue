<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols="isRoomSearch ? 12 : 6">
        <rooms-table
          v-if="isRoomSearch"
          :hideHeader="true"
          :rooms="searchResults"
        />
        <v-data-table
          v-else
          :headers="headers"
          :sort-by="'name'"
          :items="searchResults"
          @click:row="onNavigateToEntity"
        >
          <template v-slot:[`item.room`]="{ item }">
            {{ getRoomName(item.roomId) }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  LocalizedSearchType,
  SearchType,
} from "@/model/admin/search/searchType";
import { DataTableHeader } from "vuetify";
import { NavigateToEntity } from "@/services/navigation-helpers";
import RoomsTable from "../RoomsTable.vue";

@Component({
  components: {
    RoomsTable,
  },
})
export default class SearchResults extends Vue {
  get headers(): DataTableHeader[] {
    let headers: DataTableHeader[] = [
      {
        text: this.$t("admin.dashboard.search.tableHeaders.name") as string,
        value: "name",
        cellClass: "font-weight-bold",
      },
    ];

    switch (this.searchTypeQuery.type) {
      case SearchType.PARTICIPANT:
      case SearchType.CASE:
        headers.push({
          text: this.$t("admin.dashboard.search.tableHeaders.room") as string,
          value: "room",
          align: "end",
        });
        break;
      case SearchType.ROOM:
        headers = [
          {
            text: this.$t("admin.dashboard.search.tableHeaders.name") as string,
            value: "roomDetails.name",
            cellClass: "font-weight-bold",
          },
        ];
        break;
      default:
        break;
    }

    return headers;
  }

  get isRoomSearch(): boolean {
    return this.searchTypeQuery.type === SearchType.ROOM;
  }

  get searchResults(): any[] {
    return this.$store.state.SearchModule.searchResults;
  }

  get searchTypes(): LocalizedSearchType[] {
    return this.$store.getters["SearchModule/searchTypes"];
  }

  get searchTermQuery(): string {
    return this.$route.query.searchTerm.toString();
  }

  get searchTypeQuery(): LocalizedSearchType {
    const searchTypeName = this.$route.query.type;
    return this.searchTypes.find((st) => st.name === searchTypeName)!;
  }

  async mounted(): Promise<void> {
    await this.submitSearchQuery();
  }

  onNavigateToEntity(item: any): void {
    NavigateToEntity(item.id || item.uuid, this.searchTypeQuery.type);
  }

  async submitSearchQuery(): Promise<void> {
    await this.$store.dispatch("SearchModule/search", {
      type: this.searchTypeQuery.type,
      searchTerm: this.searchTermQuery,
    });
  }

  getRoomName(roomId: string): string {
    return this.$store.getters["RoomModule/getRoomNameById"](roomId);
  }
}
</script>

<style lang="scss" scoped></style>
