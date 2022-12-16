from django.db import models


class BoxImage(models.Model):
    id = models.AutoField(primary_key=True)

    x = models.FloatField(default=0.00)
    y = models.FloatField(default=0.00)

    w = models.FloatField(default=0.00)
    h = models.FloatField(default=0.00) 

class CornImage(models.Model): 
    id = models.AutoField(primary_key=True)

    imageName = models.TextField() 
    predictedBox = models.ManyToManyField(BoxImage,related_name="predictedBox")
    actualBoxes = models.ManyToManyField(BoxImage,related_name="actualBoxes")

    def __str__(self):
        return self.imageName

class History(models.Model): 
    id = models.AutoField(primary_key=True)

    # firebase_user_id is a string that should be a valid Firebase user ID.
    # In the next feature, we should include code that checks that firebase_user_id
    # is a valid Firebase user ID and handle any errors if it is not. This will ensure
    # that we are using a valid user ID when interacting with the Firebase database and
    # prevent any potential errors or issues with accessing user data.
    firebase_user_id = models.CharField(max_length=128)

    corn_images = models.ManyToManyField(CornImage, related_name='histories')
    is_sick_choice = models.BooleanField(default=False) 
    date_completed = models.DateTimeField(auto_now_add=True)
