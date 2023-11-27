import {useForm} from "react-hook-form";
import {useRecoilState, useSetRecoilState} from "recoil";
import styled from "styled-components";
import {Categories, categoryState, todoState} from "../../atom/atoms";

const TodoFormCont = styled.form``;
const TodoLabel = styled.label``;
const TodoInput = styled.input``;
const TodoBtn = styled.button``;
const SelectTodo = styled.select``;
interface ITodoForm {
  todoInput: string;
}
const TodoForm = () => {
  const {register, handleSubmit, setValue} = useForm<ITodoForm>();
  const setTodo = useSetRecoilState(todoState);
  const [cate, setCate] = useRecoilState(categoryState);
  const onSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCate(event.currentTarget.value as any);
  };
  const onTodoSubmit = ({todoInput}: ITodoForm) => {
    setTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: todoInput,
        category: cate,
      },
    ]);
    setValue("todoInput", "");
  };

  return (
    <TodoFormCont onSubmit={handleSubmit(onTodoSubmit)}>
      <TodoLabel htmlFor="todoSelect">Select</TodoLabel>
      <SelectTodo id="todoSelect" value={cate} onChange={onSelectChange}>
        <option value={Categories.TODO}>Todo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </SelectTodo>
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
