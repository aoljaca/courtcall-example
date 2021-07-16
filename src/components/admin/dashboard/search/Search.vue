<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="2">
        <v-select
          v-model="searchType"
          class="mt-3"
          dense
          hide-details
          return-object
          item-text="name"
          :items="searchTypes"
          :placeholder="
            $t('admin.dashboard.search.fields.searchType.placeholder')
          "
        />
      </v-col>
      <v-col cols="4">
        <v-autocomplete
          :placeholder="
            this.searchTermQuery
              ? `${$t('admin.dashboard.search.searchResults')}&quot;${
                  this.searchTermQuery
                }&quot;`
              : $t('admin.dashboard.search.fields.searchTerm.placeholder')
          "
          :items="itemsToSearch"
          :item-text="itemText"
          :item-value="itemValue"
          :disabled="isEmpty(searchType)"
          :search-input.sync="searchInput"
          v-model="idOfSearchSelection"
          @keydown="onSearchKeyDown"
          @change="onSearchItemSelected"
          hide-details
          dense
        >
          <template v-slot:append>
            <v-btn icon @click="onSubmitSearch">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  LocalizedSearchType,
  SearchType,
} from "../../../../model/admin/search/searchType";
import { NavigateToEntity } from "../../../../services/navigation-helpers";
import { isEmpty } from "lodash";

@Component({
  methods: {
    isEmpty,
  },
})
export default class Search extends Vue {
  searchType: LocalizedSearchType = {} as LocalizedSearchType;
  searchInput = "";
  itemText = "";
  itemValue = "";
  idOfSearchSelection = "";

  get searchTypes(): LocalizedSearchType[] {
    return this.$store.getters["SearchModule/searchTypes"];
  }

  get itemsToSearch(): any[] {
    this.itemText = "name";
    this.itemValue = "id";

    switch (this.searchType.type) {
      case SearchType.SYSTEM_USER:
        return this.$store.getters["SystemUsersModule/getAsList"];
      case SearchType.PARTICIPANT:
        return this.$store.getters["ParticipantsModule/getAsList"];
      case SearchType.ROOM:
        this.itemText = "roomDetails.name";
        this.itemValue = "uuid";
        return this.$store.getters["RoomModule/getAsList"];
      case SearchType.CASE:
        return this.$store.getters["CasesModule/getAsList"];
      case SearchType.ORGANIZATION:
        return this.$store.getters["OrganizationsModule/getAsList"];
      default:
        return [];
    }
  }

  get searchTermQuery(): string {
    let searchTerm = "";

    if (this.$route.query.searchTerm) {
      searchTerm = this.$route.query.searchTerm as string;
    }

    return searchTerm;
  }

  get searchTypeQuery(): LocalizedSearchType {
    let type = {} as LocalizedSearchType;

    if (this.$route.query.type) {
      const name = this.$route.query.type;
      type = this.$store.getters["SearchModule/searchTypeByName"](name);
    }

    return type;
  }

  mounted(): void {
    const defaultSearchType = this.$store.getters[
      "SearchModule/searchTypeByName"
    ](SearchType.SYSTEM_USER);
    this.searchType = isEmpty(this.searchTypeQuery)
      ? defaultSearchType
      : this.searchTypeQuery;
  }

  onSearchItemSelected(): void {
    this.onNavigateToEntity();
  }

  onSubmitSearch(): void {
    this.onNavigateToSearchResults();
  }

  onSearchKeyDown(keyEvent: KeyboardEvent): void {
    if (keyEvent.key === "Enter") {
      this.onSubmitSearch();
    }
  }

  onNavigateToEntity(): void {
    NavigateToEntity(this.idOfSearchSelection, this.searchType.type);
  }

  onNavigateToSearchResults(): void {
    this.$router.push({
      name: "Search Results",
      query: {
        type: this.searchType.name,
        searchTerm: this.searchInput.toLowerCase(),
      },
    });
  }
}
</script>

<style lang="scss" scoped></style>
