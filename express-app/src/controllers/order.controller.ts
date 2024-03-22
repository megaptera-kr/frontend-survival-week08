import { Express, Request, Response } from 'express';

import orders from '../database/orders.table';

import RequestOrderType from '../types/RequestOrderType';
import OrderTableType from '../types/OrderTableType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<RequestOrderType>, res: Response) => {
    const { body } = req;
    const orderId = Date.now().toString();
    const now = new Date();

    const newOrderTableRow: OrderTableType = {
      id: orderId,
      orderType: body.orderType,
      status: body.orderKind === '매장주문' ? '매장주문완료' : '포장주문완료',
      totalPrice: body.totalPrice,
      createAt: now,
      updateAt: now,
      menuItems: body.menuItems,
    };

    orders.push(newOrderTableRow);

    res.status(201).send({ orderId: newOrderTableRow.id });
  });

  app.get('/orders/:orderId', (req: Request, res: Response) => {
    const { orderId } = req.params;

    const order: OrderTableType | undefined = orders.find(
      (item: OrderTableType) => item.id === orderId,
    );

    if (!order) {
      res.status(404).send(`The order not Found - ${orderId}`);
    }

    res.send(order);
  });
}

export default OrderController;
