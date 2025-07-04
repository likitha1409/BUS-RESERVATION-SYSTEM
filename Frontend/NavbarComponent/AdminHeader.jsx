import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    setTimeout(() => {
      navigate("/home");
    }, 1000); // Redirect after 3 seconds
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/admin/bus/add"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Bus</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/busStop/add"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add BusStop</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/bus/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View Buss</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/busStop/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View BusStops</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/journey/add"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Journey</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/journey/booking/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View Journey Bookings</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
