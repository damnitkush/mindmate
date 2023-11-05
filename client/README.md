
# MindMate

## Problem Statement
    
Create a platform where individuals facing mental health challenges can connect with empathetic and supportive peer allies who are trained to provide understanding, encouragement, and guidance. This platform aims to offer a combination of anonymous peer support matching and a structured mental health ally program.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Components](#Components)

## Introduction

The project is a comprehensive online platform called "MindMate" that focuses on supporting mental well-being. It offers a combination of AI-driven symptom assessment and recommendations for physical health concerns, as well as anonymous, secure chats with trained peer allies for mental health support. The platform aims to provide tailored guidance and emotional support, promoting overall well-being for users. It combines AI technology for health recommendations and peer allies for empathetic, anonymous interactions, creating a holistic approach to mental well-being support.

## Features

- Peer Support Matching
- Mental Health Ally Program
- Anonymous and Encouraging Chats
- Resource Library
- Mental Health Challenges Forums
- Mental Health Assessments
- Progress Tracking
## Demo

Visit [MindMate](https://mindmate.netlify.app) - Peer allies for mental well being!
    
## Installation

To run MindMate locally on your machine, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/damnitkush/mindmate.git
cd client
```

2. Install the required dependencies:
```sh
npm install
```
3. Set up a Firebase project and enable authentication and Firestore.
4. Create a .env file in the root directory and add your Firebase config:
```sh
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_AUTHDOMAIN=your_auth_domain
REACT_APP_PROJECTID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGE_SENDER_ID=your_message_sender_id
REACT_APP_APP_ID=your_app_id
```
5. Start the development server:
```sh
npm start
```

6. Now run the command 
```sh
cd ../backend
```
in your terminal

7. Install the dependencies
```sh
npm install
``` 
8. Initiate the server for the MindLink by running
```sh
nodemon index.js
```
9. Open your web browser and navigate to http://localhost:3000 to access WearWorx.

## Tech Stack


[![React][React]][React-url]
[![TailwindCSS][TailwindCSS]][Tailwind-url]
[![Firebase][Firebase]][Firebase-url]
[![HTML][HTML]][HTML-url]
[![Express][Express]][Express-url]
[![CSS][CSS]][CSS-url]
[![Socket.io][Socket.io]][Socket.io-url]
[![Node][Node]][Node-url]
[![Python][Python]][Python-url]
[![OpenCV][OpenCV]][OpenCV-url]


## Components
Maximum components were built during the period of Hackout 2023.
Some components like Login and Signup Pages were used from previous projects of one of our teammates. Some React Libraris were also used in this project, like Recharts. Socket.io is used for the implementation of MindLink feature - the peer to peer connection. Firebase is used for storing the data of the user, and authentication purposes. 



[CSS]: https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=ffffff

[OpenCV]: https://img.shields.io/badge/OpenCV-%235C3EE8?style=for-the-badge&logo=opencv&logoColor=%23fffffff&labelColor=%235C3EE8&color=%235C3EE8
[OpenCV-url]: https://opencv.org/
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=%23ffffff&labelColor=%23000000&color=%23000000

[Socket.io]: https://img.shields.io/badge/Socket.io-FFFFFF?style=for-the-badge&logo=socketdotio&logoColor=%23ffffff&labelColor=%23010101&color=%23010101

[Python]: https://img.shields.io/badge/Python-%233776AB?style=for-the-badge&logo=nodedotjs&logoColor=%233776AB&labelColor=%23ffd343&color=%23ffd343


[Node]: https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=%23ffffff&labelColor=%23339933&color=%23339933
[Node-url]: https://nodejs.org/en

[Socket.io-url]: https://socket.io/

[Python-URL]: https://python.org/
[Express-URL]: https://expressjs.com/

[CSS-url]: https://www.w3.org/Style/CSS

[HTML]: https://img.shields.io/badge/HTML-20232A?style=for-the-badge&logo=html5&logoColor=20232A&color=orange

[HTML-url]: https://html.com/

[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=ffffff

[Tailwind-url]: https://tailwindcss.com/

[Firebase]: https://img.shields.io/badge/firebase-black?style=for-the-badge&logo=firebase&logoColor=%23FFCA28

[Firebase-url]: https://firebase.google.com/

[React]: https://img.shields.io/badge/react-black?style=for-the-badge&logo=react&logoColor=%2361DAFB

[React-url]: https://react.dev/


