import companyModel from "../models/company.js";

export const createCompany = async (req,res)=> {
    try {
         const {name, location, industry, email}=req.body;

         const companyobj = new companyModel({
         name,
         location,
         industry,
         email,
        
    })
   const saveCompanyobj = await companyobj.save();

   res.json({
    saveCompanyobj,
      message:"company created succesfully"
   })
    } catch (error) {
        error:"error occured"
    }
}



export const getCompanies = async(req,res)=>{
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