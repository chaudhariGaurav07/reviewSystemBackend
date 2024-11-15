import User from "../models/user.js";


export const createAdmin = async (req,res)=> {
    try {
         const {name, email, password}=req.body;

         const user = new User({
         name,
         email,
         password,
         role: "Admin"
    })
   const saveUser = await user.save();

   res.json({
      saveUser,
      message:"user connected succesfully"
   })
    } catch (error) {
        error:"error occured"
    }
}


export const creatAlumni = async (req,res)=> {
    try {
         const {name, email, password}=req.body;

         const user = new User({
         name,
         email,
         password,
         role: "Alumni"
    })
   const saveUser = await user.save();

   res.json({
      saveUser,
      message:"Allumni connected succesfully"
   })
    } catch (error) {
        error:"error occured"
    }
}

export const creatStudent = async (req,res)=> {
    try {
         const {name, email, password}=req.body;

         const user = new User({
         name,
         email,
         password,
         role: "Student"
    })
   const saveUser = await user.save();

   res.json({
      saveUser,
      message:"student connected succesfully"
   })
    } catch (error) {
        error:"error occured"
    }
}




export const getAllUsers = async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }