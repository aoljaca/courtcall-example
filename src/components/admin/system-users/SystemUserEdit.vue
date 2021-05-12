<template>
  <v-container fluid>
    <v-row class="end-row">
      <v-col>
        <h1>Dashboard > My Account</h1>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col>
          <h1>Frank Voci</h1>
        </v-col>
        <v-col>
          <v-btn>CANCEL</v-btn>
          <v-btn>SAVE CHANGES</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2">
          <label>Contact Email</label>
        </v-col>
        <v-col md="3">
          <v-text-field>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2">
          <label>Contact Phone</label>
        </v-col>
        <v-col md="3">
          <v-text-field>
          </v-text-field>
        </v-col>
      </v-row>
      <v-form>
        <v-row>
          <v-col>
            <h2>Change Password</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="2">
            <label>Current Password</label>
          </v-col>
          <v-col md="3">
            <v-text-field>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="2">
            <label>New Password</label>
          </v-col>
          <v-col md="3">
            <v-text-field>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="2">
            <label>Confirm New Password</label>
          </v-col>
          <v-col md="3">
            <v-text-field>
            </v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import MyAccount from "@/components/admin/dashboard/MyAccount.vue";
@Component({
  components: {
    Navigation,
    MyAccount,
  },
})
export default class SystemUserEdit extends Vue {}
</script>
<style lang="scss">
.end-row {
  border-bottom: 1px solid gray;
}
</style>
