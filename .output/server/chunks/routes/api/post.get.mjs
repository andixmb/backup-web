import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import { p as postAll, b as buildJsonResponse, f as postSlug, g as postId } from '../../_/model.server.mjs';
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

const post_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  const query = getQuery(event);
  if (query.method == "all") {
    let response = await postAll();
    return buildJsonResponse(200, response);
  } else if (query.method == "slug" && query.slug) {
    let response = await postSlug(query.slug);
    return buildJsonResponse(200, response);
  } else if (query.method == "id" && query.id) {
    let response = await postId(query.id);
    return buildJsonResponse(200, response);
  } else if (query.method == "limit" && query.limit) {
    let response = await postAll();
    return buildJsonResponse(
      200,
      response.slice((_a = query.from) != null ? _a : 0, query.limit),
      {
        total: response.length,
        limit: parseInt((_b = query.from) != null ? _b : query.limit),
        from: parseInt((_c = query.limit) != null ? _c : 0)
      }
    );
  } else if (query.method == "pagination" && query.page) {
    let page = parseInt(query.page);
    let limit = parseInt((_d = query.limit) != null ? _d : 10);
    let response = await postAll();
    let total = response.length;
    let totalPage = Math.ceil(total / limit);
    let from = (page - 1) * limit;
    let to = page * limit;
    let data = response.slice(from, to);
    return buildJsonResponse(200, data, {
      total,
      totalPage,
      page,
      limit
    });
  } else {
    return buildJsonResponse(404, { message: "Not Found" });
  }
});

export { post_get as default };
//# sourceMappingURL=post.get.mjs.map
