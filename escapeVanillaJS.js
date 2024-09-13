document.addEventListener("DOMContentLoaded", () => {
  // Room 1: Find the most recent book in the JSON Library
  document.getElementById("solveRoom1").addEventListener("click", () => {
    // Simulating fetch request for books data
    const books = [
      { title: "Eloquent JavaScript", published: "2018-12-04" },
      { title: "You Don't Know JS", published: "2015-12-27" },
      { title: "JavaScript: The Good Parts", published: "2008-05-15" },
    ];

    // Find the most recent book by comparing dates
    const mostRecentBook = findMostRecentBook(books);

    // Display the result
    document.getElementById(
      "room1Result"
    ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
  });

  // Room 2: Find common concepts between JS and React
  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "closure"]);

    // Find the common concepts using set intersection
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);

    // Display the result
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // Room 3: Navigate the asynchronous labyrinth
  document.getElementById("solveRoom3").addEventListener("click", () => {
    const directions = [
      { step: "Enter the labyrinth." },
      { step: "Turn left at the JavaScript sculpture." },
      { step: "Climb the callback mountain." },
      { step: "Swim across the promise lake." },
      { step: "Arrive at the gates of React." },
    ];

    // Navigate through the labyrinth with delays
    navigateLabyrinth(directions).then((message) => {
      document.getElementById("room3Result").textContent = message;
    });
  });
});

// Function to find the most recent book based on the published date
function findMostRecentBook(books) {
  return books.reduce((mostRecent, book) =>
    new Date(book.published) > new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

// Function to find the intersection of two sets
function findIntersection(setA, setB) {
  return new Set([...setA].filter((item) => setB.has(item)));
}

// Asynchronous function to navigate through a list of directions with a 1-second delay
async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // Add a 1-second delay between each step
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the current step to the console
    console.log(`Navigating: ${direction.step}`);
  }

  // Return a success message after completing all steps
  return "Congratulations! You've reached the gates of React!";
}
