import Foto from "../assets/foto.png";
const About = () => {
  return (
    <div className="absolute left-14 top-[100vh]">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 109.10714285714286,226.53571428571428 218.21428571428572,253.07142857142856 353,261 C 487.7857142857143,268.92857142857144 648.2500000000001,258.25 774,228 C 899.7499999999999,197.75000000000003 990.7857142857142,147.92857142857144 1096,140 C 1201.2142857142858,132.07142857142856 1320.607142857143,166.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#4a044e"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      <section className="px-8 flex flex-col items-center justify-evenly bg-fuchsia-950">
        <h1 className="text-center text-5xl font-bold font-['Playfair_Display']">
          About
        </h1>
        <p>Get to know more about me.</p>
        <div className="flex max-sm:flex-col items-center justify-evenly">
          <div className="">
            <img className="w-[350px]" src={Foto} alt="" />
          </div>
          <div className="w-2/5 max-sm:w-full">
            <h1 className="text-4xl font-['Playfair_Display'] mb-3">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam odio ipsum quo deleniti, architecto quae numquam! Eum
              vitae magni quidem beatae nihil perspiciatis dolorum, assumenda
              inventore libero ea eius nobis.
            </p>
          </div>
        </div>
      </section>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 87.07142857142858,198.39285714285714 174.14285714285717,196.78571428571428 314,189 C 453.85714285714283,181.21428571428572 646.5000000000001,167.25 781,179 C 915.4999999999999,190.75 991.8571428571427,228.21428571428572 1092,236 C 1192.1428571428573,243.78571428571428 1316.0714285714287,221.89285714285714 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#4a044e"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </div>
  );
};

export default About;
