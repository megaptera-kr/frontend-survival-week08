/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import fixtures from '../../fixtures';
import BASE_URL from '../api';

const { restaurants, order } = fixtures;

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants }),
  )),
  rest.get(`${BASE_URL}/orders/:id`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ order }),
  )),
];

export default handlers;
