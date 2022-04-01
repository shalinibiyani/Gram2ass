import React from "react";

export const Home = () => {
  return (
    <>
      {/* coverImg */}
      <div className="CooverImg">
        <img
          src="https://media.noria.com/sites/Uploads/2018/11/30/3bbea347-1878-4fe9-a540-337027db9333_warehouse-image-large_extra_large.jpeg"
          width={"100%"}
          height={"500vh"}
          alt=""
        ></img>
      </div>
{/* Photo Gallery */}
      <div className="container-fluid">
        <div className="row mt-5 ">
          <div className="col-6 d-grid justify-content-center text-center">
            <h1>Photo gallery</h1>

            <div class="row  ">
              <div class="col-4  ">
                <img
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201806/cover660_061418041537.jpg?size=1200:675"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col-4">
                <img
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201806/cover660_061418041537.jpg?size=1200:675"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col-4">
                <img
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201806/cover660_061418041537.jpg?size=1200:675"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

{/* store Time */}
          <div className="col-6 d-grid justify-content-center text-center order-md-2">
            <h1> Store hours</h1>
            <div className="d-grid justify-content-around text-start">
              <li> Sunday -close</li>
              <li> Monday -open</li>
              <li> Tuesday -open</li>
              <li> Wednesday -open</li>
              <li> Thursday -open</li>
              <li> Friday -open</li>
              <li> Saturday -open</li>
            </div>
          </div>
        </div>
      </div>

{/* About */}
      <div className="section mt-5">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-6  ">
            <h1>About us</h1>
            <p className="mb-5 mt-4 px-4" style={{ fontSize: "20px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr />

{/* Product */}
            <div className="product mt-3">
              <h1> Product Range</h1>
              <p> The products that store sells</p>
              <div class="dropdown">
                <button
                  class="btn  btn-primary dropdown-toggle px-5 py-2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Glass
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Meters
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Gadgets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

{/* Map */}
          <div className="col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308189.827514037!2d69.37661161945594!3d26.569865139035635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1648807929144!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
