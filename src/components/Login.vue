<template>
  <transition name="fade">
    <div class="">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="card">
          <div class="card-header">
            <h1>{{ msg }}</h1>
          </div>
          <div class="card-body">
            <form @submit="onSubmit" @reset="onReset" v-if="show">
              <div class="row my-1">
                <div class="col-sm">
                  <div class="form-group">
                    <label for="Email address:" class="col-4" align="right">Email address:</label>
                    <input
                      class="form-control col-4 d-inline"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
              <div class="row my-1">
                <div class="col-sm">
                  <div class="form-group">
                    <label for="Password" class="col-4" align="right">Password:</label>
                    <input
                      class="form-control col-4 d-inline"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" v-model="form.isRememberMeChecked" />
                <label class="form-check-label" for="inlineCheckbox2">Remember me</label>
              </div>
              <div class="row">
                <div class="col"><button class="btn btn-primary m-2" type="submit" variant="primary">Login</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import config from "@/common/config";
import { saveUserDetails } from "@/common/storage.service";

export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Login!",
      form: {
        email: "",
        name: "",
        isRememberMeChecked: false
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.getLogin();
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.password = "";
      this.form.isRememberMeChecked = false;
      this.show = false;
    },
    async getLogin() {
      const { email, password, isRememberMeChecked } = this.form;
      const data = { email, password };
      const headers = {
        "Content-Type": "application/json"
      };
      try {
        const response = await axios.post(`${config}/login`, data, { headers: headers });
        data.token = response.data.token;
        this.$root.userDetails = data;
        if (isRememberMeChecked) {
          saveUserDetails(JSON.stringify(data));
          // localStorage.setItem("userDetails", JSON.stringify(data));
        } else {
          sessionStorage.setItem("userDetails", JSON.stringify(data));
        }
        this.$router.push({ path: "/" });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
