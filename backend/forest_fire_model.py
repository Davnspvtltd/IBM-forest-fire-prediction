import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load the dataset
data = pd.read_csv('forestfires.csv')

# Add the 'fire' column based on some condition
data['fire'] = np.where((data['temp'] > 30) & (data['RH'] < 40), 1, 0)

# Define features and target variable
X = data[['temp', 'RH', 'wind', 'rain']]
y = data['fire']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the trained model to a file
with open('forest_fire_model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("Model saved as 'forest_fire_model.pkl'")
