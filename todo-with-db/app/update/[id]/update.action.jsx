'use server'
import dataInfo from "@/config/todoData"
import { redirect } from "next/navigation";

const updateTodo = async(formData) => {
  try {
    const { id, title, description, priority } =Object.fromEntries(formData.entries());
    await dataInfo.execute('UPDATE todos SET title=?, description=?, priority=? WHERE id=?' , [title,description,priority,id])
  } 
  catch (error) {
    console.error('error found', error)
  }
   redirect('/')
}

export default updateTodo