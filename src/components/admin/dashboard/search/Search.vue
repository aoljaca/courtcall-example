<template>
  <div class="search-row">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="3">
          <v-select
            v-model="searchType"
            return-object
            item-text="name"
            :items="searchTypes"
            :placeholder="
              $t('admin.dashboard.search.fields.searchType.placeholder')
            "
          />
        </v-col>
        <v-col cols="5">
          <v-autocomplete
            :placeholder="
              $t('admin.dashboard.search.fields.searchTerm.placeholder')
            "
            append-icon="mdi-magnify"
            :items="itemsToSearch"
            :item-text="itemText"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
import { SearchType } from "../../../../model/admin/search/searchType";
import { Organization } from "@/model/admin/organization/organization";
import { Room } from "@/model/admin/room/room";
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";

interface LocalSearchType {
  name: string;
  type: SearchType;
}

@Component
export default class Search extends Vue {
  searchType: LocalSearchType = {} as LocalSearchType;
  itemText = "";

  get searchTypes(): LocalSearchType[] {
    const localizedSearchTypeNames = Object.values(
      this.$t("admin.dashboard.search.searchTypes")
    );
    const lockedSearchTypes = Object.values(SearchType);
    const searchTypes: LocalSearchType[] = [];

    localizedSearchTypeNames.forEach((name, index) => {
      searchTypes.push({
        name,
        type: lockedSearchTypes[index],
      });
    });

    return searchTypes;
  }

  get itemsToSearch(): any[] {
    switch (this.searchType.type) {
      case SearchType.SYSTEM_USER:
        this.itemText = "name";
        return this.systemUsers;
      case SearchType.PARTICIPANT:
        this.itemText = "name";
        return this.participants;
      case SearchType.ROOM:
        this.itemText = "roomDetails.name";
        return this.rooms;
      case SearchType.CASE:
        this.itemText = "name";
        return this.cases;
      case SearchType.ORGANIZATION:
        this.itemText = "name";
        return this.organizations;
      default:
        return [];
    }
  }

  get systemUsers(): Participant[] {
    return this.$store.getters["ParticipantsModule/getSystemUsersAsList"];
  }

  get participants(): Participant[] {
    return this.$store.getters["ParticipantsModule/getAsList"];
  }

  get rooms(): Room[] {
    return this.$store.getters["RoomModule/getAsList"];
  }
  get cases(): Case[] {
    return this.$store.getters["CasesModule/getAsList"];
  }
  get organizations(): Organization[] {
    return this.$store.getters["OrganizationsModule/getAsList"];
  }
}
</script>

<style lang="scss" scoped></style>
