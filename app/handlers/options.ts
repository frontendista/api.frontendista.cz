const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

export async function handleOptions(request: Request) {
  let headers = request.headers;

  if (
    headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  ) {
    let respHeaders = {
      ...corsHeaders,
      "Access-Control-Allow-Headers": request.headers.get(
        "Access-Control-Request-Headers",
      )!,
    };

    return new Response(null, {
      headers: respHeaders,
    });
  } else {
    return new Response(null, {
      headers: {
        Allow: "GET, HEAD, POST, OPTIONS",
      },
    });
  }
}
