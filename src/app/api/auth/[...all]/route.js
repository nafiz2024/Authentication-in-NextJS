const getAuthHandlers = async () => {
  const [{ getAuth }, { toNextJsHandler }] = await Promise.all([
    import("@/lib/auth"),
    import("better-auth/next-js"),
  ]);

  return toNextJsHandler(getAuth());
};

export const GET = async (request) => {
  const { GET } = await getAuthHandlers();
  return GET(request);
};

export const POST = async (request) => {
  const { POST } = await getAuthHandlers();
  return POST(request);
};
