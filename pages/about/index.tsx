import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h1>This ABOUT page</h1>
      <Link href="/">Return to home page</Link>
      {" "}
      <Link href="/about/me">Got to the ABOUT/ME page</Link>
    </>
  );
};

export default AboutPage;
