### User Stories
* As a client, I can view the restaurant's information and log in as a client, because I want to place a pickup order. (homepage "/")
* As a client, I can browse the menu and look at dishes and their prices, because I want to know the various food options available at the restaurant. (/menu)
* As a client, I can select the quantity of each items from the menu, because I want to specify how much of the food item I want to order.
* As a client, I can add selected quantity of item to my order list, because I want to specify what I want to order.
* As a client, I can view my order list with my selected food items, because I want to make sure there are no errors.
* As a client, I can remove food items from my order list, because I might change my mind.
* As a client, I can submit my order when I am finished making my selections. (orders/new)
---
* As a restaurant, I can be notified via SMS, because an order is placed by client.
* As a restaurant, I can log in as a restaurant, because I want to view orders placed by clients.
* As a restaurant, I can specify how long it will take to prepare the order, so the client knows when their order will be ready.
* As a restaurant, I can accept the order, because I want to be able to select which orders to accept.
* As a restaurant, I can reject the order, because I want to be able to select orders based on the products I have available.
* As a restaurant, I can view all orders by their status (incoming/in progress/completed), because I want to plan my orders accordingly.
---
* As a client, I want to know how much time food delivery will take by SMS, because I want to know how much I have to wait. (API to send sms)
---
* As a restaurant, I can mark the pending order as complete, because I completed preparing the order.
---
* As a client, I want to know when the order is complete by SMS, because I want to pick up my order.
---
Stretch:
* As a client, I can filter menu items by type of dish, because I want to specify what I want to order.

### Routes
* Homepage
GET /

* Menu
GET /menu
POST /api/orders/new
GET /orders/:id

* Orders
GET /orders
PATCH /orders/:id


### Button Routes 

* post/login
  GET menu
  GET restaurant 

### Wireframes
[Figma Link](https://www.figma.com/file/nkLKogYBxEIKmlWt9HJhKC/Midterm---Wireframes?node-id=0%3A1&t=DbaPlRRuWrCrxGaa-1)
