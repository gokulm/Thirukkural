import Chapters from "../views/chapters";
import Home from "../views/home";
import Search from "../views/search";

export const routes = [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/chapters",
      component: Chapters,
      exact: true
    },
    {
      path: "/chapters/:chapterIndex/kurals",
      component: Home,
      exact: true
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/",
      component: Home
    }
  ];
