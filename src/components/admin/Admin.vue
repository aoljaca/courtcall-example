<template>
  <div id="admin">
    <v-container fluid>
      <v-row class="header">
        <v-col cols="3" class="logo"> CourtCall Admin </v-col>

        <v-col cols="6" class="navtabs text-center" id="navtabs">
          <navigation></navigation>
        </v-col>

        <v-col cols="3" class="userinfo text-right" id="userinfo">
          <user-actions></user-actions>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-0 py-0">
          <router-view :key="$route.fullPath"></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import UserActions from "@/components/admin/dashboard/UserActions.vue";
@Component({
  components: {
    Navigation,
    UserActions,
  },
})
export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>
.header,
.searchrow {
  border-bottom: 1px solid gray;
}
</style>
