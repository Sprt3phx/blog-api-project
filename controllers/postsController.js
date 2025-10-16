
let posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the first blog post.',
        author: 'Caitie',
        published: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: 'Second Post',
        constent: 'Learning Express controllers is awesome!',
        author: 'Caitie',
        published: false,
        createdAt: new Date().toISOString()
    }
];

//GET /api/posts/:id
exports.getPostById = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId)

    if (!post) {
        return res.status(404).json({ error: 'Post not found' })
    }

    res.status(200).json(post);
}

//Post /api/posts
exports.createPost = (req, res) => {
    const { title, content, author, published } = req.body;

    if (!title || !content || !author) {
        return res.status(400).json({ error: 'Title, content, and author required' })
    }

    const newPost = {
        id: posts.length,
        title,
        content,
        author,
        published: published || false,
        createdAt: new Date().toISOString()
    }

    posts.push(newPost);
    res.status(201).json(newPost)
}


//Put /api/posts/:id
exports.updatePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const { title, content, author, published } = req.body;

    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;
    post.published = published !== undefined ? published : post.published;

    res.status(200).json(post);
}


//Delete /api/posts/:id
exports.deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' })
    }

    const deleted = posts.splice(postIndex, 1)
    res.status(200).json({ message: 'Post deleted', deleted })
}
