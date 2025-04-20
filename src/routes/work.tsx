import Copyright from "../components/copyright";
import Navbar from "../components/navbar";

export default function Work() {
  return (
    <>
      <Navbar items={["Home", "About", "Contact"]} />
      <h1>Work</h1>
      <Copyright />
    </>
  );
}
