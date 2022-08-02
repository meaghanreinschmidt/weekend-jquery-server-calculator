# Weekend Challenge: Server Side Calculator

## Description

Duration: 1 Week

This project contains a functional calculator where the user can input two values and a mathematical operator. When the `=` button is clicked, the outcome of the operation is sent to the server via a POST. The `C` button serves to clear the input field similar to a basic calculator. The server handles the mathematical operator functions (addition, subtraction, multiplication, and division). A GET request holds the historical record of all previous operations and solutions on the server. Restarting the server will clear the history. 

There is a bit of commented out code on both the HTML and CSS files that were there for the stretch goal attempt to make the page look more like a calculator. These will stay in the final project so that the stretch goal may be attempted in the future. 

## Screenshot


## Steps: 
-[x] Create server public file structure
-[x] check .gitignore file (already set up)
-[x] Set up base HTML file
-[x] Set up base CSS
-[x] Update README file 
-[x] npm init and npm install express
-[x] update package.json file
-[x] add server.js/client.js set up code

### Client Side Code:
-[x] create click handlers for calculator buttons
-[x] append number buttons to calculator display on clicks
-[x] append operation buttons to calculator display on clicks
-[x] create function to clear calculator display on C button
-[x] add solution container and append solution to DOM

### Server Side Code:
-[x] add get request to get array
-[x] add post request to send operation to server


