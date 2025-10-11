(function () {
  const aStr = prompt("Enter the first integer:");
  const bStr = prompt("Enter the second integer:");

  const a = Number(aStr);
  const b = Number(bStr);

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    alert("Please enter valid integers.");
    console.log("Invalid input(s). Received:", aStr, bStr);
    return;
  }

  if (a > b) {
    console.log(String(a));
  } else if (b > a) {
    console.log(String(b));
  } else {
    console.log(`Both are equal: ${a}`);
  }
})();
