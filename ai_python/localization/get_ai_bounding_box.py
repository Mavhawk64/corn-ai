from pyimagesearch import config
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.models import load_model
import numpy as np
import mimetypes
import argparse
import imutils
import cv2
import os
import json
from datetime import datetime

def get_ai_bounding_box(filename, img_size=224):
    imagePath = os.path.sep.join([config.IMAGES_PATH, filename])

    print("[INFO] loading object detector...")
    model = load_model(config.MODEL_PATH)

    print("[INFO] loading dataset...")
    rows = open(config.ANNOTS_PATH).read().strip().split("\n")

    # Remove the rows that don't line up with the images we're using
    rows = [row for row in rows if row.split(",")[0] == filename]

    myjson = {"response_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"), "data": []}

    myjson["data"].append({"image": imagePath.split(os.path.sep)[-1], "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/" + imagePath.split(os.path.sep)[-1], "sickAreaAI": {}, "sickAreasActual": []})
    print("[INFO] predicting bounding boxes for {}".format(imagePath))
    image = load_img(imagePath, target_size=(img_size, img_size))
    image = img_to_array(image) / 255.0
    image = np.expand_dims(image, axis=0)

    (startX, startY, endX, endY) = model.predict(image)[0]

    print("[INFO] displaying results for {}".format(imagePath))
    print("[INFO] coordinates -- startX: {}, startY: {}, endX: {}, endY: {}".format(startX, startY, endX, endY))

    myjson["data"][-1]["sickAreaAI"] = {"x": float(startX), "y": float(startY), "w": float(endX-startX), "h": float(endY-startY)}

    image = cv2.imread(imagePath)
    (origh, origw) = image.shape[:2]
    image = imutils.resize(image, width=600)
    (h, w) = image.shape[:2]
    startX = int(startX * w)
    startY = int(startY * h)
    endX = int(endX * w)
    endY = int(endY * h)

    # because the rows have multiple bounding boxes for each image, we need to add rectangles for each of them for that image
    for row in rows:
        row = row.split(",")
        (filename, startX, startY, endX, endY, _, _, _, _, _, _) = row
        if filename == imagePath.split(os.path.sep)[-1]:
            myjson["data"][-1]["sickAreasActual"].append({"x": float(startX) / origw, "y": float(startY) / origh, "w": (float(endX)-float(startX)) / origw, "h": (float(endY)-float(startY)) / origh})
            startX = int(float(startX) * w / origw)
            startY = int(float(startY) * h / origh)
            endX = int(float(endX) * w / origw)
            endY = int(float(endY) * h / origh)
    
    return myjson


filename = "DSC06878.JPG"
print(get_ai_bounding_box(filename))