'use server'
import dataInfo from "@/config/todoData";

const todoInfo = async(formData) => {
  try {
    const { title, description, priority } = Object.fromEntries(formData.entries());
    await dataInfo.execute("INSERT INTO todos (title, description, priority) VALUES (?, ?, ?)", [title, description, priority])

  } catch (error) {
    console.error("❌ Insert Todo Failed:", error);
    throw error;
  }
}

export default todoInfo;