# Coffee_Company API

An Api For Serving Coffee Machines & Coffee Pods Data For An Ecommerce Mobile App Client.

# Technologies used

1. Node.js w/ express
2. MongoDB
3. Mongoose
4. Postman
5. Git w/ github

# Prerequisities

To be able to run the project successfully you need to have the following installed:

### MongoDB

1. You can install MongoDB Server from their official website.
2. Or you can use a remote DB (Use Atlas for example).
3. You Have to specify the connection string in the "config.env" file.

### npm

1. You have to install npm globally on your machine.
2. You can install npm from the `npmjs` website.

### Environment Variables

You need to create an environment variables file named `config.env` in the root directory, there is an example environment variables file in the root directory, namely `.env.example` . Please make sure to correctly fill the env variables to avoid runtime errors.

You can use the same "config.env" as mine. Just copy the following and paste in yours:

<pre>
#Node Enviroment Configuration
#development or production
NODE_ENV=production

#Server Port Configuration
PORT=8000

#Database Configuration
DATABASE=mongodb://localhost:27017/Coffee_Company

#Database_Query_Default_Pagination_Limit 
#[Default Number Of Documents To Be Retrieved From DB If "Limit" Was Not Specified In The Query String]
QUERY_PAGINATION_LIMIT=10
</pre>

# How to run?

1. run 'npm install'
2. You might need to run the seeder script (<i>check the database seeding section for more details</i>) or you can insert data manually using the insert endpoints (<i>Check the api documentation for more details.</i>).
3. run 'npm start'

# Database Seeding

To seed an empty database before running the project you should run `npm run seed`, this will use the prewritten seeds stored in `./seeder/seeds.js` to seed your database.<br/>
**NOTE!:** this script wipes the database before it starts seeding.<br/>

# API Documentation

I use `Postman` for generating the API documentation, so the documentation is hosted on a [remote webpage](https://documenter.getpostman.com/view/10290474/T1DqfGWR?version=latest) <br/>
