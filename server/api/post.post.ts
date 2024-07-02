import { createPost, buildJsonResponse } from "../model.server";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const password = config.POST_PASSWORD;
  const body: any = await readBody(event);
  if (body.password !== password) {
    return buildJsonResponse(401, { message: "Unauthorized" });
  } else {
    const data = {
      title: body.title,
      content: body.content,
      author: body.author,
    };
    const post = await createPost(data.title, data.content, data.author);
    return buildJsonResponse(200, post);
  }
});
