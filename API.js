const express=require('express')
require('../dbconfig/dbConnect')
const artistModel=require('../Model/Model')
const userModel=require('../Model/userModel')
const cors=require('cors')
//cors is used to connect frontend and backend simaltenously

const ex=express();

ex.use(express.json());
ex.use(cors())
ex.post('/artistRegister',async(req,resp)=>{
    const artist=new artistModel(req.body);
    const result=await artist.save()
    resp.send(result)
})

ex.post('/userRegister',async(req,resp)=>{
    const user=new userModel(req.body);
    const result=await user.save()
    resp.send(result)
})


ex.get("/artistLogin",async (req,resp)=>{
    await artistModel.findOne({email: req.body.Email}, (err, result) => {
        if(err){

            console.log("result not exists" + err);
            console.log(err);
        }else{

            if(result){
                 console.log("result exists");
                // alert("hi")
            }
        }

    });

    console.log(result);
    // resp.send(result);
});

// nrew code
// ex.post("/artistLogin", (req,resp)=>{
//     const{Email, Password} = req.body

//      artistModel.findOne({email: req.body.Email}, (err, result) => {
//         if(result){
//             if(Password === user.Password){
//                 req.send({message: "Login successfully", result:result})
//             }
//             else{
//                 resp.send({message : "Password didn't match"})
//             }
//         }else{
//             resp.send({message: "User not registered"})

           
//         }

//     });

// });


ex.get("/userLogin",async (req,resp)=>{
    await artistModel.findOne({email: req.body.Email}, (err, result) => {
        if(err){

            console.log("result not exists" + err);
            console.log(err);
        }else{

            if(result){
                console.log("result exists");
                
            }
        }

    });

    console.log(result);
    // resp.send(result);
});

//ABhay 

// ex.post("/artistLogin", (req, res) => {
//     const { Email, Password } = req.body
//     Artist.findOne({ Email: Email }, (err, artist) => {
//         if (artist) {
//             if (Password === artist.Password) {
//                 // res.send({ message: "login successful", artist: artist })
//                 alert("Hii")
//             } else {
//                 // res.send({ message: "password didn't match" })
//                 alert("chal be")
//             }

//         }
//         else {
//             // res.send({ message: "user not registered" })
//             alert("ho ra")
//         }
//     })

// })c

// end

// ex.get("/userLogin",async (req,resp)=>{
//     const result=await userModel.find()
//     console.log(result);
//     resp.send(result);
// })



ex.listen(4000)