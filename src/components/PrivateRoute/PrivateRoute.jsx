import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectUserIsSignedIn,
  selectUserIsRefreshing,
} from "../../redux/auth/selectors.js";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);

  return !isSignedIn && !isRefreshing ? (
    <Navigate to={redirectTo} replace />
  ) : (
    children
  );
};

export default PrivateRoute;
