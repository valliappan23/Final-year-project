const express = require("express");
const cors=require("cors");
const bodyparsers=require("body-parser");

const mongodb=require("mongodb").MongoClient;
mongodb.connect("mongodb+srv://admin_1:admin_1@cluster0.5rji7.mongodb.net/test",(error,result)=>{
    if(error){
        console.log("Database not connected");
        console.log(error);
    }
    else{
        db = result.db("Retail_Relier");
        console.log("Database Connected");
    }
});

const app = express();

app.use(cors());
app.use(bodyparsers.json());

app.use((req,res,next)=>{ //middleware common for all the paths

    console.log("Middleware 1 Retail Relier web site");
    next();
});

app.use("/home",(req,res,next)=>{ //middleware common for home page

    console.log("home page middle ware");
    next();
});

function verifyUser(req,res,next){

    console.log("user verified");
    next();
}

app.get("/",(req,res)=>{
    console.log("Index page");
    res.send("<h1>Welcome to Express</h1>");
});


app.get("/home",verifyUser,(req,res)=>{
    console.log("home page");
    res.json("Welcome to hommepage");
});

app.post("/register",(req,res)=>{
    req.body._id=new Date().getTime();
    console.log(req.body)
    db.collection("register_users").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("Error in inserting document");
        }
        else{
            res.json("User Registered successfully !!!");
        }
    })

    
});

app.post("/addProduct",(req,res)=>{
    req.body._id=new Date().getTime();
    console.log(req.body)
    db.collection("add_product").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in inserting document");
        }
        else{
            res.json("Product Added successfully !!!");
        }
    })
});


app.post("/addShop",(req,res)=>{
    req.body._id=new Date().getTime();
    console.log(req.body)
    db.collection("add_shop").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in inserting document");
        }
        else{
            res.json("Shop Added successfully !!!");
        }
    })
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    db.collection("register_users").find(req.body, {projection: {_id:1,uname:1,cname:1,cdesignation:1,uid:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });
    
});

app.get("/DashboardData/:DashboardId",(req,res)=>{
    console.log(req.params.DashboardId);

    db.collection("register_users").find({_id : Number(req.params.DashboardId)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });

});

// app.get("/allStocks",(req,res)=>{

//     db.collection("add_product").find(null,{projection: {pbill:0}}).toArray((error,data)=>{
//         if(error){
//             res.status(403).json("error in finidng document"); 

//         }
//         else{
//             res.json(data);   
//         }
//     });


// });


