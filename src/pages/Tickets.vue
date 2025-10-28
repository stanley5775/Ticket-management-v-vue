<template>
  <div class="container-1440 mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold">Tickets</h1>
      <router-link to="/tickets/add" class="px-4 py-2 bg-blue-600 text-white rounded">
        + Add Ticket
      </router-link>
    </div>

    <div v-if="tickets.length === 0" class="text-gray-500">No tickets found.</div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TicketCard v-for="t in tickets" :key="t.id" :ticket="t" @delete="deleteTicket" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TicketCard from "../components/TicketCard.vue";

const tickets = ref([]);

onMounted(() => {
  const raw = localStorage.getItem("ticketapp_tickets");
  tickets.value = raw ? JSON.parse(raw) : [];
});

function deleteTicket(id) {
  if (confirm("Are you sure you want to delete this ticket?")) {
    tickets.value = tickets.value.filter((t) => t.id !== id);
    localStorage.setItem("ticketapp_tickets", JSON.stringify(tickets.value));
  }
}
</script>