<template>
  <v-breadcrumbs class="ml-4" :items="breadcrumbs" divider=">">
    <template v-slot:item="{ item }">
      <router-link
        :to="item.to"
        class="breadcrumb"
        exact-active-class="active-breadcrumb"
      >
        {{ item.text.toUpperCase() }}
      </router-link>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Breadcrumb {
  to: string;
  text: string;
}

@Component
export default class Breadcrumbs extends Vue {
  get breadcrumbs(): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [];

    this.$route.matched.forEach((matchedRoute) => {
      if (!matchedRoute.meta.hideBreadcrumb) {
        let dynamicBreadcrumb = "";
        let breadcrumbFunc = matchedRoute.meta.breadcrumbFunc;

        if (breadcrumbFunc) {
          dynamicBreadcrumb = breadcrumbFunc(this.$route);
        }

        if (matchedRoute.)

        breadcrumbs.push({
          to: matchedRoute.path,
          text:
            matchedRoute.meta.breadcrumb ||
            dynamicBreadcrumb ||
            matchedRoute.path,
        });
      }
    })

    // Replace top-level admin route with Dashboard
    const dashboardRoute = this.$router
      .getRoutes()
      .find((r) => r.name === "Dashboard");
    if (dashboardRoute) {
      breadcrumbs[0] = {
        to: dashboardRoute.path,
        text: dashboardRoute.meta.breadcrumb,
      };
    }

    console.log('r', this.$route)
    console.log('b', breadcrumbs)

    return breadcrumbs;
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  text-decoration: none;
}
.active-breadcrumb {
  color: var(--v-secondary-base);
  font-weight: bold;
}
</style>
