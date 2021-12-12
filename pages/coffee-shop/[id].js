import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeShop = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <div>Coffee Shop: {id} </div>
    </>
  );
};

export default CoffeeShop;
