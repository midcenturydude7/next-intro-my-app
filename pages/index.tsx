import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Link href="/about">Go to ABOUT page</Link>
    </>
  );
};

export default IndexPage;