# -*- coding: utf-8 -*-
"""content_based.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/14nxFcOSDUzvO34JEMGlQ0YCqAkG23HZp
"""

from sklearn.feature_extraction.text import TfidfVectorizer  # new
from sklearn.metrics.pairwise import linear_kernel  # new
# import seaborn as sns
from sklearn.metrics.pairwise import linear_kernel
import pandas as pd
from glob import glob
from collections import Counter
import plotly.offline as py
from plotly.offline import init_notebook_mode, iplot
from sklearn import preprocessing
import plotly.graph_objs as go
# import squarify
import pandas as pd  # data processing, CSV file I/O (e.g. pd.read_csv)
import numpy as np  # linear algebra
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
# import os
# import nltk
# from nltk.corpus import stopwords
# import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
# import json
# from os import listdir
# import glob
# from scipy import spatial

# Commented out IPython magic to ensure Python compatibility.
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load in
import warnings
warnings.filterwarnings("ignore")


# %pylab inline


# print(os.listdir("../input"))

# py.init_notebook_mode(connected=True)
# %matplotlib inline

# import multiple csvs

# set decimal format to not extend beyond 8
pd.options.display.float_format = '{:.2f}'.format

gdf = pd.read_csv(r"./job_skills.csv")
ddf = pd.read_csv(r'./dice_com-job_us_sample.csv')
kdf = pd.read_csv(r"./multipleChoiceResponses.csv",
                  encoding="ISO-8859-1", low_memory=False)
# a way to import all into one df right away with option to ignore index
'''df = pd.concat([pd.read_csv(f) for f in glob.glob('*.csv')], ignore_index = False)'''

tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 3),
                     min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(ddf['description'])
# print(tfidf_matrix)

# cosine_similarities = linear_kernel(tfidf_matrix, tfidf_matrix)
# results = {}
# for idx, row in ddf.iterrows():
#    similar_indices = cosine_similarities[idx].argsort()[:-100:-1]
#    similar_items = [(cosine_similarities[idx][i], ddf['jobid'][i]) for i in similar_indices]
#    results[row['jobid']] = similar_items[1:]

# print(results)

# #Making recommendation
# def item(id):
#     return ddf.loc[ddf['jobid'] == id]['jobdescription'].tolist()[0].split(' - ')[0]

# # Just reads the results out of the dictionary.
# def recommend(item_id, num):
#     print("Recommending " + str(num) + " products similar to " + item(item_id) + "...")
#     print("-------")
#     recs = results[item_id][:num]
#     for rec in recs:
#         print("Recommended: " + item(rec[1]) + " (score:" + str(rec[0]) + ")")

# recommend(item_id=11, num=1)

# def item(id):
#   return ddf.loc[ddf['jobid'] == id]['jobdescription'].tolist()[0].split(' - ')[0]
# # Just reads the results out of the dictionary.def
# def recommend(item_id, num):
#     print("Recommending " + str(num) + " products similar to " + item(item_id) + "...")
#     print("-------")
#     recs = results[item_id][:num]
#     for rec in recs:
#         print("Recommended: " + item(rec[1]) + " (score:" + str(rec[0]) + ")")

# recommend(item_id=11, num=5)

# print("Recommending " + str(num) + " products similar to " + item(item_id) + "...")
# print("-------")
# recs = results[item_id][:num]
# for rec in recs:
#     print("Recommended: " + item(rec[1]) + " (score:" +      str(rec[0]) + ")")

ds = pd.read_csv(r"./dice_com-job_us_sample.csv")

tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 3),
                     min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(ds['description'])

cosine_similarities = linear_kernel(tfidf_matrix, tfidf_matrix)

results = {}

for idx, row in ds.iterrows():
    similar_indices = cosine_similarities[idx].argsort()[:-100:-1]
    similar_items = [(cosine_similarities[idx][i], ds['id'][i])
                     for i in similar_indices]

    results[row['id']] = similar_items[1:]

# print(results)

# print('done!')


def item(id):
    return ds.loc[ds['id'] == id]['jobTitle']


def content_based(item_id, num):
    global results
    # Just reads the results out of the dictionary.
    print("Recommending " + str(num) +
          " jobs similar to " + item(item_id) + "...")
    print("-------")
    recs = results[item_id][:num]
    res = []
    for rec in recs:
        res.append(item(rec[1]).tolist())
        print("Recommended: " + item(rec[1]))
    return {"res": res}
