import { title } from "process";
import { db } from "./db.server";
import {faker} from "@faker-js/faker";

export const slug = async (title: string) => {
  let slug = title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  let slugExist = await postSlug(slug);
  let randNumber = new Date().getTime();
  if (slugExist === null) {
    return slug;
  } else {
    return slug + "-" + randNumber;
  }
};
export const shortMake = async (author: string) => {
  let randNumber = new Date().getTime();
  let short = author
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  short = short + "-" + randNumber + Math.floor(Math.random() * 1000);
  let shortExist = await anlinkShort(short);
  if (shortExist === null) {
    return short;
  } else {
    return short + "-" + Math.floor(Math.random() * 1000);
  }
};

export const postAll = async () => {
  const post = await db.post.findMany({orderBy: { id: 'desc' } });
  return post;
};
export const postId = async (id: any) => {
  const post = await db.post.findFirst({
    where: { id: id },
  });
  return post;
};
export const postSlug = async (slug: any) => {
  const post = await db.post.findFirst({
    where: { slug: slug },
  });
  return post;
};

export const createPost = async (
  title: string,
  content: string,
  author: string
) => {
  const slugs = await slug(title);
  const postx = {
    title: title,
    content: content,
    author: author,
    slug: slugs,
    published: true,
  };
  const post = await db.post.create({
    data: postx,
  });

  return post;
};

export const anlinkAll = async () => {
  return await db.anlink.findMany();
};
export const anlinkId = async (id: any) => {
  return await db.anlink.findFirst({ where: { id: id } });
};
export const createLink = async (author: string) => {
  let short = await shortMake(author);
  const link = {
    short: short,
    author: author,
  };
  return await db.anlink.create({ data: link });
};

export const anlinkShort = async (short: string) => {
  return await db.anlink.findFirst({ where: { short: short } });
};
export const anmesAll = async () => {
  return await db.anmes.findMany();
};
export const anmesId = async (id: any) => {
  return await db.anmes.findFirst({ where: { id: id } });
};
export const anmesShort = async (short: string) => {
  return await db.anmes.findMany({ where: { short: short },orderBy: { id: 'desc' } });
};
export const createMessage = async (short: string, content: string) => {
  const message = {
    short: short,
    content: content,
  };
  return await db.anmes.create({ data: message });
};


export const buildJsonResponse = (status: number, body: any , custom?: any ) => {
  return {
    statusCode: status,
    body: body,
    ...custom,
    "x-alinko-reqid": faker.string.uuid()
  };
};