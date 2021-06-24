module.exports = (app) => {
    const group = require('../controllers/groupController.js');

    // Create a new Note
    app.post('/group', group.create);

    // Retrieve all Notes
    app.get('/group', group.findAll);

//retrieve group members
    app.get('/group/:groupName', group.findGroupMembers);
}