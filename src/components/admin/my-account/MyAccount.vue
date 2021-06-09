<template>
  <v-container fluid>
    <system-user-header message="My Account">
    </system-user-header>
    <v-row class="mt-8">
      <v-col>
        <v-form class="ml-8">
          <v-row class="mb-2">
            <v-col cols="6">
              <span class="font-weight-regular text-h5">Frank Voci</span>
            </v-col>
            <v-col cols="6">
              <v-row class="justify-end mr-16">
                <v-col cols="2">
                  <v-btn 
                  class="mx-8"
                  color="grey lighten-1 rounded-0 white--text" 
                  depressed
                  >{{ $t("admin.systemUser.cancel") }}</v-btn
                >
                </v-col>
                <v-col cols="2">
                  <v-btn 
                  color="grey darken-4 rounded-0 white--text" 
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
              <v-text-field type="password" dense>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="1">
              <label>{{ $t("admin.systemUser.newPassword") }}</label>
            </v-col>
            <v-col cols="3">
              <v-text-field type="password" dense>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="1">
              <label>{{ $t("admin.systemUser.confirmPassword") }}</label>
            </v-col>
            <v-col cols="3">
              <v-text-field type="password" dense>
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemUserHeader from "@/components/admin/system-users/SystemUserHeader.vue"
import "reflect-metadata";
@Component({
  components: {
    SystemUserHeader,
  },
})
export default class MyAccount extends Vue {
  email = this.$store.state.ParticipantsModule.me.email;
  phone = this.$store.state.ParticipantsModule.me.phone;
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
