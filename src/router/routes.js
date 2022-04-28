const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/tags", component: () => import("pages/Tags.vue") },
      { path: "/users", component: () => import("pages/Users.vue") },
      { path: "/questions", component: () => import("pages/QuestionPage.vue") },
    ],
  },

  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/signup",
    component: () => import("pages/Signup.vue"),
  },
  {
    path: "/question/ask",
    component: () => import("pages/AskQuestion.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
