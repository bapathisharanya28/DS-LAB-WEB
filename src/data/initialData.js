/**
 * DS LAB seed data.
 * Modules and experiments are intentionally independent.
 */

import idCardPhoto from '../assets/id-card-photo.jpeg';

const LEGACY_DEFAULT_AVATAR = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400";

export const INITIAL_STUDENT_PROFILE = {
  name: "B Saranya",
  role: "Data Science Student",
  course: "B.Tech — Computer Science & Engineering (Data Science)",
  rollNo: "",
  subject: "Data Science Laboratory",
  university: "Mohan Babu University",
  faculty: "",
  avatar: idCardPhoto,
  linkedIn: "https://www.linkedin.com/in/saranya-bapathi-b10b97370",
  github: "https://github.com/bapathisharanya28",
  email: "bapathisharanyareddy@gmail.com",
  semester: "2026",
  batch: "",
  branch: "CSE (DS)",
  section: "",
  resume: null
};

export const INITIAL_MODULES = [
  {
    id: 1, number: 1, title: "Introduction",
    periods: 9,
    description: "Introduction to Data Science, including its definition, required skills, tools, data types, data collections, preprocessing, data analysis, and major types of analytics.",
    overview: "This module introduces the foundations of Data Science. It covers what Data Science is, the skills and tools needed for data science work, different data types and collections, data preprocessing, and the major approaches used for analysing data.",
    objectives: [
      "Understand the definition and fundamentals of Data Science.",
      "Identify the skills and tools required for Data Science.",
      "Understand different data types and data collections.",
      "Explain data preprocessing and data analysis.",
      "Differentiate descriptive, diagnostic, predictive, prescriptive, exploratory, and mechanistic analysis."
    ],
    topics: [
      "Definition of Data Science", "Skills for Data Science", "Tools for Data Science", "Data Types", "Data Collections", "Data Preprocessing", "Data Analysis", "Descriptive Analysis", "Diagnostic Analysis", "Predictive Analytics", "Prescriptive Analytics", "Exploratory Analysis", "Mechanistic Analysis"
    ],
    pdfs: [
      { id: "ds-mod1.pdf", name: "ds-mod1.pdf", dataUrl: "/ds-mod1.pdf" }
    ]
  },
  {
    id: 2, number: 2, title: "Data Extraction",
    periods: 9,
    description: "Extracting meaning from data through feature selection, user retention, filters, wrappers, entropy, decision tree algorithms, random forests, the dimensionality problem, SVD, and PCA.",
    overview: "This module focuses on extracting useful information from data and selecting informative features. It introduces feature-selection approaches, decision trees, random forests, dimensionality problems, singular value decomposition, and principal component analysis.",
    objectives: [
      "Understand how useful meaning can be extracted from data.",
      "Explain feature selection and feature-selection methods.",
      "Understand entropy and decision tree algorithms.",
      "Describe random forests and their use in data analysis.",
      "Understand the dimensionality problem, SVD, and PCA."
    ],
    topics: [
      "Extracting Meaning from Data", "Feature Selection", "User Retention", "Filters", "Wrappers", "Entropy", "Decision Tree Algorithm", "Random Forests", "Dimensionality Problem", "Single Value Decomposition", "Principal Component Analysis"
    ],
    pdfs: [
      { id: "ds-mod2.pdf", name: "ds-mod2.pdf", dataUrl: "/ds-mod2.pdf" }
    ]
  },
  {
    id: 3, number: 3, title: "Data Visualization",
    periods: 8,
    description: "Visualizing data using Matplotlib, Pandas, Seaborn, line plots, bar plots, histograms, density plots, scatter plots, facet grids, and categorical data visualizations.",
    overview: "This module introduces Python-based data visualization. It covers the Matplotlib API, plotting with Pandas and Seaborn, and a range of plots for understanding distributions, relationships, and categorical data.",
    objectives: [
      "Understand the basic Matplotlib API.",
      "Create visualizations using Pandas and Seaborn.",
      "Represent data using line plots, bar plots, histograms, and density plots.",
      "Create scatter plots and facet grids.",
      "Visualize categorical data effectively."
    ],
    topics: [
      "Matplotlib API", "Plotting with Pandas", "Seaborn", "Line Plots", "Bar Plots", "Histograms", "Density Plots", "Scatter Plots", "Facet Grids", "Categorical Data", "Other Python Visualization Tools"
    ],
    pdfs: [
      { id: "ds-mod3.pdf", name: "ds-mod3.pdf", dataUrl: "/ds-mod3.pdf" }
    ]
  },
  {
    id: 4, number: 4, title: "Statistical Thinking",
    periods: 11,
    description: "Understanding distributions through histograms, outliers, variance, probability mass functions, cumulative distribution functions, percentile-based statistics, random numbers, and probability distributions.",
    overview: "This module develops statistical thinking for understanding and representing data distributions. It covers histograms, outliers, variance, PMFs, CDFs, percentile-based statistics, random numbers, and important probability distributions including exponential, normal, and lognormal distributions.",
    objectives: [
      "Represent and plot distributions using histograms.",
      "Identify outliers and summarize distributions.",
      "Understand variance and probability mass functions.",
      "Represent and interpret cumulative distribution functions and percentile-based statistics.",
      "Understand exponential, normal, and lognormal distributions."
    ],
    topics: [
      "Distributions", "Representing and Plotting Histograms", "Outliers", "Summarizing Distributions", "Variance", "Reporting Results", "Probability Mass Function", "Plotting PMFs", "Other Visualizations", "Class Size Paradox", "Data Frame Indexing", "Cumulative Distribution Functions", "Limits of PMFs", "Representing CDFs", "Percentile Based Statistics", "Random Numbers", "Comparing Percentile Ranks", "Modeling Distributions", "Exponential Distribution", "Normal Distribution", "Lognormal Distribution"
    ],
    pdfs: [
      { id: "ds-mod4.pdf", name: "ds-mod4.pdf", dataUrl: "/ds-mod4.pdf" }
    ]
  },
  {
    id: 5, number: 5, title: "Time Series Analysis and Predictive Modeling",
    periods: 8,
    description: "Analysing time series through importing and cleaning data, plotting, moving averages, missing values, serial correlation, autocorrelation, predictive modeling, model evaluation, model-solution building, and sentiment analysis.",
    overview: "This module introduces time series analysis and predictive modeling. It covers importing and cleaning time-series data, plotting and moving averages, handling missing values, serial correlation and autocorrelation, predictive modeling, evaluation of predictive models, building predictive model solutions, and sentiment analysis.",
    objectives: [
      "Import, clean, and plot time-series data.",
      "Understand moving averages and missing values in time series.",
      "Explain serial correlation and autocorrelation.",
      "Understand predictive modeling and evaluate predictive models.",
      "Build predictive model solutions and understand sentiment analysis."
    ],
    topics: [
      "Time Series Analysis", "Importing and Cleaning", "Plotting", "Moving Averages", "Missing Values", "Serial Correlation", "Autocorrelation", "Predictive Modeling", "Predictive Modeling Overview", "Evaluating Predictive Models", "Building Predictive Model Solutions", "Sentiment Analysis"
    ],
    pdfs: [
      { id: "ds-mod5.pdf", name: "ds-mod5.pdf", dataUrl: "/ds-mod5.pdf" }
    ]
  }
];

