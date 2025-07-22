import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {
    /** Development server port (only used in vite.config) */
    VITE_DEV_SERVER_PORT: z.coerce.number().optional(),
  },
  clientPrefix: "VITE_",
  runtimeEnv: import.meta.env,
});
