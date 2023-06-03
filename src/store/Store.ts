import { singleton } from 'tsyringe';
import BaseStore, { Action } from './BaseStore';

const initialState = {
  inputText: '',
  inputCagegory: '전체',
  ReceiptID: '',
  Receipt: '',
  cart: [''],
};

export type State = typeof initialState

export function changeText(payload:string) {
  return ({ type: 'TEXTINPUT', payload });
}
export function changeCategory(payload:string) {
  return ({ type: 'CATEGORYINPUT', payload });
}
export function addCart(payload:string) {
  return ({ type: 'MENUINPUT', payload });
}
export function deleteCart(payload:string) {
  return ({ type: 'MENUOUTPUT', payload });
}
export function refreshCart() {
  return ({ type: 'MENUREFRESH', payload: '' });
}
export function changeID(payload:string) {
  return ({ type: 'IDCHANGE', payload });
}
export function inputReceipt(payload:string) {
  return ({ type: 'RECEIPTINPUT', payload });
}

function reducer(state:State, action:Action) {
  const changedCart = (state.cart).filter((menu, index) => (
    index !== (Number(action.payload) + 1)
  ));
  switch (action.type) {
  case 'TEXTINPUT':
    return {
      ...state, inputText: action.payload,
    };
  case 'CATEGORYINPUT':
    return {
      ...state, inputCagegory: action.payload,
    };
  case 'MENUINPUT':
    return {
      ...state, cart: [...state.cart, action.payload],
    };
  case 'MENUOUTPUT':
    return {
      ...state, cart: changedCart,
    };
  case 'MENUREFRESH':
    return {
      ...state, cart: [''],
    };
  case 'IDCHANGE':
    return {
      ...state, ReceiptID: action.payload,
    };
  case 'RECEIPTINPUT':
    return {
      ...state, Receipt: action.payload,
    };
  default:
    return state;
  }
}

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducer);
  }
}
