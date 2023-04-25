import React from 'react'
import './Account.css'

function Account() {
  return (
    <div className='account'>
        <div className='account-userInfo'>
            <table className='account-table-userInfo'>
                <tr className='account-table-row-userInfo'>
                    <td className='accountUserDetailField'>Name:</td>
                    <td className='accountUserDetail'>Hins Jain</td>
                </tr>
                <tr className='account-table-row-userInfo'>
                    <td className='accountUserDetailField'>Email:</td>
                    <td className='accountUserDetail'>hinsjain89@gmail.com</td>
                </tr>
                <tr className='account-table-row-userInfo'>
                    <td className='accountUserDetailField'>Account Type:</td>
                    <td className='accountUserDetail'>Male</td>
                </tr>
                <tr className='account-table-row-userInfo'>
                    <td className='accountUserDetailField'>Account Number:</td>
                    <td className='accountUserDetail'>9594949494</td>
                </tr>
                <tr className='account-table-row-userInfo'>
                    <td className='accountUserDetailField'>Closing Balanace:</td>
                    <td className='accountUserDetail'> INR 22222</td>
                </tr>
            </table>
        </div>
        <div className='account-transactionInfo'>
            <table className='account-table-transactionInfo'>
                <tr className='account-table-row-transactionInfo'>
                    <th className='transactionDetailField'>Date</th>
                    <th className='transactionDetailField'>Transaction Number</th>
                    <th className='transactionDetailField'>Withdrawal</th>
                    <th className='transactionDetailField'>Deposit</th>
                    <th className='transactionDetailField'>Closing Balance</th>    
                </tr>
                <tr className='account-table-row-transactionInfo'>
                    <td className='transactionDetail'>27/10/2020</td>
                    <td className='transactionDetail'>1234849</td>
                    <td className='transactionDetail'></td>
                    <td className='transactionDetail'>5000</td>
                    <td className='transactionDetail'>78776</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Account