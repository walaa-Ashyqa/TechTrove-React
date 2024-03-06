import React from "react";
import Hero from "../components/Hero";
import styles from "../style";
import Product from "../components/product";
import Footer from "../components/Footer";
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
