// import axios from "axios";
// import { useEffect } from "react";

// const LOGIN_URL = "http://35.247.142.238:80/api/v1/users";

// const Loagin = () => {
//   const {setAuth} = useContext(AuthContext);
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setuser] = useState("");
//   const [pwd, setpwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [succes, setSucces] = useState(false);

//   // useEffect
//   useEffect(()=>{
//     userRef.current.focus();
//   }, []);
//   useEffect(()=>{
//     setErrMsg('');
//   }, [user, pwd]);


//   // function
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(LOGIN_URL, 
//         JSON.stringify({user, pwd}),
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           withCredentials: true,
//         }
//         );
//         const accessToken = response?.data?.accessToken;
//         const roles = response?.data?.roles;
//         setAuth({accessToken, roles, user, pwd});
//         setuser('');
//         setpwd('') ;
//         setSucces(true);
//     } catch (error) {
//       if (!err?.response){
//         setErrMsg('no Server Responese')
//       } else if(err?.response?.status === 400){
//         setErrMsg('Missing Username or Password')
//       } else if(err?.response?.status === 401){
//         setErrMsg('Uneuthorization')
//       } else{
//         setErrMsg('Unknown Error')
//       }
//       errRef.current.focus();
//     }
//   }
//   return (
//     <div>Loagin</div>
//   )
// }

// export default Loagin