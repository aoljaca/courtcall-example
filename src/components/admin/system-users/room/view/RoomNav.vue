<template>
  <div>
    <v-row>
      <v-col class="my-1 nav-item-dark">
        Details
      </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item">
        Settings
      </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item">
        Cases
      </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item">
        Participants
      </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item d-flex justify-space-between">
        <div>
          Activity
        </div>
        <v-icon>
          mdi-export-variant
        </v-icon>
      </v-col>
    </v-row>
  </div>     
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class RoomNav extends Vue {
  @Prop()
  parentContext: string | undefined;
}
</script>

<style lang="scss" scoped>
.nav-item-dark {
  background: #D5D5D5;
}

.nav-item {
  background: #F5F5F5;
}
</style>
