import mongoose from "mongoose"

export const connectDB=async ()=>{
    await mongoose.connect(process.env.DB_LINK).then(
        (e)=>{
            console.log('connected')
        }
    )
}