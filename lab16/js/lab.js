/*
 * Author: Liana Simonelli
 * Date: 2, December 2024
 */

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the API docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (this API doesn't require additional data, so this can be omitted)
    data: {}, 
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What we do when the API call is successful
    success: function (comicObj) {
        console.log(comicObj); // Log the returned object to the console

        // Add the comic title to the page
        $('body').append(`<h1>${comicObj.title}</h1>`);

        // Add the comic image to the page
        $('body').append(
            `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}" />`
        );
    },
    // What we do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});

//code formatting check by chatGBT