/**
 * Fresh Framework Configuration
 * 
 * This file configures the Fresh web framework and its plugins.
 * - Tailwind CSS is enabled for styling the application
 * - Additional plugins can be added here as needed
 */
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
});
