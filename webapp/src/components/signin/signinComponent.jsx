import React, { useState } from "react";
import { Link } from "react-router-dom";
import {connect}  from 'react-redux';
import {useMutation} from '@apollo/client';
import CustomButton from "../customButton/customButton";
import {USER_SIGN_IN} from '../graphql/mutation';
import {saveUserData} from '../../redux/user/userActions';
import FormInput from "../textInput/formInputComponent";
const SignIn = ({location,saveUserData}) => {
  const [data, setData] = useState({
  username: "",
  telephone: "",
  password: ""
});

const [error,setError]= useState(false)


  const [userSignIn,{loading}] = useMutation(USER_SIGN_IN,{
    onCompleted:(data) => {
        if(data.userSignIn){
          saveUserData(data.userSignIn)
          const {state} = location;
          window.location = state ? state.from.pathname : "/"
        }else{
          setError(true)
        }

      
    } 
  })

  const { username, password } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { state } = location;
   
     userSignIn({variables:{...data}})
   
  };


  
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="content">
      <p style={{color:'grey'}}>
        I don't have an account <Link style={{color:'#000'}} to="/signup">Register</Link>
      </p>
      <h2 className="title">Sign In Here </h2>
       {
         loading && <p>Loadig ...</p>
       }
       {
          (error) && <p>Wrong user name or password, Try Again!!</p>
       }
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={username}
          name="username"
          label="Username"
          onChange={handleChange}
          required
        />

        <FormInput
        value={password}
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SignIn</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserData: (data) => {
      dispatch(saveUserData(data))
    }
  }
}



export default connect(null,mapDispatchToProps)( SignIn)


