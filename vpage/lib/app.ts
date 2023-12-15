import { createSSRApp, defineComponent, h } from "vue";
import PrimeVue from "primevue/config";
import { PageContext, setPageContext } from "./context";

export { createApp };

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  const App = defineComponent({
    render() {
      return h(Page, pageProps || {});
    },
  });

  const app = createSSRApp(App);

  // primevue
  app.use(PrimeVue, { ripple: true });

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
