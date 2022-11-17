// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import categories from '../../../mocks/categories';
import feed from '../../../mocks/category_feed';
import { paginateArray } from '../../../util';




export enum RequestMethodEnum {
  GET = 'GET',
  POST = 'POST',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
    // offset limit
    const { limit = 10, offset = 1} = req.query
    const feedCopy = JSON.parse(JSON.stringify(feed))
    const paramCategories = (req.query?.categories as string)?.split?.(',') || categories;
    const filteredFeed = feed.payload.posts.filter(post=> post.categories.some(_category=> paramCategories.includes(_category)))
    feedCopy.payload.totalCount = filteredFeed.length;
    feedCopy.payload.posts = paginateArray(filteredFeed,Number(limit),Number(offset)); 
    res.status(200).send(feedCopy);
}
