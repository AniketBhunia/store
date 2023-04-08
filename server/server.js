const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const { async } = require("rxjs")

const app = express()
app.use(express.static("public"))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }))
const stripe = require("stripe")("sk_test_51MtuaXSBEU2TlyJNiK3X33gKXwSdT8mOT4FNlEO1rLVgwBcStrbqcv41tZZ3s979zE4eg1UCvk08fCauBngN0OY500sYouShqm")

app.post('/checkout', async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.name,
                        images: [item.product]
                    },
                    unit_amount: item.price * 100
                },
                quantity:item.quantity
            })),
            mode: "payment",
            success_url: "http://localhost:3333/success.html",
            cancel_url: "http://localhost:3333/cancel.html"
        })
        res.status(200).json(session)
    } catch (error) {
        next(error);
    }
})

app.listen(3333, () => console.log("App is Running on 3333"))





