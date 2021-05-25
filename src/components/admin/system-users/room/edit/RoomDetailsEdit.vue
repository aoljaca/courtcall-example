<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-row>
            <v-col>
              <label>
                Room Name
              </label>
            </v-col>
            <v-col>
              <v-text-field dense label="Judge Frank's Room">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                Organization
              </span>
            </v-col>
            <v-col>
              <v-text-field dense label="CourtCall">
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="d-flex align-center pl-12">
          <v-row>
            <v-col cols="4">
              <span>
                Status
              </span>
            </v-col>
            <v-col cols="4">
              <v-select>
              </v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn
              style="color: white" 
              color="grey darken-4 rounded-0"
              depressed
              >
              CANCEL
              </v-btn>
              <v-btn
              style="color: white" 
              color="grey darken-4 rounded-0"
              depressed
              >
              SAVE CHANGES
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn
              style="color: white" 
              color="grey darken-4 rounded-0"
              depressed
              >
              SAVE AS NEW TEMPLATE 
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Enter Template Name">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-row>
              <v-col class="d-flex justify-end">
                <v-btn
                style="color: white" 
                color="grey darken-4 rounded-0"
                depressed
                >
                CANCEL
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-end">
                <v-btn
                style="color: white" 
                color="grey darken-4 rounded-0"
                depressed
                >
                SAVE
                </v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class RoomDetailsEdit extends Vue {}
</script>

<style lang="scss" scoped>
</style>
