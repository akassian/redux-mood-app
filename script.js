window.onload = function () {
  const mood = document.querySelector("#mood");
  const body = document.querySelector("body");
  const MOOD_TYPES = ["HAPPY", "SAD", "ANGRY", "CONFUSED"];

  store.subscribe(() => {
    const currentMood = store.getState().mood;
    const currentColor = store.getState().color;
    mood.innerText = currentMood;
    body.style.background = currentColor;
  });

  // Set initial state of mood
  mood.innerText = store.getState().mood;
  body.style = { backgroundColor: store.getState().color };

  document.querySelector("#happy").addEventListener("click", function () {
    store.dispatch({ type: "HAPPY" });
  });

  document.querySelector("#sad").addEventListener("click", function () {
    store.dispatch({ type: "SAD" });
  });

  document.querySelector("#angry").addEventListener("click", function () {
    store.dispatch({ type: "ANGRY" });
  });

  document.querySelector("#confused").addEventListener("click", function () {
    store.dispatch({ type: "CONFUSED" });
  });

  document.querySelector("#random").addEventListener("click", function () {
    store.dispatch({
      type: MOOD_TYPES[Math.floor(Math.random() * MOOD_TYPES.length)],
    });
  });
};
