import { defineTheme } from "@vslides/core";
import cover from "./layouts/cover.vue";

import "./style/main.css";

export default defineTheme({
  name: "example-theme",
  layouts: { cover },
});