const csvCode = `import pandas as pd

# 1A.1 - Read an online CSV file
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(url)
print("First five rows of the dataset:")
print(df.head())
print("\\nDataset Information:")
print(df.info())
print("\\nNumber of rows and columns:")
print(df.shape)

# 1A.2 - Write the DataFrame to CSV
output_file = "iris_output.csv"
df.to_csv(output_file, index=False)
print(f"\\nThe dataset has been successfully written to {output_file}")

# 1A.3 - Create a tab-delimited student file, then read it
student_data = {
    "Roll_No": [101, 102, 103, 104],
    "Name": ["Anusha", "Babitha", "Charitha", "Deepika"],
    "Department": ["IT", "IT", "CSE", "ECE"],
    "Percentage": [89, 92, 88, 85]
}
student_df = pd.DataFrame(student_data)
student_df.to_csv("students.txt", sep="\\t", index=False)
print("\\nData successfully written to students.txt")

print("\\nStudent data read from the tab-delimited file:")
print(pd.read_csv("students.txt", sep="\\t"))`;

const jsonCode = `import pandas as pd
from io import StringIO

# 1B.1 - Write a DataFrame to JSON
student_data = {
    "Roll No": [101, 102, 103, 104],
    "Name": ["Anu", "Bobby", "Cheriy", "Duke"],
    "Department": ["IT", "IT", "CSE", "DS"]
}
df = pd.DataFrame(student_data)
df.to_json("students.json", orient="records", indent=4)
print("JSON file created successfully")

# 1B.2 - Read the JSON file
print("\\nStudent Data")
print(pd.read_json("students.json"))

# 1B.3 - Parse JSON text directly
json_data = """
[
    {"RollNo": 101, "Name": "Anu", "Marks": 89},
    {"RollNo": 102, "Name": "Bobby", "Marks": 92},
    {"RollNo": 103, "Name": "Charitha", "Marks": 88}
]
"""
parsed_df = pd.read_json(StringIO(json_data))
print("\\nParsed JSON Data")
print(parsed_df)

# 1B.4 - Read JSON data from a public API
url = "https://jsonplaceholder.typicode.com/users"
api_df = pd.read_json(url)
print("\\nFirst 5 API Records:")
print(api_df.head())`;

