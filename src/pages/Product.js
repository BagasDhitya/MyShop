import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Digital } from "react-activity";

const Product = () => {
  let location = useLocation();

  const GET_PRODUCT = `https://fakestoreapi.com/products/${location.state?.id}`;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProduct() {
    setLoading(true);
    const res = await axios.get(GET_PRODUCT);
    setProduct(res);
    setLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, [location.state?.id]);

  const Loading = () => {
    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <NavLink className="text-decoration-none text-dark" to={`/`}>
              <div className="d-flex align-items-center m-3">
                <Digital size={100} />
              </div>
            </NavLink>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <Digital size={100} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border p-4">
                    <div className="mt-4 mb-3">
                      {" "}
                      <span className="text-uppercase text-muted brand">
                        {" "}
                        <Digital height={30} width={150} />
                      </span>
                      <h5 className="text-uppercase">
                        <Digital size={100} />
                      </h5>
                      <div className="price d-flex flex-row align-items-center">
                        <span className="act-price">
                          <Digital size={100} />
                          <Digital size={100} />
                        </span>
                      </div>
                    </div>
                    <p className="about">
                      <Digital size={100} />
                      <Digital size={100} />
                      <Digital size={100} />
                      <Digital size={100} />
                    </p>
                    <div className="cart mt-4 align-items-center">
                      <Digital size={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowDetails = () => {
    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <NavLink className="text-decoration-none text-dark" to={`/`}>
              <div className="d-flex align-items-center m-3">
                <i className="fa fa-long-arrow-left"></i>
                <span className="ml-1">&nbsp;Back</span>
              </div>
            </NavLink>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <img
                        id="main-image"
                        alt="product"
                        src={product.image}
                        width="250"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border p-4">
                    <div className="mt-4 mb-3">
                      <span className="text-muted text-capitalize">
                        {" "}
                        in {product.category}
                      </span>
                      <h5 className="text-uppercase">{product.title}</h5>
                      Rating {product.rating && product.rating.rate}
                      <i className="fa fa-star text-warning"></i>
                      <div className="price d-flex flex-row align-items-center">
                        <big className="display-6">
                          <b>${product.price}</b>
                        </big>
                      </div>
                    </div>
                    <p className="text-muted">{product.description}</p>
                    <div className="cart mt-4 align-items-center">
                      {" "}
                      <button className="btn btn-outline-dark text-uppercase mr-2 px-4">
                        Buy
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>
        {loading ? <Loading /> : <ShowDetails />}
      </div>
    </>
  );
};

export default Product;
