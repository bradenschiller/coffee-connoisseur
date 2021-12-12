import { useState } from "react";
import styles from "../../styles/Banner.module.css";
import Button from "./Button";

const Banner = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.bannerContainer}>
      <h1 className={styles.bannerTitle}>Coffee Connoisseur</h1>
      <h5 className={styles.bannerSubtitle}>
        Discover your local coffee shops!
      </h5>
      <Button
        onClick={() => console.log("I have been clicked")}
        title={isLoading ? "Loading..." : "View stores nearby!"}
        primary
      />
    </div>
  );
};

export default Banner;
