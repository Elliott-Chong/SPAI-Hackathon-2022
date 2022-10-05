from django.db import models


def upload_to(instance, filename):
    return filename

# Create your models here.


class Recycle(models.Model):
    img_url = models.ImageField(upload_to=upload_to)
