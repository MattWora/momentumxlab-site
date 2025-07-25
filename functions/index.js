const functions = require("firebase-functions");
const Stripe     = require("stripe");
const cors       = require("cors")({ origin: true });

// รันก่อน deploy:
// firebase functions:config:set stripe.secret="sk_live_xxx_ของคุณ"
const stripe = Stripe(functions.config().stripe.secret);

exports.createStripeSession = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    // รับเฉพาะ POST เท่านั้น
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
      const { plan, package: pkg } = req.body || {};

      // แผนผังราคา (หน่วยเป็นสตางค์ THB)
      const priceMap = {
        pro4:  { monthly: 1999, "6m": 10699,  "12m": 19399 },
        pro5:  { monthly: 3999, "6m": 21399,  "12m": 38829 },
        corex: { monthly: 4999, "6m": 26749,  "12m": 48542 }
      };

      const unitAmount = priceMap[plan]?.[pkg];
      if (!unitAmount) {
        return res.status(400).json({ error: "Invalid plan or package" });
      }

      // สร้าง Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [{
          price_data: {
            currency: "usd",
            product_data: { name: `${plan.toUpperCase()} – ${pkg}` },
            unit_amount: unitAmount
          },
          quantity: 1
        }],
        success_url: `https://mattwora.github.io/momentumxlab-auth-system/confirm-order.html?status=paid&plan=${plan}&package=${pkg}`,
        cancel_url:  `https://mattwora.github.io/momentumxlab-auth-system/payment.html?plan=${plan}&package=${pkg}`
      });

      // คืนค่า sessionId ตามที่ frontend คาดหวัง
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
