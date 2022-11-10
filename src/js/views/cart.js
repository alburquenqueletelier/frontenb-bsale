import { containerCart } from "../components/containerCart";
import { loading } from "../utils/utils";

export const cartView = () => {
    loading('main', containerCart);
}