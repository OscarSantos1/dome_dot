# Do me.

#### Video Demo: https://www.youtube.com/watch?v=zDtUAguMPQQ

#### Link to the web app: https://d3gq8nafwrxj4z.cloudfront.net

#### Concept and usage:

  
  

###### Overview

  
  

The app is a sort of task tracker. It's a very simple, clean and elegant way to layout your day. I've always wanted to improve my productivity but thight schedules do not work for me. So this is a tool that helps me losely plan my day and keep track of my progress.

  

###### Adding a task

  

If you go to the web site, you can create your own account and start planing your day. First of all, you'll see Today's to do list. Click on the 'Add' button and write something you have to do today, then click on the 'Today' button to add that task to today's list or click on the 'Tomorrow' button to add it to tommorrows list. If you hit 'enter' the task will be added to today's list by default. As stated before, the app keeps track of the current date so every time you add a task, the date of creation is saved as part of the description of the task in the back end.

  

###### Deleting a task

  

If you want to delete a task simply click on the trash can icon on the right end of the task in question.

  

###### Completing a task

  

Click on the check mark when compliting a task. You'll see that the task in question will be moved down to the bottom and it will lose opacity. The tasks that you need to do will remain on top at all times.

  

###### Drag and Drop

  

It is worth noting that, for the pending tasks, you have all the liberty and flexibility to sort them as you may want. Simply drag and drop from one spot to the other. You can also drop them in a different list, if you need to.

  

###### Hide done task button

  

If you wanna keep things clean you can click on the floating button containing the eye icon (the 'eyecon') to hide the tasks that have been completed. Click on the button once more to reveal the finished tasks again.

  

###### Moving yesterday's pending tasks to today's list

  

If you didn't complete all the tasks the day before, you can use the floating button containing the arrow and move them over to today's list to be complited this time. You can also drag and drop them one by one but if there are multiple unfinished tasks the button is a faster way to do it.

  

###### History

  

Once you complete a task, the date of completion is saved so, if you click on the 'History' link at the bottom, you will see a registry of all the tasks you've ever done.

  
  
  

#### Backend:

  

The backend was developed using a python's flask framework and sqlite3 for the database. **enter 'python app.py' to run the backend locally**

  

###### app.py

  

This is the api the frontend comunicates with. It uses flask resful to handle the requests. It also uses the cs50 library to query the database (**doMe.db**).

  

###### .venv

  

This directory is the virtual environment that contains every module needed to run app.py correctly.

  

###### doMe.db

  

Contains 3 tables: one to store completed tasks, one for the pending tasks and one to store the users and important information like hashes, ids, and preference settings for each of them.

  

###### Dockerfile

  

For deployment, a docker image is built from the backend files. The Dockerfile contains indications for building said image.

  

#### Frontend:

  

The frontend was built using React JS. Using the module axios to make the request to the api. The routing is done on this side, also. **run 'export REACT_APP_API_URL=http://localhost:8080/api' before running the backend if running locally'**

  

###### App.js

  

This is the most important file. The frontend of the web app is layed out mostly here making use of the files in the 'components' directory. It controls what is shown on screen at any moment.

  

###### components

  

This directory contains varios components of the user interface. Hence the name. A component can be an element of the UI you interact with or a whole page.

In this case, the main ones are:

  

* The 'DayLayout' wich are the testerday, today and tomorrow spaces you see when running the app.

* The 'Tasks' which is what displays al the tasks as a list.

* The 'Task' which is the single green box containing the text and the delete and complete buttons.

* The 'FloatingBtn' which are the two different buttons floating at the bottom of the yesterday's and today's lists.

* The different routes like 'History', 'Login' and 'Register'.

  

###### package.json

  

This file registers all the modules needed for App.js to work.

  

###### build

  

Contains the actual files created for the deployment of the forntend.