import "bootstrap/dist/css/bootstrap.css";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";

interface Props {
  onNewItem: any;
}

const TodoAdd = ({ onNewItem }: Props) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleName = (event: any) => {
    setTodoName(event.target.value);
  };
  const handleDate = (event: any) => {
    setTodoDate(event.target.value);
  };
  const handleButtonClick = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-3">
          <input
            type="text"
            placeholder="Enter the Task..."
            value={todoName}
            onChange={handleName}
          />
        </div>
        <div className="col-2">
          <input type="date" onChange={handleDate} value={todoDate} />
        </div>
        <div className="col-1">
          <button
            className="btn btn-success kg-button"
            onClick={() => {
              handleButtonClick();
            }}
          >
            <MdAssignmentAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;
