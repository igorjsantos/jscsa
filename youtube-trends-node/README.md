# Youtube Trends

## Project Assessment

YouTube Trends is a Node.js application that was developed in a hurry to show the latest video trends from YouTube.

This application should show 24 youtube trending video on the page, but it's just showing empty cards, without thumbnail image, views, likes and publish date, could you please fix it.

Right now it's showing the latest trends only for the United States, but we would like to have a possibility of selecting a specific country to see the latest trends there.

### Notes

* Unit tests current code coverage 67.28%. Ensure tests not failing
* List of countries you can find in config.json file
* You can add new dependencies in package.json (if needed)

### Tasks

* Implement dropdown select by country and switch youtube trends by selected country in shared/header view and cover by unit tests
* Fix bug with "empty" cards, it should show a thumbnail image, views, likes and publish date, and cover by unit test your changes
* Refactor public/javascripts/youtube.player.js file to follow JS best practices

PLEASE NOTE THAT ALL THE TASKS LISTED ABOVE ARE MANDATORY.
We'll be evaluating your submission from the following perspectives:

* Code quality and best practices
* Implementation of new feature
* Bug fixes
* Unit Tests

#### Pre-Requisites

    Any IDE
    Node v8+
    NPM v5+

#### How to deliver

    This is how we are going to access and evaluate your submission, so please make sure to go through the following steps before submitting your answer.

    1) Make sure to run unit tests, check code coverage, ensure the application is compiling and all dependencies are included.

    2) Zip the project without node_modules folder and store it in a shared location where Crossover team can access and download the project for evaluation, and add link to shared file in the answer field of this question.
