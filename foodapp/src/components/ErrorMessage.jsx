function ErrorMessage({ foodItems }) {
  return <>{foodItems == "" && <p>No food items available</p>}</>;
}

export default ErrorMessage;
