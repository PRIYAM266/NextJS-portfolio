"use client";

import { useState } from "react";
import LoadingSymbol from "./LoadingSymbol";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      console.log("Please fill in all fields");
      setSubmitted(true);
      return;
    }

    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Please enter a valid email address");
      return;
    }

    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(false);
        setSendingMessage(false);
      }
    });
  };

  return (
    <section
      id={"contact"}
      className="w-full h-screen bg-dark-blue flex justify-center items-center p-4"
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        method="POST"
        onSubmit={handleSubmit}
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
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />

        <textarea
          className="bg-[#ccd6f6] p-2 text-black"
          name="message"
          rows={10}
          placeholder="Message"
          id="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></textarea>

        {!submitted ? null : (
          <p className="text-pink-600">
            *Please fill all the details correctly.
          </p>
        )}

        {!sendingMessage ? null : (
          <p className="text-pink-600">*Thanks for contacting!</p>
        )}

        <button
          type="submit"
          className={
            !sendingMessage
              ? `transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
               text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center`
              : "text-white border-2 bg-pink-600 border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          }
          onClick={() => setSendingMessage(true)}
        >
          {!sendingMessage ? null : <LoadingSymbol />}
          {!sendingMessage ? "Let's Collaborate" : "Sending Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
