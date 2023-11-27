import {useRecoilState} from "recoil";
import styled from "styled-components";
import {Categories, ITodo, todoState} from "../../atom/atoms";

const TodoListCont = styled.ul`
  list-style: circle;
`;
const TodoRowCont = styled.div``;
const TransformCate = styled.button``;

const Todo: React.FC<ITodo> = ({id, todo, category}) => {
  const [toDos, setTodos] = useRecoilState(todoState);
  const changeCate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setTodos((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id);
      const newTodo = {id, todo, category: name as any};
      return [
        ...prev.slice(0, targetIndex),
        newTodo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };
  const removeTodo = () => {
    setTodos(() => {
      const newTodo = toDos.filter((todo) => todo.id !== id);
      return [...newTodo];
    });
  };
  return (
    <TodoListCont>
      <li>
        <TodoRowCont>
          <p>{todo}</p>
          <p>{category}</p>
          <p>{new Date(id).toISOString()}</p>
        </TodoRowCont>
        <TodoRowCont>
          {category !== Categories.TODO && (
            <TransformCate name={Categories.TODO} onClick={changeCate}>
              MOVE TO DO
            </TransformCate>
          )}
          {category !== Categories.DOING && (
            <TransformCate name={Categories.DOING} onClick={changeCate}>
              MOVE DOING
            </TransformCate>
          )}
          {category !== Categories.DONE && (
            <TransformCate name={Categories.DONE} onClick={changeCate}>
              MOVE DONE
            </TransformCate>
          )}
          <TransformCate onClick={removeTodo}>DELETE</TransformCate>
        </TodoRowCont>
      </li>
    </TodoListCont>
  );
};

export default Todo;
