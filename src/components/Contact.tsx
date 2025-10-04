"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSquareXTwitter, FaEnvelope, FaFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkoorvk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(" Something went wrong, Please try again.");
      }
    } catch (error) {
      toast.error(" Network error, Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-6 lg:py-20 bg-green-50 text-green-900"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-center">
            Contact Us
          </h2>
          <p className="mb-8 text-green-700 font-serif text-center">
            Have a project in mind or want to explore how we can work together?
            Let's start the conversation.
          </p>

          <div className="grid gap-6">
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2 gap-4">
              {/* LinkedIn */}
              <div className="flex-1 bg-green-400 rounded-lg font-serif hover:bg-blue-800 hover:text-white text-gray-800 p-4 text-center">
                <FaFacebook className="h-5 w-5 mx-auto mb-2" />
                <Link href="https://facebook.com/share/1CDJ33W75C/?mibextid=wwXIfr" className="text-sm font-serif">ropephilips</Link>
              </div>
              {/* Email */}
              <div className="flex-1 bg-green-400 rounded-lg font-serif hover:bg-green-300 text-gray-800 p-4 text-center">
                <FaEnvelope className="h-5 w-5 mx-auto mb-2" />
                <p className="text-sm font-serif">info@gmail.com</p>
              </div>
              {/* Twitter */}
              <div className="flex-1 bg-green-400 rounded-lg font-serif hover:bg-gray-800 hover:text-white text-gray-800 p-4 text-center">
                <FaSquareXTwitter className="h-5 w-5 mx-auto mb-2" />
                <Link href="https://x.com/ropephilips" className="text-sm font-serif">@ropephilips</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-green-500"
            />
            <input
              name="phone"
              placeholder="Phone number"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-green-500"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Enter Message"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-green-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded text-white transition ${
                loading
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-500 cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-sm ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
