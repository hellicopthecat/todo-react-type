import styled, {ThemeProvider} from "styled-components";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import {useRecoilValue} from "recoil";
import {Categories, categoryState, isDark, todoSelector} from "./atom/atoms";
import Header from "./components/main/Header";
import {darkTheme, lightTheme} from "./theme/theme";
import {GlobalStyle} from "./theme/global";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const FormCont = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const TodoTitle = styled.h2`
  margin-bottom: 40px;
`;

function App() {
  const theme = useRecoilValue(isDark);
  const todoList = useRecoilValue(todoSelector);
  const cateState = useRecoilValue(categoryState);
  const title =
    cateState === Categories.TODO
      ? "What You Have To Do"
      : cateState === Categories.DOING
      ? "What You're Doing Now"
      : cateState === Categories.DONE
      ? "What I Done"
      : "CUSTOM";

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <FormCont>
          <TodoTitle>{title}</TodoTitle>
          <TodoForm />
        </FormCont>
        {todoList.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
