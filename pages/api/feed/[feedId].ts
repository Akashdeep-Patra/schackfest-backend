// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import getFeedMock from '../../../mocks/getFeedMock'

export enum RequestMethodEnum {
    GET = 'GET',
    POST = 'POST'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case RequestMethodEnum.GET:
        const feedId = req?.query?.id
        const foundFeed = getFeedMock.feed.find(feedItem => feedItem.i === feedId)|| null
        res.status(200).send(foundFeed || {
          message:'Feed not found'
        })
  
    default:
        break;
  }
}
