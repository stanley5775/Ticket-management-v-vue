<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-6 text-center">Create Account</h1>

      <form @submit.prevent="handleSignup" class="space-y-4">
        <div>
          <label class="block mb-1 text-sm font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            class="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div v-if="error" class="text-rose-600 text-sm">{{ error }}</div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p class="text-sm text-center mt-4">
        Already have an account?
        <router-link to="/auth/login" class="text-blue-600 underline">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { saveSession } from "../utils/auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const error = ref("");

function handleSignup() {
  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match";
    toast.error("Passwords do not match ");
    return;
  }

  const user = { email: email.value, password: password.value };

  //  Save to localStorage for login use later
  localStorage.setItem("ticketapp_user", JSON.stringify(user));

  //  Also save session token for immediate login
  saveSession(user);

  toast.success("Account created successfully ");
  router.push("/dashboard");
}
</script>
