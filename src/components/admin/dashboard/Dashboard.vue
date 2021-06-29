<template>
  <div class="dashboard">
    <v-container fluid>
      <v-row>
        <rooms-table class="max-width" />
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import MyAccount from "@/components/admin/dashboard/UserActions.vue";
import RoomsTable from "@/components/admin/dashboard/RoomsTable.vue";
@Component({
  components: {
    Navigation,
    MyAccount,
    RoomsTable,
  },
})
export default class Dashboard extends Vue {}
</script>
<style lang="scss">
.max-width {
  width: 100%;
}
</style>
