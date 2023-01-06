import express from "express";
const app = express();

import bp from "body-parser";

import ejs from "ejs";
const {urlencoded} = bp;
app.use(urlencoded({extended : true}));
app.use(express.static("public"));


app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("index");
});
app.get("/submit",function(req,res){
    res.render("result");
});
app.post("/submit",function(req,res){
    var number = req.body.nosub;
    let s1 = req.body.s1;
    if(s1>=90){
        s1 = 10; 
    }
    else if(s1 >=80 && s1 < 90){
        s1 = 9;
    }
    else if(s1 >=70 && s1 < 80){
        s1 = 8;
    }
    else if(s1 >=60 && s1 < 70){
        s1 = 7;
    }
    else if(s1 >=50 && s1 < 60){
        s1 = 6;
    }
    else{
        s1 = 0;
    }
    let s2 = req.body.s2;
    if(s2>=90){
        s2 = 10;
    }
    else if(s2 >=80 && s2 < 90){
        s2 = 9;
    }
    else if(s2 >=70 && s2 < 80){
        s2 = 8;
    }
    else if(s2 >=60 && s2 < 70){
        s2 = 7;
    }
    else if(s2 >=50 && s2 < 60){
        s2 = 6;
    }
    else{
        s2 = 0;
    }
    let s3 = req.body.s3;
    if(s3>=90){
        s3 = 10;
    }
    else if(s3 >=80 && s3 < 90){
        s3 = 9;
    }
    else if(s3 >=70 && s3 < 80){
        s3 = 8;
    }
    else if(s3 >=60 && s3 < 70){
        s3 = 7;
    }
    else if(s3 >=50 && s3 < 60){
        s3 = 6;
    }
    else{
        s3 = 0;
    }
    let s4 = req.body.s4;
    if(s4>=90){
        s4 = 10;
    }
    else if(s4 >=80 && s4 < 90){
        s4 = 9;
    }
    else if(s4 >=70 && s4 < 80){
        s4 = 8;
    }
    else if(s4 >=60 && s4 < 70){
        s4 = 7;
    }
    else if(s4 >=50 && s4 < 60){
        s4 = 6;
    }
    else{
        s4 = 0;
    }
    let s5 = req.body.s5;
    if(s5>=90){
        s5 = 10;
    }
    else if(s5 >=80 && s5 < 90){
        s5 = 9;
    }
    else if(s5 >=70 && s5 < 80){
        s5 = 8;
    }
    else if(s5 >=60 && s5 < 70){
        s5 = 7;
    }
    else if(s5 >=50 && s5 < 60){
        s5 = 6;
    }
    else{
        s5 = 0;
    }
    let s6 = req.body.s6;
    if(s6>=90){
        s6 = 10;
    }
    else if(s6 >=80 && s6 < 90){
        s6 = 9;
    }
    else if(s6 >=70 && s6 < 80){
        s6 = 8;
    }
    else if(s6 >=60 && s6 < 70){
        s6 = 7;
    }
    else if(s6 >=50 && s6 < 60){
        s6 = 6;
    }
    else{
        s6 = 0;
    }
    let s7 = req.body.s7;
    if(s7>=90){
        s7 = 10;
    }
    else if(s7 >=80 && s7 < 90){
        s7 = 9;
    }
    else if(s7 >=70 && s7 < 80){
        s7 = 8;
    }
    else if(s7 >=60 && s7 < 70){
        s7 = 7;
    }
    else if(s7 >=50 && s7 < 60){
        s7 = 6;
    }
    else{
        s7 = 0;
    }
    let s8 = req.body.s8;
    if(s8>=90){
        s8 = 10;
    }
    else if(s8 >=80 && s8 < 90){
        s8 = 9;
    }
    else if(s8 >=70 && s8 < 80){
        s8 = 8;
    }
    else if(s8 >=60 && s8 < 70){
        s8 = 7;
    }
    else if(s8 >=50 && s8 < 60){
        s8 = 6;
    }
    else{
        s8 = 0;
    }
    let s9 = req.body.s9;
    if(s9>=90){
        s9 = 10;
    }
    else if(s9 >=80 && s9 < 90){
        s9 = 9;
    }
    else if(s9 >=70 && s9 < 80){
        s9 = 8;
    }
    else if(s9 >=60 && s9 < 70){
        s9 = 7;
    }
    else if(s9 >=50 && s9 < 60){
        s9 = 6;
    }
    else{
        s9 = 0;
    }
    console.log(s1+" "+s2+" "+s3);
    let total = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9;
    total = total/9;
    console.log(total);
        res.render("result",{total : total});
});

app.listen(9000,function(req,res){
    console.log("Running successfully at localhost:4343")
});