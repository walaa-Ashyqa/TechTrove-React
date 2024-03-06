import React, { useRef } from "react";
import styles, { layout } from "../style";
import Button from "../components/Button";
import { bro } from "../assets/";
import { useDispatch, useSelector } from "react-redux";
import { setpassword, setemail, setname  } from "../features/user/userSlice";
import { useNavigate } from 'react-router-dom';
function Signin() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  // ============== State ==============
  const { name, email, password } = useSelector(({ user }) => user);
 
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkuser =()=>{
    const emailvalue = emailRef.current.value;
     if(email === emailvalue)
     alert("Login Successfully!!");
     navigate('/');

  }
  return (
    <section className={`${layout.section}  `}>
      <div className={`${layout.sectionImg}   `}>
        <img src={bro} alt="sing in img" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
         HI, WELCOME BACK! 
          
        </h2>
        <div className={`  max-w-[470px] mt-5`}>
          <div className="w-[100%] flex  flex-col ">
            <label className=" text-xl  text-gray-200" htmlFor="email">
              Email
            </label>
            <input ref={emailRef}
              className="w-[500px] p-2 mt-2 rounded-xl"
              type="email"
              placeholder="Enter email"
              id="email"
            />
          </div>
          <div className="w-[100%] flex  flex-col mt-5 ">
            <label className=" text-xl   text-gray-200" htmlFor="email">
              Password
            </label>
            <input ref={passwordRef}
              className="w-[500px] p-2 mt-2 rounded-xl"
              type="password"
              placeholder="Enter password"
              id="password"
            />
          </div>
        </div>

        <Button styles={`mt-10  bg-[#5CE1E6] py-3 px-8`} title="Sign In"  onClick={checkuser}/>
      </div>
    </section>
  );
}

export default Signin;
