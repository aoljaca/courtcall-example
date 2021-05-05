<template>
    <div id="endMeeting">
        <v-container class="fill d-flex align-content-center">
            <v-row class="justify-center">
                <v-col align-self="center" cols="6">
                    <v-card class="background-gray"></v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';;
@Component 
export default class EndMeeting extends Vue {

}
</script>
<style lang="scss" scoped>

.fill {
    height: 100vh;
}
.background-gray {
    background-color: lightgray;
}
</style>