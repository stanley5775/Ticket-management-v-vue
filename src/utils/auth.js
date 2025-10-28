
import { ref } from "vue";

const SESSION_KEY = "ticketapp_session";

// reactive session object (null or { email, ... })
export const userSession = ref(
  (() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
    } catch {
      return null;
    }
  })()
);

// synchronize across tabs (if user logs in/out in another tab)
window.addEventListener("storage", (e) => {
  if (e.key === SESSION_KEY) {
    try {
      userSession.value = e.newValue ? JSON.parse(e.newValue) : null;
    } catch {
      userSession.value = null;
    }
  }
});

export function saveSession(user) {
  userSession.value = user;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearSession() {
  userSession.value = null;
  localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated() {
  return !!userSession.value;
}

export function getSession() {
  return userSession.value;
}
