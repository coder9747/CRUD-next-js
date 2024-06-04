'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface infoData {
    title: string,
    description: string

}

const page = ({ params }) => {
    const router = useRouter();
    const { id } = params;
    const [info, setInfo] = useState<infoData>({
        title: "",
        description: "",
    });
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/api/todo/${id}`);
            const { data } = await response.json();


            setInfo({ title: data.title, description: data.description });
        }
        fetchData();
    }, []);
    function handleChange(e: any) {
        setInfo({ ...info, [e.target.name]: e.target.value });

    }
    async function handleClick() {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(info),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            router.push('/');
        }


    }
    return (
        <div className='flex flex-col px-10 gap-1 h-28 my-2'>
            <input value={info.title} name='title' onChange={handleChange} placeholder='Enter To Do Item ' className='bg-slate-100 rounded-xl px-3 grow' type="text" />
            <input value={info.description} name="description" onChange={handleChange} placeholder='Enter Description' className='bg-slate-100 rounded-xl px-3 grow' type="text" />
            <button onClick={handleClick} className='bg-green-300 w-32 my-2  mx-auto rounded-xl grow'>Update Button
            </button>
        </div>
    )
}

export default page
