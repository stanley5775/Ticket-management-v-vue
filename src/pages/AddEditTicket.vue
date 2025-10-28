<template>
  <div class="container-1440 mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold">
      {{ editMode ? "Edit Ticket" : "Create Ticket" }}
    </h1>

    <form
      @submit.prevent="handleSubmit"
      class="mt-6 bg-white p-6 rounded shadow max-w-2xl"
    >
      <label class="block">
        <span class="text-sm">Title</span>
        <input
          v-model="form.title"
          class="mt-1 block w-full border rounded px-3 py-2"
        />
        <div v-if="errors.title" class="text-rose-600 text-sm mt-1">
          {{ errors.title }}
        </div>
      </label>

      <label class="block mt-4">
        <span class="text-sm">Description</span>
        <textarea
          v-model="form.description"
          rows="4"
          class="mt-1 block w-full border rounded px-3 py-2"
        ></textarea>
      </label>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <label class="block">
          <span class="text-sm">Status</span>
          <select
            v-model="form.status"
            class="mt-1 block w-full border rounded px-3 py-2"
          >
            <option value="open">open</option>
            <option value="in_progress">in_progress</option>
            <option value="closed">closed</option>
          </select>
          <div v-if="errors.status" class="text-rose-600 text-sm mt-1">
            {{ errors.status }}
          </div>
        </label>

        <label class="block">
          <span class="text-sm">Priority</span>
          <select
            v-model="form.priority"
            class="mt-1 block w-full border rounded px-3 py-2"
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </label>
      </div>

      <div class="mt-6 flex gap-3">
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
        <button type="button" @click="goBack" class="px-4 py-2 border rounded">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";
import { validateTicket } from "../utils/validation";
import { useToast } from "vue-toastification";

const toast = useToast();
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const editMode = computed(() => !!id);

const form = ref({
  title: "",
  description: "",
  status: "open",
  priority: "medium",
});
const errors = ref({});

onMounted(() => {
  if (editMode.value) {
    const raw = localStorage.getItem("ticketapp_tickets");
    if (raw) {
      const list = JSON.parse(raw);
      const one = list.find((t) => t.id === id);
      if (one) form.value = one;
      else {
        toast.error("Ticket not found");
      }
    }
  }
});

function saveList(list) {
  localStorage.setItem("ticketapp_tickets", JSON.stringify(list));
}

function handleSubmit() {
  errors.value = validateTicket(form.value);
  if (Object.keys(errors.value).length) return;

  const raw = localStorage.getItem("ticketapp_tickets");
  const list = raw ? JSON.parse(raw) : [];

  if (editMode.value) {
    const next = list.map((t) => (t.id === id ? { ...form.value } : t));
    saveList(next);
    toast.success("Ticket updated successfully");
  } else {
    const newTicket = {
      ...form.value,
      id: uuidv4(),
      date: new Date().toISOString().split("T")[0],
    };
    const next = [newTicket, ...list];
    saveList(next);
    toast.success("Ticket created successfully");
  }

  router.push("/tickets");
}

function goBack() {
  router.back();
}
</script>
