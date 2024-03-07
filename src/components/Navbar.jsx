import React from "react";
import { useState } from "react";
import { navLinks, navLinks_sign } from "../constants";
import { close, menu, TechTrov } from "../assets";
import styles from "../style";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../features/user/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [cart_toggle, setCart_toggle] = useState(false);
  const [favorite_toggle, setFavorite_toggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { name, email, password } = useSelector(({ user }) => user);
  const { value, products } = useSelector(({ cartCounter }) => cartCounter);
  const { count_favorite, products_favorite } = useSelector(
    ({ favoriteCounter }) => favoriteCounter
  );

  const signoutHandler=()=>{
    dispatch(signout()); 
    alert("Sign out Successfully!!");
  }
  return (
    <nav className="w-full flex  py-6 justify-between items-center navbar ">
      <img src={TechTrov} alt="TechTrov logo" className=" w-[140] h-[36px]" />

      <ul
        className={`${
          name
            ? "hidden"
            : "w-full list-none sm:flex hidden justify-end  items-center flex-1"
        } `}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-10" : " mr-10"
            } text-white`}
          >
            <NavLink to={`${nav.path}`}> {nav.title}</NavLink>
          </li>
        ))}
        <li>{value}</li>
      </ul>
      <ul
        className={`${
          name
            ? "w-full list-none sm:flex hidden justify-end  items-center flex-1"
            : "hidden"
        } `}
      >
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] relative mr-10  text-white`}
        >
          <NavLink to="/"> Home</NavLink>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] relative mr-10  text-white`}
        >
          <NavLink
            to="/"
            onClick={() => {
              setCart_toggle((prev) => !prev);
              setFavorite_toggle(false);
            }}
          >
            {" "}
            Cart
          </NavLink>
          <span className=" absolute top-2 px-2 rounded-xl bg-[#5CE1E6] ">
            {value}
          </span>
          <div
            className={`${cart_toggle ? "flex" : "hidden"}
          }} p-4   bg-gradient-to-r from-gray-900  to-black  absolute top-8 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
          >
            <ul className="w-full list-none flex  justify-end  items-center flex-col">
              {products.map((product, index) => (
                <li
                  key={product.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === products.length - 1 ? "mr-0" : " mb-4"
                  } text-white`}
                >
                  <img src={product.img} width={80} alt="" />
                  <small>{product.title}</small>
                  <p className=" text-[#5CE1E6] text-xl font-semibold">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] relative mr-10  text-white`}
        >
          <NavLink
            to="/"
            onClick={() => {
              setFavorite_toggle((prev) => !prev);
              setCart_toggle(false);
            }}
          >
            Favorite
          </NavLink>
          <span className=" absolute top-2 px-2 rounded-xl bg-[#5CE1E6] ">
            {count_favorite}
          </span>
          <div
            className={`${
              favorite_toggle ? "flex" : "hidden"
            } p-4   bg-gradient-to-r from-gray-900  to-black  absolute top-8 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
          >
            <ul className="w-full list-none flex  justify-end  items-center flex-col">
              {products_favorite.map((product, index) => (
                <li
                  key={product.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === products_favorite.length - 1 ? "mr-0" : " mb-4"
                  } text-white`}
                >
                  <img src={product.img} width={80} alt="" />
                  <small>{product.title}</small>
                  <p className=" text-[#5CE1E6] text-xl font-semibold">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
              className={`font-poppins font-normal cursor-pointer text-[16px] relative mr-10  text-white`}
            >
              <NavLink
                to="/"
                onClick={ signoutHandler }
              >
                Sign out
              </NavLink>
              
             
            </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6   bg-gradient-to-r from-gray-900  to-black  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul
            className={`${
              name
                ? "hidden"
                : "w-full list-none flex  justify-end  items-center flex-col"
            } `}
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : " mb-4"
                } text-white`}
              >
                <NavLink to={`${nav.path}`}> {nav.title}</NavLink>
              </li>
            ))}
          </ul>
          <ul
            className={`${
              name
                ? "w-full list-none flex  justify-end  items-center flex-col"
                : "hidden"
            } `}
          >
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px]  mb-4 text-white`}
            >
              <NavLink to="/"> Home</NavLink>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] relative mb-4 text-white`}
            >
              <NavLink
                to="/"
                onClick={() => {
                  setCart_toggle((prev) => !prev);
                  setFavorite_toggle(false);
                }}
              >
                {" "}
                Cart
              </NavLink>
              <span className=" absolute top-2   px-2 rounded-xl bg-[#5CE1E6] ">
                {value}
              </span>
              <div
                className={`${cart_toggle ? "flex" : "hidden"}
          }} p-4   bg-gradient-to-r from-gray-900  to-black  absolute top-0 right-10 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
              >
                <ul className="w-full list-none flex  justify-end  items-center flex-col">
                  {products.map((product, index) => (
                    <li
                      key={product.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${
                        index === products.length - 1 ? "mr-0" : " mb-4"
                      } text-white`}
                    >
                      <img src={product.img} width={80} alt="" />
                      <small>{product.title}</small>
                      <p className=" text-[#5CE1E6] text-xl font-semibold">
                        {product.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 relative text-white`}
            >
              <NavLink
                to="/"
                onClick={() => {
                  setFavorite_toggle((prev) => !prev);
                  setCart_toggle(false);
                }}
              >
                Favorite
              </NavLink>
              <span className=" absolute top-2 px-2 rounded-xl bg-[#5CE1E6] ">
                {count_favorite}
              </span>
              <div
                className={`${
                  favorite_toggle ? "flex" : "hidden"
                } p-4   bg-gradient-to-r from-gray-900  to-black  absolute top-0 right-10 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
              >
                <ul className="w-full list-none flex  justify-end  items-center flex-col">
                  {products_favorite.map((product, index) => (
                    <li
                      key={product.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${
                        index === products_favorite.length - 1
                          ? "mr-0"
                          : " mb-4"
                      } text-white`}
                    >
                      <img src={product.img} width={80} alt="" />
                      <small>{product.title}</small>
                      <p className=" text-[#5CE1E6] text-xl font-semibold">
                        {product.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 relative text-white`}
            >
              <NavLink
                to="/"
                onClick={ signoutHandler }
              >
                Sign out
              </NavLink>
              
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
