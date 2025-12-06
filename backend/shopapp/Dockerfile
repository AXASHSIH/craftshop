FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    libjpeg-dev \
    zlib1g-dev \
    libpng-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Optional: only if collectstatic works at build time for you
RUN python manage.py collectstatic --noinput

#change by AXASHISH
CMD ["gunicorn", "craftshop_backend.wsgi:application", "--bind", "0.0.0.0:8000"]  
