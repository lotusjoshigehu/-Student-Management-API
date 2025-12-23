// routes is making more request
const express=require("express")
const studentcontroller=require("../controllers/studentcontrollers")

const router=express.Router()

router.post("/students",studentcontroller.addentries)
router.get("/students",studentcontroller.getentries)
router.get("/students/:id",studentcontroller.getentriesbyid)
router.put("/students/:id",studentcontroller.updatentries)
router.delete("/students/:id",studentcontroller.deletentries)
module.exports=router