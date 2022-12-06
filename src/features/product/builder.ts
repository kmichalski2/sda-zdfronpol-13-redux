// Product : name, price, category

export const product = {
  name: "Product A",
  price: 20,
  category: "Category Z",
};

export class Product {
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

export const productB = new Product("Product B", 30, "Category X");

export const productC = new Product("Product C", 0, "");
productC.category = "Category X";
productC.price = 20;

export class ProductBuilder {
  product: any = {};

  addName(name: string): ProductBuilder {
    this.product.name = name;

    return this;
  }

  addPrice(price: number): ProductBuilder {
    this.product.price = price;

    return this;
  }

  addCategory(category: string): ProductBuilder {
    this.product.category = category;

    return this;
  }
}

const builder = new ProductBuilder();

const productD = builder.addName("Product C").addCategory("Category W").product;
