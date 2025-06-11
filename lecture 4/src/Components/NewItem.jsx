import { useState } from "react";
export const NewItem = (props) => {
  const [title, settitle] = useState("test");
  const [desc, setDesc] = useState("desc");
  const handeltitleChange = (e) => {
    settitle(e.target.value);
  };
  const handelDescChange = (e) => {
    setDesc(e.target.value);
  };
  const addNewItem = (e) => {
    e.preventDefault();
    if (!title){alert("name required");
    return;} 
  
    const Item={
    id: new Date().getTime(),
    title,
    desc
  }
  props.onItemAdded(Item);
};
  return (
    <>
      <form action="">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => handeltitleChange(event)}
          placeholder="title"
        />
        <input
          type="text"
          name="desc"
          value={desc}
          onChange={(event) => handelDescChange(event)}
          placeholder="description"
        />
        <input type="submit" onClick={(event) => addNewItem(event)} />
      </form>
    </>
  );
};