const excelCode = `import pandas as pd

# 1C.1 - Write a student DataFrame to Excel
student_data = {
    "Roll No": [101, 102, 103, 104],
    "Name": ["Anu", "Bobby", "Cherry", "Duke"],
    "Department": ["IT", "IT", "CSE", "DS"],
    "Percentage": [89, 92, 88, 85]
}
df = pd.DataFrame(student_data)
df.to_excel("students.xlsx", sheet_name="Student-Details", index=False)
print("Data successfully written to students.xlsx")

# 1C.2 - Read the Excel file
read_df = pd.read_excel("students.xlsx", sheet_name="Student-Details")
print("\\nData read from Excel File:")
print(read_df)

# 1C.3 - Write multiple DataFrames to different sheets
course_data = {
    "Course-ID": ["C101", "C102", "C103"],
    "Course-Name": ["Python", "DataScience", "Machine Learning"],
    "Credits": [4, 3, 4]
}
courses_df = pd.DataFrame(course_data)
with pd.ExcelWriter("college-data.xlsx", engine="openpyxl") as writer:
    df.iloc[:3].to_excel(writer, sheet_name="Students", index=False)
    courses_df.to_excel(writer, sheet_name="Courses", index=False)
print("\\nMultiple sheets successfully written to college-data.xlsx")

# 1C.4 - Read all sheets
excel_data = pd.read_excel("college-data.xlsx", sheet_name=None)
print("\\nAvailable Sheets:")
print(list(excel_data.keys()))
print("\\nStudent Sheet:")
print(excel_data["Students"])
print("\\nCourse Sheet:")
print(excel_data["Courses"])`;

const exp2a = `import requests
import pandas as pd

url = "https://api.github.com/repos/pandas-dev/pandas/issues"
response = requests.get(url)
issues = response.json()
df_issues = pd.DataFrame(issues)
print(df_issues[["id", "title", "state", "created_at"]].head())`;
const exp2b = `import sqlite3
import pandas as pd

conn = sqlite3.connect("students.db")
cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS students
                  (id INTEGER, name TEXT)""")
cursor.execute("INSERT INTO students VALUES (1, 'John')")
conn.commit()

df = pd.read_sql_query("SELECT * FROM students", conn)
print(df)

cursor.execute("UPDATE students SET name = 'Alice' WHERE id = 1")
cursor.execute("DELETE FROM students WHERE id = 1")
conn.commit()
conn.close()`;

const exp3a = `import numpy as np
import pandas as pd

data = {"A": [1, 2, np.nan], "B": [4, np.nan, np.nan]}
df = pd.DataFrame(data)
print("Missing-value mask:")
print(df.isna())

df_clean = df.dropna()
df_filled = df.fillna(0)
print("\\nRows after dropna():")
print(df_clean)
print("\\nValues after fillna(0):")
print(df_filled)

df = df.drop_duplicates()
print("\\nDuplicates removed:")
print(df)`;
const exp3b = `import pandas as pd

df = pd.DataFrame({"gender": ["male", "female", "male"]})
df["gender_num"] = df["gender"].map({"male": 0, "female": 1})
df_renamed = df.rename(columns={"gender": "Gender"})
print(df_renamed)`;
const exp3c = `import numpy as np
import pandas as pd

data = pd.DataFrame(np.random.randn(100, 3))
outliers = (data > 3) | (data < -3)
print("Outlier count per column:")
print(outliers.sum())`;
const exp3d = `import re

text = "This is 1 test"
split_text = re.split(r"\\s+", text)
print("Split text:")
print(split_text)`;

