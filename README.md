# Bayt-Technical-task

# API Documentation

## 1. Get all products

### Request

`GET /api/v1/products`
> http://localhost:8080/api/v1/products?page=1&category=all&sort=price&order=asc

Request Query Parameters:
- page: page number - **required** , must be a positive integer
- category: category name - **required** 
- sort: sort by price or name - **required** , allowed values: price or name
- order: asc or desc - **required** , allowed values: ASC or DESC (case Sensitive)

## 2. Get All Categories

### Request

`GET /api/v1/products/categories`
> http://localhost:8080/api/v1/products/categories



