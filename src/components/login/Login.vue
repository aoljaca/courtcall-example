<template>
  <div class="login">
    <v-container fluid>
      <v-row class="big-empty"> </v-row>
      <v-row>
        <v-col align-self="center"
          ><h2 class="justify-center d-flex">CourtCall</h2></v-col
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
                  ><i class="mdi mdi-phone pr-2"></i
                  >{{ $t("login.phoneNumber") }}</v-col
                >
              </v-row>
              <v-row>
                <v-col class="justify-center d-flex"
                  ><i class="mdi mdi-chat pr-2"></i
                  >{{ $t("login.liveChat") }}</v-col
                >
              </v-row>
              <v-row>
                <v-col class="justify-center d-flex">
                  <i class="mdi mdi-web pr-2"></i
                  >{{ $t("login.website") }}</v-col
                >
              </v-row>
              <v-row>
                <v-col class="justify-center d-flex"
                  ><i class="mdi mdi-help-circle pr-2"></i
                  >{{ $t("login.moreHelp") }}</v-col
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
@media (min-width: 1280px) {
  .big-empty {
    height: 20vh;
  }
  .not-wide {
    padding-left: 25rem;
    padding-right: 25rem;
  }
}

.boxed {
  outline-style: solid;
  outline-color: black;
  outline-width: 1px;
}
</style>
