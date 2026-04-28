const handleAuthRequest = async (request) => {
  const [{ getAuth }, { toNextJsHandler }] = await Promise.all([
    import("@/lib/auth"),
    import("better-auth/next-js"),
  ]);

  const { GET } = toNextJsHandler(getAuth());
  return GET(request);
};

export const GET = handleAuthRequest;
export const POST = handleAuthRequest;
