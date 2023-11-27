import styled from "styled-components";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import {useRecoilValue} from "recoil";
import {Categories, categoryState, todoSelector} from "./atom/atoms";
import Header from "./components/main/header";

const Wrapper = styled.div``;
const TodoTitle = styled.h2``;

function App() {
  const todoList = useRecoilValue(todoSelector);
  const cateState = useRecoilValue(categoryState);
  const title =
    cateState === Categories.TODO
      ? "What You Have To Do"
      : cateState === Categories.DOING
      ? "What You're Doing Now"
      : "What I Done";

  return (
    <Wrapper>
      <Header />
      <TodoTitle>{title}</TodoTitle>
      <TodoForm />
      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Wrapper>
  );
}

export default App;
