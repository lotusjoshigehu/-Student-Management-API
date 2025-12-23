//controllers is used to end entriees
const dbconnection=require("../utils/dbconnection")
const addentries=(req,res)=>
{
    const {id,name,email,age}=req.body
    const insq=`insert into students(id,name,email,age)values(?,?,?,?)`
    dbconnection.execute(insq,[id,name,email,age],(err)=>
    {
        if(err)
        {
            console.log(err.message)
            return
        }
        console.log("connection happened")
        return res.status(200).send({
           message:"data inserted suceesfully"
        })
    })

}

const getentries=(req,res)=>
{
    const getquery=`select * from students`
    dbconnection.execute(getquery,(err,result)=>
    {
        if(err)
        {
            console.log(err.message)
            return
        }
        return res.status(200).send(result)
    })

}

const getentriesbyid=(req,res)=>
{
    const {id}=req.params
    const getquerybyid=`select * from students where id = ?`
    dbconnection.execute(getquerybyid,[id],(err,result)=>
    {
        if(err)
        {
            console.log(err.message)
            return
        }
        return res.status(200).send(result)
    })

}

const updatentries=(req,res)=>
{
    const {id}=req.params
    const {name,email,age}=req.body
    const uquery=`update students set name=?,email=?,age=? where id=?`
    dbconnection.execute(uquery,[name,email,age,id],(err)=>
    {
        if(err)
        {
           console.log(err.message)
           return
        }
        console.log("update query sucessfully")
        return res.status(200).send({
            message:"update value sucessfully"
        })
    })

}

const deletentries=(req,res)=>
{
    const {id}=req.params
    const dquery=`delete from students where id=?`
    dbconnection.execute(dquery,[id],(err)=>
    {
        if(err)
        {
            console.log(err.message)
            return
        }
        console.log("deleted row successfully")
        res.status(200).send("Row have been deleted sucessfully")

    })
}

module.exports=
{
    addentries,
    getentries,
    updatentries,
    deletentries,
    getentriesbyid

}