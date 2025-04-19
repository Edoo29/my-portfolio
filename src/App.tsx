import Header from "./components/header";
import Navbar from "./components/navbar";
import Paragraph from "./components/paragraph";
import Roadmap from "./components/roadmap";
import Topbar from "./components/topbar";

export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div id="app-header">
        <Header>HELLO, I'M EDO</Header>
        <section id="app-paragraph">
          <Paragraph>
            I'm a young guy who's passionate about programming. In particular,
            I'm fascinated by web development and everything behind it.
          </Paragraph>
          <Paragraph>
            In all my projects I always try to make the user experience very
            immersive, but at the same time easy to use
          </Paragraph>
        </section>
      </div>
      <Roadmap />
    </>
  );
}
