import { defineEventHandler, getQuery } from 'file:///home/andix/andixblog/node_modules/h3/dist/index.mjs';
import { c as createLink, b as buildJsonResponse, a as anmesShort, d as anlinkShort } from '../../_/model.server.mjs';
import 'file:///home/andix/andixblog/node_modules/@prisma/client/default.js';
import 'file:///home/andix/andixblog/node_modules/@faker-js/faker/dist/esm/index.mjs';

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
