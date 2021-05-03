<template>
  <div class="home">
    <v-app-bar color="blue accent-3">
      <v-app-bar-nav-icon color="white" @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary></v-navigation-drawer>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  public drawer = false;
  public group = null;
  toggleDrawer() {
    this.drawer = !this.drawer;
  }

  @Watch('group')
  onPropertyChanged(oldVal: string, newVal: string) {
    this.drawer = false
  }
}
</script>
