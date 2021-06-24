module.exports = (app) => {
    const user = require('../controllers/userController.js');

    // Create a new Note
    app.post('/notes', user.create);

    // Retrieve all Notes
    app.get('/notes', user.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:userId', user.findOne);

    // Update a Note with noteId
    app.put('/notes/:userId', user.update);

    // Delete a Note with noteId
    app.delete('/notes/:userId', user.delete);
}