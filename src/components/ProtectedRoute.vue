<template>
  <div v-if="auth">
    <router-view />
  </div>
  <div v-else>
    <p class="text-center text-rose-500 mt-10">Unauthorized. Redirecting...</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { isAuthenticated } from "../utils/auth";
import { onMounted } from "vue";

const router = useRouter();
const auth = isAuthenticated();

onMounted(() => {
  if (!auth) router.push("/auth/login");
});
</script>