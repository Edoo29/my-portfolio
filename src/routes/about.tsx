import AboutParagraph from "../components/about-paragraph";
import Copyright from "../components/copyright";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar items={["Home", "Work", "Contact"]} />
      <div id="about-header">
        <Header>ABOUT ME</Header>
        <section id="about-paragraph">
          <AboutParagraph>
            I am Edoardo and I have been developing websites and SPA (Single
            Page Application) for almost 3 years. I am 17 years old and I live
            in Italy.
          </AboutParagraph>
          <AboutParagraph>
            This passion leads me to discover new technologies and deepen my
            self-taught studies. In fact, I bought some courses to improve my
            skills and learn new stuffs.
          </AboutParagraph>
          <AboutParagraph>
            My goal is to create easy to use and immersive websites to allow
            users to have a good experience.
          </AboutParagraph>
          <AboutParagraph>
            I also have a good collaborative spirit and I am always open to
            suggestions.
          </AboutParagraph>
          <AboutParagraph>
            To make this Portfolio I used React, Typescript, Sass, Motion, React
            Icons and React Router Dom. I choose a minimal design to give ease
            of reading. The font is Mona Sans, a free, strong and versatile
            font.
          </AboutParagraph>
          <AboutParagraph>
            My next goal is to deepen my knowledge of React and then start the
            Backend side.
          </AboutParagraph>
        </section>
      </div>
      <Copyright />
    </>
  );
}
