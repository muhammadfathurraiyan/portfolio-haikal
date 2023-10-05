const Navbar = () => {
  return (
    <aside className="bg-stone-950 flex h-full items-center gap-8 py-4 px-4 [writing-mode:vertical-lr] fixed">
      <a className="cursor-pointer">
        <h1 className="font-['Playfair_Display'] flex item italic font-bold text-[#ffe135]">
          Haikal
        </h1>
      </a>
      <div className="flex items-center gap-4 ">
        <a className="cursor-pointer hover:text-fuchsia-800 duration-300">
          Home
        </a>
        <a className="cursor-pointer hover:text-fuchsia-800 duration-300">
          Journey
        </a>
        <a className="cursor-pointer hover:text-fuchsia-800 duration-300">
          Contact
        </a>
      </div>
    </aside>
  );
};

export default Navbar;
