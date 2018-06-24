# Goal
The objective is to build, operate and secure an internet facing application hosted in AWS by adopting devsecops principles and practises.

# About Next Unicorn

Next Unicorn is a the hotest start up in London. As the name suggests, they are working next big thing that is going to change our world. They are looking for practioners who can build a scalable, secure app on AWS.

You are those selected few who are going to make it happen.

# Their product stack

Next Unicorn follow devops best practise and use Infrastructure as a code for most of their development. 

## v1 directory contains their application stack
The application is built using HTML5 and Javascript and the backend is nodeJS runtime. No prior knowledge of HTML5 or Javascript needed. However, familiarity will help to quickly setup their environment in your AWS account..


## v2 directory contains their infrastructure stack
It is a basic VPC with bastion host, Linux and Windows servers. The Devops team suspect one of their servers may be compromised and could be used to attack their other servers in the network. 

As a "DevSecOps Ninja" Your task is to setup their stacks in your AWS account and help them to
- detect security incidents
- remediate security incidents
- improve their security posture using recommended best practises.

Following AWS services will be used and participants are expected to have a basic knowledge on the these services and its working. 
1. AWS Lambda
2. API Gateway
3. S3
4. Cloudfront
5. CloudWatch



## Pre-requiste:

AWS lamda supports certain versions of NodeJS runtime. We will be using 6.10 in this workshop
https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html

### 1. Install node 6.10 

Please follow the link to install node version manager to install 6.10

https://github.com/creationix/nvm

Verify your installation by running following command your terminal or command prompt

```shell
#node --version
v6.10.0
```

CAVEAT: the version of the node needs to match with the lambda runtime to avoid unneccessary troubleshooting due to mismatch.

### 2. Install AWS CLI
https://docs.aws.amazon.com/cli/latest/userguide/installing.html

Verify your installation by running following command your terminal or command prompt
```shell
#aws --version
aws-cli/1.15.43
```

make sure you see following

### 3. Install serverless framework

https://serverless.com/framework/docs/providers/aws/guide/quick-start/

Verify your installation by running following command your terminal or command prompt

```shell
#sls --version
1.27.3
```

### 4. Setup the IAM User for serverless


https://serverless.com/framework/docs/providers/aws/guide/credentials/
follow the instruction given in section "Creating AWS Access Keys" and "Setup with the aws-cli"


### 5. clone this repo

```shell
git clone https://github.com/brhaspati/aws-devsecops-workshop-nextunicorn.git
```

### 6. Follow the instructions in the readme of each directory.

```shell
cd v1
vim Readme.md
```
