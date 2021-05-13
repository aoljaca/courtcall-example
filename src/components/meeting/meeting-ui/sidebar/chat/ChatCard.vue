<template>
  <div id="chatCard">
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col>Test</v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Chat } from "@/model/meeting/meeting-ui/side-bar/chat/chat";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class ChatCard extends Vue {
  @Prop()
  chat: Chat | undefined;
}
</script>
