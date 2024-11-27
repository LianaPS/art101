/*
 * Author: Liana Simonelli
 * Date: 25, November 2024
 */

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the API docs)
    url: "https://api.chucknorris.io/jokes/random",
    // The data to send (will be converted to a query string)
    data: {
        // Additional parameters can be sent here if needed (e.g., API keys)
        // For this API, no additional data is required
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What to do when the API call is successful
    success: function (data) {
        // Display the data in the output div
        $("#output").html(`<p>${data.value}</p>`);
        console.log(data); // Log the data for debugging
    },
    // What to do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // Display an error message in the output div
        $("#output").html(`<p>Error: ${textStatus}</p>`);
        console.error("Error:", textStatus, errorThrown);
    }
});