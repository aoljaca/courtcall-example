<template>
  <div>
    <v-row no-gutters class="justify-start ml-2 mt-2">
      <v-col
        cols="auto"
        class="px-2"
        v-for="routeObj in routes"
        :key="routeObj.title"
      >
        <router-link
          :to="routeObj.route"
          class="default-link"
          active-class="active"
        >
          {{ routeObj.title.toUpperCase() }}
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Navigation extends Vue {
  routes = [
    {
      title: this.$t("admin.navigation.dashboard"),
      route: {
        name: "Dashboard",
      },
    },
    {
      title: this.$t("admin.navigation.organizations"),
      route: {
        name: "Organizations",
      },
    },
    {
      title: this.$t("admin.navigation.systemUsers"),
      route: {
        name: "System Users",
      },
    },
    {
      title: this.$t("admin.navigation.support"),
      route: {
        name: "Support",
      },
    },
  ];
}
</script>

<style lang="scss" scoped>
.default-link {
  text-decoration: none;
  color: var(--v-accent-base);
}
.active {
  text-decoration: underline;
  font-weight: bold;
  color: var(--v-secondary-base);
}
</style>
