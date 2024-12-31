# Use this code snippet in your app.
# If you need more information about configurations
# or implementing the sample code, visit the AWS docs:
# https://aws.amazon.com/developer/language/python/

import boto3
from botocore.exceptions import ClientError
import os


def get_secret():

    secret_name = "secret_name"
    region_name = "eu-west-2"
    profile_name = "profile_name"

    # Create a Secrets Manager client
    session = boto3.session.Session(profile_name=profile_name)
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        raise e

    return get_secret_value_response['SecretString']

#export the secret as an environment variable
secret = get_secret()
print(secret)
os.environ['SECRET'] = secret
