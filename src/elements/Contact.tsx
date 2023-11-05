import { FaArrowRight, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-4 min-h-screen items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p>Get in touch.</p>
      </div>
      <div className="flex max-sm:flex-col sm:w-2/3 justify-between gap-8">
        <div className="grid sm:grid-rows-3 max-sm:grid-cols-3 gap-4 sm:w-1/3">
          <div className="p-2 max-sm:p-4 gap-2 flex flex-col items-center justify-center rounded-lg border border-neutral-500">
            <FaEnvelope style={{ fontSize: "1.8rem" }} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Email</h3>
              <p className="max-sm:hidden">teukuhaikal0702@gmail.com</p>
            </div>
            <a href="mailto:teukuhaikal0702@gmail.com" className="flex font-bold items-center gap-2 group">
              Contact
              <span className="group-hover:translate-x-1 duration-300">
                <FaArrowRight style={{ fontSize: "0.8rem" }} />
              </span>
            </a>
          </div>
          <div className="p-2 max-sm:p-4 gap-2 flex flex-col items-center justify-center rounded-lg border border-neutral-500">
            <FaInstagram style={{ fontSize: "1.8rem" }} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Email</h3>
              <p className="max-sm:hidden">@teeukuuhaikal_22</p>
            </div>
            <a href="https://instagram.com/teeukuuhaikal_22/" target="_blank" className="flex font-bold items-center gap-2 group">
              Contact
              <span className="group-hover:translate-x-1 duration-300">
                <FaArrowRight style={{ fontSize: "0.8rem" }} />
              </span>
            </a>
          </div>
          <div className="p-2 max-sm:p-4 gap-2 flex flex-col items-center justify-center rounded-lg border border-neutral-500">
            <FaXTwitter style={{ fontSize: "1.8rem" }} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">X</h3>
              <p className="max-sm:hidden">@teeukuuhaikal_22</p>
            </div>
            <a href="https://instagram.com/teeukuuhaikal_22/" target="_blank" className="flex font-bold items-center gap-2 group">
              Contact
              <span className="group-hover:translate-x-1 duration-300">
                <FaArrowRight style={{ fontSize: "0.8rem" }} />
              </span>
            </a>
          </div>
        </div>
        <form className="flex w-full flex-col gap-4" action="">
          <div className="relative">
            <label
              className="absolute -top-2 px-1 left-3 text-sm bg-neutral-100"
              htmlFor=""
            >
              Name
            </label>
            <input
              className="border bg-inherit border-neutral-500 rounded-lg p-2 w-full"
              type="text"
            />
          </div>
          <div className="relative">
            <label
              className="absolute -top-2 px-1 left-3 text-sm bg-neutral-100"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="border bg-inherit border-neutral-500 rounded-lg p-2 w-full"
              type="email"
            />
          </div>
          <div className="relative">
            <label
              className="absolute -top-2 px-1 left-3 text-sm bg-neutral-100"
              htmlFor=""
            >
              Your messages
            </label>
            <textarea
              className="border bg-inherit border-neutral-500 rounded-lg p-2 w-full"
              name=""
              id=""
              cols={30}
              rows={10}
            />
          </div>
          <button className="py-4 px-6 rounded-lg w-fit bg-neutral-900 hover:bg-neutral-700 duration-300 text-neutral-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
