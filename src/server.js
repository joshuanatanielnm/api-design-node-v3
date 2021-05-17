import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

//cats
const routes = [
  'get /cat',
  'get cat/:id',
  'post/cat',
  'put cat/:id',
  'delete cat/:id'
]

//this is the cleaner way to do rest
router
  .route('/cat')
  .get()
  .post()

router
  .route('cat/:id')
  .get()
  .put()
  .delete()

router.get('/me', (req, res) => {
  res.send({
    me: 'hellow its me joshua'
  })
})
//end

app.use('/api', router)

app.get('/', (req, res) => {
  res.send({ message: 'hellow' })
})
app.get('/api/users', function(req, res) {
  const user_id = req.query.id
  const token = req.query.token
  const geo = req.query.geo

  res.send({
    user_id: user_id,
    token: token,
    geo: geo
  })
})
app.get('/name', (req, res) => {
  res.send({ name: 'Joni' })
})
app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})
app.post('/name', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
