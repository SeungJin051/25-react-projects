import { useEffect } from "react";
import { useState } from "react";
import styles from "./LoadMoreData.module.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  async function fetchProducts() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await res.json(); // 이미 JSON 형식으로 변환된 응답 객체를 사용합니다.
      console.log(result); // JSON 결과를 콘솔에 출력합니다.
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading Data...!</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles["product-container"]}>
        {products && products.length
          ? products.map((item) => (
              <div className={styles.product} key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className={styles["button-container"]}>
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableBtn ? <p>최대 데이터 갯수인 100개를 불러왔습니다.</p> : null}
      </div>
    </div>
  );
}
