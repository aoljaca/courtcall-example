<template>
  <div class="rooms-table">
    <v-container>
      <v-row class="mb-4">
        <v-col>
          <h2>Cases</h2>
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
            :items="filteredCases"
            :items-per-page="20"
            class="elevation-1"
          >
            <template v-slot:[`item.live`]="{ item }">
              <v-icon v-if="item.live" color="green">
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
  readonly HEADERS = [
    { 
      text: "live", 
      value: "live" 
    },
    { 
      text: "Case Number", 
      value: "number" 
    },
    { 
      text: "Case Name", 
      value: "name" 
    },
    { 
      text: "Scheduled Participants", 
      value: "scheduledParticipants" 
    },
    { 
      text: "More", 
      value: "more" 
    },
  ];

  casesData = this.$store.getters["CasesModule/getAsList"];
  filteredCases = this.casesData.filter((c: { roomId: string; }) => c.roomId === this.$route.params.roomId)

}
</script>

<style lang="scss" scoped></style>



