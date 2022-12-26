import { createStore } from "vuex";
import resistanceModule from "./modules/resistance/index.js";
import cityModule from "./modules/city/index.js";
import companyModule from "./modules/company/index.js";
import resistanceReasonModule from "./modules/resistanceReason/index.js";
import categoryModule from "./modules/category/index.js";
import paramModule from "./modules/parameters/index.js";
import protestoTypeModule from "./modules/protestoType/index.js";
import protestoPlaceModule from "./modules/protestoPlace/index.js";
import corporationModule from "./modules/corporation/index.js";

// Create a new store instance.
const store = createStore({
  modules: {
    resistance: resistanceModule,
    city: cityModule,
    company: companyModule,
    resistanceReason: resistanceReasonModule,
    category: categoryModule,
    parameters: paramModule,
    protestoType: protestoTypeModule,
    protestoPlace: protestoPlaceModule,
    corporation: corporationModule,
  },
});

export default store;
