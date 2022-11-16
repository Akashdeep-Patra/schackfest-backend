// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import getFeedMock, { getFeedMockType } from '../../../mocks/getFeedMock'

export enum RequestMethodEnum {
    GET = 'GET',
    POST = 'POST'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<getFeedMockType>
) {
  switch (req.method) {
    case RequestMethodEnum.GET:
        res.status(200).send(getFeedMock)
        break;
  
    default:
        break;
  }
}
