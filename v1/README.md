
#Backend

Go to the backend directory

then run following command

#npm install

This will create node_modules directory with the dependent library

then run following command

#sls deploy --verbose

Copy the end point of the API Gateway.

#Frontend
Go to the frontend/src directory
Edit the functions.js 

replace 
var subscribeURL = "<YOUR API GATEWAY Cloudfront>/subscribe"
for example, var subscribeURL = "https://X12323232323.execute-api.eu-west-1.amazonaws.com/dev/subscribe";
