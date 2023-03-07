import React from 'react'
import Navigation from '../Components/Navigation'

export default function HistoryPage() {
  return (
    <div className='history-bg'>
      <Navigation />
        <div className='judul-history'> 
          <h1>History</h1>
        </div>
        <div className="table-orderan">
            <table>
                <tr>
                    <th>No</th>
                    <th>Kode Peralatan</th>
                    <th>Nama Peralatan</th>
                </tr>
                <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
