function Food() {
  const food = ["Orange", "Apple", "Banana", "Mango"];
  const foodList = food.map((item, index) => <li key={index}>{item}</li>);
 food.sort((a,b)=>a.name.localeCompare(a,p));
 const vegatabiles=[{id:4,name:"Potatoas"},{id:5,name:"corn"}]
  const vegatabilesList=vegatabiles.map((p)=><li key={p.name}></li>)
 return (
    <div>
      <h1>Food List</h1>
      <h1>Food....</h1>
      <ul>{foodList}</ul>
    </div>
  );
}
export default Food;
