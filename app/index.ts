import Nope from "nope-validator";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const dataSchema = Nope.object().shape({
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
  await fetch(DISCORD_CONTACT_MESSAGE_WEBHOOK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "New message",
          description: "TODO: message",
          color: 1920728,
          fields: [
            {
              name: "Email",
              value: "TODO: email",
            },
          ],
          author: {
            name: "TODO: name",
          },
          timestamp: new Date(),
        },
      ],
    }),
  });

  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "https://frontendista.cz");

  return new Response("OK", {
    headers,
  });
}
