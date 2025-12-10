# This is my backend development high end work where i will be focusing on my final preparation of web development for being able to build and scale my own web development projects.

# On eof the most import production grade content is that:
There is something known as folder inside a folder which is not tracked by the git hence when we push the code insid of it we might not be able to host it on the github 

- one of the main use case when we use any third party services like cloudinary for storing images and photos we temporarily hold them on the server instead of directly hosting them on the third party service itself . 



- them when we push them we might not be able host them on the internet , so resolve this issue we use an additional file known as ".gitkeep"


We can use touch and files name for being able to create files instantly on any of the folder : (base) venkatsaiganeshtadiboina@Venkats-MacBook-Air src % touch app.js co
nstants.js server.js

controllers: folder is used to setup the functional logic of the website .

db : we write the connections regarding the database 

middlewares : the functional logic which has to be executed in between the req and res is written inside of it , like a kind of checking the system.

models : these are the basic general sytax which will be used for getting the input from the user and for being able to store in the required database and also to project on the screen etc .

routes : for being able to successfully do the routing of the website to the requested page 

utils : these are like utilites which are like common functionalites which will be used at any point of time in any place of the code .


there are mainly 2 ways in creating a connection with the database where we write the entire connection code inside of the server.js file : which when triggered using nodemon calls the function of the database and hence finaly i will be able to access . 

the second approcah would be create a seperate foleder db and write the entire logic inside it and export the function and access it in the server.js file . which makes the code to be more distributed and modular for easy error clarification etc .

app is connected through express 
db is connected through mongoose 

there are major technicalities that has to kept in mind while wrtting the db code :

1. they are always present in some different part of the world hence there might be a delay in the req and response hence use : async await and try catch blocks of code .

A code of:

0 → success / normal exit

1 → error / failure

So process.exit(1) means:

“Stop the app now. Something went wrong.”