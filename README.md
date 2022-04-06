# OK CRYPTID

## Deployed Site

View the deployed site [here](http://ok-cryptid.herokuapp.com/)!

## Table of Contents   

- [Abstract](#abstract)
- [Project Goals](#project-goals)
- [Project Specs](#project-specs)
- [Challenges](#challenges)
- [Future Iterations](#future-iterations)
- [Install and Setup](#install-and-setup)
- [api](#api)
- [Tech Stack](#tech-stack)
- [Contributors](#contributors)

## Abstract

Ok Cryptid is here to help you have your very own cryptid encounter! We’ll help you identify the trails where you are  mostly likely to cross paths with your favorite cryptid!

## Project Goals

- Gain competency with GraphiQL
- Create a multi-page UX using Router V6
- Deploy to Heroku
- Learn and implement Cypress stubbing for GraphiQL

## Project Specs

View the spec for this project

**Homepage:**

The user can select see and select any cryptid that peeks their interests.

**View a single cryptid's details page:**

When a cryptid is selected, the user is directed to a page with information about that specific cryptid. If the user would like to go a step furture, they can click the 'sightings of *' button to where that cryptid has been spotted.

**All Sightings page:**

From the all sightings page, a user can filter their search by cryptid or location with a state input search. If a cryptid has been seen in that location, the sighting will be rendered, if the location does not have any sightings the user is prompted to try another search.

**Single Sighting page:**

When a sighting is selected, they are taken to that specific sighting which the provides links to hiking trails near by. When the link is clicked a new tab opens with an external AllTrails link.

**Error handling:**

If an error occurs when trying to access the app, the user is shown an error modal letting them know what went wrong.


## Challenges

- The OK Cryptid app was built in the short time span of 15 days.
- This was our team's first time implementing GraphiQL into a project. Adding this to our project required hours of research and bug solving.
- Negotiating our api contract was difficult, simply because we didn't know how GQL worked at first.


## Future Iterations

- Add back buttons to the single cryptid and single sighting page
- Create login functionality to allow users to keep track of their trails and sightings
- Allow a user to add sightings of their own to share with others
- Create trails pages within the app instead of navigating to a new window
- Add fun animations for error modal

## Install and Setup

To run this app locally:

1. fork this repository
2. run ```git clone git clone git@github.com:OK-Cryptid/ok-cryptid-fe.git``` in your command line
3. Run ```cd rancidtomatillos``` to navigate into the repository
4. Run ```npm install```
5. Run ```npm start```
6. Visit ```http://localhost:3000/``` in your browser to view the Rancid Tomatillos app!
7. Open a second terminal tab and run ```npm run cypress``` (while localhost:3000 is still running) to access the cypress testing for this app

## api

For this project, we access data from a GraphiQl API created by our backend team.

[Ok Cryptid api repo](https://github.com/OK-Cryptid/ok_cryptid_be)

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

[![OK-Cryptid](https://circleci.com/gh/OK-Cryptid/ok_cryptid_be.svg?style=svg)](https://app.circleci.com/pipelines/github/OK-Cryptid)

## Contributors

###Frontend Team
Kayla Durrett - [GitHub](https://github.com/krdurrett)[LinkedIn](https://www.linkedin.com/in/kayla-durrett/)

Jasmyn Hicks- [GitHub](https://github.com/jasmyn2244)[LinkedIn](https://www.linkedin.com/in/jasmyn-hicks/)

Richard Rosa-Serrano - [GitHub](https://github.com/RosaTheDev)[LinkedIn](https://www.linkedin.com/in/rosathedev/)

Grace Gardner - [GitHub](https://github.com/GraceGardner)[LinkedIn](https://www.linkedin.com/in/grace-iris-gardner/)



###Backend Team

[Backend Repo](https://github.com/OK-Cryptid/ok_cryptid_be)

Mallory Vining - [GitHub](https://github.com/Malllll12)[LinkedIn](https://www.linkedin.com/in/mallory-vining/)

Darren Kulback - [GitHub](https://github.com/dkulback)[LinkedIn](https://www.linkedin.com/in/darren-kulback-9b2394189/)

Parker Lockhart - [GitHub](https://github.com/ParkerLockhart)[LinkedIn](https://www.linkedin.com/in/parker-lockhart/)

Eric Chon - [GitHub](https://github.com/echon006)[LinkedIn](https://www.linkedin.com/in/eric-chon/)
