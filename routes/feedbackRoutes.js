import {
    createAdmin,
    creatAlumni,
    creatStudent,
    getAllUsers,
  } from "../controller/usercontroller.js";
  
  import {createReview,getAllReviews}from '../controller/reviewController.js'
  
  import {createCompany,getCompanies} from '../controller/companyController.js'
  import { likeReviews } from "../controller/likecontroller.js";
  import express from "express";
  import { isAdmin } from "../middleware/middleware.js";
const router = express.Router()

router.post('/admin/create',createAdmin)
router.post('/alumni/create',creatAlumni)
router.post('/student/create',creatStudent)
router.post('/company/create',createCompany)
router.post('/review/create',createReview)
router.post('/likes/create',likeReviews)

router.get('/user/get',getAllUsers)
router.get('/company/get',getCompanies)
router.get('/review/get',getAllReviews)

export default router;