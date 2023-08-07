import type {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
  } from 'aws-lambda';

exports.handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    console.log("Hello SQS")
    event.Records.forEach(record => {
      const { body } = record;
      console.log(body);
    });
    return {};
}
