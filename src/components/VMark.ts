import { h, ref, watch, defineComponent } from "vue";
import VMarkRenderer from "@vmark/core";

export default defineComponent({
  name: "VMark",
  props: {
    text: String,
  },
  setup(props) {
    const renderer = new VMarkRenderer({ h });
    const result = ref(h("div"));
    watch(
      () => props.text,
      (t) => {
        renderer.render(t ?? "").then((v) => {
          result.value = v.result;
        });
      },
      { immediate: true }
    );
    return () => {
      return result.value;
    };
  },
});
