import { containerCart } from "../components/containerCart.js";
import { loading } from "../utils/utils.js";

export const cartView = (state=null) => {
    loading('main', containerCart);
};
// tag, callback, args