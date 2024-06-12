import "bootstrap/dist/css/bootstrap.css";
import { MdDeleteSweep } from "react-icons/md";
import "../index.css";

interface Props {
  task: string;
  deadline: string;
  onDeleteClick: any;
}

const TodoItem = ({ task, deadline, onDeleteClick }: Props) => {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="task">{task}</div>
        </div>
        <div className="col-2">
          {deadline ? (
            <div className="date">{deadline}</div>
          ) : (
            <div className="date">No Due Date</div>
          )}
        </div>
        <div className="col-1">
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(task)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
