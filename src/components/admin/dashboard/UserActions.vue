<template>
  <v-row>
    <v-col>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">Welcome Back Frank</div>
        </template>
        <v-list>
          <router-link to="/admin/my-account">
            <v-list-item>
              <v-list-item-title> My Account </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/logout">
            <v-list-item>
              <v-list-item-title> Logout </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class MyAccount extends Vue {}
</script>

<style lang="scss" scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
