
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    env: {
      JWT_SECRET: "clave-exclusiva-para-testing",
    },
  },
});
