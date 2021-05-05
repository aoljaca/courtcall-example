<template>
    <div id="roomConfirmUserName">
                <v-container>
            <v-row>
                <v-col>
                    <h3 class="text-align-center">{{$t('entry.username.headerConfirm')}}</h3>
                    <span class="text-align-center">{{$t('entry.username.nameDescription')}}</span>
                </v-col>
                
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field label="TODO: Wire up to Vuex"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn @click="confirmUserName()" color="primary">{{$t('general.submit')}}</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component
export default class RoomConfirmUserName extends Vue {
    confirmedUserName = '';

    confirmUserName() {
        this.$store.dispatch('EntryModule/alterEntryPhase',{phase: 'loading'})
    }
}
</script>