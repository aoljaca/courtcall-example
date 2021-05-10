<template>
    <div id="controlBar" class="control-bar-background">
        <v-container fluid>
            <v-row>
                <v-col>
                    Control Bar
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
@Component({})
export default class ControlBar extends Vue {

}
</script>
<style lang="scss" scoped>
.control-bar-background {
    background-color: lightgray;
    height: 10vh;
    min-height: 100px;
}
</style>