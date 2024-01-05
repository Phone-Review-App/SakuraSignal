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
2. [How to Use](#how-to-use)
3. [Developer: How to run this project](#developer-how-to-run-this-project)
[Credits](#credits)
4. [License](#license)
5. [Helpful Resources](#helpful-resources)
</details>

<br/>

# Project Description
## What is Sakura Signal?
Sakura Signal is a web app for user to review their overall user experiences over the main Japanese phone carriers

## Tech Stack

| Tech | Usage |
| ---- | ---- |
|![react](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=plastic) | The basic frontend user interface framework interacting with DOM |
| ![postgresql](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white&style=plastic) | A widely used, reliable and secure database |
| ![express](https://img.shields.io/badge/ExpressJS-52A62E?logo=express&style=plastic&logoColor=white) | Backend control to database |
| ![knex](https://img.shields.io/badge/KnexJS-cc2277?logo=knexjs&logoColor=white&style=plastic) | Maintaining tables and necessary seeds for the postgresql database |
| ![Faker]() | Create dummy reviews for testing purposes |


# How to use
## Normal user
The normal use of this web application does not required user to login, currently. 

The app does required user for an unique email address and an username in oreder to write a review of a particular phone service provider. Reading other users reviews, however, do not required any login.

(We might expend for user login feature in the future for deletion or editing their review)

### Homepage
When the app is fired, user will be directed to the homepage, each phone providers with a short description are listed on the page inside a cell block. A `Learn More` button is avaliable for each company and user can click on the button to see a more detailed reviews, detail such as, whether the provider has English support and reviews left by the other users are also listed.

### The Provider Page
When the user clicked on the `Learn More` button at the homepage on that specific provider, the user will be redirected into the Provider Page of that respective phone carrier. Inside the Provider Page there are several interesting elements user can reference themselves to. [A red-ish box](#the-average-provider-score-box) will show user the overall average score of that carrier and followed by reviews left by other individual users. 

#### The average provider score box
(aka `the red-ish box` referred above)
| Score Type | Describtion |
|----|----|
|Overall Scorce | The average score user given in the overall score field |
| Ease of Use | The average score user given in the ease of use field|
| Coverage | The average score user given in the coverage field|
| Price | The average score user given in the price field|
| Customer Service | The average score user given in the customer service field|
|----|----|

Below this red-ish box is the `Write a Review` button. Click the button will redirect user to `the review form page`(see [below](#the-review-form-page)) to input their review survey.

### The Review Form Page

## Admin User
(under construction)

# Developer: How to run this project

## Setting up the environment

### Prerequisites
This project required the following technology to run:-
- PostgreSQL
- NodeJS

please refer to your own OS and its corresponding guides to install the above necessary tech. 

__Disclaimer__: By installing the above named software, we are not responsible for any losses on breaking your system.

### 1. Clone the repository
Clone the repository in your working directory. However, if you decided only to contribute, folk the repository instead.

### 2. Setup .env file
Run the following terminal command at the root level of the project:-

```shell
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

### 4. Install the necessary packages
#### 1. Install the dependancies
```shell
npm install -i
```
#### 2. Build the application
```shell
npm run build
```

### 5. Run the application
The app consist of two parts, the server and the client. They are suppose to be in two separate devices or locations. Both client and sever must be running in order for the app to work.

#### server
At the server, which is the root directory of the folder, run the following command in the terminal:-
```shell
npm run start
```
Or alternatively, using nodemon:-
```shell
npm run dev
```
The server occupy port `4000` by default during development

#### client
At the client folder, run the following command in the terminal:-
```shell
npm run start
```
The client occupy port `3000` by default during development

### Problem with migration or seed
#### Updating or Amending the database
In case you might needed to update or make amendment to the database tables or seeds, use the following to create migration and seed, or something did not went as expected during install or building the application:
##### Make migration file
Replace `new_table` and give a meaningful name that represent your integration.

Create the new empty migration file by execute the following:-

```shell
npm run make:migration new_table
```
Edit the migration accordingly

#### Intergrate the migration file
Run the following to run the latest migration to the database:-
```shell
npm run migrate
```
#### Create seed file
Replace `new_seed` with a name best describe the seed. 

Run the following to create a new seed file:-
```shell
npm run make:seed new_seed
```
#### Intergrate the seed file
Run the following to intergrate the seed file:-
```shell
npm run seed
```

## The Frontend

### client/src/index.js
This file contains the routes and the client side endpoints for each separate page

### Components
`AvgScores` - displays all of the average scores on the carrier profile pages (the pink card)  

`Button` - a template for most of the buttons on the app 

`Card` - the cards that are displayed for each carrier on the Homepage  

`Dropdown Menu` - the dropdown menu that allows user to select which carrier they are reviewing on the Forms page 

`Footer` - the footer that is displayed on all pages 

`Header` - the header that is displayed on the Homepage and the thank you message after submission 

`Input` - a template for the input fiels on the Forms page 

`Navbar` - alternate version of the Header component; this one has a home button in the upper right corner 

`ProviderInfo` - displays the hero at the top of each carrier profile page

`Radio` - Score system for user to choose 0 - 10

### Pages
`Form` - the page where the user will input their scores and write their review 

`Homepage` - the homepage; this is the root path ("/"). 

Additonally, there is a page for each of the nine carriers and a `Provider.css` page for styling these pages.  

### Radio.jsx
```jsx
<span className={className}>
   {input.value}
    <br />
   <label htmlFor={label} 
      key={index}>
                        
      <input 
        id={label}
        type={input.type}
        name={radioName}
        value={input.value}
        checked={isRadioSelected(input.value)}
        onChange={handleRadioSelect}
        >
        </input>
        </label>
```
```jsx
<Radio 
className = {string}, label={string}, radioName={string}, scoreSetter={function}/>
```

`radioName` is the radio name for all those name for radio, in this example, it is bob

React in radio button uses a boolean method call `checked` to determine which buttons in the radio set are selected.
```jsx
<input checked={ true } name=”bob” value=”0”>{ /* commercial secret */ }</input>
<input checked={ false } name=”bob” value=”1”>{ /* commercial secret */ }</input>
<input checked={ false } name=”bob” value=”2”>{ /* commercial secret */ }</input>
```

We have a `useState` that default the selected button to 0 score. And the same `useState` has function to change that selected button value. 
```jsx
const [selectRadioButton, setSelectRadioButton] = useState(‘0’)
```
Another function ,`isRadioSelected`, is created to determine true/false by comparing the current value and the `useState` variable. 
```jsx
const isRadioSelected = (value) => selectRadioButton === value
```
This `isRadioSelected` function is placed on each button and linked to each button’s `checked` . When the `useState` function changes value (ie. user changing its score), the `isRadioSelected` return false, which make current button checked become false and since the value at the selected button is that given value, this make isRadioSelected which pointed to button checked became true.
We used another function which handle Radio select (`handleRadioSelect`).
```jsx
const handleRadioSelect = (event) => setSelectRadioButton(event.target.value);
```
When radio button is change, selectRadioButton changes as onChange is linked to `handleRadioSelect`. Every button has this function at `onChange`, so when a button status change, it will follow:
```jsx
<input checked={isRadioSelected(input.value) onChange={handleRadioSelect}>} </input>
```
When user decided to select other score, the function changed useState variable `selectRadioButton`, thereby causing previous selected button checked become false, the user now selected button has `checked` become true.

## The Backend 

### API endpoints
The express server contains 4 /api endpoints, though one is just used for testing ('/api/hello').

### /api/providers

This endpoint requires no inputs. This endpoint queries the Database for the seeded provider data and the overall scores from the review_detail table. At the moment, we only have 9 providers, but it could be generalized to take in an id value and query for any number of providers.

The endpoint `return`s (`res.send()`) back an array of objects, where each object contains the following keys (id, name, img_url, description, english_support, site_url, overall).

`id` (integer) is the id value the provider has in the provider table.  
`name` (string) is the name of the provider.  
`img_url` (string) is a img address to the providers logo. 
`description` (string) is roughly a paragraph description of the provider.  
`english_support` (boolean) is a value as to if the company provides English customer support.  
`site_url` (string) in the url for the providers website (English page if available). 
`overall` (float rounded to 2 decimal places) is the average of all overall scores of that provider.  

example:
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
  ...
]
```

### /api/provider/:providerid
This endpoint requires the providerid parameter as a number (1-9). This number corrolates to the providers location in the provider table.

This endpoint returns an array of two values
[providerInfo, reviews]
where:
providerInfo is an object 
reviews is an array of review objects.

The first element (providerInfo) has all the same keys as in /api/providers, as well as (ease_of_use, coverage, price, customer_service). Each of these keys are the average scores of their respective reviewer criteria.

reviews is an array of objects where each object contains the following keys (reviewer_name, overall, ease_of_use, coverage, price, customer_service,customer_review).

`reviewer_name` (string) is the name of the reviewer to display. 
`overall` (number) is the reviewer's overall score. 
`ease_of_use` (number) is the reviewer's Ease of Use score. 
`coverage` (number) is the reviewer's coverage score. 
`price` (number) is the reviewer's price score. 
`customer_service` (number) is the reviewer's customer service score. 
`customer_review` (string) is the reviews written review of the company.  

### /api/review 
This endpoint is to add a new customers review. This endpoint takes the review in the body, test if that email had been used prior to review that company, and if it hasn't adds it to the database.

This endpoint expects the body to contain the following information:
`provider_id` (number) 
`reviewer_name` (string) 
`email` (string) 
`overall` (number) 
`ease_of_use` (number) 
`coverage` (number) 
`price` (number) 
`customer_service` (number) 
`customer_review` (string) 

example body:
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

# Credits

# License

# Helpful Resources
- [React Router Docs](https://reactrouter.com/en/main) 
- [Faker JS Docs](https://fakerjs.dev/) 
- [Our Color Palette](https://colorhunt.co/palette/66bfbfeaf6f6ffffffff0063)
