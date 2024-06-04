'use client';

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export interface infoData {
    title: string,
    description: string,
}

const InputComponent = () => {

    const [info, setInfo] = useState<infoData>({
        title: "",
        description: "",
    });
    const router = useRouter();

    const handleChange = async (e: any) => {
        console.log(e);
        setInfo({ ...info, [e.target.name]: e.target.value });
    }
    const handleClick = async (e: any) => {
        try {
            const res = await fetch("http://localhost:3000/api/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const data = await res.json();
            if (data.succes) {
                alert("data inserted Succesful");
                router.refresh();
            }
        } catch (error) {
            console.log('error');
        }
    }

    return (
        <div className='flex flex-col px-10 gap-1 h-28 my-2'>
            <input value={info.title} name='title' onChange={handleChange} placeholder='Enter To Do Item ' className='bg-slate-100 rounded-xl px-3 grow' type="text" />
            <input value={info.description} name="description" onChange={handleChange} placeholder='Enter Description' className='bg-slate-100 rounded-xl px-3 grow' type="text" />
            <button onClick={handleClick} className='bg-green-300 w-32 my-2  mx-auto rounded-xl grow'>Add Button</button>
        </div>
    )
}

export default InputComponent
