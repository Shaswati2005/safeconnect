chrome.history.search({ text: "", maxResults: 10 }, function (historyItems) {
  historyItems.forEach(function (page) {
    console.log("Visited URL:", page.url);

    // Sending the visited URL to the Next.js app (localhost)
    fetch("http://localhost:3000/api/logHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: page.url,
        title: page.title,
        visitTime: page.lastVisitTime,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  });
});
