'use server'
import { dataInfo } from "@/config/dbInfo"

export const contactInfo=async(name,email,message)=>{
    try {
    //used in server form action
    //const { name, email, message } = Object.fromEntries(formData.entries());
    //console.log(name, email, message);
    
    await dataInfo.execute(
      `insert into contacts (name, email, message) values (?, ? , ?)`,
      [name, email, message]
    );
    //return { success: true, message: "form submitted successfully" };
    // redirect("/");
  } catch (error) {
    console.log('error')
    //if (error.message === "NEXT_REDIRECT") throw error;
    //return { success: false, message: "error while submitting" };
  }
};
