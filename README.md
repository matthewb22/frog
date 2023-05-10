## Get started with React - ToDo Application

This application manages Tasks you have to do using 3 React Components

1. App - main Application Component
2. Task - List where Tasks are displayed
3. CreateTask - an Input Component that ceates a new Task for the list

Your challenge is to add some extra display logic and capture extra data
about the Tasks

## Getting Started
1. Clone or download the project.
2. To run the application, cd to the project directory and run the following commands:

```
$ npm install
$ npm start
```
## Challenge 1 - Display the count of completed and remaining tasks in the ToDo list

In the code you will see some commented code that updates a variable in State that tracks the number of Uncompleted Tasks

Uncomment the code and you can see how it works

Your challenge is to display the number of Completed and Uncompleted Tasks on the page. Note in the JSX there is a suggestion of where you might display the results

## Challenge 2 - Remove a Task from the ToDo Task list

The remove function is empty. Fill in this function so you can delete a task from the list


## Challenge 3 - Capture the date a Task is created and completed

Let's get an idea of how much time it takes to get a task done. Add two fields to the Task object called dateCreated and dateCompleted. You will use a built in Javascript function called Date.getTime() to get a numerical representation of the current date and time. Store this in your Task objects.

Storing a Date as a number makes it easier to work out how long something takes. Once you can capture the Date of creation and the date of completion, display the time taken on the screen

## Challenge 4 - Create a Component to display most recently completed task

There is a new Component in the code base which is not being used because it is empty. Look at the Task.js file to get an idea how you can use this component to display the quickest task in the list, and also the slowest task in the list.

Make sure you use the Component to display a single value. REUSE the Component with different parameters (Props) in order to display the data

## Challenge 5 - Modularise CSS

CSS is easier to work with when it is styling a single component. Create 3 files, Task.module.css, CreateTask.module.css and TaskScoreboard.js. Create styling for each component in each file