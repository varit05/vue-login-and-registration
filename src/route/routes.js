const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/components/Home.vue"),
    isPublic: false,
    title: "Home"
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/components/Login.vue"),
    isPublic: true,
    title: "Login"
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/components/Register.vue"),
    isPublic: true,
    title: "Register"
  }
];
export default routes;