const exp4a = `import pandas as pd
import numpy as np

data = pd.Series(
    np.random.randn(6),
    index=[["a", "a", "b", "b", "c", "c"], [1, 2, 1, 2, 1, 2]]
)
print(data)
print("\\nValues under label 'b':")
print(data["b"])
print("\\nValues at second-level index 1:")
print(data[:, 1])`;
const exp4b = `import pandas as pd
import numpy as np

data = pd.Series(
    np.random.randn(6),
    index=[["a", "a", "b", "b", "c", "c"], [1, 2, 1, 2, 1, 2]]
)
df = data.unstack()
print("Unstacked DataFrame:")
print(df)
print("\\nStacked Series:")
print(df.stack())`;
const exp4c = `import pandas as pd
import numpy as np

df1 = pd.DataFrame({"a": [1, np.nan, 3], "b": [4, 5, 6]})
df2 = pd.DataFrame({"a": [7, 8, 9], "b": [np.nan, 11, 12]})
merged = df1.combine_first(df2)
print("Combined DataFrame:")
print(merged)`;

const exp5a = `import matplotlib.pyplot as plt

x = [13, 20, 23, 27, 30]
y = [15, 20, 25, 30, 35]
plt.plot(x, y)
plt.title('line plot')
plt.xlabel("x-axis")
plt.ylabel("y-axis")
plt.grid(True)
plt.show()`;
const exp5b = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({"Category": ["A", "B", "C"], "values": [12, 24, 55]})
df.plot(kind="bar", x="Category", y="values")
plt.title('Bar Plot')
plt.show()`;
const exp5c = `import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

data = np.random.randn(500)
sns.histplot(data, kde=True)
plt.title('Histogram and density')
plt.show()`;
const exp5d = `import numpy as np
import matplotlib.pyplot as plt

x = np.random.rand(54)
y = np.random.rand(54)
plt.scatter(x, y)
plt.xlabel("x-axis")
plt.ylabel("y-axis")

plt.show()`;
const exp5e = `import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

sns.boxplot(data=np.random.randn(80, 4))
plt.title('box plot')
plt.show()`;

const exp6a = `import pandas as pd
import numpy as np

rng = pd.date_range("2023-01-01", periods=6, freq="D")
ts = pd.Series(np.random.randn(len(rng)), index=rng)
print(ts)`;
const exp6b = `import pandas as pd

ts = pd.Timestamp.now()
ts_utc = ts.tz_localize("UTC")
ts_ind = ts_utc.tz_convert("Asia/Kolkata")
print("India time:")
print(ts_ind)`;
const exp6c = `import pandas as pd

p = pd.Period("2024Q1")
print("Next period:")
print(p + 1)
print("Quarter converted to month-end frequency:")
print(p.asfreq("M", "end"))`;
const exp6d = `import pandas as pd
import numpy as np

ts = pd.Series(
    np.random.randn(100),
    index=pd.date_range("2024-01-01", periods=100)
)
# Use 'ME' (month-end) frequency for modern Pandas
ts_monthly = ts.resample("ME").mean()
print("Monthly mean values:")
print(ts_monthly)`;

const exp6e = `import pandas as pd

p = pd.Period("2026-01", freq="M")
print("Original monthly period:")
print(p)
print("\\nMonthly to daily (start):")
print(p.asfreq("D", how="start"))
print("\\nMonthly to daily (end):")
print(p.asfreq("D", how="end"))

period_index = pd.period_range(start="2026-01", periods=3, freq="M")
print("\\nOriginal PeriodIndex:")
print(period_index)
print("\\nPeriodIndex to daily (start):")
print(period_index.asfreq("D", how="start"))
print("\\nPeriodIndex to daily (end):")
print(period_index.asfreq("D", how="end"))`;

const exp6f = `import pandas as pd

dates = pd.to_datetime(["2026-01-10", "2026-02-15", "2026-03-20", "2026-04-25"])
sales = pd.Series([1000, 1500, 1800, 2200], index=dates)
print("Original Series:")
print(sales)
print("\\nSeries converted to monthly periods:")
print(sales.to_period("M"))

df = pd.DataFrame(
    {"Sales": [1000, 1500, 1800, 2200], "Profit": [200, 300, 400, 500]},
    index=dates
)
print("\\nDataFrame converted to monthly periods:")
print(df.to_period("M"))`;

const exp6g = `import pandas as pd

dates = pd.date_range("2026-01-01 00:00", periods=12, freq="h")
values = [10, 12, 15, 14, 18, 20, 22, 21, 25, 28, 30, 32]
ts = pd.Series(values, index=dates)
print("Original hourly time series:")
print(ts)

print("\\nResampling - 3-hour mean:")
print(ts.resample("3h").mean())

