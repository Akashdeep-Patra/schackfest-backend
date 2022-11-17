// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import categories from '../../../mocks/categories';
import feed from '../../../mocks/category_feed';




export enum RequestMethodEnum {
  GET = 'GET',
  POST = 'POST',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // offset limit
    
    const paramCategories = (req.query?.categories as string)?.split?.(',') || categories;
    
    const filteredFeed = feed.payload.posts.filter(post=> post.categories.some(_category=> paramCategories.includes(_category)))
    feed.payload.posts = filteredFeed; 
  res.status(200).send(feed);
}
