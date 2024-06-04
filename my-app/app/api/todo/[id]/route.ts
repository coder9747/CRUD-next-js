import connectToDatabase from "@/lib/db";
import ToDoModel from "@/model/ToDo";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req, { params }) {
    const { id } = params;
    const val = mongoose.Types.ObjectId.isValid(id);
    if (val) {
        try {
            await connectToDatabase();
            const data = await ToDoModel.findById(id);
            return NextResponse.json({ succes: true, message: "Fetched Succes", data });

        } catch (error) {
            console.log(error);
            return NextResponse.json({ succes: true, message: "failed to fetch  " });
        }
    }
    else {
        return NextResponse.json({ succes: false });
    }

}
export async function PUT(req: Request, { params }) {
    const { id } = params;
    const isValiedId = mongoose.Types.ObjectId.isValid(id);
    if (isValiedId) {
        const { newTitle: title, newDescription: description } = await req.json();
        try {
            await connectToDatabase();
            await ToDoModel.findByIdAndUpdate(id, { title, description });
            return NextResponse.json({ succes: true, message: "Updated Succesful" });
        } catch (error) {
            console.log(error);
            return NextResponse.json({ succes: true, message: "Failed To Update" });
        }
    }
    else {
        return NextResponse.json({succes:true,message:"Id is not Vaild"});
    }

}