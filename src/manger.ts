import {createStore, Action, combineReducers} from 'redux';

const defaultState = {
  login: {
    token: '',
    server: '',
  },
};
export type StateType = typeof defaultState;
export interface SimpleAction extends Action<string> {
  readonly type: string;
  modify(arg0: StateType): StateType;
  // modifyState(state: StateType): StateType;
}
export function makeLoginInfoUpdateAction(token: string, server: string) {
  return {
    type: 'LOGIN_INFO_UPDATE',
    modify: (state: StateType) => {
      let result = {
        ...state,
        login: {
          token: token,
          server: server,
        },
      };
      // console.log('Updating..');
      // console.log(JSON.stringify(result));
      return result;
    },
  } as SimpleAction;
}

const myReducer = (state = defaultState, action: SimpleAction) => {
  if (!action.type.startsWith('@@redux')) {
    // console.log(
    //   `Operating action ${String(typeof state)} ${Object.keys(state)}`,
    // );
    return action.modify(state);
  } else {
    // console.log(`Bad action: ${action.type}`);
    return state;
  }
};

const store = createStore(myReducer);

export {store};
