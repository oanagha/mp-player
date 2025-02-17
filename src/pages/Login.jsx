import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { loginApi } from '../service/allapis'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [user,setUser]=useState({
        email:"",password:""
    })


      const nav=useNavigate()
     
    const handleLogin=async()=>{
        console.log(user);

        const {email,password}=user
        if(!email || !password){
            toast.warning("Enter Valid Inputs!!")
        }
        else{
            const result=await loginApi(email,password)
            if(result.status==200){
                if(result.data.length>0){
                           console.log(result.data[0])
                           sessionStorage.setItem('userData',JSON.stringify(result.data[0]))
                    toast.success("Login Successfully!!")
                    nav('/home')
                    setUser ({
                        email:"",password:""
                    })
                }
                else{
                    toast.warning("Invalid Email/password!!")
                   
                }

            } 
            else{
                toast.error("Something Went Wrong!!")
            }
        }
            
    }

 
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <div className='w-50 border shadow  bg-secondary p-5 ' >
            <h1 className='text-center'>LOGIN </h1> 
            <input type="email"  placeholder='Enter Email ID' onChange={(e)=>{setUser({...user,email:e.target.value})}} className='form-control mb-3' />
            <input type="password" name=''  placeholder='Enter Password' id='' onChange={(e)=>{setUser({...user,password:e.target.value})}} className='form-control mb-3' />
            <div className='d-flex justify-content-between'> 
                <button className='btn btn-success' onClick={handleLogin}>login</button>
                <Link to={'/register'}>New User?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login


// import React ,{useState} from 'react'
// import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { loginApi } from '../service/allapis'


// function Login() {


//     const [user,setUser]=useState({
//         email:"",password:""

//     })

//     const handleLogin=async()=>{
//         console.log(user)
//         const {email,password}=user
//         if(! email || !password){
//             toast.warning("enter valid inputs!!")
//         }
//         else{
//             const result=await loginApi(email,password)
//             if(result.status==200){
//                 console.log(result);
                
//                 if(result.data.length>0){
//                     toast.success("Login successfull")

//                 }
//                 else{
//                     toast.warning("Enter Valid email/password")
//                 }

               
//             }
//             else{
//                 toast.warning("SOMETHING WENT WRONG!!")

//             }
//         }
//     }



//   return (
//     <>

//     <div className="d-flex justify-content-center align-item-center p-5 m-4" style={{height:"80vh"}}>

//         <div className="w-75 border shadow bg-light p-5">

//             <h1>Login</h1>
//             <input type="email" className="form-control mb-3" placeholder='Enter Email ID'   onChange={(e) => setUser({ ...user, email: e.target.value })}/>
//             <input type="password" className="form-control mb-3" placeholder='Enter Password'   onChange={(e) => setUser({ ...user, password: e.target.value })}/>
//             <div className="d-flex justify-content-between">

//                 <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                 <Link to={'/reg'}>New User?</Link>

//             </div>




//         </div>
//     </div>
    
    
    
//     </>
//   )
// }

// export default Login