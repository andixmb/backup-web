import { createMessage, buildJsonResponse } from "../model.server";
export default defineEventHandler(async (event) => {
  const { message, short, token }: any = await readBody(event);

  if (!token) {
    throw createError({
      statusCode: 422,
      statusMessage: "Token not provided.",
    });
  }
  const validateToket = await verifyTurnstileToken(token);
  if (!validateToket) {
    throw createError({
      statusCode: 422,
      statusMessage: "Token not valid.",
    });
  } else {
    const response = await createMessage(short, message.toString());
    return buildJsonResponse(200, response);
  }
});
