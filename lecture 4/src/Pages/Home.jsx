import { List } from "../Components/List";
import { NewItem } from "../Components/NewItem";
import { useState } from "react";

export const Home = () => {
  const [list, setList] = useState([
    { id: 1, title: "frontend work", desc: "description frontend" },
    { id: 2, title: "backend work", desc: "description backend" },
  ]);
  const dataList = list.map((item, index) => <List msg={item} key={index} />);
  const handelNewItem = (item) => {
    console.log(item);
    setList((prevItems) => [item, ...prevItems]);
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <div>
        <NewItem onItemAdded={handelNewItem} />
      </div>
      <div>
        <h2>List</h2> <div> {dataList}</div>
      </div>
    </>
  );
};
