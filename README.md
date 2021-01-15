## :notebook: Student Grades Sheet

This project is part of a challenge proposed by [Tunts](http://www.tuntscorp.com/site/) during an intership selection. This app is a NodeJS software that gathers student information form a spreadsheet on [Google Sheets](https://www.google.com/sheets/about/) calculates each student average score, and returns the student situation (passed, failed or needs to realize final exam);

### :computer: How to reproduce

To clone and run this application, you'll need Yarn, Node and Git. Input theese lines in your terminal:

```bash
# Clone this repository
$ git clone https://github.com/lucascassilha/student-grades

# Go into the repository
$ cd student-grades

# Install dependencies
$ yarn or npm install
```

Before running the app, there's one more thing you need to do: configure your environment variables. Your .env file (project root folder) shoud look like the folowing (NOT ACTUAL CODES):

```
CLIENT_ID=12345
CLIENT_SECRET=542321
PROJECT_ID=5123154
API_KEY=14254124
```

The codes here can be found once your configure your oAuth 2.0 credentials on [Google Cloud](https://console.developers.google.com/). For more information on this topic, click [here](https://developers.google.com/sheets/api/guides/authorizing)

Now, to run the app, just run the command below on your terminal and project folder.

```bash
# Be sure to be in the correct folder
node src/app.js
```

_If you have any douts on how to perform your authentication, read the topic below._

### :lock: Authentication

In order to write on sheets (even public ones), Google requires you to login usign a Google account. That's where [oAuth 2.0](https://oauth.net/2/) comes in.

When you run the app, click the provided link and login with your Google Account. Then, you will be redirected to a page like this:

![token page](https://nimbus-screenshots.s3.amazonaws.com/s/5c1087f9c51506e4dd6a9b582a255335.png).

Now, just copy the content after **code=** and before **&scope=** _(underlined text)_ and paste it in the console that you are running the app at. No need to decode the uri, we do that for you! :smile:

That's it! The app should work :tada:

### :speech_balloon: Reach me

If you like my work and/or want to talk to me, [**please do!**](https://www.linkedin.com/in/lucaszawadneak)
