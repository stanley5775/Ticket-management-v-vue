<template>
  <div class="container-1440 mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-6">Dashboard</h1>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white p-6 rounded shadow text-center">
        <h2 class="text-gray-600 text-sm">Total Tickets</h2>
        <p class="text-3xl font-bold">{{ total }}</p>
      </div>

      <div class="bg-white p-6 rounded shadow text-center">
        <h2 class="text-gray-600 text-sm">Open</h2>
        <p class="text-3xl font-bold text-green-600">{{ open }}</p>
      </div>

      <div class="bg-white p-6 rounded shadow text-center">
        <h2 class="text-gray-600 text-sm">Resolved</h2>
        <p class="text-3xl font-bold text-gray-600">{{ closed }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const total = ref(0);
const open = ref(0);
const closed = ref(0);

onMounted(() => {
  const raw = localStorage.getItem("ticketapp_tickets");
  const list = raw ? JSON.parse(raw) : [];
  total.value = list.length;
  open.value = list.filter((t) => t.status === "open").length;
  closed.value = list.filter((t) => t.status === "closed").length;
});
</script>