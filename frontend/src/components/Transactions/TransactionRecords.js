import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setDeposits } from '../../store/reducers/transactionsSlice';

function TransactionRecords() {

    const dispatch = useDispatch()
    const loadingStatus = useSelector(state => state.transactions.status)
    const records = useSelector(state => state.transactions.records)

    

    useEffect(() => {
        if (loadingStatus === 'idle') {
            dispatch(setDeposits())
        }
    }, [loadingStatus])

    let content

    if (loadingStatus === 'loading') {
        content = <div className="lds-dual-ring">Loading...</div>
    } else if (loadingStatus === 'succeeded') {
        // Sort posts in reverse chronological order by datetime string
        const renderedDetails = records

        content = renderedDetails.map(renderedDetail => (

            <tbody>
                <tr >
                    <td ><Link to={"/notes/" + renderedDetail._id}>{renderedDetail.accountName}</Link></td>
                    <td className="money">{renderedDetail.banker}</td>
                    <td className="money">{renderedDetail.amountDeposited}</td>
                    <td className="money">{renderedDetail.date}</td>
                    <td className="money">{renderedDetail.time}</td>
                </tr>
            </tbody>
        ))
    } else if (loadingStatus === 'failed') {
        content = <div>Sorry there was a problem</div>
    }


    return (
        <div>
            <h1>Transaction history</h1>

            <h3>Deposits</h3>
            <table className="table table-bordered table-hover">
                <thead className="bg-primary">
                    <tr>
                        <th>Account Name : </th>
                        <th >Banker</th>
                        <th>Amount Deposited</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
{content}
            </table>
        </div>
    )
}

export default TransactionRecords
