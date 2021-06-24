import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DeleteAccount(props) {

    function handleSubmit(e) {
        axios.delete('http://localhost:4000/notes/' + props.match.params.id)
        e.preventDefault();
        window.location ="/"
    }

    return (
        <div>
            <h3>Delete Account</h3>
            <p>Are you sure you want to delete?</p>
            <form onSubmit={handleSubmit} className='form-inline'>
            <button type="submit" className="btn btn-primary">Delete Record</button>
            </form>
        </div>
    )
}

export default DeleteAccount
