<template>
  <v-container fluid>
    <v-row class="end-row py-4">
      <v-col class="ml-16">
        <span 
          class="grey--text text--lighten-2 font-weight-black text-subtitle-1"
          >{{ $t("admin.systemUser.dashboard") }}</span
        >
        <span 
          class="font-weight-bold"
          >{{ $t("admin.systemUser.account") }}</span
        >
      </v-col>
    </v-row>
    <v-form class="ml-16">
      <v-row class="mt-14 mb-2">
        <v-col cols="6">
          <span class="font-weight-regular text-h5">Frank Voci</span>
        </v-col>
        <v-col cols="6">
          <v-row class="justify-end mr-16">
            <v-col cols="2">
              <v-btn 
              style="color: white; position: relative; left: 1.75rem;" 
              color="grey lighten-1 rounded-0" 
              depressed
              >{{ $t("admin.systemUser.cancel") }}</v-btn
            >
            </v-col>
            <v-col cols="2">
              <v-btn 
              style="color: white" 
              color="grey darken-4 rounded-0" 
              depressed
              >{{ $t("admin.systemUser.save") }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="1">
          <label>{{ $t("admin.systemUser.email") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="email" readonly dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="1">
          <label>{{ $t("admin.systemUser.phone") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="phone" dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-4 mb-4">
        <v-col>
          <span 
          class="font-weight-medium"
          >{{ $t("admin.systemUser.changePassword") }}</span>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="1">
          <label>{{ $t("admin.systemUser.password") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="1">
          <label>{{ $t("admin.systemUser.newPassword") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="1">
          <label>{{ $t("admin.systemUser.confirmPassword") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field dense>
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import MyAccount from "@/components/admin/dashboard/MyAccount.vue";
import "reflect-metadata";
@Component({
  components: {
    Navigation,
    MyAccount,
  },
})
export default class SystemUserEdit extends Vue {
  email = "frank@voci.com";
  phone = "213-555-1212";
}
</script>

<style lang="scss" scoped>
.end-row {
  border-bottom: 1px solid gray;
}
label {
  white-space: nowrap;
}
form {
  .col-1 {
    margin-right: 2rem;
  }
}
</style>
