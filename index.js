import Nope from "nope-validator";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const schema = Nope.object().shape({
  name: Nope.string()
    .min(1, "Name is too short")
    .max(50, "Name is too long"),
  email: Nope.string()
    .max(100, "Email too long")
    .email("Invalid email"),
  message: Nope.string()
    .min(1, "Message is too short")
    .max(999, "Message is too long")
    .required("Message is required"),
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  console.log(request.body);

  return new Response(
    JSON.stringify({
      hi: "hello worker",
    }),
    {
      headers: { "content-type": "application/json" },
    },
  );
}
