import { postAll, buildJsonResponse, postSlug, postId } from "../model.server";

export default defineEventHandler(async (event) => {
  const query: any = getQuery(event);

  if (query.method == "all") {
    let response = await postAll();
    return buildJsonResponse(200, response);
  } else if (query.method == "slug" && query.slug) {
    let response = await postSlug(query.slug);
    return buildJsonResponse(200, response);
  } else if (query.method == "id" && query.id) {
    let response = await postId(query.id);
    return buildJsonResponse(200, response);
  }else if(query.method == "limit" && query.limit ){
    let response = await postAll();
    return buildJsonResponse(200, response.slice(query.from ?? 0, query.limit) , 
    { 
     total: response.length , 
     limit : parseInt(query.from ?? query.limit) , 
     from: parseInt(query.limit ?? 0)
     }
    );
  }else if(query.method == 'pagination' && query.page){
    let page = parseInt(query.page);
    let limit = parseInt(query.limit ?? 10);
    let response = await postAll();
    let total = response.length;
    let totalPage = Math.ceil(total / limit);
    let from = (page - 1) * limit;
    let to = page * limit;
    let data = response.slice(from, to);
    return buildJsonResponse(200, data, {
      total: total,
      totalPage: totalPage,
      page: page,
      limit: limit,
    });
  
}else{
    return buildJsonResponse(404, { message: "Not Found" });
  }
});
