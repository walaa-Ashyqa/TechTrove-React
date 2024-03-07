import React, { useState, useRef } from "react";
import styles, { layout } from "../style";
import Button from "../components/Button";
import { amico } from "../assets/";
import { useDispatch, useSelector } from "react-redux";
import { setpassword, setemail, setname } from "../features/user/userSlice";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';

function Signup() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const form = useForm({mode:"all",})
  const { register, control, handleSubmit,watch, formState: { errors,isDirty,isValid },setValue } = form

  // ============== State ==============
  const { name, email, password } = useSelector(({ user }) => user);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit =  async users =>{
    console.log("Form users", users)
    const name = users.userName;
    const email = users.email;
    const password = users.password;
    dispatch(setpassword(password));
    dispatch(setname(name));
    dispatch(setemail(email));
   
    console.log(password, email, name);
    form.reset();
    alert("Sign up Successfully!! ");
    navigate('/');
 
  };

  const onError = (errors) => {
    console.log("Form errors", errors)
  }
  return (
    <section className={`${layout.section}  `}>
      <div className={`${layout.sectionImg}   `}>
        <img src={amico} alt="sing up img" className="w-[80%]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit(onSubmit,onError)} encType='multipart/form-data' noValidate>
        <div className={`  max-w-[470px] mt-5`}>
          <div  className="w-[100%] flex  flex-col ">
            <label className=" text-xl  text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              ref={nameRef}
              className="w-[500px] p-2 mt-2 rounded-xl text-gray-950"
              type="text"
              placeholder="Enter name"
              id="name" 
              {...register(
                "userName",
                {
                  required: {
                    value: true,
                    message: "The user name is reguired",           
                  },
                 
                  maxLength:  {
                    value: 20,
                    message: "max char must be 20",         
                  },
                  minLength: {
                    value: 3,
                    message: "must be at least 3 char",     
                  },
                 
                }
    
              )}
            />
             <p className='text-danger px-4'>
            {errors.userName?.message}
            {console.log(errors.userName?.message)}
          </p>
          </div>
          <div className="w-[100%] flex  flex-col mt-5">
            <label className=" text-xl  text-gray-200" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              className="w-[500px] p-2 mt-2 rounded-xl text-gray-950"
              type="email"
              placeholder="Enter email"
              id="email"
              {...register(
                "email",
                {
                  required: {
                      value: true,
                      message: "The email  is reguired",
                       
                    }
                  ,
                  pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalied email format"
                  },
                  validate:{
                  notAdmin:(fieldValue)=>{
                    return fieldValue !=="admin@example.com" || 
                    "Enter a defferent email address"
                  },
                  notBlackList:(fieldValue)=>{
                    return !fieldValue.endsWith ("baddomain.com") || 
                    "This domain is not supported"
                  },
                
                },
              
                maxLength:  {
                  value: 50,
                  message: "max char must be 50",
                 
                },
                minLength: {
                  value: 10,
                  message: "must be at least 10 char",
                 
                },
                 
                  
                  
                }
              )}
            />
             <p className='text-danger px-4'>
            {errors.email?.message}
            {console.log(errors.email?.message)}
          </p>
          </div>
          <div className="w-[100%] flex  flex-col mt-5 ">
            <label className=" text-xl   text-gray-200" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              className="w-[500px] p-2 mt-2 rounded-xl text-gray-950"
              type="password"
              placeholder="Enter password"
              id="password"
              {...register("password",
            {
              required: {
                value: true,
                message: "The password is reguired",
               
              },
              maxLength:  {
                value: 20,
                message: "max char must be 20",
               
              },
              minLength: {
                value: 6,
                message: "must be at least 6 char",
               
              },
            }
          
          )}
            />
              <p className='text-danger px-4'>
            {errors.password?.message}
            {console.log(errors.password?.message)}
          </p>
          </div>
        </div>

        <Button
          styles={`mt-10  bg-[#5CE1E6] py-3 px-8 `}
          title="Sign Up"
          type="submit"
          disable={!isValid}
        />
        </form>
        <DevTool control={control} />
      </div>
    </section>
  );
}

export default Signup;
