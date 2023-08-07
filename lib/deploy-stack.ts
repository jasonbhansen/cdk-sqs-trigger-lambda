import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { join } from "path";

export class DeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'DeployQueue', {
      queueName: "simply-serverless-sqs"
    });

    const handler = new NodejsFunction(this, "helloSqs", {
      entry: join(__dirname,"..","src","index.ts"),
      functionName: "helloSqs",
      runtime: lambda.Runtime.NODEJS_14_X,
      bundling: {
        externalModules: [
          'aws-sdk', // Use the 'aws-sdk' available in the Lambda runtime
        ],
      }
    });

    handler.addEventSource(new SqsEventSource(queue));

    this.exportValue(queue.queueUrl, { name: "sqs-queue-url"});
  }
}
