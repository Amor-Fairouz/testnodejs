const supertest = require('supertest')
const express = require('express')
const app = express()

expect.extend({
  toBeNumericalArray (received) {
    const rt = !((received.filter(el => isNaN(el)).length > 0))
    return { pass: rt }
  }
})

beforeEach(() => {
  const mountRoutes = require('../routes')
  mountRoutes(app)
})

describe('[1] Test Numbers', () => {
  test('Get the number list', async () => {
    const res = await supertest(app).get('/Numbers')
    expect(res.statusCode).toEqual(200)
  })
  test('Check that we pass a array', async () => {
    const res = await supertest(app).post('/Numbers')
      .set('Content-Type', 'application/json')
      .send({})

    expect(res.statusCode).toEqual(501)
    expect(res.body).toEqual({ err: `Non-array payload` })
  })
  test('Add  numbers', async () => {
    const res = await supertest(app).post('/Numbers')
      .set('Content-Type', 'application/json')
      .send([10, 20, 30])

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expect.arrayContaining([10, 20, 30]))
  })
  test('Cumulate numbers', async () => {
    await supertest(app).post('/Numbers')
      .set('Content-Type', 'application/json')
      .send([1, 2, 3])
    const res = await supertest(app).post('/Numbers')
      .set('Content-Type', 'application/json')
      .send([10, 20, 30])

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expect.arrayContaining([1, 2, 3, 10, 20, 30]))
  })
  test('Post Numbers with strings', async () => {
    const res = await supertest(app).post('/Numbers')
      .set('Content-Type', 'application/json')
      .send([10, 20, 'aaa'])

    expect(res.statusCode).toEqual(501)
    expect(res.body).toEqual({ err: 'Non-numeric values :aaa' })
  })
  test('Post Numbers with two strings', async () => {
    const res = await supertest(app).post('/Numbers')
      .set('Content-Type', 'application/json')
      .send([10, 20, 'aaa', 'bbb'])

    expect(res.statusCode).toEqual(501)
    expect(res.body).toEqual({ err: 'Non-numeric values :aaa, bbb' })
  })
  test('Post Numbers with one string: string should no be added', async () => {
    let res = await supertest(app).post('/Numbers')
      .set('Content-Type', 'application/json')
      .send(['bbb'])
    res = await supertest(app).get('/Numbers')
      .set('Content-Type', 'application/json')
    expect(res.body).toBeNumericalArray()
  })
  test('Remove string value from the list', async () => {
    await supertest(app).get('/Numbers')
    const res = await supertest(app).delete('/Numbers')
      .set('Content-Type', 'application/json')
      .send(['aaa'])
    expect(res.statusCode).toEqual(501)
    expect(res.body).toEqual({ err: 'Non-numeric values :aaa' })
  })
  test('Remove values from the list', async () => {
    await supertest(app).get('/Numbers')
    const res = await supertest(app).delete('/Numbers')
      .set('Content-Type', 'application/json')
      .send([1, 2, 3])
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expect.arrayContaining([10, 20, 30, 10, 20, 30]))
  })
})
