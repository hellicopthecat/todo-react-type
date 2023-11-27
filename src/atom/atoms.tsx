import {atom, selector} from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface ITodo {
  id: number;
  todo: string;
  category: Categories;
}

export const isDark = atom({
  key: "isDark",
  default: true,
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const todoSelector = selector({
  key: "cateSelect",
  get: ({get}) => {
    const toDos = get(todoState);
    const cateState = get(categoryState);
    return toDos.filter((todo) => todo.category === cateState);
  },
});
