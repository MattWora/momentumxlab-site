// functions/index.js
const functions = require("firebase-functions");
const Stripe = require("stripe");

// ดึง Secret Key จาก environment variable (กำหนดผ่าน `firebase functions:config:set stripe.secret="sk_live_..."`
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || functions.config().stripe.secret);

// เปิด CORS ให้เรียกจากทุก Origin (ปรับ origin ตามต้องการ)
const cors = require("cors")({ origin: true });

exports.createStripeSession = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    // 1. ตรวจ HTTP Method: ต้องเป็น POST เท่านั้น
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
      // 2. รับ plan และ package (pkg) จาก body
      const { plan, package: pkg } = req.body || {};

      // 3. แผนผังราคา (หน่วยเป็นสตางค์ในสกุล THB)
      const priceMap = {
        pro4:  { monthly: 1999, "6m": 10699,  "12m": 19399 },
        pro5:  { monthly: 3999, "6m": 21399,  "12m": 38829 },
        corex: { monthly: 4999, "6m": 26749,  "12m": 48542 }
      };

      const unitAmount = priceMap?.[plan]?.[pkg];
      if (!unitAmount) {
        return res.status(400).json({ error: "Invalid plan or package" });
      }

      // 4. สร้าง Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [{
          price_data: {
            currency: "thb",
            product_data: { name: `${plan.toUpperCase()} – ${pkg}` },
            unit_amount: unitAmount
          },
          quantity: 1
        }],
        success_url: `https://mattwora.github.io/momentumxlab-auth-system/confirm-order.html?status=paid&plan=${plan}&package=${pkg}`,
        cancel_url:  `https://mattwora.github.io/momentumxlab-auth-system/payment.html?plan=${plan}&package=${pkg}`
      });

      // 5. คืนค่าตามที่ Frontend คาดหวัง
      return res.json({ sessionId: session.id });
    } catch (error) {
      console.error("createStripeSession Error:", error);
      return res.status(500).json({
        error: "Internal Server Error",
        message: error.message
      });
    }
  });
});
