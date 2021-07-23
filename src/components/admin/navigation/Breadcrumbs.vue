<template>
  <v-breadcrumbs class="ml-4" :items="breadcrumbs" divider=">">
    <template v-slot:item="{ item }">
      <router-link
        :to="item.to"
        class="text-decoration-none"
        exact-active-class="active-breadcrumb"
      >
        {{ item.text.toUpperCase() }}
      </router-link>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouteRecord } from "vue-router";

interface Breadcrumb {
  to: string;
  text: string;
}

@Component({})
export default class Breadcrumbs extends Vue {
  get breadcrumbs(): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [];

    this.$route.matched.forEach((matchedRoute) => {
      let hideBreadcrumbFunc = matchedRoute.meta.hideBreadcrumbFunc;
      if (
        !matchedRoute.meta.hideBreadcrumb &&
        (!hideBreadcrumbFunc || !hideBreadcrumbFunc(this.$route))
      ) {
        let dynamicBreadcrumb = "";
        let matchedRoutePath = matchedRoute.path;
        let breadcrumbFunc = matchedRoute.meta.breadcrumbFunc;

        // Get dynamic breadcrumb
        if (breadcrumbFunc) {
          dynamicBreadcrumb = breadcrumbFunc(this.$route);
        }

        if (this.hasRouteParams(matchedRoute)) {
          matchedRoutePath = this.getPathWithParams(matchedRoute);
        }

        breadcrumbs.push({
          to: matchedRoutePath,
          text:
            matchedRoute.meta.breadcrumb ||
            dynamicBreadcrumb ||
            matchedRoutePath,
        });
      }
    });

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

    return breadcrumbs;
  }

  hasRouteParams(matchedRoute: RouteRecord): boolean {
    return matchedRoute.path.includes(":");
  }

  getPathWithParams(matchedRoute: RouteRecord): string {
    let path: string = matchedRoute.path;
    const regex = /(?<=:).+?(?=\/|$)/g;
    const params = path.matchAll(regex);

    for (const param of params) {
      const paramName = param[0].endsWith("?")
        ? param[0].slice(0, -1)
        : param[0];
      const paramValue = this.$route.params[paramName];
      const toReplace = paramValue ? `:${param[0]}` : `/:${param[0]}`;
      const toReplaceWith = paramValue ? this.$route.params[paramName] : "";
      path = path.replace(toReplace, toReplaceWith);
    }

    return path;
  }
}
</script>

<style lang="scss" scoped>
.active-breadcrumb {
  color: var(--v-secondary-base);
  font-weight: bold;
}
</style>
