import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Site institucional estático: não precisa de cache incremental (R2/KV/D1).
export default defineCloudflareConfig();
