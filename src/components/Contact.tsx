const Contact = () => {
  return (
    <section
      id={"contact"}
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/adfc1e41-510a-4372-bd08-37aaeb61e67c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <div className="text-gray-300 py-4">
            <p>Submit the form below or shoot me an email -</p>
            <p>priyam.g266@gmail.com</p>
          </div>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
          id="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black"
          name="message"
          rows={10}
          placeholder="Message"
          id="message"
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </section>
  );
};

export default Contact;
