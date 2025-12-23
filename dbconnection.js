const mysql=require("mysql2")


//writting credtionals on it 
const connection=mysql.createConnection({ 
    host:"localhost",
    user:"root",
    password:"lotus",
    database:"testdb"

})

connection.connect((err)=>
{
    if (err)
    {
        console.log("error")
        return
    }
    console.log("Connection Created")
})

const query=`create table if not exists students(
id int auto_increment primary key,
name varchar(255),
email varchar(20) unique,
age int
)`

connection.execute(query,(err)=>{
    if(err)
    {
        console.log("error occured")
        connection.end()
        return
    }
    console.log("query executed")
})

module.exports=connection