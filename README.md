# dev-event-pilot
A poll app for the Dev event pilot

# Initial setup

### Install git
If you're on windows, download [git bash](https://gitforwindows.org/) so you'll have access to git commands

### Install NPM and Angular
Follow the directions on the [Angular website](https://angular.io/guide/setup-local) to download npm and the Angular CLI

### Install VSCode
Go to the [VSCode website](https://code.visualstudio.com/Download) and follow the instructions to download VSCode

### Clone the repo
In a folder of your choice, run
`git clone https://github.com/HurriedHighlander/dev-event-pilot.git`
This will create a "dev-event-pilot" folder in the folder where you ran the command. 

### Install packages for the frontend (first time only)
In the dev-event-pilot folder, locate the `frontend` folder and cd into it. Run `npm install` to install the packages. This may take a few minutes. 

## Development workflow

### Start the front end
In the `frontend` folder, run `ng serve` to start the frontend. Once the app is started, you can open a browser and go to `localhost:4200` to see the app. 

### Start the back end
In the `backend` folder, run `npm run start` to start the backend. Once the backend is started, you can access the api at `localhost:3000`. 