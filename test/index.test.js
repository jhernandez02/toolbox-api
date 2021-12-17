const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const chai = require('chai')
const expect = chai.expect
const supertest = require('supertest')
const api = supertest('http://localhost:3001/api')

describe('#GET /api/iecho?text=value', function () {
  it('Should get reverse text palindrome', function (done) {
    api.get('/iecho?text=reconocer').end(function (_err, res) {
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.be.an('object')
      expect(res.body.text).to.equal('reconocer')
      expect(res.body.palindrome).to.equal(true)
      done()
    })
  })
  it('Should get reverse text dont palindrome', function (done) {
    api.get('/iecho?text=amar').end(function (_err, res) {
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.be.an('object')
      expect(res.body.text).to.equal('rama')
      expect(res.body.palindrome).to.equal(false)
      done()
    })
  })
})

describe('#GET /api/iecho', function () {
  it('Should get error', function (done) {
    api.get('/iecho').end(function (_err, res) {
      expect(res.statusCode).to.equal(400)
      expect(res.body).to.be.an('object')
      expect(res.body.error).to.equal('no text')
      done()
    })
  })
})

describe('#GET /api/iecho?text', function () {
  it('Should get error', function (done) {
    api.get('/iecho?text').end(function (_err, res) {
      expect(res.statusCode).to.equal(400)
      expect(res.body).to.be.an('object')
      expect(res.body.error).to.equal('no text')
      done()
    })
  })
})
