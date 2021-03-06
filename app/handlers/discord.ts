import { discordWebhookScheme } from "../utils/validation-schemes";

interface IData {
  name?: string;
  email?: string;
  message: string;
}

export async function handleDiscord(req: Request) {
  const body = await req.json<IData>();

  const headers = new Headers();
  headers.append("Content-Type", "text/plain");
  headers.append("Access-Control-Allow-Origin", "*");

  const validationResult = discordWebhookScheme.validate(body);

  if (validationResult) {
    return new Response(JSON.stringify(validationResult), {
      status: 400,
      headers,
    });
  }

  try {
    const webhookResult = await fetch(DISCORD_CONTACT_MESSAGE_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createMessage(body)),
    });

    if (webhookResult.ok) {
      return new Response("Created", {
        status: 201,
        headers,
      });
    } else {
      console.error(webhookResult);
      return new Response("Discord webhook has failed.", {
        status: 500,
        headers,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response("Discord communication has failed.", {
      status: 500,
      headers,
    });
  }
}

function createMessage({ message, email, name }: IData) {
  let fields: { name: string; value: string }[] = [];

  let temp = {
    embeds: [
      {
        title: "New message",
        description: message,
        color: 1920728,
        fields,
        author: {
          name: name ?? "Anonymous",
        },
        timestamp: new Date(),
      },
    ],
  };

  if (email) {
    fields.push({
      name: "Email",
      value: email,
    });
  }

  return temp;
}
