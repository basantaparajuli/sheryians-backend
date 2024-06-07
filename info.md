initialize the project with npm..
npm init -y

npm i express
optional: npm i nodemon

now topics here:

dynamic routing:
what is dynamic routing?
-> sometimes we see some of the routes where only one part or one portion is changed like /profile/:users -> in users /basanta
/profile/bruh
/profile/nigga

<!-- the profile part is not changing only the back of the data is changing that might be users...! Yeah do you think we create multiple routes for those !
No we create one route that is by using like this /profile/:users -> this is dynamic routing.. come in part :users is a dynamic route that changes on users given something to the case...
here -> the /:users have become a variable! so any data u enter like /profile.basanta

 -->

How to get data coming from frontend at backend route?

Setting up parsers for form

<!-- we setup by using these middlewares -->

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setting up ejs for ejs pages

install ejs from npm..

-> npm i ejs
setup ejs as a view engine..
app.set("view engine", "ejs");
res.render(..)

<!-- we setup a views named folder and create index.ejs -->

now you can do what is go to the index.ejs and write html boilerplate and perform like this <%=anything %>

setting up public static files

<!-- To setup we should write a middleware in the main script file -->

app.use(express.static(path.join(\_dirname,'public'))) // no need to write the /\_dirname only \_dirname ah man no don't write slash...

path.join() // this is a method of nodeJS that can be used to join the path and we gave \_\_dirname that gives the default dir that we are in default path and if we join public to it then yeah mate we did it we connected public here...!

and also make sure when you use the folders or any files through the public file you don't have to write ./public/.../...
just write /.../... ...-> this is the folder names and files bro
