import { createRouter, createWebHistory } from "vue-router";
import Landing from "../pages/Landing.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import Dashboard from "../pages/Dashboard.vue";
import Tickets from "../pages/Tickets.vue";
import AddEditTicket from "../pages/AddEditTicket.vue";
import { isAuthenticated } from "../utils/auth";

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/auth/Login", name: "Login", component: Login },
  { path: "/auth/signup", name: "Signup", component: Signup },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets/edit/:id",
    name: "EditTicket",
    component: AddEditTicket,
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets/add",
    name: "AddTicket",
    component: AddEditTicket,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.Base_url),
  routes,
});

// Route Guard (protects dashboard and tickets)
router.beforeEach((to, from, next) => {
  const loggedIn = isAuthenticated();

  if (to.meta.requiresAuth && !loggedIn) {
    next("/auth/login");
  } else if (
    (to.path === "/auth/login" || to.path === "/auth/signup") &&
    loggedIn
  ) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
