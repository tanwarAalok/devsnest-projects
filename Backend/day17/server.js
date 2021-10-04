const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51JgVU0SDRoiF3MX5denQdrtpWHVUgDTTHnFOaq6SdSQHMa0PFyFfbIV6aqEnsaSzVmQkxIBWe2cAE8ovfuwGT1k200RbDWjN7D');
const path = require('path');
const router = require('express').Router();

// app.get('/', (req, res) => {
//     res.send(path.join(__dirname, "/checkout.html"));
// });

app.use(express.static('public'));

const YOUR_DOMAIN = 'https://localhost:3000';

router.post('/payment', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              amount: req.body.price * 100,
              name: "Shopping",
              currency: 'usd',
              quantity: 1,
            },
          ],
          payment_method_types: ["card"],
          mode: "payment",
          success_url: `${YOUR_DOMAIN}/success.html`,
          cancel_url: `${YOUR_DOMAIN}/cancel.html`,
        });
        res.redirect(303, session.url);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err });
    }
});


app.listen(3000);