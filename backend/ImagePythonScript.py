import os
from pydoc import cli
from dotenv import load_dotenv
import boto3


load_dotenv()

AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID') 
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_STORAGE_BUCKET_NAME')
AWS_S3_ENDPOINT_URL = os.getenv('AWS_S3_ENDPOINT_URL')
  
session = boto3.Session(
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
        
#Then use the session to get the resource
s3 = session.resource(   's3',
        region_name='sfo3',
        endpoint_url=AWS_S3_ENDPOINT_URL,)

my_bucket = s3.Bucket(AWS_STORAGE_BUCKET_NAME)

for my_bucket_object in my_bucket.objects.all():
    print(my_bucket_object.key) 

    # if the file contains a . then we now its a image
    # otherwise its a folder and we should skip it
    if "." in my_bucket_object.key:

        # this is what changes an image from private
        # to
        # public so we can access it later on 
        my_bucket_object.Acl().put(ACL='public-read')