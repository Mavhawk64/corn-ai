import os
from dotenv import load_dotenv
import boto3


load_dotenv()
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID') 
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_STORAGE_BUCKET_NAME')
AWS_S3_ENDPOINT_URL = os.getenv('AWS_S3_ENDPOINT_URL')

print(AWS_ACCESS_KEY_ID)
session = boto3.session.Session()
client = session.client('s3',
                        region_name='sfo3',
                        endpoint_url=AWS_S3_ENDPOINT_URL,
                        aws_access_key_id=AWS_ACCESS_KEY_ID,
                        aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

 
response = client.list_objects(Bucket='csci4970-agro-ai-images')
for obj in response['Contents']:
    print(obj['Key'])