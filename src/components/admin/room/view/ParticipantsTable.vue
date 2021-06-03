<template>
  <div class="rooms-table">
    <v-container fluid>
      <v-row class="mb-4">
        <v-col cols="2">
          <h2>Participants</h2>
        </v-col>
        <v-col cols="2">
          <v-select label="Filter By Case">
          </v-select>
        </v-col>
        <v-col class="text-right">
          <v-btn
          color="grey darken-4 rounded-0 white--text"
          depressed
          >
            ADD
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-data-table
            :headers="HEADERS"
            :items="participantsData"
            :items-per-page="20"
            class="elevation-1"
          >
            <template v-slot:[`item.active`]="{ item }">
              <v-icon v-if="item.active" color="green">
                mdi-circle
              </v-icon>
              <v-icon v-else color="gray">
                mdi-circle
              </v-icon>
            </template>

            <template v-slot:[`item.more`]="">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-container fluid>
                    <v-row>
                      <v-col class="pa-0">
                        <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                          elevation="0"
                          :title="$t('general.more')"
                        >
                          <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn></v-col
                      >
                    </v-row>
                  </v-container>
                </template>
                <v-list>
                  <v-list-item>{{ $t("general.view") }}</v-list-item>
                  <v-list-item>{{ $t("general.edit") }}</v-list-item>
                  <v-list-item>{{ $t("general.archive") }}</v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class CasesTable extends Vue {
  roomId = 'a';

  mounted(): void {
    this.roomId = this.$route.params.roomId;
  }

  readonly HEADERS = [
    { 
      text: "Active", 
      value: "active" 
    },
    { 
      text: "Name", 
      value: "name" 
    },
    { 
      text: "Case Number", 
      value: "caseNumber" 
    },
    { 
      text: "Case Name", 
      value: "caseName" 
    },
    { 
      text: "Role", 
      value: "role" 
    },
    { 
      text: "More", 
      value: "more" 
    },
  ];

  participantsData = this.$store.getters["ParticipantsModule/getAsList"];
}
</script>

<style lang="scss" scoped></style>