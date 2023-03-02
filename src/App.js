import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import imagem1 from "././img/1.jpg";
import imagem2 from "././img/2.jpg";
import imagem3 from "././img/3.jpg";
import imagem4 from "././img/4.jpg";

const images = [imagem1, imagem2, imagem3, imagem4];

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="App">
      <div className="container-title">
        <h2 className="title">Cursos Programação</h2>
      </div>

      <motion.div
        className="carousel"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="container-imagens"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
        >
          {images.map((cadaImagem) => (
            <motion.div key={cadaImagem} className="item" 
            >
              <img src={cadaImagem} alt="img cards" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
