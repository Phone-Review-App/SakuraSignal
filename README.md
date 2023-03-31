# Phone-Review-App
998-add-server-endpoint-to-readme

## API endpoints
The express server contains 4 /api endpoints, though one is just used for testing ('/api/hello').

### /api/providers

This endpoint requires no inputs. This endpoint queries the Database for the seeded provider data and the overall scores from the review_detail table. At the moment, we only have 9 providers, but it could be generalized to take in an id value and query for any number of providers.

The endpoint `return`s (`res.send()`) back an array of objects, where each object contains the following keys (id, name, img_url, description, english_support, site_url, overall).

id (integer) is the id value the provider has in the provider table.
name (string) is the name of the provider.
img_url (string) is a img address to the providers logo
description (string) is roughly a paragraph description of the provider.
english_support (boolean) is a value as to if the company provides English customer support.
site_url (string) in the url for the providers website (English page if available)
overall (float rounded to 2 decimal places) is the average of all overall scores of that provider.

example:
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

## /api/provider/:providerid
This endpoint requires the providerid parameter as a number (1-9). This number corrolates to the providers location in the provider table.

This endpoint returns an array of two values
[providerInfo, reviews]
where:
providerInfo is an object 
reviews is an array of review objects.

The first element (providerInfo) has all the same keys as in /api/providers, as well as (ease_of_use, coverage, price, customer_service). Each of these keys are the average scores of their respective reviewer criteria.

reviews is an array of objects where each object contains the following keys (reviewer_name, overall, ease_of_use, coverage, price, customer_service,customer_review).

reviewer_name (string) is the name of the reviewer to display
overall (number) is the reviewer's overall score
ease_of_use (number) is the reviewer's Ease of Use score
coverage (number) is the reviewer's coverage score
price (number) is the reviewer's price score
customer_service (number) is the reviewer's customer service score
customer_review (string) is the reviews written review of the company.

## /api/review 
This endpoint is to add a new customers review. This endpoint takes the review in the body, test if that email had been used prior to review that company, and if it hasn't adds it to the database.

This endpoint expects the body to contain the following information:
provider_id (number)
reviewer_name(string)
email (string)
overall (number)
ease_of_use (number)
coverage (number)
price (number)
customer_service (number)
customer_review (string)

example body:
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
