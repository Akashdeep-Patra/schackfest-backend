// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import stories from '../../../mocks/stories';
import { paginateArray } from '../../../util';
import categories from '../../../mocks/categories';
import axios from 'axios';


export enum RequestMethodEnum {
  GET = 'GET',
  POST = 'POST',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const limitedCategories = paginateArray(stories.data.feed,10,1);
    const data = await Promise.all(limitedCategories.map(async (category)=>{
        const _data =  await axios.get(`https://schackfest-backend.vercel.app/api/category-feed`,{
          params:{
            categories:category,
            limit: 5,
          }
        });
        return _data.data?.payload?.posts??[]
    }))
    const finalData = limitedCategories.map((cat,index)=>{
        return {...cat,posts:data[index]}
    })
  res.status(200).send(finalData);
}
