<template>
  <div class="manual-login">
    <v-container>
      <v-row>
        <v-col
          ><label class="font-weight-bold">{{
            $t("login.manual.description")
          }}</label></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-text-field :label="$t('login.manual.username')"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            :label="$t('login.manual.password')"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
            <v-checkbox class="big-checkbox"></v-checkbox>
        </v-col>
        <v-col cols="6">
            <span class="d-block font-weight-bold">{{$t('login.manual.rememberUsernameLabel')}}</span>
            <span class="d-block sub-text">{{$t('login.manual.rememberUsernameWarning')}}</span>    
        </v-col>   
       </v-row>
       <v-row>
           <v-col class="d-flex justify-center">
               <v-btn color="primary" large>{{$t('login.manual.description')}}</v-btn>
           </v-col>
       </v-row>
       <v-row>
           <v-col class="d-flex justify-center">
             <router-link to="/">{{$t('login.manual.forgotPassword')}}</router-link>
           </v-col>
       </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class ManualLogin extends Vue {

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sub-text {
    font-size: .75rem;
    color: #636363;
}
</style>
<style lang="scss">
.big-checkbox {
    .v-icon {
        font-size: 3rem !important;
    }
}


</style>
