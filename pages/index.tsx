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
<section className="bg-[#121621] py-20 px-6 text-center">
  <h2 className="text-2xl font-bold text-white mb-10">What Our Traders Say</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left text-gray-300">
    <div className="bg-[#1A1E29] p-6 rounded-lg">
      <p>“Quantum Apex V4.0 turned my sideways months into steady 10% weeks. Execution is flawless.”</p>
      <p className="mt-4 text-[#FACC15] font-semibold">– Alex T., XAUUSD trader</p>
    </div>
    <div className="bg-[#1A1E29] p-6 rounded-lg">
      <p>“I stopped tweaking SLs. The dynamic logic just works. Simple, powerful, adaptive.”</p>
      <p className="mt-4 text-[#FACC15] font-semibold">– Priya M., Cent Account user</p>
    </div>
    <div className="bg-[#1A1E29] p-6 rounded-lg">
      <p>“Broker issues used to kill my strategies. Not with this one. It adjusts like magic.”</p>
      <p className="mt-4 text-[#FACC15] font-semibold">– Somchai W., ECN trader</p>
    </div>
  </div>
</section>
<section className="bg-[#0A0D14] py-20 px-6 text-white">
  <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto space-y-6">
    <div>
      <h3 className="text-[#FACC15] font-semibold">Q: ใช้กับบัญชีอะไรได้บ้าง?</h3>
      <p className="text-gray-400">A: รองรับ ECN Cent, ECN, Standard — พร้อมปรับค่าพิเศษตามโบรกแต่ละที่</p>
    </div>
    <div>
      <h3 className="text-[#FACC15] font-semibold">Q: ตั้งเป้า Drawdown ไว้เท่าไหร่?</h3>
      <p className="text-gray-400">A: ระบบออกแบบให้ไม่เกิน 25% พร้อมจูน TP/SL แบบเรียลไทม์</p>
    </div>
    <div>
      <h3 className="text-[#FACC15] font-semibold">Q: รองรับทองคำอย่างเดียวหรือ?</h3>
      <p className="text-gray-400">A: ปัจจุบันปรับจูนเฉพาะ XAUUSD แต่เรากำลังขยายไปยังคู่เงินเร็ว ๆ นี้</p>
    </div>
  </div>
</section>
<footer className="bg-[#121621] py-10 text-center text-gray-500 text-sm">
  <p>© {new Date().getFullYear()} MomentumXLab. All rights reserved.</p>
  <p className="mt-2">Designed with precision by traders, for traders.</p>
</footer>
