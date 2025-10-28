<template>
  <div>
    <section class="relative bg-blue-50 overflow-hidden">
      <!-- Decorative Circles -->
      <div class="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>
      <div class="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-40"></div>

      <!-- Hero Content -->
      <div class="container-1440 mx-auto px-4 py-20 text-center relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Manage your tickets with ease
        </h1>
        <p class="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          A simple and efficient way to track, organize, and resolve tickets  all in one place.
        </p>

        <div class="flex justify-center gap-4">
          <router-link to="/auth/login" class="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">
            Login
          </router-link>
          <router-link to="/auth/signup" class="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-100">
            Get Started
          </router-link>
        </div>
      </div>

      <!-- Wavy Background -->
      <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,128L48,160C96,192,192,256,288,272C384,288,480,256,576,224C672,192,768,160,864,176C960,192,1056,256,1152,277.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section class="container-1440 mx-auto px-4 py-16 grid md:grid-cols-3 gap-6 text-center">
      <div class="bg-white rounded-2xl shadow p-6">
        <h3 class="font-semibold text-lg mb-2">Track Tickets</h3>
        <p class="text-gray-600">Keep track of all tickets and their statuses easily.</p>
      </div>
      <div class="bg-white rounded-2xl shadow p-6">
        <h3 class="font-semibold text-lg mb-2">Manage Workflow</h3>
        <p class="text-gray-600">Update, resolve, or reopen tickets in just a few clicks.</p>
      </div>
      <div class="bg-white rounded-2xl shadow p-6">
        <h3 class="font-semibold text-lg mb-2">Stay Organized</h3>
        <p class="text-gray-600">Use status filters and priorities to organize your tasks.</p>
      </div>
    </section>

  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>