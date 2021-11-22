import Chapters from "../chapters";
import Home from "../home/home";
import Search from "../search";

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
    }
  ];
