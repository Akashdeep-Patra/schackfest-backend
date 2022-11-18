// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import stories from '../../../mocks/stories';
import categories from '../../../mocks/categories';
import axios from 'axios';
import NextCors from 'nextjs-cors';
import feed from '../../../mocks/category_feed';


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
    let paramCategories = (req.query?.categories as string)?.split?.(',')?? categories;
    if(!paramCategories[0]){
      paramCategories = categories;
    }
    const filteredCategories = stories.data.feed.filter( cat => paramCategories.includes(cat.category))
    const injectedCategory = filteredCategories.map((cat)=>{
      const foundPosts = [];
      let count = 0;
      while(count!==feed.payload.posts.length && foundPosts.length<5){
        if(feed.payload.posts[count]?.categories.includes(cat.category)){
          foundPosts.push(feed.payload.posts[count])
        }
        count++;
      }
      return {
        ...cat,
        posts: foundPosts,
      }
    })
  res.status(200).send(injectedCategory);
}
