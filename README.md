# Frontend Challenge for Developer Candidates

To better assess a candidates development skills, we would like to provide the following challenge. This is intendend to be developed in a pair programming session within an hour of time.

## Prerequisites

* [Git](http://git-scm.com/)
* [npm](https://www.npmjs.org/)

## How to Run the Application

### Main Method

This application should work simply through the server. To do this, run the following steps in the **root folder** of the application.

```bash
npm install
npm run build
npm start
```

Visit http://localhost:8080.

### Back-up Method

If the main method doesn't work, we can also try to run the applications on the server and client in separate Terminal windows. To do this, implement the following steps.

Go to the client and install the dependencies for the client:

```bash
cd client
npm install
```

In the "client" folder, start the server:

```bash
npm start
```

Open a new Terminal window/tab.

Then go to the **root folder** and install the dependencies for the server. Then build the server application.

```bash
cd ../
npm install
npm run build
```

Start the server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000).

## Project description

We want to develop a small web app that allows users to order pizza.

First of all we'll display the list of pizzas with ingredients and prices. Data will be loaded from `server/pizzas.json`.

When the user chooses something from the list the order summary will update dynamically.

There will be a button to confirm the order. An ajax call will be performed to `server/order.json` and the result will be displayed as a message like this: "Your order will be delivered in x minutes".

You can use any library/framework/plugin you want.

The application must be single page and JS-based using AngularJS (1.x is fine if not familiar with 2.x) or ReactJS. That means that I load just one html file, if you want to add some navigation you have to implement it via JS.

If you can display discounts for pizzas it's a plus.

## Evaluation

Our goal is to find answers to those questions:

* Do you understand the JavaScript language and more in general web technologies?
* Can you judge which library/framework is the best fit for a job and use it correctly?
* Can you design interfaces that are clear and easy to use?
* Do you master your working environment?

Due to the limited time consider the followings:

* It is NOT important to have a fully functional application at the end.
* We'll develop just for the latest version of Google Chrome.
