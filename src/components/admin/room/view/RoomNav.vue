<template>
  <div class="sticky-nav">
    <v-row @click="scrollTo()">
      <v-col class="my-1 nav-item-dark"> {{ $t("admin.roomNav.details") }} </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item"> 
        {{ $t("admin.roomNav.settings") }} 
      </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item"> 
        {{ $t("admin.roomNav.cases") }}
      </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item"> 
        {{ $t("admin.roomNav.participants") }} 
      </v-col>
    </v-row>
    <v-row v-if="parentContext === 'view'">
      <v-col class="my-1 nav-item d-flex justify-space-between">
        <div>{{ $t("admin.roomNav.activity") }}</div>
        <v-icon> mdi-open-in-new </v-icon>
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

  scrollTo() {
    console.log("test");
    console.log(this.$refs.roomSettings);
  }
}
</script>

<style lang="scss" scoped>
.nav-item-dark {
  background: #d5d5d5;
}

.nav-item {
  background: #f5f5f5;
}

.sticky-nav {
  position: sticky;
  top: 0;
}
</style>
