import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase"; // импортируем auth из Firebase
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ element }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return element;
};

export default PrivateRoute;
