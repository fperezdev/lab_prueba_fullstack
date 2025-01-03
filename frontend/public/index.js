if (typeof document !== 'undefined') {
  document.getElementById("fetchButton").addEventListener("click", () => {
    fetch("http://localhost:3001/api") // Cambia la URL según tu backend
      .then((response) => {
        console.log("responseee");
        response.text()})
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
} else {
  console.error("document is not defined. Ensure you are running this in a browser environment.");
}
