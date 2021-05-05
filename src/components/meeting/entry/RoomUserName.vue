<template>
    <div id="roomUserName">
        <v-container>
            <v-row>
                <v-col>
                    <h3 class="text-align-center">{{$t('entry.username.header')}}</h3>
                    <span class="text-align-center">{{$t('entry.username.nameDescription')}}</span>
                </v-col>
                
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field :label="$t('entry.username.inputDescription')"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn @click="submitUsername()" color="primary">{{$t('general.submit')}}</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
@Component 
export default class RoomUserName extends Vue {
    username = '';

    submitUsername() {
        this.$store.dispatch('EntryModule/alterEntryPhase',{phase: 'confirmName'})
    }
}
</script>
