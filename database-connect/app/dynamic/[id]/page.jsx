import { database } from "@/config/db_info";

import Link from "next/link";
import { notFound } from "next/navigation";

const DoctorCard=async({params})=>{
    const {id}=await params;
    const [doctor] = await database.execute(`select * from doctors where id=?`,[id]);
    const doctorInfo=doctor[0]

    if(!doctorInfo) return notFound();

    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="h-40 w-72 bg-gray-200 rounded-lg my-[60px]">
                <div className="h-16 w-full bg-blue-500 flex flex-col justify-center rounded-lg items-start px-10">
                    <h1 className="text-xl font-bold text-center px-1">Dr. {doctorInfo.first_name} {doctorInfo.last_name}</h1>
                    <h5 className="text-sm px-1">Specialist:{doctorInfo.speciality}</h5>
                </div>
                <div className="text-black px-10 pt-5 flex flex-col gap-3">
                   <h1 className="text-sm">Location: {doctorInfo.area}</h1>
                   <h1 className="text-sm">Phone Number: {doctorInfo.phone_number}</h1>
                </div>
            </div>
            <div className="flex gap-10">
                <Link href={'/'} className="bg-red-500 rounded-md px-4 py-2 text-md text-white font-semibold">Go Home</Link>
                <Link href={'/dynamic'} className="bg-green-600 rounded-md px-4 py-2 text-md text-white font-semibold">Go back</Link>
            </div>
        </div>
        </>
    )
}

export default DoctorCard