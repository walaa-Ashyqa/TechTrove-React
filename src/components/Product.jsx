import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { bro } from "../assets/";
import { prodects } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementByAmount,
} from "../features/cartcounter/cartCounterSlice";
import { addFavorite } from "../features/favoriteCounter/favoriteCounterSlice";
import { resetCart } from "../features/cartcounter/cartCounterSlice";
function Product() {
  const dispatch = useDispatch();
  // ============== State ==============
  const { value, products } = useSelector(({ cartCounter }) => cartCounter);
  const { count_favorite, products_favorite } = useSelector(
    ({ favoriteCounter }) => favoriteCounter
  );
  const incrementWithPayloadHandler = (event) => {
    dispatch(incrementByAmount(event));
    console.log(value);
    console.log(products);
  };
  const incrementFavoriteWithPayloadHandler = (event) => {
    dispatch(addFavorite(event));
    console.log(products_favorite);
    console.log(count_favorite);
  };

  const buyNowHandler = () => {
    alert("Purchase Completed Successfully!!");
  };
  return (
    <section className={`${layout.section}  flex-wrap `}>
      {prodects.map((prodect) => (
        <div
          key={prodect.id}
          className=" flex flex-col justify-around items-start  mt-10   p-2 rounded-xl border-spacing-1 border border-slate-800"
        >
          <img src={prodect.img} width={250} alt="" />
          <div>
            <h3
              className={`${styles.paragraph} text-wrap max-w-[250px] text-sm`}
            >
              {prodect.title}
            </h3>
            <p className="text-2xl text-[#5CE1E6]  font-semibold ">
              {prodect.price}
            </p>
            <div
              className={` flex w-[250px] items-start flex-row justify-around    bg-slate-100 rounded-xl mt-2   `}
            >
              <Button
                onClick={() => incrementFavoriteWithPayloadHandler(prodect)}
                styles={`my-4  py-1 px-2 rounded-full text-xl bg-slate-100`}
                title="🩵"
              />
              <Button
                onClick={() => incrementWithPayloadHandler(prodect)}
                styles={`my-4  py-1 px-2 rounded-full text-xl bg-slate-100 `}
                title="🛒"
              />
              <Button
                onClick={buyNowHandler}
                styles={`my-4   py-2 px-4 rounded-full bg-[#5CE1E6] text-sm `}
                title="Buy Now"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Product;
