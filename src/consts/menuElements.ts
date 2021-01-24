import home from "../assets/home.svg";
import list from "../assets/list.svg";
import random from "../assets/shuffle.svg";
import info from "../assets/information.svg";

export const menuElements: Elements[] = [
  {
    id: 0,
    name: "Home",
    icon: home,
    path: "/"
  },
  {
    id: 1,
    name: "Categories",
    icon: list,
    path: "/categories"
  },
  {
    id: 2,
    name: "Random",
    icon: random,
    path: "/random"
  },
  {
    id: 3,
    name: "About",
    icon: info,
    path: "/about"
  },
];

console.log(info);

interface Elements {
  id: number;
  name: string;
  icon: string;
  path: string;
}