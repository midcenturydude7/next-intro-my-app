import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h1>This ABOUT page</h1>
      <div><Link href="/">Return to HOME page</Link></div>
      <div><Link href="/about/me">Go to the ABOUT/ME page</Link></div>
      <div><Link href="/contact">Go to the CONTACT page</Link></div>
    </>
  );
};

export default AboutPage;
