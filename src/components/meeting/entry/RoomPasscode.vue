<template>
    <div id="roomPasscode">
        <v-container>
            <v-row>
                <v-col>
                    <h3>{{$t('entry.passcode.generalDescription')}}</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field :label="$t('entry.passcode.inputDescription')"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn @click="submitPasscode()" color="primary">{{$t('general.submit')}}</v-btn>    
                </v-col
            >
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
@Component({
    computed: {
    }
}) 
export default class RoomPasscode extends Vue {

        passcode = '';

        submitPasscode() {
            this.$store.dispatch('EntryModule/alterEntryPhase',{phase: 'name'});
        }
}

</script>