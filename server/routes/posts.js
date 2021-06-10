const express = require('express');
const router = express.Router();

const controller = require('../controllers/posts')

router.get('/', controller.getPosts);
router.post('/', controller.createPost);
router.get('/:id', controller.getPost);
router.patch('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);
router.patch('/:id/likePost', controller.likePost);

module.exports = router;