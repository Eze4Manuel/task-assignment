# Plusone takehome assignment

Takehome assignment for plusone by Ezenagu Emmanuel S

#### User Story
As a user, I want to be able to know which words are not English in my text so I can improve my English.

By inputting some text in a textfield and clicking check the application checks the text for non english words.

A word will be considered as non-English word if it does not exist in this list: https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/master/master.txt


## Application Structure
 - client folder - This holds the client frontend application. This was created using ReactJS.
 - server folder - This holds the application backend. This was written using Typescript, Nodejs and ExpressJs.
 - nginx - This is used during deployment to serve the frontend react application
- The application is deployed on aws and can be tested by visiting the url below

    http://demoalbforecs-1068663832.us-east-1.elb.amazonaws.com/



## Running the application
First Ensure you have Docker installed ans setup on your system

Run Development - in the root directory of the repository, run
- `docker compose build .` 

This will spin up all the needed applications required to run the application locally on your system using the confirations set in `Dockerfile.dev` for development mode.

## Deploying the application using Docker
To deploy the application using docker, first build the individual images for client and server.

Build for the client - Navigate to the client directory and run
- `docker build -t [image_name] .`
       
This will build the client react application image using to be hosted nginx.

Ensure to point the frontend application to where the backend application is hosted using the [https://backend_url:backend_port]

Build for the server - Navigate to the server directory and run 
- `docker build -t [image_name] .`

         