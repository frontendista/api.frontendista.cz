import { Router } from "itty-router";

import type { IHTTPMethods } from "itty-router"

const router = Router<Request, IHTTPMethods>({
  base: ENVIRONMENT === "dev" ? "" : `/${BASE_PATH}`
});

router.post("/discord", async (req, res) => {
  return new Response("OK");
});

router.all("*", () => new Response("Not Found.", { status: 404 }));

export const handleRequest = (request: Request) => router.handle(request);
