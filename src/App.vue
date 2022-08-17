<template>

  <div id="app">
  
    <img alt="Vue logo" src="@/assets/logos/logo-vue.svg" />
 <!-- <HelloWorld msg="Hello Vue 3 in CodeSandbox!" /> -->
    <Navbar />
    <router-view />
  </div>
  
</template>

<script>
import Navbar from "@/components/Navbar.vue";
//import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    //HelloWorld: HelloWorldVue,
    Navbar, // register component
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
