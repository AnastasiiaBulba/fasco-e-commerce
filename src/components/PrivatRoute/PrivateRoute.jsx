import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

// Компонент, который проверяет авторизацию и отображает либо страницу, либо редирект на страницу входа
const PrivateRoute = ({ element }) => {
  const { user, loading } = useSelector((state) => state.auth); // Получаем данные пользователя и состояние загрузки из Redux

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
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" />; // Если пользователь не авторизован, редирект на страницу входа
  }

  return element; // Если пользователь авторизован, показываем защищённую страницу
};

export default PrivateRoute;
