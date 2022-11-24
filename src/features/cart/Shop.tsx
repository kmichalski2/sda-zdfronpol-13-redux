import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {  addItem, Item, selectItemsQuantity } from './cartSlice';

export function Shop() {
    const dispatch = useAppDispatch();
    const quantity = useAppSelector(selectItemsQuantity);

    const product: Item = {
        id: '1',
        name: 'Call of Duty',
        price: 150
    }

/*
* Zadanie 1: Utwórz komponent Cart, który wyświetli informacje o statnie koszyka
* Zadanie 2: Utwórz komponent Produkt który z opcja dodania do koszyka
** Zadanie 3: Wyświetl w koszyku dostępne produktu 
*** Zadanie 4: Dodaj stylowanie i jakas ikonke koszyka
/

    return (
        <div>
            <div id="cart" className="cart">
                {quantity}
            </div>

            <div className="product">
                <button onClick={() => {dispatch(addItem(product))}}>Add product</button>
            </div>
        </div>
    )
}