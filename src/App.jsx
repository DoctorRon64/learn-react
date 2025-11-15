import React from "react";
import { createRoot } from "react-dom/client";
import Hero from "./Hero";
import SkillCat from "./SkillCat";

const skills = [
    { title:"C#" , img: "csharp.svg" },
    { title:"C++" , img: "c-plusplus.svg" },
    { title:"unity" , img: "unity-original-logo.svg" },
]

const App = () => (
  <div>
    <Hero
      title="Welcome"
      tagline="We build stuff"
      desc="We create modern web experiences."
      btn_work={{ href: "/work", title: "See our work" }}
      btn_contact={{ href: "/contact", title: "Contact us" }}
      img="../public/assets/img/hero-portrait.jpg"
      img_alt="hero img"
    />
    <SkillCat>
      
    </SkillCat>
  </div>
);

createRoot(document.getElementById("root")).render(<App />);