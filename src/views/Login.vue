<template>
  <div class="login">
    <v-container fluid>
      <v-row class="big-empty"> </v-row>
      <v-row>
        <v-col align-self="center"
          ><h2 class="justify-content-center d-flex">CourtCall</h2></v-col
        >
      </v-row>
      <v-row class="not-wide">
        <v-col>
          <div v-if="code">Code Login</div>
          <div v-if="!code"><manual-login></manual-login></div>
        </v-col>
        <v-col>
          <v-card>
            <v-container class="boxed">
              <v-row>
                <v-col class="justify-center d-flex"
                  ><i class="mdi mdi-phone pr-2"></i>888-555-1212</v-col
                >
              </v-row>
              <v-row>
                <v-col class="justify-center d-flex"
                  ><i class="mdi mdi-chat pr-2"></i>Live Chat</v-col
                >
              </v-row>
              <v-row>
                <v-col class="justify-center d-flex">
                  <i class="mdi mdi-web pr-2"></i>CourtCall Website</v-col
                >
              </v-row>
              <v-row>
                <v-col class="justify-center d-flex"
                  ><i class="mdi mdi-help-circle pr-2"></i>More Help</v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
import ManualLogin from "@/components/login/ManualLogin.vue";
@Component({
  components: { ManualLogin },
})
export default class Login extends Vue {
  code: string | null = null;

  mounted(): void {
    this.code = this.$route.params.code;
  }
}
</script>
<style lang="scss">
.big-empty {
  height: 20vh;
}
.not-wide {
  padding-left: 25rem;
  padding-right: 25rem;
}
.boxed {
  outline-style: solid;
  outline-color: black;
  outline-width: 1px;
}
</style>
