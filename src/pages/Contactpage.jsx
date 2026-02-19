import emailjs from "emailjs-com";
import Buttons from "../components/Button.jsx";
import Reacticons from "../components/Reacticons.jsx";

function ContactPage() {
  function Emailsubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xtgzfki",
      "template_9ll93ma",
      e.target,
      "user_kh1diuAotFnI96MCgonLa",
    );
    e.target.reset();
    alert("Thank you for your message!");
  }

  return (
    <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-black dark:text-white">
      <form className="max-w-full mx-auto" onSubmit={Emailsubmit}>
        <header className="mb-5 my-2 text-center text-3xl">
          <span>Send me an email</span>
        </header>
        <div className="form-group mb-5">
          <label
            htmlFor="name"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your Name
          </label>
          <input
            type="text"
            required
            id="name"
            name="name"
            className="form-control bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
          />
        </div>
        <div className="form-group mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your Email
          </label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className="form-control bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
          />
        </div>
        <div className="form-group mb-5">
          <label
            htmlFor="subject"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Subject
          </label>
          <input
            type="text"
            required
            id="subject"
            name="subject"
            className="form-control bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
          />
        </div>
        <div className="form-group mb-5">
          <label
            htmlFor="message"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            row="5"
            name="message"
            className="bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs"
            placeholder="Write your messages here..."
          ></textarea>
        </div>
        <div className="mb-5 p-2 hover:opacity-50 text-center">
          <Buttons buttonName={"Send Message"} buttonType={"submit"} />
        </div>
      </form>
      <div className="text-3xl">
        <Reacticons />
      </div>
    </div>
  );
}

export default ContactPage;
