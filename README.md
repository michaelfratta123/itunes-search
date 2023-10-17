# How to use the itunes-search app

Once the app is running in the browser (either via the frontend app on Heroku, or by first installing the repo) you will be able to input search terms e.g. "Madonna" to search the iTunes library. You will then need to select a media type e.g. "Music", so that (in this example) the results returned will be Music by Madonna.

The search results appear in a pop-up, and you will be able to scroll up and down - and choose which ones you'd like to save to your favourites (more on this later). You can exit the pop-up by clicking on the 'X' on the top-right, or the 'Close' button on the bottom-right.

NB: no results will show in the pop-up, if you have not entered a search term AND a media type.

If you saved any items from the pop-up - these will show in the 'homepage' (where you entered your search into), underneath the 'Favourites' sub-heading. You will then be able to remove any favourites from your list.

## Use from Heroku

Frontend (USE THIS ONE): https://itunes-search-frontend-4e516a05a2e6.herokuapp.com/

Backend (DO NOT USE): https://itunes-search-backend-c5afb9a37b4b.herokuapp.com/

## Installing repo

First clone the repo, then navigate to the itunes-search-backend directory in the terminal, and type 'npm start', then press enter. After a minute or two, the app should automatically launch in your default web browser. Proceed to use it as instructed above.

## Testing

A snapshot and unit test have been written for the backend and frontend, each. You will be able to run these by navigating to the relevant directories - i.e. itunes-search-backend and itunes-search-frontend - and typing 'npm test' in the terminal.

NB: You will see 2 failed tests, when running tests from the backend. This is because, the backend and front are running concurrently - so 'npm test' launches the frontend tests automatically too. However, the backend is not rigged with the relevant functionality to run the frontend tests, so these will fail. They will pass though, when you navigate to the frontend directory and run 'npm test' - as all the relevant functionality is contained therein.

## Security

API calls where secured using Helmet: https://helmetjs.github.io/

"Helmet helps secure Express apps by setting HTTP response headers."

This was implemented, by setting up the backend so that it uses Helmet (`app.use(helmet());`)

### Happy searching of the iTunes Store library!
