import { rest } from 'msw';

import { BASE_URL } from '../apis/axios';
import { restaurants } from '../../fixtures';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants }),
  )),
];

export default handlers;
