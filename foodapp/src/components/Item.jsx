const Item = ({ foodItem, styles, handleOnClickBtn, changeBgColor }) => {
  return (
    <li className={`list-group-item ${changeBgColor && "active"}`}>
      {foodItem}
      <button
        className={`btn btn-light ${styles.buyButton}`}
        onClick={handleOnClickBtn}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
