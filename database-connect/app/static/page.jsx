import {database} from '@/config/db_info.jsx'


//isr
export const revalidate=30;

const StaticPage=async()=>{
    const [doctors] = await database.execute("select * from doctors");

    return (
        <>
        <div className='flex flex-wrap justify-center items-center gap-10 mt-10'>
            {doctors.map((doctor)=>(
            <div key={doctor.id}>
                <div className='bg-yellow-100 text-red-900 rounded-lg flex flex-col h-20 w-64 items-center justify-center gap-2'>
                    <h1 className='text-md font-semibold'>Name:{doctor.first_name}</h1>
                    <h3 className='text-sm font-light'>Speciality:{doctor.speciality}</h3>
                </div> 
            </div>
        ))}
        </div>
        </>
    )
}

export default StaticPage