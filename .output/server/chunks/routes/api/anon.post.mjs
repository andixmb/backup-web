import { u as useRuntimeConfig, d as defineEventHandler, r as readBody, c as createError } from '../../runtime.mjs';
import { e as createMessage, b as buildJsonResponse } from '../../_/model.server.mjs';
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

const endpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const verifyTurnstileToken = async (token, event) => {
  const secretKey = useRuntimeConfig(event).turnstile.secretKey;
  return await $fetch(endpoint, {
    method: "POST",
    body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  });
};

const anon_post = defineEventHandler(async (event) => {
  const { message, short, token } = await readBody(event);
  if (!token) {
    throw createError({
      statusCode: 422,
      statusMessage: "Token not provided."
    });
  }
  const validateToket = await verifyTurnstileToken(token);
  if (!validateToket) {
    throw createError({
      statusCode: 422,
      statusMessage: "Token not valid."
    });
  } else {
    const response = await createMessage(short, message.toString());
    return buildJsonResponse(200, response);
  }
});

export { anon_post as default };
//# sourceMappingURL=anon.post.mjs.map
