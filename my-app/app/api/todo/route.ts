import { NextResponse } from "next/server";
import ToDoModel from "@/model/ToDo";
import connectToDatabase from "@/lib/db";
import { Tomorrow } from "next/font/google";

export async function POST(req: Request) {
    try {
        const { title, description } = await req.json();
        await connectToDatabase();
        console.log(title, description);
        const newTodo = new ToDoModel({ title, description });
        await newTodo.save();
        return NextResponse.json({ succes: true });
    } catch (error: any) {
        console.log(error.message);
    }
};

export async function GET() {
    try {
        await connectToDatabase();
        const data = await ToDoModel.find({});
        return NextResponse.json({ succes: true, data });

    } catch (error: any) {
        console.log(error.message);
    }

}