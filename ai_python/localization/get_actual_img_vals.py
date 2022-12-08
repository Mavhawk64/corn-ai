from pyimagesearch import config
import numpy as np
import cv2
import os

img_size = 224

print("[INFO] loading dataset...")
rows = open(config.ANNOTS_PATH).read().strip().split("\n")

data = []
targets = []
filenames = []

for row in rows[1:]:
    print("[INFO] processing {}/{}".format(rows.index(row), len(rows)))
    row = row.split(",")
    (filename, startX, startY, endX, endY, _, _, _, _, _, _) = row
    imagePath = os.path.sep.join([config.IMAGES_PATH, filename])
    image = cv2.imread(imagePath)
    (h, w) = image.shape[:2]
    startX = float(startX) / w
    startY = float(startY) / h
    endX = float(endX) / w
    endY = float(endY) / h
    filenames.append(filename)
    data.append([startX,startY,endX,endY])
