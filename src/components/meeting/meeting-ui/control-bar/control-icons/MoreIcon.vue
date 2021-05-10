<template>
    <span id="moreIcon">
    <v-container fluid>
      <v-row class="px-0 py-0">
        <v-col class="px-0 py-0">
          <v-btn fab elevation="0" :title="$t('meetingUI.controlBar.more.title')">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn></v-col
        >
      </v-row>
      <v-row class="py-0 px-0">
          <v-col class="py-0 px-0 control-bar-icon-font d-flex justify-center">{{$t('meetingUI.controlBar.more.title')}}</v-col>
      </v-row>
    </v-container>
    </span>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
@Component({})
export default class MoreIcon extends Vue {}
</script>