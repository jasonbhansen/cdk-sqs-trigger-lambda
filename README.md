# Requirements
 - NodeJs
 - docker
 - cdklocal
 - awslocal
 - aws sam
 - aws cli V2


localstack start (-d to detach)

cdklocal synth
cdklocal bootstrap
cdklocal deploy

Potential Errors: 
 - Unable to resolve AWS account to use. It must be either configured when you define your CDK Stack, or through the environment
  - Remove everything from ~/.aws/credentials ~/.aws/config



