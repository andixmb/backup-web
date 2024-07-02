import { d as defineEventHandler, u as useRuntimeConfig, r as readBody } from '../../runtime.mjs';
import { b as buildJsonResponse, h as createPost } from '../../_/model.server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import '@prisma/client';
import '@faker-js/faker';

const post_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const password = config.POST_PASSWORD;
  const body = await readBody(event);
  if (body.password !== password) {
    return buildJsonResponse(401, { message: "Unauthorized" });
  } else {
    const data = {
      title: body.title,
      content: body.content,
      author: body.author
    };
    const post = await createPost(data.title, data.content, data.author);
    return buildJsonResponse(200, post);
  }
});

export { post_post as default };
//# sourceMappingURL=post.post.mjs.map
