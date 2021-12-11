import Chapters from "../views/Chapters";
import Home from "../views/Home";
import KuralView from "../views/KuralView";
import Search from "../views/Search";

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
      path: "/thirukkurals/:kuralIndex",
      component: KuralView,
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
