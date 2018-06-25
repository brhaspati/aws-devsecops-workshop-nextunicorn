
# Initial Setup

## Create buckets
We need 4 buckets for this demo

Purpose | Description
------------ | -------------
WEBSITE HOSTING BUCKET | Choose a unique name for your bucket where you would like to host the website
DEPLOYMENT BUCKET | All the lambda deployment will be stored here
CONFIGURATION BUCKET | Configuration files goes here
LOG BUCKET | S3 and Cloudfront access logs goes here.


## Step 1 : Create a S3 bucket in the eu-west-1 
Please choose a unique bucket name for your website. 

```shell
aws s3api create-bucket --bucket mywebsitebucket --region eu-west-1
```

Output
```shell
{
    "Location": "http://mywebsitebucket .s3.amazonaws.com/"
}
```

## Step 2: Enable Static web hosting

```shell
aws s3 website s3://mywebsite/ --index-document index.html --error-document index.html
````

## Step 3: Create deployment bucket

```shell
aws s3api create-bucket --bucket mywebsite-deploy --region eu-west-1
```

## Step 4: Create config bucket

```shell
aws s3api create-bucket --bucket mywebsite-config --region eu-west-1
```

## Step 5: Create log bucket

```shell
aws s3api create-bucket --bucket mywebsite-log --region eu-west-1
```


## Backend

Go to the backend directory

open the `.env.yml` file update the `DEPLOYMENT_BUCKET`

```shell
DEPLOYMENT_BUCKET: mywebsite-deploy
```

then run following command

```shell
npm install
```
This will create node_modules directory with the dependent library

then run following command
```shell
sls deploy --verbose
```
Copy the end point of the API Gateway.

## Frontend
Go to the frontend directory

using your favorite editor, open 
src/functions.js

find the variable "subscribeURL" 

```javascript
var subscribeURL = "https://<YOUR API GATEWAY endpoint>/subscribe"
```

replace, it with your API gateway endpoint
for example, 

```javascript
var subscribeURL = "https://X12323232323.execute-api.eu-west-1.amazonaws.com/dev/subscribe";
```  
## host the web site in the S3

Go to Console -> select S3 -> choose your website bucket -> click the `server access logs` 

<img width="1372" alt="screen shot 2018-06-25 at 19 46 12" src="https://user-images.githubusercontent.com/12085596/41869305-7c384fa2-78b0-11e8-83fd-8138122899bd.png">


Go to frontent directory in your command line and copy the frontend content to S3 bucket of your website

```shell
cd frontend
aws s3 cp . s3://mywebsite/ --acl public-read --recursive

```

# Deploying any furher changes

## Frontend

```shell
cd frontend

aws s3 cp . s3://<my-bucket>/ --acl public-read --recursive

```

## Backend



then run following command

```shell
cd backend

npm install
```
This will create node_modules directory with the dependent libraries

then run following command
```shell
sls deploy --verbose
```

# Test you app

In your browse, type the URL

```html
 http://<my-bucket>.s3-website-eu-west-1.amazonaws.com
```
 
 Enter an `email address` in text box and click subscribe. 
 
 Go to the AWS Console, select `DynamoDB`<br>
 Go to the table `NextUnicornMailingListTable`<br>
 
 You will find the email address. 
 
 Voila. Next Unicorn is in the business.
 
 But is it safe?
 
 # Day 2
 
 Improve the security of the application by using AWS services and best practises. 
 
 Follow the instruction given in the `README.md` of `security` directory.

