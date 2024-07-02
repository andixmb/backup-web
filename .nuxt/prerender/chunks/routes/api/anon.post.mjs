import { defineEventHandler, readBody, createError } from 'file:///home/andix/andixblog/node_modules/h3/dist/index.mjs';
import { u as useRuntimeConfig } from '../../runtime.mjs';
import { e as createMessage, b as buildJsonResponse } from '../../_/model.server.mjs';
import 'file:///home/andix/andixblog/node_modules/ofetch/dist/node.mjs';
import 'file:///home/andix/andixblog/node_modules/destr/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/andix/andixblog/node_modules/hookable/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/klona/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/scule/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/defu/dist/defu.mjs';
import 'file:///home/andix/andixblog/node_modules/ohash/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/ufo/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/andix/andixblog/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/andix/andixblog/node_modules/pathe/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/unified/index.js';
import 'file:///home/andix/andixblog/node_modules/mdast-util-to-string/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark/index.js';
import 'file:///home/andix/andixblog/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-character/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-chunked/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///home/andix/andixblog/node_modules/slugify/slugify.js';
import 'file:///home/andix/andixblog/node_modules/remark-parse/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-rehype/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/hast-util-to-string/index.js';
import 'file:///home/andix/andixblog/node_modules/github-slugger/index.js';
import 'file:///home/andix/andixblog/node_modules/detab/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-emoji/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-gfm/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-external-links/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-raw/index.js';
import 'file:///home/andix/andixblog/node_modules/@prisma/client/default.js';
import 'file:///home/andix/andixblog/node_modules/@faker-js/faker/dist/esm/index.mjs';

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
