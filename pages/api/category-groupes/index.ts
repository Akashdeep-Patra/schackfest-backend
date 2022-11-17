// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import stories from '../../../mocks/stories';
import categories from '../../../mocks/categories';
import axios from 'axios';
import NextCors from 'nextjs-cors';
import { paginateArray } from '../../../util/index';


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

    let limitedCategories = [...stories.data.feed.filter(_cat=>paramCategories.includes(_cat.category))];
    const data = await Promise.all(limitedCategories.map(async (category)=>{
        const _data =  await axios.get(`https://schackfest-backend.vercel.app/api/category-feed`,{
          params:{
            categories:category,
            limit: 5,
          }
        });
        return _data.data?.payload?.posts??[]
    }))
    limitedCategories = paginateArray(limitedCategories, 10, 1);
    const finalData = limitedCategories.map((cat,index)=>{
        return {...cat,posts:data[index]}
    })
  res.status(200).send(finalData);
}
