<template>
  <article class="bg-white shadow p-4 rounded-lg flex flex-col gap-3">
    <h3 class="font-semibold text-lg">{{ ticket.title }}</h3>
    <p class="text-gray-600">{{ ticket.description }}</p>

    <div class="flex justify-between items-center mt-3">
      <span :class="['px-3 py-1 rounded-full text-xs font-medium', statusClass(ticket.status)]">
        {{ ticket.status.replace('_', ' ') }}
      </span>

      <div class="flex items-center gap-2">
        <router-link :to="`/tickets/edit/${ticket.id}`" class="px-3 py-1 border rounded">
          Edit
        </router-link>
        <button @click="$emit('delete', ticket.id)" class="px-3 py-1 border rounded text-rose-600">
          Delete
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({ ticket: Object });

function statusClass(status) {
  return {
    open: "bg-green-100 text-green-700",
    in_progress: "bg-yellow-100 text-yellow-700",
    closed: "bg-gray-200 text-gray-700",
  }[status];
}
</script>