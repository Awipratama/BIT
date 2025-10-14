import React, { useState, useEffect } from "react";

export default function Contact() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const API_URL = import.meta.env.VITE_API_URL || "/api";

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setNum1(a);
    setNum2(b);
    setCaptchaInput("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (parseInt(captchaInput) !== num1 + num2) {
      setError("Captcha salah, coba lagi.");
      generateCaptcha();
      return;
    }

    // kalau captcha benar
    alert("Form berhasil dikirim ✅");
    // TODO: tambahkan logic kirim data form ke backend
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-10">
      <div className="max-w-7xl mx-auto px-6 pb-0 md:pb-10 lg:px-12 pt-10 h-full">
        {/* Judul */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#012D70]">Contact Us</h2>
        </div>

        {/* Grid utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <input
                type="text"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b border-gray-300  px-4 py-2 focus:outline-none focus:border-gray-500"
                placeholder="* Your Name"
              />
            </div>

            <div>
              <input
                type="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b border-gray-300  px-4 py-2 focus:outline-none focus:border-gray-500"
                placeholder="* Your Email"
              />
            </div>

            <div>
              <input
                type="text"
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border-b border-gray-300  px-4 py-2 focus:outline-none focus:border-gray-500"
                placeholder="* Subject"
              />
            </div>

            <div>
              <textarea
                rows="4"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="* Write your message..."
              ></textarea>
            </div>

            {/* Math Captcha */}
            <div>
              <label className="block text-[#898895] font-regular pl-[18px] md:pl-[20px] mb-2">
                * Answer to prove that you're Human: <br /> What is {num1} +{" "}
                {num2}?
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="number"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  Refresh
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              className="bg-[#012D70] hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Google Maps */}
          <div className="overflow-hidden shadow-lg h-[400px] lg:h-full rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.573678109198!2d115.23915827579442!3d-8.636860687816958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f86437e84bf%3A0x6b4afb425fb61158!2sAW%20Bali%20Web!5e0!3m2!1sid!2sid!4v1756349176493!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