app.get("/newallStocks/:off",(req,res)=>{
    let a=req.params.off;
    console.log(a);
    if (req.params.off === a) {
        db.collection("add_product").find({ pc: a }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }else{

        db.collection("add_product").find(null, {projection: {pbill:0}}).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})



// app.get("/allUsers",(req,res)=>{

//     db.collection("register_users").find(req.body, {projection: {upassword:0}}).toArray((error,data)=>{
//         if(error){
//             res.status(403).json("error in finidng document"); 

//         }
//         else{
//             res.json(data);   
//         }
//     });


// });

app.get("/newallUsers/:off",(req,res)=>{
    let a=req.params.off;
    console.log(a);
    if (req.params.off === a) {
        db.collection("register_users").find({ cname: a }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }else{

        db.collection("register_users").find(req.body, {projection: {upassword:0}}).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})





app.get("/newallUsers1/:off",(req,res)=>{
    console.log(req.params.off);
    let a=req.params.off;
    console.log("main url : ",typeof(a));
    // console.log(typeof(a))
    let b=a.split("-",2);
    console.log(b);
    console.log(typeof(b));
    let b1=b[1]
    let b11=b1.toLocaleLowerCase();
    console.log("designation : ",b1);
    console.log(typeof(b1));
    let b2=b[0]
    console.log("company name : ",b2);
    console.log(typeof(b2));
    
    if (b1 != 'Manager') {
        db.collection("register_users").find({ cname: b2 }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }
    else if (b1==='Manager'){

        db.collection("register_users").find({ cname: b2, cdesignation: 'Employee' }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });


    }
    else{

        db.collection("register_users").find(req.body, {projection: {upassword:0}}).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})


















    


// app.get("/FindallStocks",(req,res)=>{

//     db.collection("add_product").find(null,{projection: {pbill:0}}).toArray((error,data)=>{
//         if(error){
//             res.status(403).json("error in finidng document"); 

//         }
//         else{
//             res.json(data);   
//         }
//     });


// });



app.get("/newFindallStocks/:off",(req,res)=>{
    let a=req.params.off;
    console.log(a);
    if (req.params.off === a) {
        db.collection("add_product").find({ pc: a }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }else{

        db.collection("add_product").find(null, {projection: {pbill:0}}).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})



app.get("/newFindallStocks1",(req,res)=>{
    db.collection("add_product").find(null,{projection: {pbill:0}}).toArray((error,data)=>{
                if(error){
                    res.status(403).json("error in finidng document"); 
        
                }
                else{
                    res.json(data);   
                }
            });
})



app.get("/store_details",(req,res)=>{

    db.collection("add_shop").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });


});


app.get("/shop_id_CHECK/:shopId",(req,res)=>{

    console.log(req.params.shopId);
    db.collection("add_shop").find({sid : req.params.shopId},{projection: {_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });

});















app.get("/store_details",(req,res)=>{

    db.collection("add_shop").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });


});


app.get("/shop_id_CHECK/:shopId",(req,res)=>{

    console.log(req.params.shopId);
    db.collection("add_shop").find({sid : req.params.shopId},{projection: {_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });

});






app.get("/prod_id_CHECK/:prodId",(req,res)=>{
    console.log(req.params.prodId);
    db.collection("add_product").find({Pid : req.params.prodId},{projection: {_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });

});




app.get("/user_id_CHECK/:userId",(req,res)=>{

    console.log(req.params.userId);
    db.collection("register_users").find({uid : req.params.userId}, {projection: {_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });


});



app.get("/getuser/:userssid",(req,res)=>{

    console.log(req.params.userssid);
    // res.json([]);
    db.collection("register_users").find({_id : Number(req.params.userssid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });


});



app.get("/getshop/:storeid",(req,res)=>{

    console.log(req.params.storeid);
    // res.json([]);
    db.collection("add_shop").find({_id : Number(req.params.storeid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });


});


app.get("/getproduct/:prodid",(req,res)=>{

    console.log(req.params.prodid);
    // res.json([]);
    db.collection("add_product").find({_id : Number(req.params.prodid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });


});


app.put("/updateUser",(req,res)=>{
    console.log(req.body);
    var condition={_id:req.body._id};
    var newValues={$set:
        {
        uname:req.body.uname,
        cname:req.body.cname,
        uaddr:req.body.uaddr,
        // uid:req.body.uid,
        udob:req.body.udob,
        // udoj:req.body.doj,
        uemail:req.body.uemail,
        uphone:req.body.uphone,
        cdesignation:req.body.cdesignation,
        cgender:req.body.cgender,
        upassword:req.body.upassword,
        udoj:req.body.udoj,
        usalary:req.body.usalary
    }};
    db.collection("register_users").updateOne(condition,newValues,(error,data)=>{
        if(error){
            res.status(403).json("error in updating document"); 

        }
        else{
            res.json("User Data Updated Successfully"); 
        }
    });
    
});

app.put("/updateShop",(req,res)=>{
    console.log(req.body);
    var condition={_id:req.body._id};
    var newValues={$set:
        {
            sname:req.body.sname,
            // sid:req.body.sid,
            saddr:req.body.saddr,
            sphone:req.body.sphone,
            sownership:req.body.sownership,
            semail:req.body.semail,
            span:req.body.span,
            stype:req.body.stype
        }};
    db.collection("add_shop").updateOne(condition,newValues,(error,data)=>{

        if(error){
            res.status(403).json("error in updating document"); 

        }
        else{
            res.json("Shop Data Updated Successfully"); 
        }

    });
    
});

app.put("/updateProduct",(req,res)=>{
    console.log(req.body);
    var condition={_id:req.body._id};
    var newValues={$set:
        {
            pname:req.body.pname,
            pprice:req.body.pprice,
            pqty:req.body.pqty,
            pselling:req.body.pselling,
            pc:req.body.pc,
            udoj:req.body.udoj,
            pbuying:req.body.pbuying,
            pdob:req.body.pdob,
            pbill:req.body.pbill,
            Pid:req.body.pid
        }};
        db.collection("add_product").updateOne(condition,newValues,(error,data)=>{

            if(error){
                res.status(403).json("error in updating document"); 
    
            }
            else{
                console.log("Data updated")
                res.json("Product Data Updated Successfully");   
            }

        });
    
});


app.get("/ViewUserData/:ViewId",(req,res)=>{
    console.log(req.params.ViewId);

    db.collection("register_users").find({_id : Number(req.params.ViewId)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });

});



app.get("/ViewProductData/:prodId",(req,res)=>{
    console.log(req.params.prodId);

    db.collection("add_product").find({_id : Number(req.params.prodId)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });

});


app.get("/ViewStoreData/:storeId",(req,res)=>{
    console.log(req.params.sId);

    db.collection("add_shop").find({_id : Number(req.params.storeId)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });

});



app.delete("/DeleteUser/:usrid",(req,res)=>{
    console.log(req.params.usrid);
    db.collection("register_users").deleteOne({ _id: Number(req.params.usrid) }, (error, data) => {
        res.json("User Deleted Successfully");
    });

    
    
});

app.delete("/DeleteProduct/:porid",(req,res)=>{
    console.log(req.params.porid);
    db.collection("add_product").deleteOne({ _id: Number(req.params.porid) }, (error, data) => {
        res.json("shop Deleted Successfully");
    });
    
    
});

app.delete("/DeleteShop/:sopid",(req,res)=>{
    console.log(req.params.sopid);
    db.collection("add_shop").deleteOne({ _id: Number(req.params.sopid) }, (error, data) => {
        res.json("shop Deleted Successfully");
    });
   
    
});


app.get("/SearchProduct/:spod?",(req,res)=>{
    console.log(req.params.spod);
    if(req.params.spod!=undefined){
        var search = new RegExp(req.params.spod,"i");
        var condition={pname : search};
    }
    else{
        var condition=null;
    }
    
    db.collection("add_product").find(condition).toArray((error,data)=>{
        res.json(data);
    })
})


app.get("/SearchUser/:susr?/:off",(req,res)=>{
    console.log("username : " +req.params.susr);
    console.log("office : " +req.params.off);
    if(req.params.susr!=undefined){
        var search = new RegExp(req.params.susr,"i");
        var condition={uname : search};
    }
    else{
                
        var condition=null && {pname : a};
    }
    
    db.collection("register_users").find(condition).toArray((error,data)=>{
        res.json(data);
    })
})




app.get("/SearchShop/:ssop?",(req,res)=>{
    console.log(req.params.ssop);
    if(req.params.ssop!=undefined){
        var search = new RegExp(req.params.ssop,"i");
        var condition={sname : search};
    } 

    else{
        var condition=null;
    }


    db.collection("add_shop").find(condition).toArray((error,data)=>{
        res.json(data);
    })
})



app.put("/addAttendance", (req, res) => {
    // console.log(req.params.data);

    console.log(req.body);
    let a = req.body.ID;
    console.log(a);
    let b = req.body.data;
    console.log(b);
    var search = new RegExp(a, "i");
    var searchCondition1 = { uid: search };


    db.collection("register_users").find(searchCondition1).toArray((error, data) => {
        console.log(data);
        // res.json(data);

        var condition = { uid: a };
        var newValues = {
        $set: {
            
            uattain: b
        }
    }

    db.collection("register_users").updateOne(condition, newValues, (error, data) => {
        if (error) {
            console.log("Can Not Able To update The Data in the DataBase");
            res.status(403).json("Error in Updating the Doc")
        }
        else {
            res.json("User Data Updated Successfully.!!!!!!");
            console.log("Data found");
        }
    })
    
    });






})


app.get("/newallBills",(req,res)=>{
    
    console.log(req.body);
    // if (req.params.off === a) {
    //     db.collection("total_bills").find({ company: a }).toArray((error, data) => {
    //         if (error) {
    //             console.log("Can Not Able To find The Data in the DataBase");
    //             res.status(403).json("Error in Finding the Doc")
    //         }
    //         else {
    //             res.json(data)
    //         }
    //     });
    // }else{

    //     db.collection("total_bills").find(null).toArray((error,data)=>{
    //                 if(error){
    //                     res.status(403).json("error in finidng document"); 
            
    //                 }
    //                 else{
    //                     res.json(data);   
    //                 }
    //             });
        
    // }
})

app.put("/resetAttendance", (req, res) => {
    // console.log(req.params.data);

    console.log(req.body);
    let a = req.body.ID;
    console.log(a);
    let b = req.body.data;
    console.log(b);
    var search = new RegExp(a, "i");
    var searchCondition1 = { uid: search };


    db.collection("register_users").find(searchCondition1).toArray((error, data) => {
        console.log(data);
        // res.json(data);

        var condition = { uid: a };
        var newValues = {
        $set: {
            
            uattain: b
        }
    }

    db.collection("register_users").updateOne(condition, newValues, (error, data) => {
        if (error) {
            console.log("Can Not Able To update The Data in the DataBase");
            res.status(403).json("Error in Updating the Doc")
        }
        else {
            res.json("User Data Updated Successfully.!!!!!!");
        }
    })
    
    });


});


app.put("/addBill", (req, res) => {
    req.body._id=new Date().getTime();
    console.log(req.body)
    db.collection("bill").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in inserting document");
        }
        else{
            res.json("Product Added successfully !!!");
        }
    })
});


app.put("/totalCost", (req, res) => {
    req.body._id=new Date().getTime();
    req.body.date=new Date().getDate();
    req.body.day=new Date().getDay();
    req.body.month=new Date().getMonth();
    req.body.year=new Date().getFullYear();
    console.log(req.body)
    db.collection("total_bills").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in inserting document");
        }
        else{
            res.json("Product Added successfully !!!");
        }
    })
});

// app.get("/allBills",(req,res)=>{

//     db.collection("total_bills").find(null).toArray((error,data)=>{
//         if(error){
//             res.status(403).json("error in finidng document"); 

//         }
//         else{
//             res.json(data);   
//         }
//     });


// });


app.get("/newallBills/:off",(req,res)=>{
    let a=req.params.off;
    console.log(a);
    if (req.params.off === a) {
        db.collection("total_bills").find({ company: a }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }else{

        db.collection("total_bills").find(null).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})

app.get("/par_bills/:pbill",(req,res)=>{
    console.log(req.params.pbill);

    db.collection("bill").find({billNo : String(req.params.pbill)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finidng document"); 

        }
        else{
            res.json(data);   
        }
    });
})


app.put("/updatingStock", (req, res) => {
    // console.log(req.params.data);

    console.log(req.body);
    let a = req.body.prodname;
    console.log(a);
    let b = req.body.newqty;
    console.log(b);
    var search = new RegExp(a, "i");
    var searchCondition1 = { pname: search };


    db.collection("add_product").find(searchCondition1).toArray((error, data) => {
        console.log(data);
        // res.json(data);

        var condition = { pname: a };
        var newValues = {
        $set: {
            
            pqty: b
        }
    }

    db.collection("add_product").updateOne(condition, newValues, (error, data) => {
        if (error) {
            console.log("Can Not Able To update The Data in the DataBase");
            res.status(403).json("Error in Updating the Doc")
        }
        else {
            res.json("User Data Updated Successfully.!!!!!!");
            console.log("Data found");
        }
    })
    
    });




});



app.get("/Searchprods/:suprod?",(req,res)=>{
    console.log("product Name : " +req.params.suprod);
    if(req.params.suprod!=undefined){
        var search = new RegExp(req.params.suprod,"i");
        var condition={pname : search};
    }
    else{
        var condition=null;
    }
    
    db.collection("add_product").find(condition).toArray((error,data)=>{
        res.json(data);
    })
});



app.get("/Searchbills/:subill?",(req,res)=>{
    console.log("bill no : " +req.params.subill);
    if(req.params.subill!=undefined){
        var search = new RegExp(req.params.subill,"i");
        var condition={billNo : search};
    }
    else{
        var condition=null;
    }
    
    db.collection("total_bills").find(condition).toArray((error,data)=>{
        res.json(data);
    })
});


// app.get("/Searchprods1/:supos?",(req,res)=>{
//     console.log("product : " +req.params.supos);
    
//     if(req.params.supos!=undefined){
//         var search = new RegExp(req.params.supos,"i");
//         var condition={product : search};
//         var condition1={billNo : b};
//         var condition2={condition , condition1}
//     }
//     else{
//         var condition=null;
//     }
    
//     db.collection("bill").find(condition).toArray((error,data)=>{
//         res.json(data);
//     })
// });




app.get("/SearchP/:suprod?",(req,res)=>{
    console.log("product Name : " +req.params.suprod);
    if(req.params.suprod!=undefined){
        var search = new RegExp(req.params.suprod,"i");
        var condition={pname : search};
    }
    else{
        var condition=null;
    }
    
    db.collection("add_product").find(condition).toArray((error,data)=>{
        res.json(data);
    })
});


app.put("/newRequest", (req, res) => {
    req.body._id=new Date().getTime();
    req.body.date=new Date().getDate();
    req.body.day=new Date().getDay();
    req.body.month=new Date().getMonth();
    req.body.year=new Date().getFullYear();
   
    console.log(req.body)

    db.collection("message").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in inserting document");
        }
        else{
            res.json("Product Added successfully !!!");
        }
    })
    
});


app.delete("/Deletebill/:billid",(req,res)=>{
    console.log(req.params.billid);
    db.collection("bill").deleteMany({ billNo: String(req.params.billid) }, (error, data) => {
        res.json("Bill Deleted Successfully");
    },(error)=>{
        console.log(error);
    });
    

    
    
});



app.delete("/DeleteTbill/:billid",(req,res)=>{
    db.collection("total_bills").deleteOne({ billNo: String(req.params.billid) }, (error, data) => {
        res.json("Bill Deleted Successfully");
    },(error)=>{
        console.log(error);
    });
})


app.get("/requested/:off",(req,res)=>{
    let a=req.params.off;
    console.log(a);
    if (req.params.off === a) {
        db.collection("message").find({ foffice: a }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }else{

        db.collection("message").find(null).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})

app.get("/inbox/:off",(req,res)=>{
    let a=req.params.off;
    console.log(a);
    if (req.params.off === a) {
        db.collection("message").find({ prodcomp: a }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }else{

        db.collection("message").find(null).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})


app.put("/ac", (req, res) => {
    req.body._id=new Date().getTime();
    req.body.date=new Date().getDate();
    req.body.day=new Date().getDay();
    req.body.month=new Date().getMonth();
    req.body.year=new Date().getFullYear();
   
    console.log(req.body)

    db.collection("status").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in inserting document");
        }
        else{
            res.json("Product Added successfully !!!");
        }
    })
    
});

app.put("/de", (req, res) => {
    req.body._id=new Date().getTime();
    req.body.date=new Date().getDate();
    req.body.day=new Date().getDay();
    req.body.month=new Date().getMonth();
    req.body.year=new Date().getFullYear();
   
    console.log(req.body)

    db.collection("status").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in inserting document");
        }
        else{
            res.json("Product Added successfully !!!");
        }
    })
    
});


app.get("/status/:off",(req,res)=>{
    let a=req.params.off;
    console.log(a);
    if (req.params.off === a) {
        db.collection("status").find({ roffice: a }).toArray((error, data) => {
            if (error) {
                console.log("Can Not Able To find The Data in the DataBase");
                res.status(403).json("Error in Finding the Doc")
            }
            else {
                res.json(data)
            }
        });
    }else{

        db.collection("status").find(null).toArray((error,data)=>{
                    if(error){
                        res.status(403).json("error in finidng document"); 
            
                    }
                    else{
                        res.json(data);   
                    }
                });
        
    }
})



module.exports = app;