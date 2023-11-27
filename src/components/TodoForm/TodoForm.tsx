import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import styled from "styled-components";
import {categoryState, todoState} from "../../atom/atoms";

const TodoFormCont = styled.form``;
const TodoLabel = styled.label``;
const TodoInput = styled.input``;
const TodoBtn = styled.button``;

interface ITodoForm {
  todoInput: string;
}
const TodoForm = () => {
  const {register, handleSubmit, setValue} = useForm<ITodoForm>();
  const setTodo = useSetRecoilState(todoState);
  const currentCategory = useRecoilValue(categoryState);
  const onTodoSubmit = ({todoInput}: ITodoForm) => {
    setTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: todoInput,
        category: currentCategory,
      },
    ]);
    setValue("todoInput", "");
  };

  return (
    <TodoFormCont onSubmit={handleSubmit(onTodoSubmit)}>
      <TodoLabel htmlFor="todoInput">To Do</TodoLabel>
      <TodoInput
        id="todoInput"
        type="text"
        placeholder="Add Your To Do"
        {...register("todoInput", {required: true})}
      />
      <TodoBtn type="submit">ADD</TodoBtn>
    </TodoFormCont>
  );
};
export default TodoForm;