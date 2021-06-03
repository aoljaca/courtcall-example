<template>
  <div class="dashboard">
    <v-container fluid>
      <v-row class="searchrow">
        <v-col class="text-center">
          <search></search>
        </v-col>
      </v-row>

      <v-row class="rooms">
        <rooms></rooms>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/admin/dashboard/Search.vue";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import MyAccount from "@/components/admin/dashboard/UserActions.vue";
import Rooms from "@/components/admin/dashboard/Rooms.vue";
@Component({
  components: {
    Search,
    Navigation,
    MyAccount,
    Rooms,
  },
})
export default class Dashboard extends Vue {}
</script>
<style lang="scss">
.header,
.searchrow {
  border-bottom: 1px solid gray;
}
</style>
