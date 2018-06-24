# Security

The goal of this module is to demonstrate DevSecOps roles by using various AWS services to improve the security posture with minimum changes to the application code.

# Detect threat using honeyLambda
The objective is to identify bots and screenscrappers and block them from accessing your wesbites. In general, websites introduce a tracking pixel or hidden field know an honeytrap. A normal or legitimate user will not click it wherase a webcrawler or bot uses it. 

When a bot is crawling the website, this API notifies details in the slack channel. The devsecops team will update their black listed IP address range to blacklisted the bot's IP address. 


## Setup honeyLambda

### Pre-requisites 

* Python 2.7
* serverless  1.27.3
* aws cli 1.15

### create a config bucket to store the configurations

```sh
aws s3 mb s3://configbucket --region eu-west-1
```

### Slack

Create a slack channel `devsecops` and create a incomming webhook using following [instructions]( https://api.slack.com/incoming-webhooks)

For example,
https://hooks.slack.com/services/XXXXXX/YYYYY/REPLACE_WITH_YOURS

Open file `notifications-config.json` and update

```js
"slack": {
                        "enabled": "true",
                        "webhook-url": "https://hooks.slack.com/services/XXXXXXX/YYYYYYY/REPLACE_WITH_YOURS"
                },
```
                
### Copy configuration to S3

Copy the `notifications-config.json` to your s3 configuration bucket.

```sh

aws s3 cp notifications-config.json s3://configbucket/

```



## Deploy



```shell
cd honeyLambda
npm install
sls deploy --verbose
```

output
```sh
Service Information
service: nextunicorn-trap
stage: dev
region: eu-west-1
stack: nextunicorn-trap-dev
api keys:
  None
endpoints:
  GET - https://iody4e4ig01.execute-api.eu-west-1.amazonaws.com/dev/v1/get-pass
functions:
  honeylambda: nextunicorn-trap-dev-honeylambda

Stack Outputs
HoneylambdaLambdaFunctionQualifiedArn: arn:aws:lambda:eu-west-1:XXXXXXXXX:function:nextunicorn-trap-dev-honeylambda:1
ServiceEndpoint: https://iody4e4ig01.execute-api.eu-west-1.amazonaws.com/dev
ServerlessDeploymentBucketName: nextunicorn-deploy

```

### Testing

#### Setup successful

If you have successfully setup everything then you see following message and an immediate slack notification.


##### HTML output and Slack Message
<img width="791" alt="screen shot 2018-06-24 at 12 22 15" src="https://user-images.githubusercontent.com/12085596/41818563-5cfe709c-77a9-11e8-8b4d-82f711cc02c9.png">


#### Setup not successful

 Will get `internal server error`
 
 * Check whether you have correct notifications-config.json in the config bucket. 
 * Check whether you have created the config bucket specified in `.env.yml`

# Protect threat using OWASP top 10 rules in AWS WAF

Go to the `CloudFormation` service in eu-west-1 region. 

Click `Create stack` and upload the OWASP10_base.yml file to click next steps to create the WebACL. 

## Verification
When the cloudformation script successfully completes, go to the `WAF & Shield` services

You will see following:

<img width="1424" alt="screen shot 2018-06-24 at 12 30 31" src="https://user-images.githubusercontent.com/12085596/41818635-c76f4644-77aa-11e8-86f9-99a0d6e199e0.png">

<img width="1415" alt="screen shot 2018-06-24 at 12 32 21" src="https://user-images.githubusercontent.com/12085596/41818637-cbccec64-77aa-11e8-8549-633273eca502.png">

<img width="1436" alt="screen shot 2018-06-24 at 12 32 40" src="https://user-images.githubusercontent.com/12085596/41818639-ceeb2bd6-77aa-11e8-9c87-04255633e8dc.png">





# Credits
This module is inspired by following git hub projects. It has been adapted to simplify setup and demo for audiences (who we assume do not have any prior knowledge of the topic or setup) in the workshop. 

* [honeyLambda](https://github.com/0x4D31/honeyLambda)
* [AWS WAF OWASP 10](https://github.com/aws-samples/aws-waf-sample/tree/master/waf-owasp-top-10)


# Disclaimer
This repo and its modules have been designed to explain the concepts and give hands-on demo in a 2 hours devsecops workshop. 
Hence it has been optimised for ease of use and to learn how to use various AWS services and toolset. It is for demo and educational purpose only. There is no explicit or implicit warranty that code is production ready or support will be provided. 





