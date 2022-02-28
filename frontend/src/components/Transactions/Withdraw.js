import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux'

function Withdraw(props) {

    const [age, setAge] = React.useState('');

    const accountNames = useSelector(state => state.users.records)

    const handleChange = (event) => {
      setAge(event.target.value);
    };


    useEffect(() => {

    }, [])

    return (
        <div>
            <h3>New Withdraw</h3>
            <form className='form-inline'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Account</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Account Name"
                            onChange={handleChange}
                        >{
                            accountNames.map((accountName) => (
                                <MenuItem  value={accountName.value} >{accountName.accountName}</MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl>
                </Box>
                <div >
                    <label>Account name</label>
                    <input
                        type="text"

                        className='form-control'
                    />
                </div>
                <div>
                    <label>Money saved</label>
                    <input
                        type="number"

                        className='form-control'
                    />
                </div>


                <div>
                    <label>Savings group</label>
                    <input
                        type="string"

                        className='form-control'
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Record</button>
            </form>
        </div>
    )
}

export default Withdraw
