# Social-Network

## Table of Contents:
[1.Description](#Description)

[2.Installation](#Installation)

[3.Acceptance Criteria](#Acceptance-Criteria)

[4.Testing](#Testing)

[5.Usage](#Usage)

[6.Walkthrough Videos](#Walkthrough-Videos)

[7.Submission](#Submission)

[8.Questions](#Qustions)


## Description
Module 18 Challenge was to create a social network API using NoSQL and MongoDB which can be used to handle a vast amount of unstructured data, Mongoose ODM, and moment package for time stamls, as well as Express for routing.

## Installation
MongoDB must be installed.
Use the following:
```npm init -y```
```npm i express mongoose moment```
Start the server using:
```npm start```

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Testing
Use insomnia to test all API routes.
```api/users```

1. ```GET``` all users
2. ```POST``` Create user

```/api/users/:userid```

1. ```GET``` a single user by its ```_id```
2.```PUT``` to update a user by its ```_id```
3. ```DELETE``` to remove user by its ```_id```

```/api/users/:userId/friends/:friendId```

1. ```POST``` to add a new friend to a user's friend list
2. ```DELETE``` to remove a friend from a user's friend list

```/api/thoughts```

1. ```GET``` to get all thoughts
2. ```POST``` to create a new thought

```/api/thoughts/:thoughtId```

1. ```GET``` to get a single thought by its _id
2. ```PUT``` to update a thought by its _id
3. ```DELETE``` to remove a thought by its _id
```/api/thoughts/:thoughtId/reactions```

1. ```POST``` to create a reaction

```/api/thoughts/:thoughtId/reactions/:reactionId```

1. ```DELETE``` remove a reaction by the reactionId

## Usage
This repo can be used to as a boiler plate to create a social network API.

## Walkthrough Videos
User Routes: https://drive.google.com/file/d/1kmx1hP0zNzhQ8ZfgM0xA1TrnWgAiC7lv/view 
Friend Routes: https://drive.google.com/file/d/1VN_7YOk9ZN6J7HITK2OfIP6orYJTZ4uw/view
Thought Routes: https://drive.google.com/file/d/1W3usfk9epK2ubtdtCmjYjVijOgFHMPVd/view
Reaction Routes: https://drive.google.com/file/d/1HPj3O0vkkI4ZUJUIhZUxnB14cYQXNAVM/view

## Submission
This Repo is submitted through GitHub, Links to the Video routes are in the Walkthrough section.

## Questions
Any questions please feel free to email me @ dkopac96@gmail.com or my github is https://github.com/dkopac.