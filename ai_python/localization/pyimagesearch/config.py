import os

BASE_PATH = "C:/Users/mavbe/Desktop/Coding Folder/Classes/CAPSTONE/corn"
IMAGES_PATH = os.path.sep.join([BASE_PATH, "images"])
ANNOTS_PATH = os.path.sep.join([BASE_PATH, "annotations_handheld.csv"])

BASE_OUTPUT = "output"

MODEL_PATH = os.path.sep.join([BASE_OUTPUT, "detector.h5"])
PLOT_PATH = os.path.sep.join([BASE_OUTPUT, "plot.png"])
TEST_FILENAMES = os.path.sep.join([BASE_OUTPUT, "test_filenames.txt"])

INIT_LR = 1e-4
NUM_EPOCHS = 25
BATCH_SIZE = 32