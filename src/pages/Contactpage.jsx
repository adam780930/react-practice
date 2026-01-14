import Buttons from "../components/Button.jsx";

function ContactPage() {
  return (
    <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300">
      <form className="max-w-full mx-auto">
        <header className="mb-5 my-2 text-center text-3xl">
          <span>Send me an email</span>
        </header>
        <div className="mb-5">
          <label
            for="name"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your Name
          </label>
          <input
            type="text"
            required
            id="name"
            name="name"
            className="bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your Email
          </label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className="bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
          />
        </div>
        <div className="mb-5">
          <label
            for="subject"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Subject
          </label>
          <input
            type="text"
            required
            id="subject"
            name="subject"
            className="bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
          />
        </div>
        <div className="mb-5">
          <label
            for="message"
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
          <Buttons buttonName={"Send Message"} />
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
