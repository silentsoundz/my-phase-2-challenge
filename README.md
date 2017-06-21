# Phase 2 Interview Challenge

This is the challenge for getting into phase 2.

To get started, create a new repository called `phase-2-challenge`. Do all of your work in this repo and submit it as your solution.

Skills covered:

- Programming
- Programming in JS
- Testing
- Node.js
- HTML & CSS
- Terminal, Bash, & UNIX

Each requirement has a point value. A fully complete requirement gets full points; partially complete requirements get partial points; incomplete requirements get no points. Completeness is determined by calculating points earned divided by total points available.

## General Requirements

- [x] __10:__ Solution is in a public GitHub repository called `phase-2-challenge`.
- [x] __10:__ Solution repository has 4 folders: `part-1`, `part-2`, and `part-3`, and `part-4`.
- [x] __20:__ Git history shows frequent commits.

## Part 1: Write tests and solutions for these functions

For the following exercises, write your functions in a file called `part-1/functions.js` and your tests in a file called `part-1/tests.js`.

You can use whichever testing tools you prefer: `console.assert()` (builtin to Node), Mocha and Chai, Jasmine, etc.

### Show a weekday

Write a function `weekday(date)` to find the weekday for a given `Date` object, returing either  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.

Example:

```js
let date = new Date(2017, 5, 19) // June 19, 2017
weekday(date) // returns "Mon"

weekday(new Date(2017, 5, 15)) // returns "Thu"
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `weekday()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `weekday()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `weekday()` is defined in `functions.js`.
- [ ] __10:__ Tests for `weekday()` are passing.

### Get a snippet from text

Write a function `snippet(string, maxlength)` that shortens the string given to the `maxlength` and adds the ellipsis character ("…") to the end of string, and then returns the shortened string. If the string is shorter than the `maxlength`, just return the string unmodified.

Example:

```js
snippet("For the following exercises,", 10) // => "For the fo…"
snippet("Hello, world!", 20) // => "Hello, world!"
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `snippet()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `snippet()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `snippet()` is defined in `functions.js`.
- [ ] __10:__ Tests for `snippet()` are passing.

### Number of properties

Write a function `numProps(obj)` that returns the number of properties an object has. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

Example:

```js
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

numProps(friend) // => 3
numProps({}) // => 0
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `numProps()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `numProps()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `numProps()` is defined in `functions.js`.
- [ ] __10:__ Tests for `numProps()` are passing.

### Filter between

Write a function `filterBetween(array, min, max)` that takes an array of numbers, a `min` value, and a `max` value. It returns a new array containing _only_ the elements that are greater than or equal to `min` and less than or equal to `max`.

Example:

```js
let arr = [1, 2, 3, 4, 5, 6, 7]

filterBetween(arr, 3, 6) // => [3, 4, 5, 6]
filterBetween(arr, 5, 10) // => [5, 6, 7]
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `filterBetween()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `filterBetween()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `filterBetween()` is defined in `functions.js`.
- [ ] __10:__ Tests for `filterBetween()` are passing.

## Part 2: Extract data from JSON file

Write a Node.js script to search for data from a JSON file.

Use the [`clients.json` file provided](https://gist.github.com/lg-bot/b5fd15cbc3c6b454055916815b2fdea6#file-clients-json) representing a database of company contacts. Download the file to your `part-2/` folder.

Then write two scripts that can be run using the `node` command.

1. `searchByName.js` takes one string argument (let's call it `name`), finds all the clients from `clients.json` who have a `rep_name` that starts with the `name` string, and prints the `id` and `rep_name` of each matching client.
1. `searchByState.js` takes one string argument (let's call it the `state`), finds all the clients from `clients.json` who have a `state` that _exactly matches_ the `state`, and prints the `id`, `rep_name`, `company`, `city`, and `state` of each matching client.

Your searches should not be case-sensitive: i.e. a search for "Bob" is the same as a search for "bob".

Example: `searchByName.js`

```shell
$ node searchByName.js Ad
Finding clients with name "Ad"...

[{
  "id": 7,
  "rep_name": "Adena Rymmer"
},
{
  "id": 56,
  "rep_name": "Adolf Licas"
},
{
  "id": 75,
  "rep_name": "Adamo Maria"
}]
```

Example: `searchByState.js`

```shell
$ node searchByState.js Maryland
Finding clients in state "Maryland"...

[{
  "id": 25,
  "rep_name": "Axe McMillan",
  "company": "Davis, Reilly and Rolfson",
  "city": "Annapolis",
  "state": "Maryland"
},
{
  "id": 98,
  "rep_name": "Urbanus Dengate",
  "company": "Barton, Lubowitz and Thiel",
  "city": "Baltimore",
  "state": "Maryland"
}]
```

#### Requirements

- [ ] __40:__ `searchByName.js` script prints the client  `id` and `rep_name` for all clients whose `rep_name` starts with the provided `name` argument.
- [ ] __40:__ `searchByState.js` script prints the client `id`, `rep_name`, `company`, `city`, and `state` that for all clients whose `state` matches the provided `state` argument.

## Part 3: HTML layout for grocery store

Write the HTML & CSS to layout a page for an online grocery store.

You only need to write HTML & CSS. No JavaScript or web server is required.

Design a layout to match the following wireframe:

![main page](https://user-images.githubusercontent.com/709100/26839845-3dd07942-4ab2-11e7-944e-2da0acd695bf.png)

### Requirements

- [x] __10:__ All files are stored under the `part-3/` folder
- [x] __20:__ No third party CSS libraries are used (all code must be written from scratch)
- [x] __10:__ HTML and CSS are separated into their own files.
- [ ] __20:__ Page has a full-width header with the site title "Grocer" and a button "Cart"
- [ ] __10:__ Site title "Grocer" is aligned to the left
- [ ] __10:__ "Cart" button is aligned to the right
- [ ] __20:__ Page has a "Sections" sidebar with all sections for grocery items
- [ ] __10:__ Page has a main content area showing each of the grocery items
- [ ] __20:__ Main content lists all grocery items' name, price, and an "Add to cart" button
- [ ] __20:__ Clicking on a section in the "Sections" sidebar will jump to that section
- [ ] __10:__ Main content organizes all grocery items by section

## Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth __50 points__ in total.

_Reminder: you can use the internet to help you answer these questions :)_

- When you run a command in the terminal, where does BASH look for that command?
- On a UNIX computer, how do you stop a running process?
- What packages do you have installed via homebrew?
- On a UNIX computer, how do you find the process id of a running process?
- In a terminal, what does control-c do?
- In a terminal, what does control-a do?
- In a terminal, what does control-e do?
- What keyboard shortcut do you use to split the screen in your editor?
- What keyboard shortcut do you use to split the screen in your terminal?
- When a terminal command completes, how can you tell if it was successful or not?
- What does your `~/.gitconfig` have in it? (paste the whole file here)
- What is the difference between a relative and absolute path?
- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?

- What keyboard shortcut do you use, in your editor, when you want to open a specific file?
- What files or folders do you want all git repositories to ignore?
- What is the main difference between `==` and `===` in JavaScript?
