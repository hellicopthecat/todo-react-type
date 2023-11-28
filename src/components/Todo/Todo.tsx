import {useRecoilState} from "recoil";
import styled from "styled-components";
import {Categories, ITodo, todoState} from "../../atom/atoms";

const TodoListCont = styled.ul`
  width: 100%;
  display: flex;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;
const TodoRowCont = styled.div`
  width: 100%;
  display: flex;

  &:first-child {
    width: 70%;
    justify-content: space-between;
  }
  &:nth-child(2) {
    width: 30%;
    justify-content: end;
  }
  p:first-child {
    width: 60%;
    overflow: hidden;
    margin-right: 20px;
  }
  p:nth-child(2) {
    width: 20%;
  }
  p:nth-child(3) {
    width: 20%;
  }
`;
const TransformCate = styled.button`
  border-radius: 20px;
  padding: 5px 10px;
  color: ${(props) => props.theme.txtColor};
  background-color: ${(props) => props.theme.btnColor};
  margin-left: 10px;
`;

const Todo: React.FC<ITodo> = ({id, todo, category, customInput}) => {
  const [toDos, setTodos] = useRecoilState(todoState);
  const changeCate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setTodos((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id);
      const newTodo = {id, todo, category: name as any, customInput};
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
          <p>{category === Categories.CUSTOM ? customInput : category}</p>
          <p>{new Date(id).toLocaleString()}</p>
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
          {category !== Categories.CUSTOM && (
            <TransformCate name={Categories.CUSTOM} onClick={changeCate}>
              MOVE CUSTOM
            </TransformCate>
          )}
          <TransformCate onClick={removeTodo}>DELETE</TransformCate>
        </TodoRowCont>
      </li>
    </TodoListCont>
  );
};

export default Todo;
