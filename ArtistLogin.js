// import React from 'react'
// import { Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TableRow, TableCell, Table,Button,Box } from '@mui/material'
// import {useState,useEffect} from 'react'


// function ArtistLogin() {

//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [data,setData]=useState(null)
    
//       useEffect(()=>{
//           fetch("http://localhost:4000/artistLogin",
//           {
//               method:'GET'
//           }).then((response)=>response.json())
//           .then((actualData)=>{
//               console.log(actualData)
//               setData(actualData)
//               console.log("Data:",data);
//           })
//           .catch((err)=>console.log(err))
//       },[])

//   return (
//     <div class="card">
      
//       <h1><b>ARTIST LOGIN</b></h1>
//              <Box sx={{ width:'500px',marginTop:'50px',marginLeft:'400px',marginRight:'200px',border:'5px solid grey',backgroundColor:'lightgrey'}}>
//             <Table >
                
//             <br/><br/>
//                 <TableRow>
//                 <TableCell><Typography variant="h6" >Email ID :</Typography></TableCell>
//                 <TableCell> <TextField id="outlined-basic" label="Enter Email ID" variant="outlined"></TextField></TableCell>
//                 <br />  <br />
//                 </TableRow>

//                 <TableRow>
//                 <TableCell> <Typography variant="h6" >Password :</Typography></TableCell>
//                 <TableCell><TextField id="outlined-basic" label="Enter Password" variant="outlined"></TextField></TableCell>
//                </TableRow>
//                <br />  

//                {
//       data && data.map(
//           (obj)=>{
//              return  <TableRow>
//                   <TableCell>{obj.email}</TableCell>
//                   <TableCell>{obj.password}</TableCell>
                 
//               </TableRow>
//           }
//       )
//       }


             
                
            
//             </Table>
//             <Button variant="contained" >LOGIN</Button>
//             <br />  <br /> 

//             </Box>

//     </div>
//   )
// }

// export default ArtistLogin



// import "./Login.css"




import { useState } from "react"
import axios from "axios"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const artistData = {
  Email: "",
  Password: "",
}

const ArtistLogin = () => {

  const [artist, setArtist] = useState(artistData)

  const handleChange = (e) => {
    
    console.log("handle change called 1" + e.target.value );
    
    const { name, value } = e.target;
    
    setArtist({...artist, [name]: value})
    console.log("handle change called 2" + JSON.stringify(artist));
       
  }

  const isEmailValid = (email) => {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
  
    return emailRegexp.test(email)
  }

  
  const login = (e) => {
    e.preventDefault()
    // console.log("Hii");
    // validation

    console.log("my email validation" + isEmailValid(artist.Email));
    if(isEmailValid(artist.Email)){
      axios.get("http://localhost:4000/artistLogin", artist)
        .then(res => {
          // alert(res.data)
          console.log("response" + JSON.stringify(res.data))
          // if (artist.Email && artist.Password) {
          //   sessionStorage.setItem("artist",
          //     JSON.stringify(artist.Email))
          // }
        })

    }else{
      console.log("email invalid");
    }


  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          borderRadius="5%"
          sx={{
            marginTop: 8,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "white",
            border: '3px solid black'

          }}
        >


          {/* Avatar commented */}
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}



          <Typography component="h1" variant="h5">
           <b> Artist Login</b>
          </Typography>
          <Box component="form" onSubmit={(e) => login(e)} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required 
              fullWidth
              id="Email"
              label="Email Address"
              name="Email"
              autoComplete="Email"
              autoFocus
              // value={artist.Email}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="Password"
              id="Password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e)}
              // value={artist.Password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={(e) => login(e)}
              //  disabled={!artist.Email || !artist.Password}
            >
              Sign In
            </Button>
            <Grid container sx={{ mt: 2, mb: 2, p: 1 }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"  Forgot password?"}
                </Link>
              </Grid>
              <Grid item  >
                <Link href="/artregister" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>

  
  )
}

export default ArtistLogin;





// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import { useState } from 'react'
// import PropTypes from 'prop-types'
// import { useForm } from "react-hook-form";

// const theme = createTheme();

// export default function ArtistLogin() {

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     var Email = data.get('Email');
//     var Password = data.get('Password');
   
  
   
    

    
   
    
    
//     const regex =/^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,4}$/;
//     if (!regex.test(Email)) {
//      alert("Invalid Email");
//      valid=false;
//     }
//     const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     if(!passwordRegEx.test(Password)){
//       alert("Weak Password");
//       valid = false;
//     }

  
  
//     if(valid){
  
  
//   let result = await fetch("http://localhost:4000/artistRegister",{
//     method:'GET',
//     body:JSON.stringify({Email,Password}),
//     headers:{
//       'Content-type':'application/json'
//     }
//   })
//   result = await result.json()
//   console.log(result);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//         <h1>ARTIST REGISTRATION</h1>
//       <Grid container component="main" sx={{ height: '100vh',borderRadius:'10px' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             borderRadius:'10px'
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ borderRadius:'10px'}}>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               borderRadius:'10px'
              
              
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Register Now!
//             </Typography>
//             <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 0.5,borderRadius:'10px' }}>

//             <TextField
//                 margin="normal"
//                 required
//                 id="Email"
//                 label="Email Address"
//                 name="Email"
//                 autoComplete="Email"
                
//                 autoFocus
//               />
            
              
               
       
//               <TextField
//                 margin="normal"
//                 required
                
//                 name="Password"
//                 label="Password"
//                 type="password"
//                 id="Password"
               
//                 autoComplete="current-password"
//               />
             
              
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
            
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }


