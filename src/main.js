import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

library.add(
  faChevronDown,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faBook,
  faCartShopping,
  faCrosshairs,
  faRulerCombined,
  faNewspaper,
  faUser,
  faCheck,
  faMagnifyingGlass,
  faHeart,
  faSignal,
  faAngleUp,
  faAngleDown,
  faCalendarDays
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
