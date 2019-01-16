<template>
  <div id="app">
    <div class="container text-dark text-center">
      <Header-View />
      <router-view class="content"></router-view>
      <Footer-View />
    </div>
  </div>
</template>

<script>
import HeaderView from "@/views/Header";
import FooterView from "@/views/Footer";
import Register from "@/components/Register";

export default {
  name: "App",
  components: {
    Register,
    HeaderView,
    FooterView
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  min-height: 84vh;
  background-color: #a8dba8;
  padding: 10px;
}
</style>
