document.addEventListener("DOMContentLoaded", () => {
    const filmsList = document.getElementById("films");
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const availableTickets = document.getElementById("available-tickets");
    const buyTicketButton = document.getElementById("buy-ticket");
  
    const API_URL = "http://localhost:3000/films";
  
    // Fetch and display all films
    fetch(API_URL)
      .then((response) => response.json())
      .then((films) => {
        films.forEach((film) => {
          const li = document.createElement("li");
          li.textContent = film.title;
          li.className = "film item";
          li.addEventListener("click", () => displayFilmDetails(film));
          filmsList.appendChild(li);
        });
  
        // Display the first film by default
        displayFilmDetails(films[0]);
      });
  
    // Display selected film details
    function displayFilmDetails(film) {
      poster.src = film.poster;
      title.textContent = film.title;
      runtime.textContent = film.runtime;
      showtime.textContent = film.showtime;
      const ticketsAvailable = film.capacity - film.tickets_sold;
      availableTickets.textContent = ticketsAvailable;
  
      buyTicketButton.disabled = ticketsAvailable === 0;
      buyTicketButton.textContent = ticketsAvailable === 0 ? "Sold Out" : "Buy Ticket";
  
      buyTicketButton.onclick = () => {
        if (ticketsAvailable > 0) {
          film.tickets_sold++;
          displayFilmDetails(film);
        }
      };
    }
  });
  