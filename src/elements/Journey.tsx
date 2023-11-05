import Foto1 from "../assets/foto1.jpg";
import Foto2 from "../assets/foto2.jpg";
import Foto3 from "../assets/foto3.jpg";
import Foto4 from "../assets/foto4.jpg";
import Foto5 from "../assets/foto5.jpg";
import Foto6 from "../assets/foto6.jpg";
// import Foto7 from "../assets/foto7.jpg";
import Foto8 from "../assets/foto8.jpg";
import Foto9 from "../assets/foto9.jpg";
import Foto10 from "../assets/foto10.jpg";
import Foto11 from "../assets/foto11.jpg";

const Journey = () => {
  const data = [
    Foto11,
    Foto9,
    Foto3,
    Foto2,
    Foto5,
    Foto6,
    Foto8,
    Foto4,
    Foto10,
    Foto1,
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
            <img
              loading="lazy"
              className="rounded-lg object-cover max-h-full min-w-full align-bottom max-sm:w-full max-sm:max-h-[75vh] max-sm:min-w-0 after:grow-[10] after:content-none"
              src={d}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
