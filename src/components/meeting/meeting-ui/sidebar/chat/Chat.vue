<template>
    <div id="chatBar">
        <v-container fluid>
            <v-row>
                <v-col>
                   <h2>{{$t('sidebar.chat.header')}}</h2>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
@Component({})
export default class Chat extends Vue {}
</script>