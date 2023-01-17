import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../src/@types/data";
type Data = {
  name: string;
};


// @ts-ignore
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const sanityProjectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1MFv44FqKJa1g0WTek6dB74t" },
          { shipping_rate: "shr_1MFwyuFqKJa1g0WTDs7szyOX" },
        ],
        line_items: req.body.map((item: Product) => {
          //   const img = item.image[0].asset._ref || item.image.asset._ref;
          const img = item.image.asset._ref;
          const imgSplitted = img.split("-");
          const imgExt = imgSplitted[imgSplitted.length - 1];
          const newImage = img
            .replace(
              "image-",
              `https://cdn.sanity.io/images/${sanityProjectID}/production/`
            )
            .replace(`-${imgExt}`, `.${imgExt}`);
          return {
            price_data: {
              currency: "eur",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.qtyInCart,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.

      // @ts-ignore
      const session = await stripe.checkout.sessions.create(params);
      // @ts-ignore
      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}