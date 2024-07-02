import { PrismaClient } from 'file:///home/andix/andixblog/node_modules/@prisma/client/default.js';
import { faker } from 'file:///home/andix/andixblog/node_modules/@faker-js/faker/dist/esm/index.mjs';

let db;
{
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

const slug = async (title2) => {
  let slug2 = title2.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  let slugExist = await postSlug(slug2);
  let randNumber = (/* @__PURE__ */ new Date()).getTime();
  if (slugExist === null) {
    return slug2;
  } else {
    return slug2 + "-" + randNumber;
  }
};
const shortMake = async (author) => {
  let randNumber = (/* @__PURE__ */ new Date()).getTime();
  let short = author.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  short = short + "-" + randNumber + Math.floor(Math.random() * 1e3);
  let shortExist = await anlinkShort(short);
  if (shortExist === null) {
    return short;
  } else {
    return short + "-" + Math.floor(Math.random() * 1e3);
  }
};
const postAll = async () => {
  const post = await db.post.findMany({ orderBy: { id: "desc" } });
  return post;
};
const postId = async (id) => {
  const post = await db.post.findFirst({
    where: { id }
  });
  return post;
};
const postSlug = async (slug2) => {
  const post = await db.post.findFirst({
    where: { slug: slug2 }
  });
  return post;
};
const createPost = async (title2, content, author) => {
  const slugs = await slug(title2);
  const postx = {
    title: title2,
    content,
    author,
    slug: slugs,
    published: true
  };
  const post = await db.post.create({
    data: postx
  });
  return post;
};
const createLink = async (author) => {
  let short = await shortMake(author);
  const link = {
    short,
    author
  };
  return await db.anlink.create({ data: link });
};
const anlinkShort = async (short) => {
  return await db.anlink.findFirst({ where: { short } });
};
const anmesShort = async (short) => {
  return await db.anmes.findMany({ where: { short }, orderBy: { id: "desc" } });
};
const createMessage = async (short, content) => {
  const message = {
    short,
    content
  };
  return await db.anmes.create({ data: message });
};
const buildJsonResponse = (status, body, custom) => {
  return {
    statusCode: status,
    body,
    ...custom,
    "x-alinko-reqid": faker.string.uuid()
  };
};

export { anmesShort as a, buildJsonResponse as b, createLink as c, anlinkShort as d, createMessage as e, postSlug as f, postId as g, createPost as h, postAll as p };
//# sourceMappingURL=model.server.mjs.map
