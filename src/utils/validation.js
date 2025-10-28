export function validateTicket({ title, description, status, priority }) {
  const errors = {};
  if (!title) errors.title = "Title is required";
  if (!description) errors.description = "Description is required";
  const allowed = ["open", "in_progress", "closed"];
  if (!status || !allowed.includes(status))
    errors.status = 'Status must be one of: ${allowed.join(", ")}';
  if (!priority) errors.priority = "Priority is required";
  return errors;
}