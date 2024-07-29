import axios from "axios";
import { API_ENDPOINTS } from "../utils/ApiEndpoints";

// Base URL for the API
const BASE_URL = "https://dog.ceo/api/";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const getData = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.get_dog_images.url);
    if (response) {
      return response.data;
    }
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching data:", error);
    throw error;
  }
};
