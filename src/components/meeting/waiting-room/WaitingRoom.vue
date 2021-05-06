<template>
    <div id="waitingRoom">
        <v-container fluid class="fill">
            <v-row class="big-space">
                <v-col>
                    <h1 class="d-inline">CourtCall</h1>
                    Room Name
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <h1>{{$t('waitingRoom.mainHeading')}}</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <hs>{{$t('waitingRoom.subHeading')}}</hs>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col v-if="contactState === 'uncontacted'" class="d-flex justify-center">
                    <v-btn @click="contactHost()" outlined><i class="mdi mdi-hand-left"></i>{{$t('waitingRoom.contactHost')}}</v-btn>
                </v-col>
                <v-col v-if="contactState === 'contacting'" cols="8">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="8">
                                <v-textarea 
                                v-model="hostMessage"
                                counter="300"
                                auto-grow
                                
                                ></v-textarea>
                            </v-col>
                            <v-col cols="4" class="d-flex align-center">
                                <v-btn @click="sendMessage()" :disabled="!validMessage" outlined>{{$t('general.sendMessage')}}</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col v-if="contactState === 'contacted'" class="d-flex justify-center">
                    <span class="contact-text">{{$t('waitingRoom.hostContacted')}}</span>
                </v-col>
                    
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <h1>{{$t('waitingRoom.notices')}}</h1>
                </v-col>
            </v-row>
            <v-row v-for="notification in waitingRoomNotifications" :key="notification.description" class="justify-content-center">
                <v-col cols="6">
                    <waiting-room-notification :details="notification"></waiting-room-notification>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import 'reflect-metadata';
import {Component, Vue} from 'vue-property-decorator';
import WaitingRoomNotification from './WaitingRoomNotification.vue';
import {IWaitingRoomNotification} from '@/model/meeting/waiting-room/waiting-room-notification';
type ContactState = 'uncontacted' | 'contacting' | 'contacted'
@Component({
    components: {
        WaitingRoomNotification
    }
})
export default class WaitingRoom extends Vue {

    hostMessage = ''
    contactState: ContactState ='uncontacted';
    waitingRoomNotifications: IWaitingRoomNotification[] = [
        {
            iconClass: 'mdi-book',
            linkDescription: 'Read',
            link: 'http://wikipedia.org',
            description: 'This is an example of a read link',
            color: 'lightblue'
        },
        {
            iconClass: 'mdi-youtube',
            linkDescription: 'Watch',
            link: 'http://youtube.com',
            description: 'This is an example of a watch link',
            color: '#fc979e'
        },
        {
            iconClass: 'mdi-information',
            description: 'This is an example of a general link',
            color: '#ffd359'
        }
    ]

    get validMessage() {
        return this.hostMessage.length <= 300 && this.hostMessage.length > 0;
    }
    contactHost() {
        this.contactState = 'contacting';
    }
    sendMessage() {
        this.contactState = 'contacted';
    }

}

</script>
<style lang="scss" scoped>
.big-space {
    padding-bottom: 15vh;
}
.contact-text {
    color: gray;
    font-size: 1.5rem;
}
</style>