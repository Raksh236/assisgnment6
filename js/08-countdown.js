(function () {
  const nStr = prompt("Enter a number to count down from:");
  const n = parseInt(nStr, 10);
  if (Number.isNaN(n) || n < 0) {
    alert("Please enter a valid non-negative integer.");
    return;
  }
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
})();
