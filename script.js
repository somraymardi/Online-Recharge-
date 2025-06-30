document.getElementById("rechargeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const mobile = document.getElementById("mobile").value;

  if (/^\d{10}$/.test(mobile)) {
    alert("Recharge initiated for: " + mobile);
  } else {
    alert("Please enter a valid 10-digit mobile number.");
  }
});
