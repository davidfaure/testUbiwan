
# Technical Test Ubiwan

For this technical test I had to create a simple calculator in javascript in the console.

# Main Objectives

- Do not use eval() function.
- Define a development approach.
- Make an optimized and commented source code.
- Do a demo of the application.
- Explain application's details.

# Second Objective (in progress)

- Support subexpression - (21 + 14) * 2




## Features
Do an app that return the result of an operation such as :

A [+, -, *, /] B


## Example

21 + 14

= 35


## Tech Stack
**Server:** Node

**Test:** Jest


## Details

Source code has been commented throughout the application.

## Module

- Readline (a native node module)
- Nodemon
- Jest
## Installation

```bash
  git clone https://github.com/davidfaure/testUbiwan
  cd testUbiwan
  npm install
  npm start
```
    
## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Roadmap

- import readline and create an interface to read user input inside console
- ask user for an operation
- coding the logic inside calculator function

### Calculator function
- Remove white space if any.
- Create an array of every single string typed by user.
- Check if the array contain at least a number, return false if not.
- Check if the array contain a valid operator, return false if not.
- Check if at least 2 number are typed to do at least a simple operation.
- Join number inside array before and after the operator.
- Calculate the operation and return the result.


## Authors

David Faure - [Portfolio](https://davidfaure.io/)

David Faure - [GitHub](https://github.com/davidfaure/)

