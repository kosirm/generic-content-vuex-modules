import Vue from "vue";
import Vuex from "vuex";

import { makeNormalizeRelations, makeResolveRelations } from "./helpers";
import articleService from "../services/article";
import makeCrudModule from "./modules/crud";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true
});

store.registerModule(
  "article",
  makeCrudModule({
    normalizeRelations: makeNormalizeRelations({ fields: ["author"], store }),
    resolveRelations: makeResolveRelations({ fields: ["author"], store }),
    service: articleService
  })
);
store.registerModule("author", makeCrudModule());

export default store;
