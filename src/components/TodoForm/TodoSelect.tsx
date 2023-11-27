import styled from "styled-components";
import {Categories, categoryState} from "../../atom/atoms";
import {useRecoilState} from "recoil";

const TodoLabel = styled.label``;
const SelectTodo = styled.select``;
const TodoSelect = () => {
  const [cate, setCate] = useRecoilState(categoryState);
  const onSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCate(event.currentTarget.value as any);
  };
  return (
    <>
      <TodoLabel htmlFor="todoSelect">Select</TodoLabel>
      <SelectTodo id="todoSelect" value={cate} onChange={onSelectChange}>
        <option value={Categories.TODO}>Todo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </SelectTodo>
    </>
  );
};
export default TodoSelect;
