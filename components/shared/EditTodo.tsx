"use client"
import { useState } from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BiEdit } from "react-icons/bi";
import { TodoType } from "@/types/todoType";
import { edit } from "@/app/actions/todoActions";

const EditTodo = ({todo} : TodoType) => {
    
    const [editTodo , setEditTodo] = useState(false)
    
    const handleEdit = ()=>{
        if(todo.isCompleted === true) return;
        setEditTodo(!editTodo)
    }

    const handleSubmit = ()=>{
        setEditTodo(false)
    }

    return ( <div className="flex items-center gap-5">
        <Button 
        onClick={handleEdit}
        text={<BiEdit/>} 
        actionButton/>

{
    editTodo ? (
        <Form 
        action={edit}
        onSubmit={handleSubmit}
        >
            <Input 
            name="inputId"
            value={todo.id}
            type="hidden"
            />
            <div className="flex justify-center">
                <Input 
                name="newTitle"
                type="text"
                placeholder="Edit Todo..."
                />
                <Button 
                type="submit"
                text="Save"
                />
            </div>
        </Form>
    ): null }
        

    </div> );
}
 
export default EditTodo;