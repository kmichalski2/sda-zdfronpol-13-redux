import { Cart } from "./Cart";
import './Shop.css';
import { useAppSelector } from '../../app/hooks';
import { ProductModel, selectProducts } from "../product/productsSlice";
import { Product } from "./Product";

export function Shop() {
  const products: ProductModel[] = useAppSelector(selectProducts);

    return (
        <div className="position-relative">
            <Cart />

          <div className="container pt-5">
            <div className="products-list ">
                { products.map((product, key) => <Product key={key} name={product.name} id={product.id} price={product.price} />)}
            </div>
          </div>
        </div>
    )
}
