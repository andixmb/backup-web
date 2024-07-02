import { buildJsonResponse, createLink, anmesShort , anlinkShort} from "../model.server";
export default defineEventHandler(async (event) => {
  const query: any = getQuery(event);

  if (query.method == "create" && query.name) {
    let response = await createLink(query.name);
    return buildJsonResponse(200, response);
  } else if (query.method == "show" && query.short) {
    let response = await anmesShort(query.short);
    let anlink = await anlinkShort(query.short);
    return buildJsonResponse(200, response, {anlink: anlink });
  }
});
