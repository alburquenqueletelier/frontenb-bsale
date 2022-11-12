import { containerCart } from "../components/containerCart.js";
import { leftNavBar } from "../components/leftNavBar.js";
import { loading } from "../utils/utils.js";

export const cartView = () => {
    loading('productsContainer', containerCart);
    loading('leftNav', leftNavBar);
};
// tag, callback, args