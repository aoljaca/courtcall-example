<template>
  <div class="manual-login">
    <v-container>
      <v-row>
        <v-col
          ><label class="font-weight-bold">{{
            $t("login.manual.description")
          }}</label></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-text-field :label="$t('login.manual.username')"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            :label="$t('login.manual.password')"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class ManualLogin extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
