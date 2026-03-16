import HomePricing from "@/components/home/Pricing";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white  min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md shadow-lg shadow-blue-500/40">
        <h1 className="text-3xl font-bold text-blue-500">Akros</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-blue-400">
            Services
          </a>
          <a href="#pricing" className="hover:text-blue-400">
            Pricing
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/auth/login")}
            className="px-4 py-2 border border-white/20 rounded-lg"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/auth/login")}
            className="px-4 py-2 bg-blue-500 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Pay Bills & Buy Data <span className="text-blue-500">Instantly</span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          A reliable platform to buy airtime, data bundles, pay electricity
          bills and cable TV subscriptions securely.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/auth/login")}
            className="bg-blue-500 px-8 py-3 rounded-lg text-lg"
          >
            Create Free Account
          </button>

          <button className="border border-white/20 px-8 py-3 rounded-lg text-lg">
            Explore Services
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Airtime Top-up",
              desc: "Recharge MTN, Airtel, GLO and 9mobile instantly.",
            },
            {
              title: "Data Bundles",
              desc: "Affordable SME and corporate data bundles.",
            },
            {
              title: "Electricity Bills",
              desc: "Pay electricity bills for all DISCOs.",
            },
            {
              title: "Cable Subscriptions",
              desc: "Renew DSTV, GOTV and Startimes.",
            },
            {
              title: "Wallet Funding",
              desc: "Fund your wallet using your dedicated bank account.",
            },
            {
              title: "Transaction History",
              desc: "Track all payments and purchases.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Create Account</h3>
              <p className="text-gray-400">
                Register in seconds and access your wallet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Fund Wallet</h3>
              <p className="text-gray-400">
                Transfer money to your dedicated bank account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Start Transacting</h3>
              <p className="text-gray-400">
                Buy data, airtime and pay bills instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <HomePricing />
        </div>
      </section>

      {/* TRUST SECTION */}
      {/* <section className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Trusted Platform</h2>

          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-4xl text-blue-500 font-bold">10K+</h3>
              <p className="text-gray-400">Transactions</p>
            </div>

            <div>
              <h3 className="text-4xl text-blue-500 font-bold">5K+</h3>
              <p className="text-gray-400">Users</p>
            </div>

            <div>
              <h3 className="text-4xl text-blue-500 font-bold">99.9%</h3>
              <p className="text-gray-400">Uptime</p>
            </div>

            <div>
              <h3 className="text-4xl text-blue-500 font-bold">24/7</h3>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CONTACT SECTION */}
      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* CONTACT INFO */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

              <p className="text-gray-400 mb-8">
                Our support team is available 24/7 to assist you with
                transactions, account issues or general inquiries.
              </p>

              <div className="space-y-4 text-gray-400">
                <p>📧 Email: support@akros.com</p>

                <p>📞 Phone: +234 XXX XXX XXXX</p>

                <p>📍 Location: Lagos, Nigeria</p>
              </div>

              <div className="mt-8 space-y-2 text-sm text-gray-500">
                <p>• Technical Support</p>
                <p>• Payment Issues</p>
                <p>• Business Partnerships</p>
              </div>
            </div>

            {/* CONTACT FORM */}

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg"
              />

              <button
                type="submit"
                className="bg-blue-500 px-8 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Akros. All rights reserved.</p>
      </footer>
    </div>
  );
}
