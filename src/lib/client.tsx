import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  withCredentials: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source : {}) => builder.image(source);


// Access to XMLHttpRequest  has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.