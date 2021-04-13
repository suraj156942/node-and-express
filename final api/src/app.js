const express=require('express');
const bodyparser=require('body-parser');
const mysql=require('mysql');
const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//mysql
var pool = mysql.createPool({

  host: "localhost",
  user: "root",
  password: "",
  database: "node_product"
});
app.get("",(req,res)=>{
	pool.getConnection((err,connection)=>{
		if(err) throw err
			console.log(`connected as ${connection.threadId}`);
		 var sql = "select * from item";
       connection.query(sql, function (err, result) {
      if (!err) 
      {
         res.send(result);
      }else{
      console.log(err);
      }
  });
	})
})

//running
app.listen(5000,()=>{
	console.log("server running");
})