import { NextResponse, NextRequest } from "next/server";
import { sendEmail } from "@/lib/sendemail";
export async function POST(request: NextRequest) {
    try {
        const requestData = await request.json();
        const data = typeof requestData.data === "string" ? JSON.parse(requestData.data) : requestData.data;

        if (!data?.email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        await sendEmail({
            OTP: "13456",
            username: data.fullName || data.username,
            email:data.email,
            device: data.device,
            latitude: data.location?.latitude,
            longitude: data.location?.longitude,
            timezone: data.device?.timezone || data.timezone || "UTC",
        });
        return NextResponse.json({ message: "Data received successfully" });
    } catch (err) {
        console.error("Error processing request:", err);
        return NextResponse.json({ message: "Error processing request" }, { status: 500 });
    }
}