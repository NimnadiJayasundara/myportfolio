import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log(form);
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
                <span className="font-semibold text-textGreen">Email : </span> nimnadihansijm@gmail.com
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section with the form */}
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0 bg-[#0A2540] text-white p-8 rounded-md">
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
              <label htmlFor="subject" className="block mb-2 text-textGreen">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-300 rounded-md hover:bg-teal-700 hover:bg-opacity-30"
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
              className="w-full p-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

