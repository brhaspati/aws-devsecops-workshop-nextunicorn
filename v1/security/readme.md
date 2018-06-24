# Security

The goal of this module is to demonstrate DevSecOps roles by using various AWS services to improve the security posture with minimum changes to the application code.

## Pre-requisites 

* Python 2.7
* serverless  1.27.3
* aws cli 1.15


## Setup

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
  GET - https://iody4e4ig0.execute-api.eu-west-1.amazonaws.com/dev/v1/get-pass
functions:
  honeylambda: nextunicorn-trap-dev-honeylambda

Stack Outputs
HoneylambdaLambdaFunctionQualifiedArn: arn:aws:lambda:eu-west-1:337688563024:function:nextunicorn-trap-dev-honeylambda:1
ServiceEndpoint: https://iody4e4ig0.execute-api.eu-west-1.amazonaws.com/dev
ServerlessDeploymentBucketName: nextunicorn-deploy

```

### Testing













# Credits
This module is inspired by following git hub projects. It has been adapted to simplify setup and demo for audiences (who we assume do not have any prior knowledge of the topic or setup) in the workshop. 

* [honeyLambda] (https://github.com/0x4D31/honeyLambda)
* [AWS WAF OWASP 10] (https://github.com/aws-samples/aws-waf-sample/tree/master/waf-owasp-top-10)


# Disclaimer
The workshop has been put together for the ease of use and to learn how to use various tools. It is for demo and educational purpose only. There is no explicit or implicit warranty that these code is production ready or support will be provided. 





