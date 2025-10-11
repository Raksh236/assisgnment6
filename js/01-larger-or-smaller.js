(function () {
  const aStr = prompt("Enter the first integer:");
  const bStr = prompt("Enter the second integer:");
  const a = parseInt(aStr, 10);
  const b = parseInt(bStr, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Please enter valid integers.");
    console.error("Invalid input(s). Received:", aStr, bStr);
    return;
  }

  if (a > b) {
    console.log(String(a));
    console.log(`Larger number is ${a}.`);
  } else if (b > a) {
    document.body.innerHTML = String(b);
    console.log(`Larger number is ${b}.`);
  } else {
    document.body.innerHTML = `Both are equal: ${a}`;
    console.log("Numbers are equal.");
  }
})();
