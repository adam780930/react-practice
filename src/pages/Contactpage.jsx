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
    <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-slate-900 dark:text-white dark:border dark:border-slate-800">
      <form className="max-w-full mx-auto" onSubmit={Emailsubmit}>
        <header className="mb-5 my-2 text-center text-3xl">
          <span>Send me an email</span>
        </header>
        <div className="form-group mb-5">
          <label
            htmlFor="name"
            className="block mb-2.5 text-sm font-medium text-black dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            required
            id="name"
            name="name"
            className="bg-white border border-slate-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 block w-full px-3 py-2.5 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:ring-slate-600 dark:focus:border-slate-600"
          />
        </div>
        <div className="form-group mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-black dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className="bg-white border border-slate-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 block w-full px-3 py-2.5 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:ring-slate-600 dark:focus:border-slate-600"
          />
        </div>
        <div className="form-group mb-5">
          <label
            htmlFor="subject"
            className="block mb-2.5 text-sm font-medium text-black dark:text-white"
          >
            Subject
          </label>
          <input
            type="text"
            required
            id="subject"
            name="subject"
            className="bg-white border border-slate-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 block w-full px-3 py-2.5 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:ring-slate-600 dark:focus:border-slate-600"
          />
        </div>
        <div className="form-group mb-5">
          <label
            htmlFor="message"
            className="block mb-2.5 text-sm font-medium text-black dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            row="5"
            name="message"
            className="bg-white border border-slate-300 text-black text-sm rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 block w-full p-3.5 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:ring-slate-600 dark:focus:border-slate-600"
            placeholder="Write your messages here..."
          ></textarea>
        </div>
        <div className="mb-5 p-2 text-center">
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
