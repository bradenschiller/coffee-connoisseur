import Link from "next/link";
import Button from "./Button";
import styles from "../../styles/CoffeeShopSelector.module.css";

const CoffeeShopSelector = ({ title, id }) => {
  console.log(id, "id");

  return (
    <div className={styles.selectionContainer}>
      <h5>{title}</h5>
      <Link href={`/coffee-shop/${encodeURIComponent(id)}`} passHref>
        <Button title={`Go to ${title}`} primary />
      </Link>
    </div>
  );
};

export default CoffeeShopSelector;
