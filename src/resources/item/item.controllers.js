import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const run = async () => {
  await connect('mongodb://localhost:27017/api-test')

  const item = await Item.create({
    name: 'Clean Up',
    createdBy: mongoose.Types.ObjectId(),
    list: mongoose.Types.ObjectId()
  })

  const update = await Item.findByIdAndUpdate(
    item._id,
    { name: 'eat' },
    { new: true }
  ).exec()

  console.log(update)
}

run()

/**
 * GET / read many
 * GET/:id read one
 * POST create one
 * PUT update one
 * Delete/:id delete one
 */
