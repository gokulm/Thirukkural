import ChapterGroups from "../views/ChapterGroups";
import Chapters from "../views/Chapters";
import Home from "../views/Home";
import KuralView from "../views/KuralView";
import Search from "../views/Search";
import Sections from "../views/Sections";

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
      path: "/sections",
      component: Sections,
      exact: true
    },
    {
      path: "/chaptergroups",
      component: ChapterGroups,
      exact: true
    },
    {
      path: "/chapters/:chapterIndex/kurals",
      component: Home,
      exact: true
    },
    {
      path: "/sections/:sectionIndex/chapters",
      component: Chapters,
      exact: true
    },
    {
      path: "/chaptergroups/:chapterGroupIndex/chapters",
      component: Chapters,
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
