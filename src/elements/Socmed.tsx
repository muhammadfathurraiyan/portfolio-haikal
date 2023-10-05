import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Socmed = () => {
  return (
    <header className="bg-fuchsia-950 px-20 py-2 text-neutral-90">
      <div className="flex gap-2">
        <a className="hover:text-neutral-950 duration-200" href="">
          <FaInstagram style={{ fontSize: "1.2rem" }} />
        </a>
        <a className="hover:text-neutral-950 duration-200" href="">
          <FaTiktok style={{ fontSize: "1.2rem" }} />
        </a>
        <a className="hover:text-neutral-950 duration-200" href="">
          <FaXTwitter style={{ fontSize: "1.2rem" }} />
        </a>
      </div>
    </header>
  );
};

export default Socmed;
