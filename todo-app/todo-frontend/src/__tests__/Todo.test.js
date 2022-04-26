// write react test for todo component

import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Todo from "../Todos/Todo";

test("renders todo item", () => {
  const todo = {
    id: 1,
    text: "Buy milk",
    done: false,
  };

  const onClickDelete = jest.fn();
  const onClickComplete = jest.fn();

  const { getByText } = render(
    <Todo
      todo={todo}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
  );

  expect(getByText(todo.text)).toBeInTheDocument();
});

test("clicking on delete button should delete todo item", () => {
  const todo = {
    id: 1,
    text: "Buy milk",
    isDone: false,
  };

  const onClickDelete = jest.fn();
  const onClickComplete = jest.fn();

  const { getByRole } = render(
    <Todo
      todo={todo}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
  );

  const deleteButton = getByRole("button", { name: "Delete" });

  fireEvent.click(deleteButton);

  expect(onClickDelete).toHaveBeenCalled();
  expect(onClickDelete).toHaveBeenCalledWith(todo);
});
