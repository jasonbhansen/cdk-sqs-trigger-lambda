
# Trigger Lambda (TypeScript) via SQS using Localstack

## Requirements

 - NodeJs
 - docker
 - cdklocal
 - awslocal
 - aws sam
 - aws cli V2
## Useful commands
### Start Localstack   

     localstack start (-d to detach)

### Deploy CDK
- `cdklocal synth`
- `cdklocal bootstrap`
- `cdklocal deploy`
##### Potential Errors:
- <span style="color:red">Unable to resolve AWS account to use. It must be either configured when you define your CDK Stack, or through the environment</span>.
    - Remove everything from ~/.aws/credentials ~/.aws/config