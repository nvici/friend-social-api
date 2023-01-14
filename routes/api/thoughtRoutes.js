const router = require('express').Router();
const {
  getSingleThought,
  removeReaction,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

router.route('/:thoughtId/reactions').post(addReaction);



module.exports = router;