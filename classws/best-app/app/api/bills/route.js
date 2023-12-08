import { NextResponse } from "next/server";
import { prisma } from "../../../config/prisma";
export const Post = async (req) => {
    try {
        const body = await req.json();
        console.log("body", body);
        const response = await prisma.bills.create({
            data: {
                consumerNumber: body?.consumerNumber,
                units: body?.units,
                address: body?.address,
                status: body?.status,
            },
        })
        console.log("response", response);
        return NextResponse.json({ message: "Success Fully Created" })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong ", error: JSON.stringify(error) })
    }
}











