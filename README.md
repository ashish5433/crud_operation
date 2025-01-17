**Simple CRUD Operation using an API**   
Here We can perform simple opertion like creating user ,getting all the user details ,updating the users and deleting the user.  

**Steps to download this repository**  
1.Download the ZIP folder or use git clone to clone the repository  
2.Open your Terminal in the same folder and enter npm install (To Install all the required Dependencies ) Make sure you have node installed in your local envioronment    
3.Create a .env file and include   
MONGO_URL:{YOUR DB CONNECTION URL}  
PORT:{YOUR PREFFERED PORT NUMBER}  
JWT_TOKEN: {CREATE A SECRET KEY }  
4.Run **node app.js** to run your application and you are now good to go  

**NOTE** (Only Authorized user can get,update and delete the data .Make sure you created your jwt token and include that in the header as {authorization:{Your JWT Token}}    

**API ENPOINTS**
For Creating an User:    
[http://localhost:{PORT_NUMBER}/api/users](http://localhost:3000/api/users)  
For getting an User:   
[http://localhost:{PORT_NUMBER}/api/users/getusers](http://localhost:3000/api/users/getusers)  
For Updating an User:  
[http://localhost:{PORT_NUMBER}/api/users/updateuser/ID_of_the_User](http://localhost:3000/api/users/updateuser/IDoftheUser)  
For Deleting the user:  
[http://localhost:{PORT_NUMBER}/api/users/deleteuser/ID_of_the_User](http://localhost:3000/api/users/deleteuser/IDoftheUser)  



