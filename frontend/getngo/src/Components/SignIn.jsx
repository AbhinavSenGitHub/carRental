import React, { useState } from 'react';
import profile from "../assest/profile.png";
import { Link } from "react-router-dom";
// import ser from ""
import { FaGoogle } from 'react-icons/fa';
import axios from "axios";
const SignIn = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  const submit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:1234/api/signin', {
        username: username, password: password, number: number
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="signup-main">
        <div className="container">
          <h2>Sign-Up</h2>
          <p>Happy to see you here!</p>
          <form action="" method="post" className="input-section">
            <div className="profile-div">
              <img src={profile} alt="" />
            </div>
            <div className="input-div">
              <input type="text" name="username" onChange={(e) => { setUsername(e.target.value) }} placeholder='username' />
              <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
              <input type="text" name="number" onChange={(e) => { setNumber(e.target.value) }} placeholder='Phone number' />

              <label>or</label>
              <div className="google-icon">
                <div className="FaGoogle-icon"><FaGoogle /></div>
                <div className="continew-google">Continue with google </div>
              </div>
              <button type="submit" onClick={submit} value="Submit">New account</button>
              <Link className="have-Account" to="/login">Already have an account?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn














// import React, { useState } from 'react';
// import profile from "../assest/profile.png";
// import { Link } from "react-router-dom";
// // import ser from ""
// import { FaGoogle } from 'react-icons/fa';
// import axios from "axios";
// const SignIn = () => {

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     number: ""
//   })

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:6000/', formData)
//       .then((response) => {
//         console.log('Form data sent successfully:', response.data);
//         // Optionally, reset the form after successful submission
//         setFormData({ username: '', password: '', number: '' });
//       })
//       .catch((error) => {
//         console.error('Error sending form data:', error);
//       });
//     // const {username, password, number} = formData;
//     // const responce = await fetch("/signIn", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json"
//     //   },
//     //   body: JSON.stringify({
//     //     username, password, number
//     //   })
//     // })

//     // const data = await responce.json();
//     // if(data.status === 422){
//     //   window.alert("Invalid registration")
//     // }else{
//     //   window.alert("successfull registration")
//     //   console.log("signIn completed")
//     // }
//   }

//   return (
//     <>
//       <div className="signup-main">
//         <div className="container">
//           <h2>Sign-Up</h2>
//           <p>Happy to see you here!</p>

//           <form action="POST" className="input-section">
//             <div className="profile-div">
//               <img src={profile} alt="" />
//             </div>
//             <div className="input-div">
//               <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
//               <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
//               <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Phone Number" />

//               <label>or</label>
//               <div className="google-icon">
//                 <div className="FaGoogle-icon"><FaGoogle /></div>
//                 <div className="continew-google">Continue with google </div>
//               </div>
//               <button type="submit" onClick={onSubmit}>New account</button>
//               <Link className="have-Account" to="/login">Already have an account?</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default SignIn
