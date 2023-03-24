# FIT1 recruitment test #

The subject of this test is to build an node.js/express REST API which **store at runtime** a list of numbers and allow some manipulations on it.

| ‼️ Remember to commit your development locally, to remove the node_module folder and zip the project before sending the result


A swagger file and ui is provided in the project : you can display and use it by launching the application:
 ```bash
 npm install # install the project
 npm run serve # the swagger UI is browsable on http://localhost:3001
 ```


To launch the unit tests suites:
 ```bash
 npm run test
 ```
 It will executes all the tests files in the ``__test__`` folders not marked as ``skip``
 ### project main files tree : ###
  
```
├── index.js  
├── jest.config.js  
├── junit.xml  
├── package.json  
├── package-lock.json  
├── README.md  
├── routes.js  
├── swaggerdoc.yaml  
└──__test__  
    ├── 1-numbers.test.js  
    ├── 2-operations.test_skip.js  
    └── 3-mean.test_skip.js  
```
___
## The codding test steps: ##

|⚠️ Remember to setup the project by running the npm install cmd before starting the test 
### 1. The Numbers routes ####

💡All the Unit tests in the ``__test__/1-numbers.test.js `` **should pass** :
```bash
 PASS  __test__/numbers.test.js
  [1] Test Numbers
    ✓ Get the number list (123 ms)
    ✓ Check that we pass a array (18 ms)
    ✓ Add  numbers (3 ms)
    ✓ Cumulate numbers (4 ms)
    ✓ Post Numbers with strings (2 ms)
    ✓ Post Numbers with two strings (2 ms)
    ✓ Post Numbers with one string: string should no be added (3 ms)
    ✓ Remove string value from the list (3 ms)
    ✓ Remove values from the list (4 ms)
```
### 2. The Numbers/{operation} route  ### 
Rename the ``__test__/2-operations.test_skip.js `` to `` __test__/2-operations.test.js ``  
💡 All Unit tests **should  pass** :
```node
 PASS  __test__/operations.test.js
  [2] Operations
    ✓ Unrecognized operation (4 ms)
    ✓ Operations with string (2 ms)
    ✓ Divide (1 ms)
    ✓ Add value (2 ms)
    ✓ Substract value (5 ms)
    ✓ Multiply value (2 ms)
```

### 3. The Mean value calculation ### 
Rename the ``__test__/3-mean.test_skip.js `` to `` __test__/3-mean.test.js ``  
💡 All Unit tests must pass 

```bash
 PASS  __test__/mean.test.js
  [3] Test mean value of the list
    ✓ Empty list has no mean value (8 ms)
    ✓ Mean value (9 ms)
```
___



We will pay equal attention to the quality and the readability of your code.   
Feel free to leave comments to explain you choices
Good luck
 
 
