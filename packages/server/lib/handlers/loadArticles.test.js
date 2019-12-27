jest.mock('../models/article')

const Article = require('../models/article')
const loadArticles = require('./loadArticles')

describe('load articles handler', () => {
  let model
  let req
  let res

  beforeEach(() => {
    model = {
      sort: jest.fn().mockReturnThis(),
      exec: jest.fn()
    }

    Article.find.mockReturnValue(model)

    req = {}

    res = {
      json: jest.fn()
    }
  })

  test('executes correct query', async () => {
    await loadArticles(req, res)

    expect(Article.find).toHaveBeenCalledWith({ })
  })

  test('executes correct sort', async () => {
    await loadArticles(req, res)

    expect(model.sort).toHaveBeenCalledWith({ _id: -1 })
  })

  test('sends response', async () => {
    model.exec.mockReturnValue('test articles')

    await loadArticles(req, res)

    expect(res.json).toHaveBeenCalledWith('test articles')
  })
})
