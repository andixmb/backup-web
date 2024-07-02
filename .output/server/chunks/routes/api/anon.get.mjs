import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import { c as createLink, b as buildJsonResponse, a as anmesShort, d as anlinkShort } from '../../_/model.server.mjs';
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

const anon_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (query.method == "create" && query.name) {
    let response = await createLink(query.name);
    return buildJsonResponse(200, response);
  } else if (query.method == "show" && query.short) {
    let response = await anmesShort(query.short);
    let anlink = await anlinkShort(query.short);
    return buildJsonResponse(200, response, { anlink });
  }
});

export { anon_get as default };
//# sourceMappingURL=anon.get.mjs.map
