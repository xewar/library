This project was the first project in the Odin Project's full stack Javascript. You can view the live project [here](https://xewar.github.io/library/).

**Initial Requirements**
+ Ability to add and delete books from a library
+ Ability to change the *read* status of a book

**Project Focus**
+ Prototypal inheritance / new object creation
+ Creating forms and working with user input

**Issues that came up**
+ I had some issues with the formatting in this project. For example, I would like the box around the books to grow as the page changes size, but for the book cards to stay left aligned within that box.
+ I also delete and re-create all the cards when I add or remove a single card (by calling the 'displaybooks' function). I added an index number as an ID for each card in the DOM that corresponds to its index in the book library('myLibrary'). A future update could target the IDs in the library and then update the IDs of the cards in the DOM, rather than re-creating the cards each time. 

**Next steps:**
+ It would be nice to keep working on this project and then use it to keep track of what I'm reading. I'd like to be able to click on each card and have it expand and allow for more detailed notes on each book. I'd also like to be able to use the buttons on the bottom ('read','currently reading','not yet read') to toggle between states, and also filter by other user-generated categories such as the gender of the author or fiction versus non-fiction, etc. 

