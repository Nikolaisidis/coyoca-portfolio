import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/styles.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "04937279-3ed2-4997-acd5-ae8d45fe4d9a",
          ...formData,
          botcheck: false,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="relative h-full min-h-screen bg-black overflow-hidden">
      <div className="circle w-[600px] h-[600px] md:w-[1500px] md:h-[1500px] -top-[150px] md:-top-[300px] -left-[600px] md:-left-[1400px] bg-gradient-to-br from-[#d9d9d9] to-[#ffffff]"></div>
      <div className="circle w-[600px] h-[600px] md:w-[1500px] md:h-[1500px] -bottom-[150px] md:-bottom-[300px] -right-[600px] md:-right-[1400px] bg-gradient-to-br from-[#d9d9d9] to-[#ffffff]"></div>
      <ToastContainer />
      <h1 className="font-K2D font-bold text-4xl md:text-5xl text-center py-4 text-white xl:mt-20">
        Contact Me
      </h1>
      <p className="text-center text-sm md:text-lg text-white mb-4">
        I’d love to hear from you! Reach out if you have a question or just want
        to chat.
      </p>
      <div className="text-black font-poppins max-w-md mx-auto bg-white p-4 rounded-2xl border-4 border-transparent bg-clip-border shadow-[0_0_10px_5px_rgba(80,216,144,0.6)] relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto font-semibold px-6 py-2 bg-green-400 text-white rounded-full transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
