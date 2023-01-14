const router = require('express').Router();
const {
    getSingleUser,
    removeFriend,
    getUsers,
    deleteUser,
    updateUser,
    addFriend,
    createUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').delete(removeFriend);

router.route('/:userId/friends/:friendId').post(addFriend);



module.exports = router;