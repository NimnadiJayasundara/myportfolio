import { useState } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);  // To track if email was successfully sent

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_o3d7q2h",        // Replace with your EmailJS service ID
        "template_4e20373",       // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "E95gWT6C7ptgS-JrQ"            // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response);
          setIsSent(true);  // Update the state when email is sent
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold"></h2>
      <div className="flex flex-col lg:flex-row w-full lg:justify-between">
        {/* Left section with text */}
        <div className="lg:w-1/2 px-4">
          <h1 className="font-bold text-4xl">Get in touch with me.</h1>
          
          <div className="mt-28 space-y-6">
            <div>
              <h3 className="font-semibold text-textGreen">Address</h3>
              <p>No 110, Bandarawela, Sri Lnaka.</p>
            </div>
            <div className="mt-8 space-y-6">
              <p>
                <span className="font-semibold text-textGreen">Phone : </span> +94 777686037 
              </p>
              <div>
              <p>
                <span className="font-semibold text-textGreen">Email : </span> nimnadijayasundara12@gmail.com
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section with the form */}
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0 bg-[#0A2540] text-white p-8 rounded-md">
          {isSent ? (
            <p className="text-green-500">Your message has been sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-textGreen">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-md hover:bg-teal-700 hover:bg-opacity-30"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-textGreen">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-md hover:bg-teal-700 hover:bg-opacity-30"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-textGreen">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-md hover:bg-teal-700 hover:bg-opacity-30"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-[#ff6604] text-white font-semibold rounded-md hover:bg-[#9e3e00] transition duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <footer className="text-center mt-8">
        <p>© 2025 | Hansi Nimnadi</p>
        <div className="flex justify-center mt-4">
          <Image className="w-64" src={logo} alt="logo" />
        </div>
      </footer>
    </section>
  );
};

export default Contact;