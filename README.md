# Gigih Playlist

## About The Project

This is my project during participating in [#GenerasiGIGIH 2.0.](https://www.anakbangsabisa.org/generasi-gigih) program. In this project, I built a Website to create a playlist in Spotify. To achieve that purpose, I used Spotify Web API.

## Features

- Authenticate using Spotify account
- Create playlists
- Search track
- Search results list
- Selected track list
- etc~

## Powered by

- [Create React App](https://create-react-app.dev/) to initialize the project with Javascript and TypeScript.
- [React Redux](https://react-redux.js.org/) to manage the app state.
- CSS + [Tailwindcss](https://tailwindcss.com/docs/installation) to build the user interface.
- [react testing-library](https://testing-library.com/) to test Implementation.
- Hosted on [Vercel](https://vercel.com/).

## Environment Variables

Before run this project, you need to setup the following environment variables to your .env file.

- `REACT_APP_CLIENT_URI_SPOTIFY` contains the app Base URL e.g. `https://localhost:3000/`
- `REACT_APP_CLIENT_SPOTIFY` contains spotify Client Secret
- `REACT_APP_CLIENT_SECRET` contains Spotify Client ID

## Run on Local

- Clone the project

  ```bash
    git clone https://github.com/anangazmi/gigih-finalproject
  ```

- Go to the project directory

  ```bash
    cd gigih-finalproject
  ```

- Install dependencies

  ```bash
    npm install
  ```

- Set up the [environment variables](#environment-variables)

- Start the server

  ```bash
    npm run start
  ```

- Open <http://localhost:3000> with your browser to see the result.

## Feedback

If you have any feedback, you can create issue(s) [here](https://github.com/anangazmi/gigih-finalproject/issues)
