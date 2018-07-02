"""
Codex Analysis.
"""
# %%
# import numpy as np
import pandas as pd

# %%
# Read the Dataset
df = pd.read_csv("codex.csv")

# %%
# Clean accepted_answer and favorite_count
columns_to_clean = ["accepted_answer", "favorite_count"]
polished_columns =  df[columns_to_clean].fillna(0).astype(int)
df[columns_to_clean] = polished_columns

# %%
# Has the question been answered?
df["answered"] = ~(df.accepted_answer == 0)
df["answered"] = df["answered"].astype(int)

# %%
# Clean Dates
dates = df.creation_date.str.split(" ").apply(lambda x: x[0])
df["creation_date"] = dates

# %%
# Clean Tags
split_tags = df.tags.str.split("|")
filter_python_tags = lambda x: "python" in x
py_tags = df.tags.fillna(value="notag").apply(filter_python_tags)
python_questions = df[py_tags]
python_questions.head()
