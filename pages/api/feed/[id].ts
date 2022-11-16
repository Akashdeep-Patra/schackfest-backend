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
        const foundFeed = getFeedMock.feed.find(feedItem => feedItem.i === req?.query?.id)|| null
        return res.status(foundFeed? 200: 404).send(foundFeed)
  
    default:
        break;
  }
}
