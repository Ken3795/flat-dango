week3-code -challenge
Flatdango Movie Theatre App

Author - Kenneth Kipkoech
Project Description
Flatdango Movie Theatre is a modern cinema in the city, offering diverse movie genres, state-of-the-art facilities, comfortable seating, and online ticket booking for an immersive and convenient movie-watching experience.. It also enables one to book a movie and shows the number of tickets remaining

Development requirements
1.Visual studio code 2.Live server extension 3.npm 4.json-sever

Setting up project
The program allows the user to vote for an animal of his or her choice. The program then stores the number of votes to the severe. The information in the severe can be used to determine the animal with the most number of votes.

You need to have vs-code, git installed in your machine
git clone https://github.com/Ken3795/flat-dango
git add .
git commit -m "initial commit"
git push origin master
run the project on localhost to preview
Technologies used
HTML
css
Vscode
JavaScript
DB.JSON
json-server
Getting it started
setup install json serve by running the code: npm install -g json-server

To watch the db.json server run the code: json-server --watch db.json

Deliverables
See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads. The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity. use:

GET /films/1

Example Response: { "id": "1", "title": "The Giant Gila Monster", "runtime": "108", "capacity": 30, "showtime": "04:00PM", "tickets_sold": 27, "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.", "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg" }

See a menu of all movies on the left side of the page in the ul#films element when the page loads. (optional: you can style each film in the list by adding the classes film item to each li element.) There is a placeholder li in the ul#films element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list.

GET /films

Example response: [ { "id": "1", "title": "The Giant Gila Monster", "runtime": "108", "capacity": 30, "showtime": "04:00PM", "tickets_sold": 27, "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.", "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg" }, { "id": "2", "title": "Manos: The Hands Of Fate", "runtime": "118", "capacity": 50, "showtime": "06:45PM", "tickets_sold": 44, "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.", "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg" } ]

note: click on each the list of movies to display the image and the availaable number of tickets. => once clicked the available number of tickets are less by one or by the the number of tickets bought.

Contact Info.
For more information you can reach out; Email ;kenkipkoech57@gmail.com
phone number 0711332197
License
MIT License Copyright 2024 Kenneth Kipkoech

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.