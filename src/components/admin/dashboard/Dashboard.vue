<template>
  <div class="dashboard">
    <v-container fluid>
      <v-row class="searchrow">
        <v-col class="text-center">
          <search></search>
        </v-col>
      </v-row>
      <v-row>
        <rooms-table class="max-width"></rooms-table>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/admin/dashboard/Search.vue";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import MyAccount from "@/components/admin/dashboard/UserActions.vue";
import RoomsTable from "@/components/admin/dashboard/RoomsTable.vue";
@Component({
  components: {
    Search,
    Navigation,
    MyAccount,
    RoomsTable,
  },
})
export default class Dashboard extends Vue {}
</script>
<style lang="scss">
.header,
.searchrow {
  border-bottom: 1px solid gray;
}
.max-width {
  width: 100%;
}
</style>
