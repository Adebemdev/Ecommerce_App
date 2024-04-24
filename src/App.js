import { Hero } from "./sections";
import { NavBar } from "./components/NavBar";
import { LightBox } from "./components/LightBox";

function App() {
  return (
    <main className="relative">
      <section className="sm:padding-sm lg:padding-n lg:h-[20vh]">
        <NavBar />
      </section>
      <scetion className="sm:p-0 xl:padding-l wide:padding-r padding-b h-[80vh]">
        <Hero />
      </scetion>
      <section className="absolute">
        <LightBox />
      </section>
    </main>
  );
}

export default App;
