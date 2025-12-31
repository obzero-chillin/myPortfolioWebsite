import { useEffect, useRef } from "react";
import "./css/home.css";
import comp from "../assets/comp.webp";

const Home = () => {
  const imgRef = useRef(null);
  const contRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const cont = contRef.current;
    if (!img || !cont) return;

    const maxExtraHeight = 400; // px added beyond 100vh
    const maxScale = 1.25;

    function handleScroll() {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / window.innerHeight, 1);

      // scale image
      const scale = 1 + progress * (maxScale - 1);
      img.style.transform = `scale(${scale})`;

      // grow container downward
      cont.style.height = `calc(100vh + ${progress * maxExtraHeight}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="homeCont" ref={contRef}>
      <div id="imgCont">
        <img ref={imgRef} src={comp} alt="" id="backgroundImg" />
      </div>

      <div id="hero">
        <div id="heroItemsCont">
          <h1 id="heroh1">Hi, I'm Obonolo</h1>
          <span id="heroDesc">
            A fullstack web and app developer in Botswana
          </span>
          <p>
             I started my fullstack programming journey in 2020 with python as my first language.
                Since then, I've expanded my skill set to include JavaScript, React, Node.js, and more.
                I'm about building efficient and scalable web applications, programmes that solve real-world problems.
          </p>

          <button id='contactBtn' onClick={()=>{
            window.open('/contact', '_self')
          }}>Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Home;
