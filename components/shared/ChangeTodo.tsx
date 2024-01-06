
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { changeStatus } from "@/app/actions/todoActions";
import {AiOutlineCheckCircle} from "react-icons/ai"
import { TodoType } from "@/types/Todotype";



const ChangeTodo = ({todo}: TodoType) => {
    return ( <Form action={changeStatus}> 
        <Input
        name="inputId"
        value={todo.id}
        type="hidden"
        />

        <Button 
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle/>}
        />
    </Form> );
}
 
export default ChangeTodo;