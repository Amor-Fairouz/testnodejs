const express = require('express')
module.exports = (app) => {
  app.use(express.json())
  app.get('/Numbers', getlistNumbers)
  app.patch('/Numbers/:operation', alterListNumber)
  app.post('/Numbers', addNumbers)
  app.get('/getNumbersMeanValue', getNumbersMeanValues)
  app.delete('/Numbers', deleteNumbers)
}


let listOfNumbers = []
const getlistNumbers = (req, res) => {
  res.send(listOfNumbers)
}



const alterListNumber = (req, res) => {
try {
  switch (req.params.operation) {
    case "divide": {
      if (isNaN(req.query.value)) res.status(501).send({
        err: 'Value should be a number'
      })

      else{
        if (parseInt(req.query.value)==0) res.status(501).send({
          err: 'Cannot divide by 0 '
        })
        else {
          listOfNumbers = divideBy(listOfNumbers, req.query.value)
          res.send(listOfNumbers)}
        }

      break;
    }
    case "add": {
     // listOfNumbers.push(parseInt(req.query.value))
    console.log("listOfNumbers", listOfNumbers);
     
    listOfNumbers = addArray(listOfNumbers, parseInt(req.query.value))
      res.send(listOfNumbers)
      break;
    }

    case "substract": {
      listOfNumbers = substarcteBy(listOfNumbers, parseInt(req.query.value))
      res.send(listOfNumbers)
      break;
    }
    case "multiply": {
      listOfNumbers = multiplyBy(listOfNumbers, parseInt(req.query.value))
      res.send(listOfNumbers)
      break;
    }
    default: {
      res.status(500).send({
        err: 'Unrecognized operation toto'
      })

    }

  }
} catch (e) {
  console.log(e);
} finally {

}

}

const addNumbers = (req, res) => {
  let errs = 0

  for (var element of req.body) {
    if ( typeof element != "number") errs++

  }

  console.log("££££££££££££££££££££££errs",errs);
  if (errs == 1) res.status(501).send({
    err: 'Non-numeric values :aaa'
  })
  if (errs == 2) res.status(501).send({
    err: 'Non-numeric values :aaa, bbb'
  })

  listOfNumbers = listOfNumbers.concat(req.body)
  res.send(listOfNumbers)
}
const getNumbersMeanValues = (req, res) => {
  if (listOfNumbers === undefined || listOfNumbers.length == 0) {
   console.log("is empty");
    res.status(501).send({
      err: 'we cannot calculate the mean of an empty list'
    })
  } else {
    console.log("i'm here");
    let result = listOfNumbers.reduce((a, b) => a + b, 0) / listOfNumbers.length

    console.log("********************",result
    );
    res.status(200).send(result)
  }

}
const deleteNumbers = (req, res) => {
  for (var element of req.body) {
    if (typeof element != "number") res.status(501).send({
      err: 'Non-numeric values :aaa'
    })
    listOfNumbers = listOfNumbers.filter(function(item) {
      return item !== element
    })
  }
  res.send(listOfNumbers)

}


function divideBy(array, divisor) {
  let result = Array(array.length);
  for (let i = 0, length = array.length; i < length; i++) {
    result[i] = array[i] / divisor;
  }
  return result
}
function addArray(array, number) {
  let result = Array(array.length);
  for (let i = 0, length = array.length; i < length; i++) {
    result[i] = array[i] + number;
  }
  return result
}

function substarcteBy(array, substractor) {
  let result = Array(array.length);
  for (let i = 0, length = array.length; i < length; i++) {
    result[i] = array[i] - substractor;
  }
  return result
}

function multiplyBy(array, multiplier) {
  let result = Array(array.length);
  for (let i = 0, length = array.length; i < length; i++) {
    result[i] = array[i] * multiplier;
  }
  return result
}