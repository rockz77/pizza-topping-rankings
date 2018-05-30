# Ranking and counting app for pizza toppings
Web page application that contains functionality to track and rank the top 20 pizza topping combinations taken from 12,000+ pizza orders. Technologies used are: node.js, react, react context API, styled-components, webpack, babel, ES6 javascript, CSS3, and HTML5.

## Run app
`npm start`

**This starts a webpack dev server at localhost:8080 and executes all webpack processes.

## Overview Notes

For the UI, the application is layed out via pages, components, and partials, using react and styled-components. The client.js file is the entry point for the react functionality. The TopPizzaToppingsCombo page contains a list of the top 20 pizza combinations queried from the stub json in  data/pizzas.json. The UI shows the name(s) of the pizza topping combinations, ranking, and counter.

Some of the html components/elements within the TopPizzaToppingsCombo page are styled-components.

I did not style much of the page and it's elements. Didn't use a CSS preprocessor as well. I also didn't include a header, footer, or nav. Webpack is used to minify the javascript and act as the web application server.

## Tech Notes

First I retrieve all data from pizzas.json using react-context-api (providers / consumers). I then grab all arrays from that original json and push into a new array. Next I use map and reduce to create a readable object to sort the keys and values of the json. Last, I create a final array containing the required info containing the ranking, pizza topping names, and counter, which then get translated to the UI.  

By,
Chris Kennedy
chris7700@gmail.com
