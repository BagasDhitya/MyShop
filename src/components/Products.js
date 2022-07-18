import React, { useState, useEffect } from "react";

import axios from "axios";
import { NavLink } from "react-router-dom";
import { Digital } from "react-activity";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(products);

  const GET_PRODUCTS = "https://fakestoreapi.com/products";

  async function getProducts() {
    setLoading(true);
    const res = await axios.get(GET_PRODUCTS);
    if (res !== null) {
      setProducts(res.data);
      setFilter(res.data);
      setLoading(false);
    }
  }

  function filterProduct(category) {
    const updateList = products.filter((x) => x.category === category);
    setFilter(updateList);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3 my-3">
          <div className="position-sticky" style={{ top: "100px" }}>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => setFilter(products)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>

        <div className="col-md-9 py-md-3">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Digital size={100} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Digital size={100} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Digital size={100} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Digital size={100} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Digital size={100} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Digital size={100} />
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-3">
              <Digital size={100} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-3 my-3">
          <div className="position-sticky" style={{ top: "100px" }}>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => setFilter(products)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark m-1 btn-sm"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>

        <div className="col-md-9 py-md-3">
          <div className="row">
            {filter.map((product) => {
              return (
                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>
                  <div className="card h-100">
                    <img
                      src={product.image}
                      className="m-3"
                      style={{
                        height: "300px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                      alt={product.title}
                    />
                    <div className="m-3 mb-0">
                      <small className="card-title">
                        {product.title.substring(0, 50)}...
                      </small>
                    </div>
                    <div style={{ marginTop: "auto" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="m-3">
                          <b>${product.price}</b>
                        </div>
                        <NavLink
                          className="stretched-link"
                          to={`/product/${product.id}`}
                        >
                          <button className="btn btn-sm m-3 border-primary">
                            <i className="fa fa-arrow-right text-muted"></i>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
