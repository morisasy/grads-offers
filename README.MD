# Simple Node Express Graduate offers App with Postgess Database.


## **Prerequisites**
---

1. Fork/Clone the repository
2. createdb grads
3. mkdir grads-offers
4. grads-offers-node
5. touch app.js
6. mkdir routes db
7. touch db/index.js
8. touch routes/grads.js
9. touch routes/offers.js
10. psql grads-offers


## **Installation**
---
 + npm init -y
 + npm install express morgan body-parser pg

### **Get started**
---
+ nodemon

### **Instructions**

```
CREATE TABLE graduates (id SERIAL PRIMARY KEY, name TEXT);

CREATE TABLE offers (id SERIAL PRIMARY KEY, title TEXT, graduate_id INTEGER REFERENCES graduates (id) ON DELETE CASCADE);

INSERT INTO gradates (text) VALUES ('Elie'), ('Michael'), ('Matt'), ('Joel');


INSERT INTO offers (title, id) VALUES ('Teacher', 1), ('Super Teacher', 2), ('Mathematician', 3), ('Developer', 4), ('Super Doctor 1', 3), ('Super Doctor 2', 4), ('Super Developer 1', 2);


```
