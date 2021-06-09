<template>
  <v-row>
    <v-col>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            Welcome Back, Frank
            <v-icon large class="ml-1">mdi-account-circle</v-icon>
          </span>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="`user-action-${index}`"
            :to="item.to"
            link
          >
            <v-list-item-title> {{ item.title }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class MyAccount extends Vue {
  menuItems = [
    {
      title: this.$t("admin.navigation.myAccount"),
      to: {
        name: "My Account",
      },
    },
    {
      title: this.$t("admin.navigation.logout"),
      to: {
        name: "Logout",
      },
    },
  ];
}
</script>

<style lang="scss" scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
