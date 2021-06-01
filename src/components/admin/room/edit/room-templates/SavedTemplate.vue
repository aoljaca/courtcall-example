<template>
  <v-row
  >
    <v-col>
      <div>
        My Fair Template
      </div>
    </v-col>
    <v-col class="d-flex justify-end">
      <v-icon>
        mdi-delete
      </v-icon>
    </v-col>
  </v-row>
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class RoomTemplate extends Vue {
  dialogm1 = '';
  dialog = false;
}
</script>

<style lang="scss" scoped>
</style>
