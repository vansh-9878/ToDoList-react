import TodoItem from "./TodoItem";

interface Props {
  ListItems: { task: string; deadline: string }[];
  onDeleteClick: any;
}

const TodoItems = ({ ListItems, onDeleteClick }: Props) => {
  return (
    <div>
      {ListItems.map((item) => (
        <TodoItem
          key={item.task}
          task={item.task}
          deadline={item.deadline}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
