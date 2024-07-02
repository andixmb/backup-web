import { defineEventHandler, getQuery } from 'file:///home/andix/andixblog/node_modules/h3/dist/index.mjs';
import { p as postAll, b as buildJsonResponse, f as postSlug, g as postId } from '../../_/model.server.mjs';
import 'file:///home/andix/andixblog/node_modules/@prisma/client/default.js';
import 'file:///home/andix/andixblog/node_modules/@faker-js/faker/dist/esm/index.mjs';

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
