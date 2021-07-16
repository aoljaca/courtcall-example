<template>
  <div>
    <v-row class="px-1 py-4">
      <v-col cols="11">
        <div>{{ name }}</div>
      </v-col>
      <v-col cols="1" class="d-flex justify-end">
        <delete-template></delete-template>
      </v-col>
    </v-row>
    <v-divider> </v-divider>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DeleteTemplate from "@/components/admin/room/edit/room-templates/DeleteTemplate.vue";
@Component({
  components: {
    DeleteTemplate,
  },
})
export default class RoomTemplate extends Vue {
  dialogm1 = "";
  dialog = false;
  @Prop()
  name: string | undefined;
}
</script>

<style lang="scss" scoped></style>
