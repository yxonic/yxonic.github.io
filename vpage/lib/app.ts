import { createSSRApp, defineComponent, h } from "vue";
import PrimeVue from "primevue/config";
import { PageContext, setPageContext } from "./context";

export { createApp };

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;

  // TODO: workaround for vmark plugin
  const props = (pageProps || {}) as Record<string, any>;
  if (((Page as any).__file || "").endsWith(".md")) {
    props.class = "vmark-container";
  }

  const App = defineComponent({
    render() {
      return h(Page, props);
    },
  });

  const app = createSSRApp(App);

  // primevue
  app.use(PrimeVue, { ripple: true });

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
