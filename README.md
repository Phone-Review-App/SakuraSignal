# Phone-Review-App

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