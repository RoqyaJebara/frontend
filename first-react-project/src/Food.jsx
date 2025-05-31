function Food() {
  const food = ["Orange", "Apple", "Banana", "Mango"];
  const foodList = food.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <h1>Food List</h1>
      <h1>Food....</h1>
      <ul>{foodList}</ul>
    </div>
  );
}
export default Food;