print("\\nDownsampling - 4-hour sum:")
print(ts.resample("4h").sum())

print("\\nUpsampling - 30-minute intervals:")
print(ts.resample("30min").asfreq())

print("\\nUpsampling with forward fill:")
print(ts.resample("30min").ffill())`;

const exp7a = `import pandas as pd

data = {
    "Name": ["Ravi", "Sita", "Arun", "Priya", "Kiran", "Anil", "Lakshmi", "Rahul"],
    "Department": ["CSE", "CSE", "ECE", "ECE", "CSE", "ECE", "CSE", "ECE"],
    "Year": [2, 2, 3, 3, 2, 3, 3, 2],
    "Marks": [85, 90, 78, 88, 75, 82, 95, 70]
}
df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)

print("\\nGroup by Department:")
for department, group in df.groupby("Department"):
    print(f"\\nDepartment: {department}")
    print(group)
print("\\nAverage marks by Department:")
print(df.groupby("Department")["Marks"].mean())

print("\\nGroup by Department and Year:")
for key, group in df.groupby(["Department", "Year"]):
    print(f"\\nGroup: {key}")
    print(group)
print("\\nAverage marks by Department and Year:")
print(df.groupby(["Department", "Year"])["Marks"].mean())`;

const exp7b = `import pandas as pd

data = {
    "Department": ["CSE", "CSE", "CSE", "ECE", "ECE", "ECE", "EEE", "EEE", "EEE"],
    "Marks": [80, 75, 85, 70, 65, 75, 90, 85, 95],
    "Attendance": [90, 85, 95, 80, 75, 85, 95, 90, 100]
}
df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)

summary = df.groupby("Department").aggregate({
    "Marks": ["sum", "mean", "std"],
    "Attendance": ["sum", "mean", "std"]
})
print("\\nSummary statistics:")
print(summary)`;

const exp7c = `import pandas as pd

# Read the online Iris dataset
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(url)

print("First 5 records:")
print(df.head())
print("\\nDataset information:")
df.info()
print("\\nStatistical summary:")
print(df.describe())

print("\\nGroupBy using a single column:")
print(df.groupby("species")["sepal_length"].agg(
    ["count", "sum", "mean", "std", "min", "max"]
))

print("\\nGroupBy using multiple columns:")
print(df.groupby(["species", "sepal_width"])["sepal_length"].mean().head(15))

print("\\nSummary statistics by species:")
print(df.groupby("species").agg({
    "sepal_length": ["mean", "std", "min", "max"],
    "sepal_width": ["mean", "std", "min", "max"],
    "petal_length": ["mean", "std", "min", "max"],
    "petal_width": ["mean", "std", "min", "max"]
}))

