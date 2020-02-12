This was created during my time as a student at Code Chrysalis


Runlog was created as a solo MVP project. 

It was created for an end user who would like to log and store their running statistics and visualise their data.



![Alt text](screenshots/runlog1.png)
![Alt text](screenshots/runlog2.png)
![Alt text](screenshots/runlog3.png)


## Setup Instructions
1. Clone the repo:  
```
git clone https://github.com/djrcoder/solo-mvp-cc.git
```
2. Install packages:  
```
yarn
```

3. Add your postgres config to the .env file
```
DATABASE_URL = postgresql+psycopg2://{Your database username}:password@localhost/locations
```

4. Migrate and seed your data:  
```
yarn knex migrate:latest
```
```
yarn knex seed:run
```

5. Build:  
```
yarn build
```

6. Start the server:  
```
yarn start
```


## Endpoints

### GET /api/runlog  
Return all locations  
response (list of locations)


### POST /api/log  
Submit data 

```
