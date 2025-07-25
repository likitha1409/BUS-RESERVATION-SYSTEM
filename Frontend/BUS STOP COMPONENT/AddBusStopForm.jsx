import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBusStopForm = () => {
  const navigate = useNavigate();

  const admin_token = sessionStorage.getItem("admin-jwtToken");

  const [busStop, setBusStop] = useState({
    name: "",
    location: "",
    code: "",
    address: "",
  });

  const handleUserInput = (e) => {
    setBusStop({ ...busStop, [e.target.name]: e.target.value });
  };

  const saveBusStop = (e) => {
    fetch("http://localhost:8080/api/busStop/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + admin_token,
      },
      body: JSON.stringify(busStop),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");

            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/admin/busStop/all");
            }, 1000); // Redirect after 3 seconds
          } else {
            console.log("Didn't got success response");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // setTimeout(() => {
            //   window.location.reload(true);
            // }, 1000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setTimeout(() => {
        //   window.location.reload(true);
        // }, 1000); // Redirect after 3 seconds
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color"
          style={{ width: "50rem" }}
        >
          <div className="card-header text-color custom-bg text-center">
            <h5 className="card-title">Add BusStop</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveBusStop}>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b>BusStop Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={busStop.name}
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <b>
                  <label className="form-label">BusStop Location</label>
                </b>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  onChange={handleUserInput}
                  value={busStop.location}
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b>BusStop Code</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  name="code"
                  onChange={handleUserInput}
                  value={busStop.code}
                />
              </div>

              <div class="mb-3 text-color">
                <label for="description" class="form-label">
                  <b>BusStop Address</b>
                </label>
                <textarea
                  class="form-control"
                  id="address"
                  rows="3"
                  name="address"
                  placeholder="enter address.."
                  onChange={handleUserInput}
                  value={busStop.address}
                />
              </div>

              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn text-color custom-bg"
                  value="Add BusStop"
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBusStopForm;
