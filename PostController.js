import Post from "./Post.js";
import PostService from "./PostService.js ";


class PostController {
    async create(req, res) {
        try {
            const post = PostService.create(req.body, req.files.picture)
            return res.status(200).json(post)
        } catch (e) {
            return res.status(400).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.status(200).json(posts)
        } catch (e) {
            res.status(400).json(e)
        }

    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.status(200).json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }

}


export default new PostController();