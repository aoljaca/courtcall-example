<template>
  <!-- TODO: Pull all out all referenced colors into theme -->
  <v-system-bar dark color="#253746" class="px-15 py-10 white--text">
    <v-btn fab dark depressed readonly color="white">
      <v-icon class="ml-1" color="#253746" size="26">mdi-gavel</v-icon>
    </v-btn>
    <h1 class="ml-1">Court<span class="font-weight-regular">Call</span></h1>

    <v-spacer />

    <!-- Help Menu -->
    <v-menu offset-y>
      <!-- Button/Activator -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" dark text class="text-none">
          <h2 class="font-weight-regular">Help</h2>
          <v-icon class="ml-1" size="30">mdi-help-circle-outline</v-icon>
        </v-btn>
      </template>

      <!-- List of options -->
      <v-card class="mt-2">
        <v-list>
          <v-list-item link :href="`tel:${$t('navigation.help.phone.number')}`">
            <v-row>
              <v-col cols="auto">
                <v-icon color="#006298">mdi-phone</v-icon>
              </v-col>
              <v-col> {{ $t("navigation.help.phone.label") }} </v-col>
            </v-row>
          </v-list-item>

          <v-list-item
            link
            :href="$t('navigation.help.liveChat.url')"
            target="_blank"
          >
            <v-row>
              <v-col cols="auto">
                <v-icon color="#006298">mdi-message-outline</v-icon>
              </v-col>
              <v-col> {{ $t("navigation.help.liveChat.label") }} </v-col>
            </v-row>
          </v-list-item>
          <v-list-item
            link
            :href="$t('navigation.help.site.url')"
            target="_blank"
          >
            <v-row>
              <v-col cols="auto">
                <v-icon color="#006298">mdi-laptop</v-icon></v-col
              >
              <v-col> {{ $t("navigation.help.site.label") }} </v-col>
            </v-row>
          </v-list-item>
          <v-list-item link>
            <v-row>
              <v-col cols="auto">
                <v-icon color="#006298">mdi-dots-horizontal</v-icon></v-col
              >
              <v-col> {{ $t("navigation.help.more") }} </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-system-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ConferenceHeader extends Vue {}
</script>
