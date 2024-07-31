# NextJS WorkShop

NextJS Repository to build a site that include a simple shop, cart, blog, about page and a simple cms 

# Features

## Home

* Split View in Components
* Client & Server components
* Data Fetching (Latest Products)
  * Suspense & HTML Streaming
* Server Action (Contact Form) 

## Blog
* Data Fetching
  * Dynamic vs Static Render

## Blog Page
* Data Fetching
  * Dynamic vs Static Route parameters

## Shop
* Fetch + Server Component
* State Management with Zustand (Cart)

## CMS
* CRUD with Server Actions

## About
* Markdown Routes
* Custom Markdown Elements

## Custom Endpoints

### Uppercase (demo)
Convert strings in UPPERCASE

* url: http://localhost:3000/api/demo?name=fabio

### Get Products (demo)
Data Fetching example
* url: http://localhost:3000/api/get-products

### Add Product to DB
Add a product to our DB

* url: http://localhost:3000/api/add-product
* method POST
* body: { "name": "test", "id": 18  }
