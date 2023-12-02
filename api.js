const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL)
  throw new Error("Provide a value for env var NEXT_PUBLIC_API_URL");

export { API_URL };
