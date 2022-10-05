from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RecycleSerializer
from rest_framework import status
import base64
from django.core.files.base import ContentFile
from .models import Recycle
from uuid import uuid4

from transformers import ViTFeatureExtractor, ViTForImageClassification
from PIL import Image
import numpy as np
import json
import os

from django.conf import settings


class UploadView(APIView):
    def post(self, request, format=None):

        data = self.request.data
        recycle = Recycle()

        id = str(uuid4())

        image_data = data
        format, imgstr = image_data.split(';base64,')
        print("format", format)
        ext = format.split('/')[-1]

        data = ContentFile(base64.b64decode(imgstr))
        file_name = id+'.' + ext
        # image is User's model field
        recycle.img_url.save(file_name, data, save=True)
        recycle.save()

        # image = '/Users/elliott/Documents/Coding/SPAI-Hackathon-2022/backend/trashgo/media/fire.jpeg'
        image = os.path.join(settings.BASE_DIR, settings.MEDIA_ROOT)
        image = os.path.join(image, file_name)
        image = Image.open(image)
        image = np.array(image)
        # image = Image.open(requests.get(url, stream=True).raw)

        feature_extractor = ViTFeatureExtractor.from_pretrained(
            'google/vit-base-patch16-224')
        model = ViTForImageClassification.from_pretrained(
            'google/vit-base-patch16-224')

        inputs = feature_extractor(images=image, return_tensors="pt")
        outputs = model(**inputs)
        logits = outputs.logits
        # model predicts one of the 1000 ImageNet classes
        predicted_class_idx = logits.argmax(-1).item()
        print("Predicted class:", model.config.id2label[predicted_class_idx])
        # Object to be sent
        prediction_separated = model.config.id2label[predicted_class_idx].split(
            ', ')
        prediction = {"prediction": prediction_separated}
        print(json.dumps(prediction))
        return Response(json.dumps(prediction))
