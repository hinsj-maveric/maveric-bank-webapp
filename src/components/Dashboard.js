import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashboard-userInfo'>
            <table className='dashboard-table-userInfo'>
                <tr className='dashboard-table-row-userInfo'>
                    <td className='userDetailField'>Name:</td>
                    <td className='userDetail'>Hins Jain</td>
                </tr>
                <tr className='dashboard-table-row-userInfo'>
                    <td className='userDetailField'>Email:</td>
                    <td className='userDetail'>hinsjain89@gmail.com</td>
                </tr>
                <tr className='dashboard-table-row-userInfo'>
                    <td className='userDetailField'>Gender:</td>
                    <td className='userDetail'>Male</td>
                </tr>
                <tr className='dashboard-table-row-userInfo'>
                    <td className='userDetailField'>Phone Number:</td>
                    <td className='userDetail'>9594949494</td>
                </tr>
                <tr className='dashboard-table-row-userInfo'>
                    <td className='userDetailField'>Date of Birth:</td>
                    <td className='userDetail'>27/10/1994</td>
                </tr>
            </table>
        </div>
        <div className='dashboard-accountInfo'>
            <table className='dashboard-table-accountInfo'>
                <tr className='dashboard-table-row-accountInfo'>
                    <th className='accountDetailField'>Account Number</th>
                    <th className='accountDetailField'>Account Type</th>
                    <th className='accountDetailField accountAction'>Action</th>
                </tr>
                <tr className='dashboard-table-row-accountInfo'>
                    <td className='accountDetail'>Email</td>
                    <td className='accountDetail'>hinsjain89@gmail.com</td>
                    <td className='accountDetail'><a href="#">View</a></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Dashboard