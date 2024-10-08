import Foto1 from "../assets/foto1.jpg";
import Foto2 from "../assets/foto2.jpg";
import Foto3 from "../assets/foto3.jpg";
import Foto4 from "../assets/foto4.jpg";
import Foto5 from "../assets/foto5.jpg";
import Foto6 from "../assets/foto6.jpg";
import Foto8 from "../assets/foto8.jpg";
import Foto9 from "../assets/foto9.jpg";
import Foto10 from "../assets/foto10.jpg";
import Foto11 from "../assets/foto11.jpg";
import Foto12 from "../assets/foto12.jpg";
import Foto13 from "../assets/foto13.jpg";
import Foto14 from "../assets/foto14.jpg";
import Foto15 from "../assets/foto15.jpg";
import Foto16 from "../assets/foto16.jpg";
import Foto17 from "../assets/foto17.jpg";
import Foto18 from "../assets/foto18.jpg";
import Foto19 from "../assets/foto19.jpg";
import Foto20 from "../assets/foto20.jpg";
import Foto21 from "../assets/foto21.jpg";
import Foto22 from "../assets/foto22.jpg";
import Foto23 from "../assets/foto23.jpg";
import Foto24 from "../assets/foto24.jpg";
import Foto25 from "../assets/foto25.jpg";
import Foto26 from "../assets/foto26.jpg";
import Foto27 from "../assets/foto27.jpg";
import Foto28 from "../assets/foto28.jpg";
import Foto29 from "../assets/foto29.jpg";
import Foto30 from "../assets/foto30.jpg";
import Foto31 from "../assets/foto31.jpg";
import Foto32 from "../assets/foto32.jpg";
import Foto33 from "../assets/foto33.jpg";
import Foto34 from "../assets/foto34.jpg";
import Foto35 from "../assets/foto35.jpg";
import Foto36 from "../assets/foto36.jpg";
import Image from "./Image";
import {
  ScrollPosition,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const Journey = ({ scrollPosition }: { scrollPosition: ScrollPosition }) => {
  const data = [
    Foto12,
    Foto13,
    Foto14,
    Foto15,
    Foto16,
    Foto17,
    Foto18,
    Foto19,
    Foto20,
    Foto21,
    Foto22,
    Foto23,
    Foto24,
    Foto25,
    Foto26,
    Foto27,
    Foto28,
    Foto29,
    Foto30,
    Foto31,
    Foto32,
    Foto33,
    Foto34,
    Foto35,
    Foto36,
    Foto11,
    Foto9,
    Foto3,
    Foto5,
    Foto6,
    Foto8,
    Foto4,
    Foto10,
    Foto1,
    Foto2,
  ];
  return (
    <div id="journey">
      <div>
        <h1 className="text-4xl font-bold">Journey</h1>
        <p>The Journey of my life.</p>
      </div>
      <div className="flex-wrap flex gap-4 max-sm:flex-row">
        {data.map((d, index) => (
          <div
            key={index}
            className="h-[40vh] grow max-sm:h-auto max-sm:w-full shadow-inner"
          >
            <Image
              alt={index + ""}
              src={d}
              scrollPosition={scrollPosition}
              key={index}
              className="rounded-lg object-cover max-h-full min-w-full align-bottom max-sm:w-full max-sm:max-h-[75vh] max-sm:min-w-0 after:grow-[10] after:content-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default trackWindowScroll(Journey);
