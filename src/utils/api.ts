import axios from "axios";

axios.defaults.baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://104.131.48.1:4000";

export const api = axios;
