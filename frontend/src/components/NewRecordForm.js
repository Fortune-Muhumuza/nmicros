import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../Firestore';
import axios from 'axios'
import { faker } from '@faker-js/faker';

function NewRecordForm(props) {
    const [person, setPerson] = useState("")
    const [money, setMoney] = useState(0)
    const [group, setGroup] = useState([])
    const [enteredGroup, setEnteredGroup] = useState("")


    const randomName = faker.name.findName();
    const randomAmount = faker.finance.amount()

    function handleChange(e) {
        setPerson(e.target.value)
    }

    function handleMoneyChange(e) {
        setMoney(e.target.value)
    }

    function handleGroupChange(e) {
        console.log(e.target.value)
        setEnteredGroup(e.target.value)
    }


    async function handleSubmit(e) {
        e.preventDefault()

        //if(!enteredGroup)

        const enteredData = {
            accountName: randomName,
            amountDeposited: randomAmount,
            banker: 'Peter Mubiru',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };

        try {
           // const docRef = await addDoc(collection(db, "users"), enteredData);
            const docRef = await addDoc(collection(db, "/transactions/deposits/deposits"), enteredData);
            

            console.log("Document saved to transactions: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

       

        //window.location = '/'

        return

        axios.post('http://localhost:4000/notes', enteredData)
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })

        e.preventDefault()
        window.location = '/'
    }

    const getData = async () => {

        //fetch data from google firebase firestore
        const querySnapshot = await getDocs(collection(db, "savingsGroups"));
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            //console.log(JSON.stringify(data))
            console.log('groups are',data)

            setGroup((prevState) => {
                return [...prevState, data];
            });
        });

        return

        axios.get(`http://localhost:4000/group`)
            .then(res => {
                const group = res.data;
                //console.log(group)
                setGroup(group)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <h1>New record</h1>
            <form onSubmit={handleSubmit} className='form-inline'>
                {/* <div >
                    <label>Account name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={person}
                        className='form-control'
                    />
                </div> */}
                {/* <div>
                    <label>Money saved</label>
                    <input
                        type="number"
                        onChange={handleMoneyChange}
                        value={money}
                        className='form-control'
                    />
                </div> */}
                <div className="select-container">
                    <select onChange={handleGroupChange} >
                        <option label="Savings Group"></option>
                        {group.map((option) => (
                            <option value={option.value} >{option.savingsGroupName}</option>
                        ))}
                    </select>
                </div>

                {/* <div>
                    <label>Savings group</label>
                    <input
                        type="string"
                        onChange={handleGroupChange}
                        value={enteredGroup}
                        className='form-control'
                    />
                </div> */}

                <button type="submit" className="btn btn-primary">Add Record</button>
            </form>

        </div>
    )

}
export default NewRecordForm
