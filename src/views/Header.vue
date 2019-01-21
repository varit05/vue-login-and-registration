<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0" v-if="!authUser">
        <li class="nav-item">
          <router-link to="login" class="nav-link"> Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="register" class="nav-link">Register</router-link>
        </li>
      </ul>

      <ul class="navbar-nav mr-auto mt-2 mt-lg-0" v-if="authUser">
        <li class="nav-item">
          <a class="nav-link" v-on:click="logout();"> Logout </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { removeUserDetails } from "@/common/storage.service";

export default {
  name: "HeaderView",
  methods: {
    logout() {
      removeUserDetails();
      sessionStorage.removeItem("userDetails");
      this.$root.userDetails = null;
      this.$router.push({ path: "/login" });
    }
  },
  computed: {
    authUser() {
      return this.$root.userDetails;
    }
  }
};
</script>
<style>
.navbar-brand {
  color: #9bceb4;
}
.nav-link {
  color: #9bceb4;
}
</style>
