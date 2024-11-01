import { copyFileSync } from "node:fs";
import { join } from "node:path";

import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  base: "/portfolio-2024/",
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      ssr: false,
      basename: "/portfolio-2024/",
      buildEnd(args) {
        if (!args.viteConfig.isProduction) return;
        const { outDir } = args.viteConfig.build;
        // TODO: check http code
        copyFileSync(join(outDir, "index.html"), join(outDir, "404.html"));
      },
    }),
    tsconfigPaths(),
  ],
});
