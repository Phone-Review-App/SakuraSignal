<div align="center">

# SakuraSignal 🌸

![LastCommitted](https://img.shields.io/github/last-commit/phone-review-app/sakurasignal
)
![committed](https://img.shields.io/github/commit-activity/t/phone-review-app/sakurasignal
)

![pullrequest](https://img.shields.io/github/issues-pr/phone-review-app/sakurasignal)
![issues](https://img.shields.io/github/issues/phone-review-app/sakurasignal)
![forks](https://img.shields.io/github/forks/phone-review-app/sakurasignal)
![stars](https://img.shields.io/github/stars/phone-review-app/sakurasignal)

![license](https://img.shields.io/github/license/phone-review-app/sakurasignal)
![contributors](https://img.shields.io/github/contributors/phone-review-app/sakurasignal)

</div>

Visit [SakuraSignal](https://phone-review-app.onrender.com/)
(Currently Not Available)

# Table of Contents
<details><summary>Click here for more details</summary>

1. [Project Description](#project-description)
    - [What is Sakura Signal](#what-is-sakura-signal)
    - [Why should anyone use Sakura Signal](#why-should-anyone-use-sakura-signal)
    - [Contribution](#contribution)
    - [Tech Stack](#tech-stack)
2. [How to Use](#how-to-use)
    - [Normal User](#normal-user)
      - [Homepage](#homepage)
      - [The Provider Page](#the-provider-page)
        - [Navigation Panel](#navigation-panel)
        - [The average provider score box](#the-average-provider-score-box)
        - [The Review](#the-review)
      - [The Review Form Page](#the-review-form-page)
    - [Admin User](#admin-user)
3. [Developer: How to run this project](#developer-how-to-run-this-project)
    - [Setting up the environment](#setting-up-the-environment)
      - [Prerequisites](#prerequisites)
        - [1. Clone the repository](#1-clone-the-repository)
        - [2. Setup .env file](#2-setup-env-file)
          - [postgresql required valuable](#postgresql-required-valuable)
        - [3. Install the necessary packages](#3-install-the-necessary-packages)
          - [install the dependencies](#install-the-dependencies)
          - [build the application](#build-the-application)
        - [4. Run the application](#4-run-the-application)
          - [server](#server)
          - [client](#client)
        - [Problem with migration or seed](#problem-with-migration-or-seed)
          - [Updating or Amending the database](#updating-or-amending-the-database)
            - [Make migration file](#make-migration-file)
            - [Integrate the migration file](#integrate-the-migration-file)
            - [Create seed file](#create-seed-file)
            - [Integrate the seed file](#integrate-the-seed-file)
    - [The point of Interest](#the-point-of-interest)
      - [The Frontend](#the-frontend)
        - [special files at developer interest](#special-files-at-developer-interest)
        - [Components](#components)
        - [Pages](#pages)
        - [Radio.jsx](#radiojsx)
      - [The Backend](#the-backend)
        - [API endpoints](#api-endpoints)
        - [/api/providers](#apiproviders)
        - [/api/providers/:providerIdOrName](#apiprovidersprovideridorname)
        - [/api/review](#apireview)
4. [Credits](#credits)
5. [License](#license)
6. [Helpful Resources](#helpful-resources)
</details>

<br/>

# Project Description
## What is Sakura Signal?
Sakura Signal is a web app for user to review their overall user experiences over the main Japanese phone carriers

## Why should anyone use Sakura Signal?
This app helps foreigners who theirs native language are not Japaneses to quickly adopt some useful infomation over users' review on a dedicated choices of phone carrier in Japan and let any one who might have the experience on the phone carrier to tell his/her user experiences.

## Contribution
Consider contribute to this projects by:
- using the [issues system](https://github.com/phone-review-app/sakurasignal/issues);
- filing a bug reports;
- provide feedback;
- shares your idea(s) with us; 
- submit Pull Request (please associate it with an issue);

Kindly follow our [Contribution guideline](CONTRIBUTION.md) on how to contribute(under construction).

## Tech Stack

| Tech | Usage |
| ---- | ---- |
|![react](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=plastic) | The basic frontend user interface framework interacting with DOM |
| ![postgresql](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white&style=plastic) | A widely used, reliable and secure database |
| ![express](https://img.shields.io/badge/ExpressJS-52A62E?logo=express&style=plastic&logoColor=white) | Backend control to database |
| ![knex](https://img.shields.io/badge/KnexJS-cc2277?logo=knexjs&logoColor=white&style=plastic) | Maintaining tables and necessary seeds for the postgresql database |
| ![Faker](https://img.shields.io/badge/Faker-c6d333?style=plastic) | Create dummy reviews for testing purposes |

[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](#table-of-contents)

# How to use
## Normal user
The normal use of this web application does not required user to login, currently. 

The app does required user for an unique email address and an username in order to write a review of a particular phone service provider. Reading other users reviews, however, do not required any login.

(We might expend for user login feature in the future for deletion or editing their review)

### Homepage
When the app is fired, user will be directed to the homepage, each phone providers with a short description are listed on the page inside a cell block. A `Learn More` button is available for each company and user can click on the button to see a more detailed reviews, detail such as, whether the provider has English support and reviews left by the other users are also listed.

### The Provider Page
When the user clicked on the `Learn More` button at the homepage on that specific provider, the user will be redirected into the Provider Page of that respective phone carrier. Inside the Provider Page there are several interesting elements user can reference themselves to. 

| Components | Description |
| ---- | ---- |
| Provider Info | At top of the Provider Page, it consist of a brief description of the carrier, whether they provide English support, a link to the carrier page, a Home Button and a [Navigation Panel](#navigation-panel) |
| [The Average Provider Score Box](#the-average-provider-score-box) | (the pink-red-ish box on the left of The Review) The box show user the overall average score of that carrier and followed by reviews left by other individual users. |
| The Review | The reviews provided by other user |

#### Navigation Panel
The navigation panel located below the `Home` Button consist of three visible components (`The Left Arrow`, `The Right Arrow`, `The Current Provider Name Button`) and a hidden dropdown menu. The panel located below the `Home` button in the Provider Info area. The Navigation Panel allow user to navigate between providers in ascending (`The Right Arrow`) or descending (`The Left Arrow`) order without going back to `Home` page first. Clicking the `Current Provider Name Button` will open the hidden dropdown menu consist of the other providers, click on the provider name in the menu will bring you directly to that provider page.

#### The average provider score box

| Score Type | Description |
|----|----|
|Overall Scorce | The average score users given in the overall score field |
| Ease of Use | The average score users given in the ease of use field|
| Coverage | The average score users given in the coverage field|
| Price | The average score users given in the price field|
| Customer Service | The average score users given in the customer service field|

Below the average provider score box is the `Write a Review` button. Click the button will redirect user to `the review form page`(see [below](#the-review-form-page)) to input their review.

#### the Review
The Review provided by each user are displayed on the provider page. Each reviewer score and feedback are represented inside the Review Card.

### The Review Form Page
The Review Form Page consist of a table of Radio button for user to pick their score for each fields: Overall, Ease of use, Coverage, Price and Customer Service. Each score has from a minimum of 0 up to the score of 10. User can create a username and provide a user email. A dropdown menu are present for user to select their company for reviewing. At the bottom of the page, we have a text area for user to input their feedback of the given company.

[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](#table-of-contents)


## Admin User
(under construction)

# Developer: How to run this project

## Setting up the environment

### Prerequisites
This project required the following technology to run:-
- PostgreSQL
- NodeJS

please refer to your own OS and its corresponding guides to install the above necessary tech. 

### 1. Clone the repository
Clone the repository in your working directory. However, if you decided only to contribute, consider folk the repository instead.

### 2. Setup .env file
Run the following terminal command at the root level of the project:-

```bash
cat .env.example > .env
```
#### postgresql required valuable
You will need the following valuables in order to run the application:-
- `DB_NAME` - the database name under postgresql. Create a database in postgresql if you have not already.
- `DB_USER` - default should be postgres, depends on your setup, use the most appropriate `DB_USER`.
- `DB_PASSWORD` - the strong password you setup for accessing postgres database
- `NODE_ENV` - for developer use development: (development | production) 

Enter the above stated valuable in the .env file. 

Note that the said .env file should be listed in the .gitignore so that when push to git it will not be exported to github.

### 3. Install the necessary packages
#### Install the dependencies
```bash
npm install -i
```
#### Build the application
```bash
npm run build
```

### 4. Run the application
The app consist of two parts, the server and the client. Both client and sever must be running concurrently in order for the app to work.

#### server
At the server, which is the root directory of the folder, run the following command in the terminal:-
```bash
npm run start
```
Or alternatively, using `nodemon` by running the following:-
```bash
npm run dev
```

#### client
At the client folder, run the following command in the terminal:-
```bash
npm run start
```
After this step, your default web browser should open with the app running

[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](##table-of-contents)


### Problem with migration or seed
#### Updating or Amending the database
In case you might needed to update or make amendment to the database tables or seeds, use the following to create migration and seed, or something did not went as expected during install or building the application:
##### Make migration file
Replace `new_table` and give a meaningful name that represent your integration.

Create the new empty migration file by execute the following:-

```bash
npm run make:migration new_table
```
Edit the migration accordingly

#### Integrate the migration file
Run the following to run the latest migration to the database:-
```bash
npm run migrate
```
#### Create seed file
Replace `new_seed` with a name best describe the seed. 

Run the following to create a new seed file:-
```bash
npm run make:seed new_seed
```
#### Integrate the seed file
Run the following to integrate the seed file:-
```bash
npm run seed
```

[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](##table-of-contents)

## The point of interest
### The Frontend

#### special files at developer interest
| file location |Description|
|----|----|
|client/src/index.js|This file contains the routes and the client side endpoints for each separate page|
|client/src/data/providers.json|This file contain an array of object consist of `provider_id`, `name`, `value` and `path` |

#### Components
| Elements | Description |
| ---- | ---- |
| `AvgScores` | displays all of the average scores on the carrier profile pages (the pink card) |
| `Button` | a template for most of the buttons on the app |
| `Card` | the cards that are displayed for each carrier on the Homepage |
| `Dropdown Menu` | the dropdown menu that allows user to select which carrier they are reviewing on the Forms page |
| `Footer` | the footer that is displayed on all pages |
| `Header` | the header that is displayed on the Homepage and the thank you message after submission |
| `Input` | a template for the input fields on the Forms page |
| `Navbar` | alternate version of the Header component; this one has a home button in the upper right corner |
| `ProviderInfo` | displays the hero at the top of each carrier profile page|
| `Radio` | Score system for user to choose 0 - 10 |

#### Pages
|Pages| Description|
|----|----|
| `Form` | the page where the user will input their scores and write their review |
| `Homepage` | the homepage; this is the root path ("/") |
| `Provider` | the provider page of each provider |

#### Radio.jsx
`Radio.jsx` is a component by providing a set of 11 dots (0 - 10 radio dot) to represent the score of a given particular score to a given `radioName`.

| props | hints | 
| ---- | ---- |
| `ScoreSetter` | This is a function which will update its score to the parent via hook. |
| `radioName` | The given radioName provided will be shown as the header of the Radio and the radioName must be unique for it to work. |
| `className` | You can give a className to the radio to control its behavior via css |

[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](##table-of-contents)

### The Backend 

#### API endpoints
To test the endpoint, use postman or tech equivalent and use `GET` `POST` `PATCH` `PUT` or `DELETE` request. The default port for the server is `4000` if you are running it from your local machine (eg. `localhost:4000/`)

| request | api endpoints | Description |
| ---- | ---- | ---- |
| `GET` | `/api/hello/` | The endpoints used for testing. Expected to return `world` in the `data` output |
| `GET` | `/api/providers/names` | The endpoints return providers' `id` and `names` |
| `GET` | `/api/providers/` | The endpoints return the phone providers details in the form of an array or a list at the `data` output. More details [below](#apiproviders) . |
| `GET` | `/api/providers/:providerIdOrName` | The endpoints that takes providerId (`number`) or name (`string`) and return the provider's infos and review(s) of that provider. If the `providerIdOrName` is invalid, it will return error (the error will only be noticeable in console as an error message). More details [below](#apiprovidersprovideridorname)|
| `POST` | `/api/reviews` | The endpoint which the review is handled. It provided email checks that one email user can only post their feedback once. The body of the endpoint is expecting the user input such as email, username, the scores and their feedback. See details [below](#apireview)|

(futher endpoints are under construction)

#### /api/providers

This endpoint queries the Database for the seeded provider data and the overall scores from the review_detail table. At the moment, we only have 9 providers, but it could be generalized to take in an id value and query for any number of providers.

The endpoint return's (i.e. `res.send()`) back an array of objects, where each object contains the following keys (`id`, `name`, `img_url`, `description`, `english_support`, `site_url`, `overall`).

| keys | Descriptions |
| ---- | ----| 
| `id` (integer) | The id value the provider has in the provider table. |
| `name` (string) | The name of the provider. |
| `img_url` (string) | The `img` address to the providers logo. |
|`description` (string) | A general paragraph description of the provider. |  
| `english_support` (boolean) | A boolean value as to if the company provides English customer support. |
| `site_url` (string) | The `url` for the providers website (English page if available). |
|`overall` (float rounded to 2 decimal places)| A figure of the average of all overall scores of that provider.  |

sample of data output:
```json
[
  {
    "id": 1,
    "name": "Mobal",
    "img_url": "https://www.mobal.com/img/common/logo.svg",
    "description": "A US based company that offers Japanese and International sim plans for both long-term and short-term stays. Mobal guarantees that the majority of their profits go to charity. They also offer complete English-speaking support. They also offer a home wifi plan with a mobile hotspot plan.",
    "english_support": true,
    "site_url": "https://www.mobal.com/",
    "overall": 5.71
  },
]
```
[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](#table-of-contents)

#### /api/providers/:providerIdOrName
This endpoint requires the providerid parameter as a number (1-9) or provider name (e.g. `Mobal`). This number corrolates to the providers location in the provider table.

This endpoint returns an array of two values:
```jsx
[providerInfo, reviews]
```
where:
- `providerInfo` is an object 
- `reviews` is an array of review object.

| Element | Description |
| ---- | ---- |
| `providerInfo`| It has all the same keys as in `/api/providers`, as well as (`ease_of_use`, `coverage`, `price`, and `customer_service`). Each of these keys are the average scores of their respective reviewer criteria. |
| `reviews` | An array of objects where each object contains the following keys (`reviewer_name`, `overall`, `ease_of_use`, `coverage`, `price`, `customer_service`, and `customer_review`). |

| keys | Description |
| ---- | ---- |
| `reviewer_name` (string) | The name of the reviewer to display. |
| `overall` (number)| The reviewer's overall score.| 
| `ease_of_use` (number) | The reviewer's Ease of Use score|  
|`coverage` (number) | The reviewer's coverage score. |
|`price` (number) | The reviewer's price score. |
|`customer_service` (number) | The reviewer's customer service score. |
|`customer_review` (string) | The reviewer's written review of the company. |

#### /api/review 
This endpoint is to add a new customers review. This endpoint takes the review in the body, test if that email had been used prior to review that company, and if it hasn't adds it to the database.

This endpoint expects the body to contain the following information:
- `provider_id` (number) 
- `reviewer_name` (string) 
- `email` (string) 
- `overall` (number) 
- `ease_of_use` (number) 
- `coverage` (number) 
- `price` (number) 
- `customer_service` (number) 
- `customer_review` (string) 

sample of the review body:
```json
{
    "provider_id":2,
    "reviewer_name": "Todd Rogers",
    "email": "godslayerXD@hotmail.com",
    "overall": 8,
    "ease_of_use": 6,
    "coverage": 9,
    "price": 7,
    "customer_service": 9,
    "customer_review": "Creating an account and getting the SIM card is a little annoying, and once you put the SIM card in your phone, there is a bit of annoyance in setting up the data plan on your phone. However, once you finish the setup, I haven't had an issue with the server and everytime I contacted customer service, my issue was quickly addressed."
}
```
[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](#table-of-contents)

# Credits

| Name | github |
| ---- | ---- |
| Taylor |  https://github.com/TaylorC19 |
| Nicole |  https://github.com/nikobatzi1990 |
| Taiga |  https://github.com/gagataiga |
| Ikuno |  https://github.com/ikuno815 |
| Joe |  https://github.com/kappanjoe |
| Lak |  https://github.com/LakGillJPN |
| Chadwick |  https://github.com/SirrorsMoore1975 |

[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](#table-of-contents)

# License
MIT License

Copyright (c) 2023 Phone-Review-App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Helpful Resources
- [React Router Docs](https://reactrouter.com/en/main) 
- [Faker JS Docs](https://fakerjs.dev/) 
- [Our Color Palette](https://colorhunt.co/palette/66bfbfeaf6f6ffffffff0063)

[![Back to top](https://img.shields.io/badge/Back%20to%20top-lightgrey?style=flat-square)](#table-of-contents)
