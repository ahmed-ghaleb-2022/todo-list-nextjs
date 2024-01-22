"use client";

import { deleteTodo } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";
import { TodoType } from "@/types/todoType";

const DeleteTodo = ({todo}: TodoType) => {
    return ( <Form
    action={deleteTodo}
    >
        <Input
        name="inputId"
        value={todo.id}
        type="hidden"
        />
        <Button
        type="submit"
        actionButton
        text={<BsFillTrashFill />}
        />
    </Form>);
}
 
export default DeleteTodo;