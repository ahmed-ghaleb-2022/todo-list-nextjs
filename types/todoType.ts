export type TodoType = {
    todo:{
        title: string | null;
        isCompleted: boolean;
        id: string;
        createdAt?: Date;
    }
  
}