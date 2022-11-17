// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import stories from '../../../mocks/stories';


export enum RequestMethodEnum {
  GET = 'GET',
  POST = 'POST',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(stories);
}