print("\\nNumber of records in each species:")
print(df["species"].value_counts())
print("\\nAverage petal length by species:")
print(df.groupby("species")["petal_length"].mean())
print("\\nAverage petal width by species:")
print(df.groupby("species")["petal_width"].mean())
print("\\nMaximum sepal length by species:")
print(df.groupby("species")["sepal_length"].max())`;

function sub(id,name,description,code,technologies){return {id,name,description,code,output:"",outputImages:[],technologies,date:"2026",status:"Published"}}
export const INITIAL_EXPERIMENTS = [
  {id:1,number:1,name:"Working with Different Data Formats using Pandas",description:"A practical exploration of CSV, JSON, and Excel data handling with Pandas, including reading, writing, parsing, and working with multiple sheets.",coverImage:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",date:"2026",status:"Published",technologies:["Python","Pandas"],code:"",output:"",outputImages:[],subExperiments:[sub("1A","CSV File Handling","Read an online CSV dataset, write CSV output, and work with tab-delimited student data.",csvCode,["Python","Pandas","CSV"]),sub("1B","JSON File Handling","Create JSON records, read JSON files, parse JSON text, and consume JSON data from an API.",jsonCode,["Python","Pandas","JSON","API"]),sub("1C","Excel File Handling","Write and read Excel files, create multiple worksheets, and load all sheets with Pandas.",excelCode,["Python","Pandas","Excel","OpenPyXL"])]},
  {id:2,number:2,name:"Working with APIs and SQLite Databases",description:"Access live JSON data through a REST API and perform basic database creation, querying, updating, and deletion with SQLite and Pandas.",coverImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",date:"2026",status:"Published",technologies:["Python","Requests","SQLite","Pandas"],code:"",output:"",outputImages:[],subExperiments:[sub("2A","Working with a REST API","Retrieve GitHub issue data through an API and convert the JSON response into a Pandas DataFrame.",exp2a,["Python","Requests","Pandas","REST API"]),sub("2B","SQLite Database Operations","Create a SQLite table, insert records, query them with Pandas, then update and delete a record.",exp2b,["Python","SQLite","SQL","Pandas"])]},
  {id:3,number:3,name:"Data Cleaning and Preprocessing",description:"Prepare raw data by identifying missing values, removing duplicates, encoding categories, detecting outliers, and performing simple text splitting.",coverImage:"https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1400&q=80",date:"2026",status:"Published",technologies:["Python","Pandas","NumPy","Regex"],code:"",output:"",outputImages:[],subExperiments:[sub("3A","Missing Values and Duplicates","Inspect missing-value masks, remove incomplete rows, fill missing values, and remove duplicate records.",exp3a,["Python","Pandas","NumPy"]),sub("3B","Categorical Encoding","Map categorical gender values to numeric labels and rename a DataFrame column.",exp3b,["Python","Pandas"]),sub("3C","Outlier Detection","Identify observations outside a simple ±3 standard-deviation-style threshold in random data.",exp3c,["Python","Pandas","NumPy"]),sub("3D","Text Splitting with Regular Expressions","Split text into tokens using whitespace matching with Python regular expressions.",exp3d,["Python","Regex"])]},
  {id:4,number:4,name:"Advanced Pandas Operations",description:"Explore hierarchical indexing, reshaping with stack and unstack, and combining complementary DataFrames with Pandas.",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",date:"2026",status:"Published",technologies:["Python","Pandas","NumPy"],code:"",output:"",outputImages:[],subExperiments:[sub("4A","MultiIndex Series","Create and query a hierarchical Pandas Series using two index levels.",exp4a,["Python","Pandas","NumPy"]),sub("4B","Stack and Unstack","Reshape a MultiIndex Series into a DataFrame and stack it back into a Series.",exp4b,["Python","Pandas","NumPy"]),sub("4C","Combine First","Fill missing values in one DataFrame using values from another DataFrame.",exp4c,["Python","Pandas","NumPy"])]},
  {id:5,number:5,name:"Data Visualization with Matplotlib and Seaborn",description:"Create common analytical plots including line, bar, histogram, scatter, and box plots and view the generated figures directly in the lab.",coverImage:"https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80",date:"2026",status:"Published",technologies:["Python","Matplotlib","Seaborn"],code:"",output:"",outputImages:[],subExperiments:[sub("5A","Line Plot","Create a simple line chart with labels, title, and grid.",exp5a,["Python","Matplotlib"]),sub("5B","Bar Plot","Compare categorical values using a Pandas bar plot.",exp5b,["Python","Pandas","Matplotlib"]),sub("5C","Histogram and Density Plot","Visualize a random distribution with a histogram and KDE curve.",exp5c,["Python","Seaborn","Matplotlib"]),sub("5D","Scatter Plot","Visualize the relationship between two random numerical variables.",exp5d,["Python","NumPy","Matplotlib"]),sub("5E","Box Plot","Summarize distributions across multiple variables with a Seaborn box plot.",exp5e,["Python","Seaborn","Matplotlib"])]},
  {id:6,number:6,name:"Time Series Analysis",description:"Create and manipulate timestamp-indexed data, generate date ranges, work with time zones and periods, convert periods and timestamps between frequencies, and perform resampling, downsampling, and upsampling.",coverImage:"https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1400&q=80",date:"2026",status:"Published",technologies:["Python","Pandas","Time Series"],code:"",output:"",outputImages:[],subExperiments:[sub("6A","Create a Time Series Using Datetime Objects","Create a Pandas Series indexed by timestamps.",exp6a,["Python","Pandas","Datetime"]),sub("6B","Generate Date Ranges and Work with Time Zones","Generate timestamps, localize a timezone, convert to another timezone, and combine timezone-aware series.",exp6b,["Python","Pandas","Timezone"]),sub("6C","Period Arithmetic and Period Ranges","Add and subtract integers from Period objects and create a range using period_range().",exp6c,["Python","Pandas","Period"]),sub("6D","Basic Time Series Resampling","Resample time-series observations and calculate monthly mean values.",exp6d,["Python","Pandas","Resampling"]),sub("6E","Convert Periods and PeriodIndex to Another Frequency","Use asfreq() to convert Period and PeriodIndex objects to another frequency, selecting the start or end of each period.",exp6e,["Python","Pandas","PeriodIndex","asfreq()"]),sub("6F","Convert Timestamp-Indexed Series and DataFrames to Periods","Use to_period() to convert timestamp indexes in Series and DataFrames into periods.",exp6f,["Python","Pandas","Series","DataFrame","to_period()"]),sub("6G","Resampling, Downsampling, and Upsampling","Resample hourly data, aggregate larger intervals, and upsample to 30-minute intervals with optional forward filling.",exp6g,["Python","Pandas","Resampling","Time Series"])]},
  {id:7,number:7,name:"Data Aggregation",description:"Group tabular data using single or multiple keys, calculate grouped summary statistics, and perform exploratory data analysis on an online dataset.",coverImage:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",date:"2026",status:"Published",technologies:["Python","Pandas","GroupBy","Aggregation","EDA"],code:"",output:"",outputImages:[],subExperiments:[sub("7A","Group Data Using Single and Multiple Keys","Create a DataFrame, group records by one or multiple keys, select groups, and calculate average marks.",exp7a,["Python","Pandas","DataFrame","groupby()"]),sub("7B","Compute Summary Statistics Using Aggregation","Calculate sum, mean, and standard deviation for Marks and Attendance grouped by department.",exp7b,["Python","Pandas","aggregate()","Statistics"]),sub("7C","GroupBy and Exploratory Data Analysis on an Online Dataset","Load the online Iris dataset, inspect and summarize it, group by one or multiple columns, and calculate species-level statistics.",exp7c,["Python","Pandas","Online Dataset","GroupBy","EDA"])]}];

export const INITIAL_PROJECTS = [
  {
    id: "stock-day-tracker",
    number: 1,
    title: "Stock Day Tracker",
    tagline: "NSE/BSE Market Intelligence & Day-by-Day Price Movement Analytics",
    category: "FinTech & Real-Time Analytics",
    status: "Completed",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "Vite", "Market Data APIs"],
    description: "Developed a stock market tracking web application that displays day-by-day price movements of NSE/BSE stocks through interactive weekly and monthly views. Implemented watchlists, stock search, price change and percentage tracking, heatmap visualization, and stock detail charts. Designed a modular market data architecture supporting simulated data and external market data providers, with caching to improve efficiency.",
    keyFeatures: [
      "Interactive weekly and monthly views displaying day-by-day price movements of NSE/BSE stocks.",
      "Customizable watchlists with instant stock search and real-time ticker tracking.",
      "High-contrast price change metrics with green/red percentage tracking and volume signals.",
      "Dynamic sector heatmap visualization for rapid cross-market sector performance analysis.",
      "Detailed stock breakdown charts with moving averages, OHLCV data, and time-frame zoom.",
      "Modular market data architecture with automated fallback between live external APIs and simulated feeds.",
      "Multi-level in-memory data caching layer with TTL expiration for high throughput and reduced latency."
    ],
    architecture: "Vite + React.js frontend interface with modular data hooks, coupled with an Express.js backend caching proxy layer communicating with external Market Data APIs and in-memory cache stores.",
    githubUrl: "https://github.com/bapathisharanya28",
    liveDemoUrl: "https://github.com/bapathisharanya28",
    highlights: [
      { label: "Market Feeds", value: "NSE / BSE Real-time" },
      { label: "Data Caching", value: "In-Memory TTL Cache" },
      { label: "Visualizations", value: "Heatmap & OHLCV" },
      { label: "Architecture", value: "Modular Provider Proxy" }
    ]
  },
  {
    id: "civic-issue-reporting-platform",
    number: 2,
    title: "Civic Issue Reporting Platform (CivicConnect)",
    tagline: "Full-Stack Civic Grievance Management, Role-Based Redressal & Resolution Analytics",
    category: "GovTech & Civic Services",
    status: "Completed",
    date: "2026",
    coverImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQLite", "JWT"],
    description: "Developed a full-stack civic grievance management platform that enables citizens to report public issues and track their resolution status. Implemented role-based access for citizens, government officials, and administrators, including complaint assignment, status updates, activity timelines, and feedback submission. Integrated JWT-based authentication, password hashing, and an SQLite database to manage users, complaints, and administrative analytics.",
    keyFeatures: [
      "Citizen public grievance submission with geo-tagging, categorisation, and multimedia uploads.",
      "Role-Based Access Control (RBAC) securely separating Citizens, Government Officials, and System Administrators.",
      "Dynamic complaint assignment engine routing issues to relevant department officers based on jurisdiction.",
      "Live status progression (Submitted → Under Review → Assigned → In Progress → Resolved → Closed).",
      "Interactive activity timeline displaying transparent chronological audit trails of official actions.",
      "Citizen feedback and star-rating mechanism upon issue resolution for accountability.",
      "Stateless JWT-based authentication paired with Bcrypt salted cryptographic password hashing.",
      "Normalized SQLite relational schema managing users, grievances, department allocations, and audit logs.",
      "Administrative analytics dashboard with SLA turnaround tracking and department resolution charts."
    ],
    architecture: "Full-stack client-server platform powered by Node.js and Express.js REST endpoints, SQLite relational database layer with foreign key cascades, and stateless JWT token authentication middleware.",
    githubUrl: "https://github.com/bapathisharanya28",
    liveDemoUrl: "https://github.com/bapathisharanya28",
    highlights: [
      { label: "Access Control", value: "Role-Based (Citizen/Official/Admin)" },
      { label: "Security", value: "JWT + Salted Bcrypt" },
      { label: "Database", value: "SQLite Relational Engine" },
      { label: "Tracking", value: "Audited Activity Timeline" }
    ]
  }
];

export const DATA_VERSION = "ds-syllabus-v6";
const STORAGE_KEYS = { 
  PROFILE: "ds_lab_profile", 
  MODULES: "ds_lab_modules", 
  EXPERIMENTS: "ds_lab_experiments", 
  PROJECTS: "ds_lab_projects",
  THEME: "ds_lab_theme", 
  VERSION: "ds_lab_data_version" 
};

export function loadStoredData() {
  let profile = INITIAL_STUDENT_PROFILE;
  let modules = INITIAL_MODULES;
  let experiments = INITIAL_EXPERIMENTS;
  let projects = INITIAL_PROJECTS;
  let theme = 'dark';
  try {
    const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (savedProfile) {
      profile = JSON.parse(savedProfile);
      if (profile.avatar === LEGACY_DEFAULT_AVATAR) {
        profile = { ...profile, avatar: idCardPhoto };
      }
    }
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) theme = savedTheme;
    const savedVersion = localStorage.getItem(STORAGE_KEYS.VERSION);
    const savedModules = localStorage.getItem(STORAGE_KEYS.MODULES);
    const savedExperiments = localStorage.getItem(STORAGE_KEYS.EXPERIMENTS);
    const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    // Preserve existing user edits while adding any newly seeded experiments/sub-experiments.
    if (savedModules) {
      const storedModules = JSON.parse(savedModules);
      modules = storedModules.map((stored) => {
        const seeded = INITIAL_MODULES.find((m) => m.number === stored.number || m.id === stored.id);
        const storedPdfs = stored.pdfs && stored.pdfs.length ? stored.pdfs : (seeded?.pdfs || []);
        return { ...seeded, ...stored, pdfs: storedPdfs };
      });
    }
    if (savedProjects) projects = JSON.parse(savedProjects);
    if (savedExperiments) {
      const storedExperiments = JSON.parse(savedExperiments);
      experiments = storedExperiments.map((stored) => {
        const seeded = INITIAL_EXPERIMENTS.find((item) => item.number === stored.number);
        if (!seeded) return stored;
        const storedSubs = stored.subExperiments || [];
        const missingSubs = (seeded.subExperiments || []).filter(
          (seedSub) => !storedSubs.some((storedSub) => storedSub.id === seedSub.id)
        );
        return { ...seeded, ...stored, subExperiments: [...storedSubs, ...missingSubs] };
      });
      const missingExperiments = INITIAL_EXPERIMENTS.filter(
        (seeded) => !experiments.some((stored) => stored.number === seeded.number)
      );
      experiments = [...experiments, ...missingExperiments];
    }
    localStorage.setItem(STORAGE_KEYS.VERSION, DATA_VERSION);
  } catch (err) { console.error('Error reading localStorage:', err); }
  return { profile, modules, experiments, projects, theme };
}

export function saveStoredData({ profile, modules, experiments, projects, theme }) {
  try {
    if (profile) localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    if (modules) localStorage.setItem(STORAGE_KEYS.MODULES, JSON.stringify(modules));
    if (experiments) localStorage.setItem(STORAGE_KEYS.EXPERIMENTS, JSON.stringify(experiments));
    if (projects) localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    if (theme) localStorage.setItem(STORAGE_KEYS.THEME, theme);
    localStorage.setItem(STORAGE_KEYS.VERSION, DATA_VERSION);
  } catch (err) { console.error('Error saving to localStorage:', err); }
}
