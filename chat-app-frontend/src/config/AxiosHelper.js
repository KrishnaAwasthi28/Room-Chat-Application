import axios from "axios";
export const baseURL = "https://room-chat-application-1.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,
});
