//user data
let users = [
    {
        id: 1,
        name: 'Caitie',
        email: 'caitie@example.com',
        role: 'admin',
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        name: 'Alex',
        email: 'alex@example.com',
        role: 'author',
        createdAt: new Date().toISOString()
    }
];

// GET /api/users
exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

//GET /api/users/:id
exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user)
}

//POST /api/users
exports.createUser = (req, res) => {
    const { name, email, role } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        role: role || 'author',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

//PUT /api/users/:id
exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'User not found' })
    
    
    const { name, email, role } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;

    res.status(200).json(user);
}

// DELETE /api/users/:id
exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) return res.status(404).json({ message: 'User deleted', deleted})
}