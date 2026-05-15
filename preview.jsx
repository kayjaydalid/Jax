import React from "react";

export default function JaxCarRentalPage() {
  const rates = [
    { area: "Bulacan", price24: "Php 2,499", price12: "Php 1,900" },
    { area: "Manila", price24: "Php 2,499", price12: "Php 1,900" },
    { area: "Cavite", price24: "Php 2,999", price12: "Php 2,300" },
    { area: "Laguna", price24: "Php 2,999", price12: "Php 2,300" },
    { area: "Batangas", price24: "Php 3,499", price12: "Php 2,800" },
    { area: "Tarlac", price24: "Php 2,499", price12: "Php 1,800" },
    { area: "Pangasinan", price24: "Php 3,499", price12: "Php 2,900" },
    { area: "Bolinao", price24: "Php 3,499", price12: "Php 2,900" },
    { area: "Baguio", price24: "Php 3,499", price12: "Php 2,900" },
    { area: "Nueva Ecija", price24: "Php 2,499", price12: "Php 1,900" },
    { area: "Nueva Vizcaya", price24: "Php 3,499", price12: "Php 2,900" },
    { area: "Aurora", price24: "Php 3,499", price12: "Php 2,900" },
    { area: "Zambales", price24: "Php 3,499", price12: "Php 2,900" },
    { area: "La Union", price24: "Php 3,499", price12: "Php 2,900" },
    { area: "Subic", price24: "Php 2,499", price12: "Php 1,900" },
    { area: "Bataan", price24: "Php 2,499", price12: "Php 1,900" },
    { area: "Olongapo", price24: "Php 2,499", price12: "Php 1,900" },
  ];

  const extraFees = [
    { label: "Car Wash Fee", amount: "Php 200" },
    { label: "Delivery Fee", amount: "Php 300" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-yellow-400 text-black font-extrabold flex items-center justify-center text-2xl shadow-lg">
              JX
            </div>

            <div>
              <h1 className="text-3xl font-extrabold tracking-wide">
                JAX CAR RENTAL
              </h1>
              <p className="text-sm text-gray-300">
                Affordable & Reliable Car Rental Service
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
              Contact: 09928176144
            </span>

            <span className="bg-gray-800 px-4 py-2 rounded-full">
              Pick-Up Available
            </span>

            <span className="bg-gray-800 px-4 py-2 rounded-full">
              Delivery Available
            </span>

            <span className="bg-gray-800 px-4 py-2 rounded-full">
              Self-Drive
            </span>

            <span className="bg-gray-800 px-4 py-2 rounded-full">
              With Driver
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Rent a Comfortable{" "}
              <span className="text-yellow-400">Nissan Livina</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Travel with comfort and convenience across Luzon with JAX Car
              Rental. Choose self-drive or hire a professional driver for your
              trip.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <h3 className="font-bold text-yellow-400 text-lg">
                  Flexible Service
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  Pick-up or door-to-door delivery available.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <h3 className="font-bold text-yellow-400 text-lg">
                  Affordable Rates
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  Competitive 24-hour rental pricing.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-bold px-6 py-3 rounded-2xl shadow-lg">
                Book Now
              </button>

              <a
                href="tel:09928176144"
                className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-2xl font-semibold"
              >
                Call 09928176144
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              alt="Nissan Livina"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover border-4 border-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Rental Rates */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Rental Rates</h2>

          <p className="text-gray-600 text-lg">
            Transparent pricing for your travel destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rates.map((rate, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{rate.area}</h3>

                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Available
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-600">
                      12 Hours
                    </span>

                    <span className="text-2xl font-extrabold">
                      {rate.price12}
                    </span>
                  </div>
                </div>

                <div className="bg-black text-white rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">24 Hours</span>

                    <span className="text-2xl font-extrabold">
                      {rate.price24}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ Pick-up or Delivery</li>
                <li>✔ Self-drive or With Driver</li>
                <li>✔ Clean & Well-maintained Vehicle</li>
              </ul>

              <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-2xl font-semibold transition">
                Reserve This Trip
              </button>
            </div>
          ))}
        </div>

        {/* Extra Fees */}
        <div className="mt-14 bg-black text-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-extrabold mb-6 text-center">
            Additional Fees
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraFees.map((fee, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 flex items-center justify-between"
              >
                <span className="text-lg font-semibold">{fee.label}</span>

                <span className="text-2xl font-extrabold text-yellow-400">
                  {fee.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold">
              Quick Reservation Form
            </h2>

            <p className="text-gray-600 mt-3">
              Fill out the form and our team will contact you.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-2xl border border-gray-300"
            />

            <input
              type="text"
              placeholder="Contact Number"
              className="p-4 rounded-2xl border border-gray-300"
            />

            <input
              type="date"
              className="p-4 rounded-2xl border border-gray-300"
            />

            <select className="p-4 rounded-2xl border border-gray-300">
              <option>Select Destination</option>

              {rates.map((rate, index) => (
                <option key={index}>{rate.area}</option>
              ))}
            </select>

            <select className="p-4 rounded-2xl border border-gray-300">
              <option>Service Type</option>
              <option>Self-Drive</option>
              <option>With Driver</option>
            </select>

            <select className="p-4 rounded-2xl border border-gray-300">
              <option>Pick-Up Option</option>
              <option>Pick-Up</option>
              <option>Delivery</option>
            </select>

            <textarea
              placeholder="Additional Notes"
              rows="4"
              className="md:col-span-2 p-4 rounded-2xl border border-gray-300"
            ></textarea>

            <button className="md:col-span-2 bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-lg shadow-lg">
              Submit Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-4xl font-extrabold mb-6">
            Car Rental Terms & Conditions
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              This agreement is entered into between JAX Car Rental and the
              renter for the lawful use of the rented vehicle within the
              Republic of the Philippines.
            </p>

            <ol className="list-decimal pl-6 space-y-4">
              <li>
                The renter must present a valid government-issued ID and a valid
                driver's license recognized under Philippine law.
              </li>

              <li>
                The renter agrees to use the vehicle responsibly and comply with
                all traffic laws, rules, and regulations enforced in the
                Philippines.
              </li>

              <li>
                The renter shall be responsible for any traffic violations, toll
                fees, parking penalties, damages, or negligence incurred during
                the rental period.
              </li>

              <li>
                The vehicle must not be used for illegal activities, racing,
                reckless driving, or transportation of prohibited substances.
              </li>

              <li>
                Any accident, theft, or damage must be reported immediately to
                JAX Car Rental and local authorities.
              </li>

              <li>
                The renter agrees to return the vehicle in good condition at the
                agreed date and time. Late returns may incur additional charges.
              </li>

              <li>
                JAX Car Rental reserves the right to refuse or terminate rental
                services in cases of breach of contract or unsafe conduct.
              </li>

              <li>
                This agreement shall be governed by the laws of the Republic of
                the Philippines, including relevant provisions of the Civil Code
                of the Philippines and Republic Act No. 4136.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Chat Agent */}
      <section className="fixed bottom-6 right-6 z-50">
        <div className="w-80 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">JAX Inquiry Agent</h3>

              <p className="text-xs text-gray-300">
                Online Assistance
              </p>
            </div>

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-gray-50 space-y-3 text-sm">
            <div className="bg-black text-white p-3 rounded-2xl max-w-[85%]">
              Hello! Welcome to JAX Car Rental. How can we help you today?
            </div>

            <div className="bg-yellow-100 p-3 rounded-2xl ml-auto max-w-[85%]">
              I want to rent a Nissan Livina.
            </div>

            <div className="bg-black text-white p-3 rounded-2xl max-w-[85%]">
              Great choice! Please send your destination and rental date.
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              placeholder="Type your inquiry..."
              className="flex-1 p-3 rounded-2xl border border-gray-300"
            />

            <button className="bg-yellow-400 hover:bg-yellow-300 px-5 rounded-2xl font-bold">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-extrabold mb-3">
            JAX CAR RENTAL
          </h3>

          <p className="text-gray-400 mb-2">
            Reliable transportation for your next journey.
          </p>

          <p className="text-yellow-400 font-bold text-lg">
            09928176144
          </p>

          <p className="text-sm text-gray-500 mt-4">
            © 2026 JAX Car Rental. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}