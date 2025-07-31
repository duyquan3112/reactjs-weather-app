function requireEnv(value, key) {
  if (!value) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
  return value;
}

export const config = {
  apiBaseUrl: requireEnv(
    import.meta.env.VITE_API_BASE_URL,
    "VITE_API_BASE_URL"
  ),
  weatherApiKey: requireEnv(import.meta.env.VITE_API_KEY, "VITE_API_KEY"),
};
