(function () {
  for (let i = 1; i <= 100; i++) {
    const by3 = i % 3 === 0;
    const by5 = i % 5 === 0;
    if (by3 && by5) {
      console.log("Marco! Polo!");
    } else if (by3) {
      console.log("Marco!");
    } else if (by5) {
      console.log("Polo!");
    } else {
      console.log(i);
    }
  }
})();
