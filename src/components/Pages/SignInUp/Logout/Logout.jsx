import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice"; // Импортируем action logout
import { useNavigate } from "react-router-dom";

const handleLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout()); // Сбрасываем авторизацию
    navigate("/"); // Перенаправляем на главную
  };

  return <button onClick={logoutUser}>Logout</button>;
};
