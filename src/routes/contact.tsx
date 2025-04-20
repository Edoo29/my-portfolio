import Copyright from "../components/copyright";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar items={["Home", "About", "Work"]} />
      <h1>Contact</h1>
      <Copyright />
    </>
  );
}
