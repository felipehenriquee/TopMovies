import Button from "primevue/button";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import ProgressSpinner from "primevue/progressspinner";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import FloatLabel from "primevue/floatlabel";
import { App } from "vue";

export default function setPrimeComponent(app: App): void {
  app.use(PrimeVue, {
    theme: {
      preset: Lara,
      options: {
        darkModeSelector: ".fake-dark-selector",
      },
    },
  });
  app.component("Button", Button);
  app.component("ProgressSpinner", ProgressSpinner);
  app.component("Password", Password);
  app.component("InputText", InputText);
  app.component("FloatLabel", FloatLabel);
}
