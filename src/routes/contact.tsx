import Copyright from "../components/copyright";
import Form from "../components/form";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar items={["Home", "About", "Work"]} />
      <div id="contact-header">
        <Header>CONTACT ME</Header>
        <Form />
      </div>
      <Copyright />
    </>
  );
}
