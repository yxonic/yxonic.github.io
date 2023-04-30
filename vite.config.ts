import yaml from "@rollup/plugin-yaml";
import vue from "@vitejs/plugin-vue";
import vmark from "@vmark/vite-plugin";
import vslides from "@vslides/vite-plugin";
import uno from "unocss/vite";
import ssr from "vite-plugin-ssr/plugin";

export default {
  plugins: [
    vue(),
    ssr({
      prerender: true,
    }),
    uno(),
    vslides({
      transformRegex: /\.mdx$/, // sorry for borrowing this ext
    }),
    vmark(),
    yaml(),
  ],
};
