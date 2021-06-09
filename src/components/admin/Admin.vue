<template>
  <div>
    <v-container fluid class="px-10">
      <v-row no-gutters>
        <v-col cols="auto">
          <h1>CourtCall <span class="c-primary">Admin</span></h1>
        </v-col>

        <v-col cols="6" align-self="center" class="text-center">
          <navigation />
        </v-col>

        <v-spacer />
        <v-col cols="auto" align-self="center" class="text-right">
          <user-actions />
        </v-col>
      </v-row>
    </v-container>

    <v-divider />
    <breadcrumbs />
    <v-divider />

    <v-container fluid class="px-10">
      <v-row>
        <v-col class="px-0 py-0">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import UserActions from "@/components/admin/dashboard/UserActions.vue";
import Breadcrumbs from "@/components/admin/navigation/Breadcrumbs.vue";
@Component({
  components: {
    Navigation,
    UserActions,
    Breadcrumbs,
  },
})
export default class Admin extends Vue {}
</script>

<style lang="scss" scoped></style>
