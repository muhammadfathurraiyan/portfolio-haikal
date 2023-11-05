const Navbar = () => {
  return (
    <aside className="bg-neutral-900 text-stone-50 flex h-full items-start gap-8 py-4 px-4 [writing-mode:vertical-lr] fixed">
      <a href="home" className="cursor-pointer">
        <h1 className="flex item text-lg font-medium text-stone-50 hover:text-neutral-600 duration-300">
          Haikal
        </h1>
      </a>
      <div className="flex items-center gap-4 ">
        <a href="#home" className="cursor-pointer hover:text-neutral-600 duration-300">
          Home
        </a>
        <a href="#journey" className="cursor-pointer hover:text-neutral-600 duration-300">
          Journey
        </a>
        <a href="#contact" className="cursor-pointer hover:text-neutral-600 duration-300">
          Contact
        </a>
      </div>
    </aside>
  );
};

export default Navbar;
