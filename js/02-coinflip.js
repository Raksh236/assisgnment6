(function () {
  let choice = prompt('Choose "Heads" or "Tails"').trim();
  if (!choice) return;
  choice = choice.toLowerCase();

  const coinFlip = Math.floor(Math.random() * 2);
  const isHeads = coinFlip === 0;

  const flipText = isHeads ? "heads" : "tails";

  if (isHeads && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else if (isHeads && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
  } else if (!isHeads && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
  } else if (!isHeads && choice === "tails") {
    alert("The flip was tails and you chose tails...you win!");
  } else {
    alert(
      `You entered "${choice}". Please type exactly Heads or Tails next time.`
    );
  }

  console.log("Flip result:", flipText);
})();
