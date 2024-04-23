import { Hero } from "./sections";
import { NavBar } from "./components/NavBar";
import { LightBox } from "./components/LightBox";

function App() {
  return (
    <main className="relative">
      <section className="padding-n h-[20vh]">
        <NavBar />
      </section>
      <scetion className="xl:padding-l wide:padding-r padding-b h-[80vh]">
        <Hero />
      </scetion>
      <section className="absolute">
        <LightBox />
      </section>
    </main>
  );
}

export default App;
