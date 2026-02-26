import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import AsideSponsors from "./components/AsideSponsors.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "aside-outline-after": () => h(AsideSponsors),
    });
  },
};
