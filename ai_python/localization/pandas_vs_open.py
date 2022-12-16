from pyimagesearch import config
import pandas as pd
rows = open(config.ANNOTS_PATH).read().strip().split("\n")
print(rows)
url = "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/annotations_handheld.csv"
# Read the rows of the csv file in the url and store them in a python array of strings
rows = pd.read_csv(url).to_numpy().tolist()
# for each element in the rows array, combine the elements of the array into a string delimited by commas and account for integers
rows = [",".join([str(v) for v in row]) for row in rows]
# print(rows)