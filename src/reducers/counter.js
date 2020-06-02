import { INCREMENT, DECREMENT } from "../actions/index";

const INITIAL_STATE = {
  count: 0
};

function handleChange(state, change) {
  const { count } = state;
  return {
    count: count + change
  };
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return handleChange(state, 1);
    case DECREMENT:
      return handleChange(state, -1);

    default:
      return state;
  }
}
