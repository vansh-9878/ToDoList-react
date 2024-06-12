import { useState } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoHead from "./components/TodoHead";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";

const App = () => {
  const [items, setItems] = useState([]);

  const handleNewItem = (itemName: string, itemDueDate: string) => {
    if (itemName) {
      const newItems = [...items, { task: itemName, deadline: itemDueDate }];
      setItems(newItems);
    } else {
      alert("Enter the Task first...");
    }
  };

  const handleDeleteItem = (itemName: string) => {
    const newTodoItems = items.filter((item) => item.task !== itemName);
    setItems(newTodoItems);
  };

  return (
    <>
      <TodoHead />
      <TodoAdd onNewItem={handleNewItem} />
      <TodoItems ListItems={items} onDeleteClick={handleDeleteItem} />
      {items.length <= 0 && <Message />}
    </>
  );
};

export default App;
