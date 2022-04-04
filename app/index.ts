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

async function handleRequest(request: Request): Promise<Response> {
  const headers = new Headers();

  headers.set("Content-Type", "application/json;charset=UTF-8");
  // NOTE: Staging isn't gonna work with this.
  headers.set("Access-Control-Allow-Origin", "https://frontendista.cz");

  return new Response(
    JSON.stringify({
      data: "Hello, World!",
    }),
    {
      headers,
    },
  );
}
