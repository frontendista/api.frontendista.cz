import { Router } from "itty-router";

import { handleDiscord } from "./discord";
import { handleOptions } from "./options";

import type { IHTTPMethods } from "itty-router"

const router = Router<Request, IHTTPMethods>({
  base: ENVIRONMENT === "dev" ? "" : `/${BASE_PATH}`
});

router.post("/discord", handleDiscord);
router.options("*", handleOptions);

router.all("*", () => new Response("Not Found.", { status: 404 }));

export const handleRequest = (request: Request) => router.handle(request);
