import Nope from "nope-validator";

export const discordWebhookScheme = Nope.object().shape({
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
