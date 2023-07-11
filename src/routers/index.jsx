import Home from "../pages/Home";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import ShopDetail from "../pages/ShopDetail";
import Cart from "../pages/Cart";
import Blog from "../pages/Blog";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { OnlyLayout } from "../components/Layouts";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/products", component: Product },
  { path: "/detail", component: ShopDetail },
  { path: "/cart", component: Cart },
  { path: "/blog", component: Blog },
  { path: "/login", component: Login, layout: OnlyLayout },
  { path: "/register", component: Register, layout: OnlyLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
