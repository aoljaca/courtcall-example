<template>
  <div>
    <v-row>
      <v-col class="d-flex" cols="4">
        <div class="pr-4">
          Room Name
        </div>
        <v-text-field message="Judge Frank's Room" dense>
        </v-text-field>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn>
          CANCEL
        </v-btn>
        <v-btn>
          SAVE CHANGES
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="4">
        <div class="pr-4">
          Organization
        </div>
        <v-text-field dense>
        </v-text-field>
      </v-col>
      <v-col cols="2" class="d-flex px-8">
        <div class="pr-4">
          Status
        </div>
        <v-select dense>
        </v-select>
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
        <v-row class="justify-end">
          <v-col cols="3">
            <v-text-field label="Enter Template Name">
            </v-text-field>
          </v-col>
        </v-row>
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
              SAVE
              </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
