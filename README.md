
# LAB - Class 02

## Project: Basic Express Server

## Author: Kris Dunning

## Problem Domain

Setup a basic express server and tests with the following requirements:

- Person Route
- Method: GET Path: /person
- Expects a query string from the user with a “name” property
- When present, output JSON to the client with this shape: { name: "name provided" }
- Without a name in the query string, force a “500” error

## Links and Resources

<https://github.com/KrisDunning/basic-express-server>

## Tests

Assert the following

- 404 on a bad route
- 404 on a bad method
- 500 if no name in the query string
- 200 if the name is in the query string
- given an name in the query string, the output object is correct

## UML

![Lab02UML](Lab02UML.png)
