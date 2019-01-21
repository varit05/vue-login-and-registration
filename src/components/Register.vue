<template>
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
                  <label for="Your Name" class="col-4" align="right"
                    >Your Name:</label
                  >
                  <input
                    class="col-4 form-control d-inline"
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                  />
                </div>
              </div>
            </div>
            <div class="row my-1">
              <div class="col-sm">
                <div class="form-group">
                  <label for="Email address:" class="col-4" align="right"
                    >Email address:</label
                  >
                  <input
                    class="col-4 form-control d-inline"
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
                  <label for="Password" class="col-4" align="right"
                    >Password:</label
                  >
                  <input
                    class="col-4 form-control d-inline"
                    type="password"
                    v-model="form.password"
                    required
                    placeholder="Enter password"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button
                  class="btn btn-primary m-2"
                  type="submit"
                  variant="primary"
                >
                  Submit
                </button>
                <button class="btn btn-secondary" type="reset" variant="danger">
                  Reset
                </button>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col">
              <p>
                Already Registered?
                <router-link to="/login">Login</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      msg: "Welcome to Registration!",
      form: {
        email: "",
        name: "",
        password: ""
      },
      show: true,
      message$: 0
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
