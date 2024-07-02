import { db } from "../server/db.server";
import { faker } from "@faker-js/faker";

type Post = {
  slug: string;
  title: string;
  content: string;
  published: boolean;
  author: string;
};
type Anmes = {
  content: string;
  short: string;
};
type Anlink = {
  short: string;
  author: string;
};

export const PostFactory = (): Post => {
  return {
    slug: faker.lorem.slug(),
    title: faker.lorem.words(),
    content: faker.lorem.paragraphs() + faker.lorem.paragraphs(),
    published: true,
    author: faker.internet.userName(),
  };
};
export const AnmesFactory = (): Anmes => {
  return {
    content: faker.lorem.paragraphs() + faker.lorem.paragraphs(),
    short: faker.string.uuid(),
  };
};
export const AnlinkFactory = (): Anlink => {
  return {
    short: faker.lorem.words(),
    author: faker.string.uuid(),
  };
};

export const dataFactory: Post[] = faker.helpers.multiple(PostFactory,{count: 30});
export const dataAnmesFactory: Anmes[] = faker.helpers.multiple(AnmesFactory,{count: 10});
export const dataAnlinkFactory: Anlink[] = faker.helpers.multiple(AnlinkFactory,{count: 10});

//export const dataInboxFactory: Inboxs[] = faker.helpers.multiple(InboxFactory,{count: 10});


const seed = async () => {


    await Promise.all(
        dataFactory.map(post => {
            return db.post.create({
                data: post
            });
        
        })
    );

    await Promise.all(
        dataAnmesFactory.map(anmes => {
            return db.anmes.create({
                data: anmes
            });
        
        })
    );
    await Promise.all(
        dataAnlinkFactory.map(anlink => {
            return db.anlink.create({
                data: anlink
            });
        
        })
    );

};

(async () => {
    await seed();
    await db.$disconnect();
})();
