<template>
  <div id="publicStreaming">
    <v-card>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center">
            <h4>
              {{
                $t("conference.meeting.controlBar.more.publicStreaming.title")
              }}
            </h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col>ToDo: Work out finer functionality</v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn :title="$t('general.cancel')">{{
              $t("general.cancel")
            }}</v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              v-if="isStreaming"
              :title="
                $t(
                  'conference.meeting.controlBar.more.publicStreaming.stopStreaming'
                )
              "
              @click="toggleStreaming()"
            >
              {{
                $t(
                  "conference.meeting.controlBar.more.publicStreaming.stopStreaming"
                )
              }}
            </v-btn>
            <v-btn
              v-if="!isStreaming"
              :title="
                $t(
                  'conference.meeting.controlBar.more.publicStreaming.startStreaming'
                )
              "
              @click="toggleStreaming()"
            >
              {{
                $t(
                  "conference.meeting.controlBar.more.publicStreaming.startStreaming"
                )
              }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PublicStreaming extends Vue {
  isStreaming = false;

  toggleStreaming() {
    this.isStreaming = !this.isStreaming;
  }
}
</script>
