// Make a GET request to the API
fetch('https://fakestoreapi.com/products')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Data contains the JSON response from the API
    console.log(data);
    // Here you can do whatever you want with the data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle any errors that occurred during the fetch
  });
