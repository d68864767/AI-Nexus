# Dockerfile for containerizing AI models

# Base image
FROM python:3.9-slim-buster

# Set working directory
WORKDIR /app

# Copy AI model files
COPY model.py requirements.txt /app/

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port for API
EXPOSE 5000

# Set environment variables
ENV MODEL_NAME=image-classification
ENV MODEL_VERSION=v1.0.0

# Run the AI model
CMD ["python", "model.py"]
