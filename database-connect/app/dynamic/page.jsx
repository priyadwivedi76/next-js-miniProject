import {database} from '@/config/db_info.jsx'
import { cache } from 'react';

//converted into dynamic
export const dynamic='force-dynamic'
const DynamicPage=async()=>{
    const info=await doctorInfo();
    return (
        <>
        <div className='flex flex-wrap justify-center items-center gap-10 mt-10'>
            <DoctorList doctors={info}/>
        </div>
        </>
    )
}

export default DynamicPage


export const DoctorList=async()=>{
    const doctors=await doctorInfo()
    return (
    <>
    {doctors.map((doctor)=>(
        <div key={doctor.id}>
            <div className='bg-yellow-100 text-red-900 rounded-lg flex flex-col h-20 w-64 items-center justify-center gap-2'>
                <h1 className='text-md font-semibold'>Name:{doctor.first_name}</h1>
                <h3 className='text-sm font-light'>Speciality:{doctor.speciality}</h3>
            </div> 
        </div>
    ))}
    </>)
}

const doctorInfo=cache(async()=>{
    const [doctor] = await database.execute("select * from doctors");
    console.log('fetching data')
    return doctor;
})