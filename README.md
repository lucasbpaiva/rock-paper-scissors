# rock-paper-scissors

# Version 2.0

This version adds a graphical UI to the Rock Paper Scissors game. The biggest challenge I faced in adding interactivity with the user was dealing with event listeners, especially in passing callback functions when adding a click event.

Now the game uses a more simple "first to reach 5 wins" score system.

All in all it was a very fun project to complete and a good introduction to adding interactivity to a page using JavaScript.

# Version 1.0

This project is a simple game of Rock, Paper, Scissors designed to be played on the DevTools console on Google Chrome. 
For now, it lacks a Graphical Interface but it will implemented in a future version. 
The main objective of the project was to implement the logic of the game and scoring system using JavaScript.

The main challenge I faced during this project was implementing the scoring system the way I intended. 
What I wanted was a best of 5 system where whoever won the most rounds out of 5 would be the winner of the game.
My first implementation attempt had an issue where if the player or the computer reached a score of 3 before 5 rounds, e.g. the player wins the first 3 rounds, the game would continue until reaching 5 rounds.

This was not what I had in mind, I wanted the game to be over as soon as the player or the computer reached a score of 3. To achieve this I modified the scoring system to stop when either the computer or the player reached a score of 3.
It ended up creating another issue where, if there were ties in any of the rounds, there was a possibility of reaching 5 rounds without anyone reaching a score of 3.
In this case, even if there was a clear winner, the game would keep on going. (Example: Computer wins the first 2 rounds, Player wins 1 round, the other 2 rounds were a tie, in this case the computer should win the game, but this wouldn't happen because it didn't reach a score of 3)

In the end, I was able to combine to combine both conditions to implement the scoring system I had designed in the first place and this project was a good practice for loops and logical operators.