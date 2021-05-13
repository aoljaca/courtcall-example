<template>
  <div id="chatMainView">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn fab>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ChatMainView extends Vue {}
</script>
