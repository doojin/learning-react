jest.mock('../models/article')

const Article = require('../models/article')
const handler = require('./createArticle')

describe('create article handler', () => {
  let req
  let res

  beforeEach(() => {
    req = {
      body: {}
    }

    res = {
      status: jest.fn().mockReturnThis(),
      end: jest.fn(),
      json: jest.fn()
    }
  })

  describe('article creation successful', () => {
    test('creates article with correct attributes', async () => {
      req.body.title = 'test title'
      req.body.text = 'test text'

      await handler(req, res)

      expect(Article.create).toHaveBeenCalledWith({
        title: 'test title',
        text: 'test text'
      })
    })

    test('responds with correct status code', async () => {
      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(201)
    })
  })

  describe('article creation fails', () => {
    beforeEach(() => {
      Article.create.mockRejectedValue()
    })

    test('responds with correct status code', async () => {
      await handler(req, res)

      expect(res.status).toHaveBeenCalledWith(500)
    })

    test('responds with error message', async () => {
      await handler(req, res)

      expect(res.json).toHaveBeenCalledWith({
        error: 'At the moment article cannot be created. Please try again later.'
      })
    })
  })
})
