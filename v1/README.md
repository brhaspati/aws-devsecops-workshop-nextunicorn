
# Initial Setup

## Backend

Go to the backend directory

then run following command

```shell
#npm install
```
This will create node_modules directory with the dependent library

then run following command
```shell
#sls deploy --verbose
```
Copy the end point of the API Gateway.

## Frontend
Go to the frontend directory

using your favorite editor, open 
src/functions.js

find the variable "subscribeURL" 
var subscribeURL = "https://<YOUR API GATEWAY endpoint>/subscribe"

replace, it with your API gateway endpoint
for example, 

var subscribeURL = "https://X12323232323.execute-api.eu-west-1.amazonaws.com/dev/subscribe";
  
## Create a S3 bucket 

You are now in "fronend" directory

Step 1 : Create a S3 bucket in the eu-west-1 
```shell
#aws s3api create-bucket --bucket <my-bucket> --region eu-west-1
```

Output
```shell
{
    "Location": "http://my-bucket.s3.amazonaws.com/"
}
```

Step 2: Copy the front end content to your website
```shell

#aws s3 cp . s3://<my-bucket>/ --acl public-read --recursive

```

Step 3: enable static web hosting option. 

```shell
aws s3 website s3://<my-bucket>/ --index-document index.html --error-document error.html
```
