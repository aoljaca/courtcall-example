<template>
    <div class="room-entry">
        <v-container fluid class="fill d-flex align-content-center">
            <v-row class="justify-center">
                <v-col align-self="center" cols="6">
                    <v-card elevation="3">
                        <v-container>
                            <v-row class="justify-center">
                                <v-col cols="6" class="d-flex justify-center">
                                    <h2>CourtCall</h2>
                                </v-col>
                            </v-row>
                            <v-row class="justify-center">
                                <v-col cols="6" class="d-flex justify-center">
                                    <v-progress-circular 
                                    v-if="phase === 'loading'"
                                    :size="100"
                                    :color="primary"
                                    indeterminate
                                    :title="$t('general.loading')"
                                    ></v-progress-circular>
                                    <room-passcode v-if="phase === 'passcode'"></room-passcode>
                                    <room-user-name v-if="phase === 'name'"></room-user-name>
                                    <room-confirm-user-name v-if="phase === 'confirmName'"></room-confirm-user-name>
                                </v-col>
                            </v-row>
                            <v-row class="justify-center">
                                <v-col cols="8" class="d-flex justify-center">
                                    <span class="text-align-center">
                                        {{$t('entry.support.begin')}}
                                        <span class="font-weight-bold">{{$t('entry.support.phone')}}</span>
                                        {{$t('entry.support.middle')}}
                                        <span class="font-weight-bold">{{$t('entry.support.email')}}</span>
                                    </span>

                                </v-col>
                            </v-row>
                        </v-container>    
                    </v-card>  
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import 'reflect-metadata';
import {Component, Vue } from 'vue-property-decorator';
import {mapState} from 'vuex';
import RoomPasscode from './RoomPasscode.vue';
import RoomUserName from './RoomUserName.vue';
import RoomConfirmUserName from './RoomConfirmUserName.vue';
type EntryMode = 'loading' | 'passcode' | 'name'
@Component({
    computed: {
        ...mapState('EntryModule',['phase'])
    },
    components: {
        RoomPasscode,
        RoomUserName,
        RoomConfirmUserName
    }
})
export default class RoomEntry extends Vue {
    
    
    
}

</script>
<style lang="scss" scoped>
.fill {
    height: 100vh;
    background: lightgray
}
</style>