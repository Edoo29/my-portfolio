import AboutParagraph from "../components/about-paragraph";
import Copyright from "../components/copyright";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Work() {
  return (
    <>
      <Navbar items={["Home", "About", "Contact"]} />
      <div id="work-header">
        <Header>MY WORK</Header>
        <section id="work-paragraph">
          <AboutParagraph>
            I don't have any projects yet, but I'll create something soon.
          </AboutParagraph>
        </section>
      </div>
      <Copyright />
    </>
  );
}
