import { client } from "./axiosClient";

export function signIn(payLoad) {
  return client.post("/auth/signin", payLoad);
}

export function Reminder(payLoad) {
  return client.post("/Reminder/create", payLoad);
}

export function getReminderAccordingtoDate(payLoad) {
  return client.post("/Reminder/search-record", payLoad);
}

export function createContact(payLoad) {
  return client.post("/Contact/create", payLoad);
}

export function sendReminderById(id) {
  return client.post(`/reminder/send/${id}`);
}

export function sendBulkReminder(ids) {
  return client.post(`/reminder/send-bulk`, { ids });
}

export function updateReminder(id, payLoad) {
  return client.patch(`/Reminder/update-record/${id}`, payLoad);
}
