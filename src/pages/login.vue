<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <form
      @submit.prevent="handleLogin"
      class="bg-white p-8 rounded shadow-md w-full max-w-md"
    >
      <h1 class="text-2xl font-semibold mb-4 text-center">Login</h1>

      <label class="block mb-3">
        <span class="text-sm">Email</span>
        <input
          v-model="email"
          type="email"
          class="mt-1 w-full border rounded px-3 py-2"
        />
      </label>

      <label class="block mb-4">
        <span class="text-sm">Password</span>
        <input
          v-model="password"
          type="password"
          class="mt-1 w-full border rounded px-3 py-2"
        />
      </label>

      <div v-if="error" class="text-rose-600 text-sm mb-2 text-center">
        {{ error }}
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded">
        Login
      </button>

      <p class="text-center text-sm mt-4">
        Don't have an account?
        <router-link to="/auth/signup" class="text-blue-600 font-medium"
          >Sign up</router-link
        >
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { saveSession } from "../utils/auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const email = ref("");
const password = ref("");
const router = useRouter();

function handleLogin() {
  const stored = localStorage.getItem("ticketapp_user");
  if (!stored) {
    toast.error("No user found. Please sign up first.");
    return;
  }

  const user = JSON.parse(stored);

  if (email.value === user.email && password.value === user.password) {
    // Save new session token
    saveSession(user);
    toast.success("Login successful ");
    router.push("/dashboard");
  } else {
    toast.error("Invalid credentials ");
  }
}
</script>
