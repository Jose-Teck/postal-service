// One-Day Form
document.getElementById("oneDayForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const packageData = {
      senderName: document.getElementById("oneSender").value,
      receiverName: document.getElementById("oneReceiver").value,
      senderAddress: document.getElementById("oneSenderAddress").value,
      receiverAddress: document.getElementById("oneReceiverAddress").value,
      weight: parseFloat(document.getElementById("oneWeight").value),
      costPerWeight: parseFloat(document.getElementById("oneCostPerWeight").value),
      flatFee: parseFloat(document.getElementById("oneFlatFee").value),
    };
  
    fetch("http://localhost:3000/api/oneday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    })
    .then((response) => response.json())
    .then((data) => {
      alert("One-Day package added successfully!");
        // Optionally, you can clear the form fields after submission
        document.getElementById("oneDayForm").reset();
    //can you redirect back to the homepage
    window.location.href = "homepage.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to add One-Day package.");
    });
  });
  
  // Two-Day Form
  document.getElementById("twoDayForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const packageData = {
      senderName: document.getElementById("twoSender").value,
      receiverName: document.getElementById("twoReceiver").value,
      senderAddress: document.getElementById("twoSenderAddress").value,
      receiverAddress: document.getElementById("twoReceiverAddress").value,
      weight: parseFloat(document.getElementById("twoWeight").value),
      costPerWeight: parseFloat(document.getElementById("twoCostPerWeight").value),
      flatFee: parseFloat(document.getElementById("twoFlatFee").value),
    };
  
    fetch("http://localhost:3000/api/twoday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    })
    .then((response) => response.json())
    .then((data) => {
      alert("Two-Day package added successfully!");
      document.getElementById("twoDayForm").reset();
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to add Two-Day package.");
    });
  });


  