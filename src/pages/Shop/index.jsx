import React from "react";
import ProductCart from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import "./Shop.scss";
export default function Shop() {
  return (
    <div>
      <main>
        <Breadcrumb title="Products" />
        <section className="shopify-section mt-5">
          <div className="container-wrapper">
            <div className="row">
              <div className="col-3 sidebar-widget px-4 py-4 bg-light">
                <div className="group">
                  <h3>Availibility</h3>
                  <input type="checkbox" name="avail" id="avail" />
                  <label for="avail">In Stock</label>
                  <br />
                  <input type="checkbox" name="avail" id="non-avail" />
                  <label for="non-avail">Out Of Stock</label>
                </div>
                <hr />
                <div className="group">
                  <h3>Price</h3>
                  <div className="row">
                    <div className="col-4">
                      <label for="from_price">From $</label>
                    </div>
                    <div className="col-7 px-0">
                      <input type="number" name="from_price" id="from_price" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-4">
                      <label for="to_price">To $</label>
                    </div>
                    <div className="col-7 px-0">
                      <input type="number" name="to_price" id="to_price" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="group">
                  <h3>Product type</h3>
                  <input type="checkbox" name="type" id="type1" />
                  <label for="type1">Type 1</label>
                  <br />
                  <input type="checkbox" name="type" id="type2" />
                  <label for="type2">Type 2</label>
                  <br />
                  <input type="checkbox" name="type" id="type3" />
                  <label for="type3">Type 3</label>
                  <br />
                  <input type="checkbox" name="type" id="type4" />
                  <label for="type4">Type 4</label>
                  <br />
                </div>
                <div className="group">
                  <h3>Brand</h3>
                  <input type="checkbox" name="brand" id="brand1" />
                  <label for="brand1">Brand 1</label>
                  <br />
                  <input type="checkbox" name="brand" id="brand2" />
                  <label for="brand2">Brand 2</label>
                  <br />
                  <input type="checkbox" name="brand" id="brand3" />
                  <label for="brand3">Brand 3</label>
                  <br />
                  <input type="checkbox" name="brand" id="brand4" />
                  <label for="brand4">Brand 4</label>
                  <br />
                </div>
                <div className="group">
                  <h3>Color</h3>
                  <input type="checkbox" name="color" id="red" />
                  <label for="red">Red</label>
                  <br />
                  <input type="checkbox" name="color" id="Blue" />
                  <label for="Blue">Blue</label>
                  <br />
                  <input type="checkbox" name="color" id="navy" />
                  <label for="navy">Navy</label>
                  <br />
                  <input type="checkbox" name="color" id="purple" />
                  <label for="purple">Purple</label>
                  <br />
                </div>
                <div className="group">
                  <h3>Material</h3>
                  <input type="checkbox" name="material" id="fiber" />
                  <label for="fiber">Fiber</label>
                  <br />
                  <input type="checkbox" name="material" id="leather" />
                  <label for="leather">Leather</label>
                  <br />
                  <input type="checkbox" name="material" id="metal" />
                  <label for="metal">Metal</label>
                  <br />
                  <input type="checkbox" name="material" id="resin" />
                  <label for="resin">Resin</label>
                  <br />
                  <input type="checkbox" name="material" id="slag" />
                  <label for="slag">Slag</label>
                  <br />
                </div>
                <div className="group">
                  <h3>Size</h3>
                  <input type="checkbox" name="size" id="size_s" />
                  <label for="size_s">S</label>
                  <br />
                  <input type="checkbox" name="size" id="size_m" />
                  <label for="size_m">M</label>
                  <br />
                  <input type="checkbox" name="size" id="size_l" />
                  <label for="size_l">L</label>
                  <br />
                </div>
              </div>
              <div className="col-9">
                <div className="banner">
                  <img src="./public/banner-6.webp" alt="banner" width="100%" />
                </div>
                <div className="shop-header my-2 p-2 border">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="text-left">
                        <button className="grid p-3 border mx-1 rounded"></button>
                        <button className="grid-4 p-3 border mx-1 rounded"></button>
                        <button className="list p-3 border mx-1 rounded"></button>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-right">
                        <div className="row">
                          <div className="sort-by">
                            <span>Sort by: </span>
                          </div>
                          <div className="sort-by">
                            <select name="sort-by" id="sort-by">
                              <option value="manual">Featured</option>
                              <option value="best-selling">Best Selling</option>
                              <option value="title-ascending">
                                Alphabetically, A-Z
                              </option>
                              <option value="title-descending">
                                Alphabetically, Z-A
                              </option>
                              <option value="price-ascending">
                                Price, low to high
                              </option>
                              <option value="price-descending">
                                Price, high to low
                              </option>
                              <option value="created-descending">
                                Date, new to old
                              </option>
                              <option value="created-ascending">
                                Date, old to new
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-product">
                  <div className="row">
                    <ProductCart
                      title="Product 1"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p1.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 2"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p2.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 3"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p3.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 4"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p4.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 5"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p5.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 6"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p6.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 7"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p7.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 8"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p8.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 9"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p9.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 10"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p10.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 11"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p11.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 12"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p12.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 13"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p13.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 14"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p14.webp"
                    ></ProductCart>
                    <ProductCart
                      title="Product 15"
                      priceNew="110"
                      priceOld="130"
                      src="./public/products/p15.webp"
                    ></ProductCart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
