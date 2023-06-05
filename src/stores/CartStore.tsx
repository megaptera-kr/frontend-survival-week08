import { singleton } from "tsyringe";
import { Action, Store } from "usestore-ts";

@singleton()
@Store()
export default class CartStore {
    cart = [];

    @Action()
    add() {
        this.cart.push()
    }
}