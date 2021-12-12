import Link from "next/link";
import Button from "./Button";

const CoffeeShopSelector = ({ title, id }) => {
  console.log(id, "id");

  return (
    <>
      <h5>{title}</h5>
      <Link href={`/coffee-shop/${encodeURIComponent(id)}`} passHref>
        <Button title={`Go to ${title}`} primary />
      </Link>
    </>
  );
};

export default CoffeeShopSelector;
