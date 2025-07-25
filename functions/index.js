const functions = require("firebase-functions");
const stripe = require("stripe")("pk_test_51RmdQFFN9S7UG3y8i70joQpqj2tKpfKlwEnABZ7HLJnJ1mdP05CEvH4EgOf6upF3Uerntndt7qffCRluU0Od7vrm00LmoYYkdB"); // 🔑 ใช้ secret key จริงจาก Stripe dashboard

exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  const { plan, package: pkg } = req.body;

  // 🧮 ราคาแต่ละแพ็กเกจ
  const priceMap = {
    pro4: { monthly: 1999, "6m": 10699, "12m": 19399 },
    pro5: { monthly: 3999, "6m": 21399, "12m": 38829 },
    corex: { monthly: 4999, "6m": 26749, "12m": 48542 }
  };

  const amount = priceMap?.[plan]?.[pkg];
  if (!amount) return res.status(400).send("Invalid plan or package");

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [{
      price_data: {
        currency: "thb",
        product_data: { name: `${plan} – ${pkg}` },
        unit_amount: amount, // หน่วยเป็นสตางค์ (เช่น 1999 = ฿19.99)
      },
      quantity: 1
    }],
    success_url: `https://momentumxlab.com/confirm-order.html?status=paid&plan=${plan}&package=${pkg}`,
    cancel_url: `https://momentumxlab.com/payment.html?plan=${plan}&package=${pkg}`
  });

  res.json({ id: session.id });
});
