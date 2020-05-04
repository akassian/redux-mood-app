const INITIAL_STATE = { mood: "╭∩╮༼☯۝☯༽╭∩╮", color: "gray" };
const MOODS = {};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { mood: "⊂◉‿◉つ", color: "green" };

    case "SAD":
      return { mood: "(╥_╥)", color: "blue" };

    case "ANGRY":
      return { mood: "(╬ಠ益ಠ)", color: "red" };

    case "CONFUSED":
      return { mood: "(。ヘ°)", color: "yellow" };

    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);
