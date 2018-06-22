# aws-devsecops-workshop-nextunicorn
This repository contains code for hands on excercises to setup a internet facing web application and how to secure it using AWS native services.
The webapp is built using HTML5 and Javascript and the backend is nodeJS runtime. No prior knowledge of HTML5 or Javascript needed. 
However, familiarity will help to quickly finish these excercises.

Following AWS services will be use and participants are expected to have a basic knowledge on the these services and its working. 
1. AWS Lambda
2. API Gateway
3. S3
4. Cloudfront


Pre-requiste:

AWS lamda supports certain versions of NodeJS runtime. We will be using 6.10 in this workshop
https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html

1. Install node 6.10 
Please follow the link to install node version manager to install 6.10
https://github.com/creationix/nvm

Verify your installation by running following command your terminal or command prompt
#node --version
v6.10.0

CAVEAT: the version of the node needs to match with the lambda runtime to avoid unneccessary troubleshooting due to mismatch.

2. Install AWS CLI
https://docs.aws.amazon.com/cli/latest/userguide/installing.html

Verify your installation by running following command your terminal or command prompt
#aws --version
aws-cli/1.15.43

make sure you see following

3. Install serverless framework

https://serverless.com/framework/docs/providers/aws/guide/quick-start/

Verify your installation by running following command your terminal or command prompt
#sls --version
1.27.3

4. Setup the IAM User for serverless


https://serverless.com/framework/docs/providers/aws/guide/credentials/
follow the instruction given in section "Creating AWS Access Keys" and "Setup with the aws-cli"


4. clone this repo

5. Each directory has a readme that gives details instructions to setup, configure, deploy and run the applications.
