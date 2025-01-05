import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../../redux/Auth/slice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearUser());
    navigate("/");
  }, [dispatch, navigate]);

  return <div>Выполняется выход...</div>;
}

export default Logout;
