import {connect} from "../../../../dbConfig/dbConfig"
import User from "../../../../models/userModel"
import {NextRequest,NextResponse} from 'next/server'

connect()

export const POST = async (request: NextRequest) =>{
    try {
    const reqBody = await request.json()
    const {username,email}=reqBody
        console.log(reqBody,username,email)
        const user = await User?.findOne({email})
        if(user){
            return NextResponse.json({ error:"user already exit" }, { status:400})
        }

        const newUser=   new User({
            username,email
        })
        const savedUser= await newUser.save()
        console.log(savedUser)
        return NextResponse.json({ message:"user register successfully", status:200, savedUser})
    } catch (error) {
        return NextResponse.json({ error:error.message,err:"err" }, { status:408})
    }
}
