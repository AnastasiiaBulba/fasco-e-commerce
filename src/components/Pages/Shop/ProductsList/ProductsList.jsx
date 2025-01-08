import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../Firebase/index.js";
import Product from "../Product/Product.jsx";
import css from "./ProductsList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Women"));

      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setLoading(false);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div>
      {products.length > 0 ? (
        <ul className={css.productList}>
          {products.map((product) => (
            <li key={product.id}>
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.imgUrl}
                colors={product.colors || []}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет данных для отображения</p>
      )}
    </div>
  );
};

export default ProductList;
