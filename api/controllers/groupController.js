const Group = require('../models/groupModel.js');
const User = require('../models/userModel')


// Create and Save a new group
exports.create = (req, res) => {
    // Validate request
    if (!req.body.groupName) {
        return res.status(400).send({
            message: "Please enter account name"
        });
    }

    // Create a Note
    const group = new Group({
        groupName: req.body.groupName
    });

    // Save group in the database
    group.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Record."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Group.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving records."
            });
        });
};

exports.findGroupMembers = async(req, res) => {
    // Group.findById(req.params.groupId)
    // .then(notes => {
    //     res.send(notes);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while retrieving records."
    //     });
    // });
    User.find({groupName:req.params.groupName})
    .then(results => {
        res.send(results)
    }).catch(err => {
        res.status(500).send({
            message: 'error'
        })
    })
}