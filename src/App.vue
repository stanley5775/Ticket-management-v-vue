<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navbar -->
    <Navbar />

    <!-- Page content -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer (only show on public pages like Landing, Login, Signup) -->
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import{computed } from "vue"
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

// Hide footer on dashboard and tickets pages
const showFooter = computed(() => {
  return !["/dashboard", "/tickets"].includes(route.path);
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  background-color: #f9fafb;
}
</style>
