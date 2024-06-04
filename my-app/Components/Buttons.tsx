'use client';
import { useRouter } from "next/navigation";

const Buttons = ({ id }: { id: string }) => {
    const router = useRouter();
    async function handleDelete() {
        try {
            const response = await fetch(`http://localhost:3000/api/todo?id=${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            if (data.succes) {
                alert("del succes");
                router.refresh();
            }

        } catch (error) {
            console.log(error);
        }
    }
    async function handleUpdate() {
        console.log('updated');
    }
    return (
        <div className="flex justify-around  w-full">
            <button onClick={handleDelete}>Del</button>
            <button onClick={()=>router.push(`/update/${id}`)}>Update</button>
        </div>
    )
}

export default Buttons
