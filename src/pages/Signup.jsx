import React, { useState, useRef } from "react";
import styles, { layout } from "../style";
import Button from "../components/Button";
import { amico } from "../assets/";
import { useDispatch, useSelector } from "react-redux";
import { setpassword, setemail, setname } from "../features/user/userSlice";
import { useNavigate } from 'react-router-dom';
function Signup() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  // ============== State ==============
  const { name, email, password } = useSelector(({ user }) => user);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const addnewuser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(setpassword(password));
    dispatch(setname(name));
    dispatch(setemail(email));
    emailRef.current.value = "";
    nameRef.current.value = "";
    passwordRef.current.value = "";
    console.log(password, email, name);
    alert("Sign up Successfully!! ");
    navigate('/');
  };
  return (
    <section className={`${layout.section}  `}>
      <div className={`${layout.sectionImg}   `}>
        <img src={amico} alt="sing up img" className="w-[80%]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>CREATE ACCOUNT</h2>
        <div className={`  max-w-[470px] mt-5`}>
          <div className="w-[100%] flex  flex-col ">
            <label className=" text-xl  text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              ref={nameRef}
              className="w-[500px] p-2 mt-2 rounded-xl text-gray-950"
              type="text"
              placeholder="Enter name"
              id="name"
            />
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
            />
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
            />
          </div>
        </div>

        <Button
          styles={`mt-10  bg-[#5CE1E6] py-3 px-8 `}
          title="Sign Up"
          onClick={addnewuser}
        />
      </div>
    </section>
  );
}

export default Signup;
