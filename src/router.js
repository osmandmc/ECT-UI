import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: () => import("./pages/HomePage.vue"),
    children: [
      {
        path: "resistances",
        name: "ResistanceList",
        component: () => import("./components/ResistanceList.vue"),
      },
      {
        path: "add-resistance",
        name: "AddResistance",
        component: () => import("./components/AddResistance.vue"),
      },
      {
        path: "edit-resistance/:id",
        name: "EditResistance",
        component: () => import("./components/EditResistance.vue"),
      },
      {
        path: "add-protesto",
        name: "SetProtesto",
        component: () => import("./pages/SetProtesto.vue"),
      },
      {
        path: "edit-protesto/:id",
        name: "SetProtesto",
        component: () => import("./pages/SetProtesto.vue"),
      },
    ],
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
