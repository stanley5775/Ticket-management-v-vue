<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="w-full px-4 py-3 flex items-center justify-between max-w-[1440px] mx-auto">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-md bg-linear-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-bold"
        >
          T
        </div>
        <div>
          <RouterLink to="/" class="text-lg font-semibold">TicketApp</RouterLink>
          <div class="text-xs text-slate-500">Simple ticket management</div>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Navigation Links -->
      <nav
        :class="[
          'flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto px-4 md:px-0 py-4 md:py-0 shadow md:shadow-none transition-all',
          menuOpen ? 'block' : 'hidden md:flex'
        ]"
      >
        <RouterLink to="/" class="hover:text-blue-600" @click="closeMenu">
          Home
        </RouterLink>
        <RouterLink
          v-if="auth"
          to="/dashboard"
          class="hover:text-blue-600"
          @click="closeMenu"
        >
          Dashboard
        </RouterLink>
        <RouterLink
          v-if="auth"
          to="/tickets"
          class="hover:text-blue-600"
          @click="closeMenu"
        >
          Tickets
        </RouterLink>
        <RouterLink
          v-if="!auth"
          to="/auth/login"
          class="px-3 py-2 bg-blue-600 text-white rounded"
          @click="closeMenu"
        >
          Login
        </RouterLink>
        <button
          v-if="auth"
          @click="handleLogout"
          class="px-3 py-2 bg-rose-500 text-white rounded"
        >
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { isAuthenticated, clearSession } from "../utils/auth";


const menuOpen = ref(false);
const router = useRouter();
const auth = ref(isAuthenticated());

//  keep checking if user logs in/out
watchEffect(() => {
  auth.value = isAuthenticated();
});

function handleLogout() {
  clearSession();
  auth.value = false;
  router.push("/auth/login");
}

onMounted(() => {
  router.afterEach(() => {
    menuOpen.value = false;
  });
});

function closeMenu() {
  menuOpen.value =false
}
</script>