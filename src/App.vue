<template>
  <div id="app">
    <div class="container text-dark text-center">
      <Header-View />
      <transition name="slide-fade" mode="out-in">
        <router-view class="content"></router-view>
      </transition>
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
  background: linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200));
}
.content {
  min-height: 84vh;
  padding: 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
