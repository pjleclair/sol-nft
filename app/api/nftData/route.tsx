import { NextResponse } from "next/server";

const getNftData = async () => {
    //fill this in once API provider is determined
}

export async function GET(request: Request) {
    return NextResponse.json({"msg":"test"})
}