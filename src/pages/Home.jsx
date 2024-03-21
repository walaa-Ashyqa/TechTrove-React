import React from "react";
import Hero from "../components/Hero.jsx";
import styles from "../style.js";
import Product from "../components/Product.jsx";
import Footer from "../components/Footer.jsx";
function Home() {
  return (
    <>
      <div className={`bg-primary ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Product />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
