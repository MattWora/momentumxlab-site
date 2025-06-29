// pages/index.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-white font-sans">
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold text-[#FACC15]">MomentumXLab</h1>
        <p className="mt-4 text-lg text-gray-400">
          AI-Powered Precision. Human-Worthy Results.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://apexxau-landing.vercel.app"
            className="px-6 py-3 bg-[#FACC15] text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            ดู ApexXAU Intelligent Pro-5
          </a>
          <a
            href="#features"
            className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-white hover:text-white transition"
          >
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" className="bg-[#121621] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold text-[#FACC15]">🧠 Neural Engine</h3>
            <p className="mt-2 text-gray-400">
              Gold-optimized AI signal detection with real-market training.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#FACC15]">📊 Smart Sizing</h3>
            <p className="mt-2 text-gray-400">
              Dynamic lot, SL/TP updates based on volatility and ATR bands.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#FACC15]">🔒 Broker Adaptivity</h3>
            <p className="mt-2 text-gray-400">
              Auto pip calibration to match ECN-Cent accounts dynamically.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0D14] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Built for Traders Who Expect More</h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Quantum Apex V4.0 isn't just another EA. It adapts, learns, and maximizes opportunity—
          engineered by MomentumXLab for gold-focused precision, zero-fuss execution, and sustained growth.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-[#FACC15] text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            Get Early Access
          </a>
        </div>
      </section>
    </main>
  );
}
