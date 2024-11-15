import { Movie } from "../types";

export const renderMoviesToDOM = (movieHTML: string): void => {
  // We define a function called renderMoviesToDOM that accepts a parameter movieHTML, which represents the HTML markup of the movie cards
  const movieList = document.getElementById("movie-list"); // We use document.getElementById('movie-list') to select the DOM element with the ID "movie-list". This is the element where we want to insert the movie cards
  // We store the selected element in the movieList variable
  if (movieList) {
    // We then check if the movieList element exists using an if statement
    movieList.innerHTML = movieHTML; // If movieList exists (truthy), we set its innerHTML property to the movieHTML received as a parameter. This effectively inserts the movie cards HTML into the "movie-list" element.
  } else {
    console.error('"Could not find element with id "movie-list"'); // If movieList is null or undefined (falsy), indicating that no element with the ID "movie-list" was found, we log an error message to the console using console.error(). This helps in identifying and debugging issues related to missing or incorrect DOM elements.
  }
};
