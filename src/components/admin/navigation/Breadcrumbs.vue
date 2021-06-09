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
import { RouteConfig } from "vue-router";

interface Breadcrumb {
  path: string;
  to: string;
  text: string;
}

@Component
export default class Breadcrumbs extends Vue {
  get breadcrumbs(): RouteConfig[] {
    // Split whole path into individual route paths
    let pathArray: string[] = this.$route.path.split("/");
    pathArray.shift();

    /* Match each path to the corresponding route and
     ** pull the breadcrumb from the route's metadata */
    let breadcrumbs = pathArray.reduce(
      (breadcrumbArray: Breadcrumb[], path: string, idx) => {
        const matchedRoute = this.$route.matched[idx];
        const prevBreadcrumb = breadcrumbArray[idx - 1];
        const prevPathAppended = `${prevBreadcrumb.to}/${path}`;
        if (matchedRoute) {
          breadcrumbArray.push({
            path: path,
            to: prevBreadcrumb ? prevPathAppended : `/${path}`,
            text: matchedRoute.meta.breadcrumb || path,
          });
        } else {
          prevBreadcrumb.to = prevPathAppended;
        }
        return breadcrumbArray;
      },
      []
    );

    // Replace top-level admin route with Dashboard
    const dashboardRoute = this.$router
      .getRoutes()
      .find((r) => r.name === "Dashboard");
    if (dashboardRoute) {
      breadcrumbs[0] = {
        path: dashboardRoute.path,
        to: dashboardRoute.path,
        text: dashboardRoute.meta.breadcrumb,
      };
    }

    console.log('b: ', breadcrumbs)
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
