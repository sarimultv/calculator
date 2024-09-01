import { useState } from "react";
import styles from "./FoodList.module.css";
import Item from "./Item";

function FoodList({ foodItems }) {
  let [ItemsBgColor, setBgColor] = useState([]);

  const onBuyBtnClick = (item, event) => {
    let newItem = [...ItemsBgColor, item];
    // console.log("clicked");
    setBgColor(newItem);
  };
  return (
    <>
      {foodItems.map((item) => {
        return (
          <ul className={`list-group ${styles.listStyle}`} key={item}>
            <Item
              foodItem={item}
              styles={styles}
              changeBgColor={ItemsBgColor.includes(item)}
              handleOnClickBtn={(event) => onBuyBtnClick(item, event)}
            />
          </ul>
        );
      })}
    </>
  );
}

export default FoodList;
