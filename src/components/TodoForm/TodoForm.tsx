import {useForm} from "react-hook-form";
import {useRecoilState, useSetRecoilState} from "recoil";
import styled from "styled-components";
import {Categories, categoryState, todoState} from "../../atom/atoms";

const TodoFormCont = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
`;
const TodoLabel = styled.label``;
const TodoInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  padding: 0 15px;
`;
const TodoBtn = styled.button`
  border-radius: 20px;
  padding: 5px 10px;
  color: ${(props) => props.theme.txtColor};
  background-color: ${(props) => props.theme.btnColor};
`;
const SelectTodo = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  padding: 0 15px;
`;
interface ITodoForm {
  todoInput: string;
  customInput: string;
}
const TodoForm = () => {
  const {register, handleSubmit, setValue} = useForm<ITodoForm>();
  const setTodo = useSetRecoilState(todoState);
  const [cate, setCate] = useRecoilState(categoryState);
  const onSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCate(event.currentTarget.value as any);
  };
  const onTodoSubmit = ({todoInput, customInput}: ITodoForm) => {
    setTodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: todoInput,
        category: cate,
        customInput,
      },
    ]);
    setValue("customInput", "");
    setValue("todoInput", "");
  };

  return (
    <TodoFormCont onSubmit={handleSubmit(onTodoSubmit)}>
      <TodoLabel htmlFor="todoSelect">Select</TodoLabel>
      <SelectTodo id="todoSelect" value={cate} onChange={onSelectChange}>
        <option value={Categories.TODO}>Todo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        <option value={Categories.CUSTOM}>Custom</option>
      </SelectTodo>

      <TodoLabel htmlFor="customInput">Custom Category</TodoLabel>
      <TodoInput
        id="customInput"
        type="text"
        placeholder="Custom Input"
        {...register("customInput", {required: true})}
      />

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
