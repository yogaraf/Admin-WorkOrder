import React from 'react'
import Navigation from '../Components/Navigation'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export default function HistoryPage() {
  return (
      <>
      <Navigation />
      <div className='orderan-bg'>
        <div style={{zIndex:-2}} class="bg-histor card position-absolute top-0 bottom-0 start-0 end-0 opacity-75 bg-light"></div>
          <div className="table-orderan position-relative p-4">
            <div className='judul-orderan'> 
              <h1 className="text-center">Orderan</h1>
            </div>
            <div style={{zIndex:-1}} class="orderkuy card position-absolute top-0 bottom-0 start-0 end-0 opacity-50 bg-light"></div>
              <table>
                  <tr>
                      <th className="w-25">No</th>
                      <th>Permasalahan</th>
                      <th>Nama User</th>
                  </tr>
                  <tr>
                      <td>Anom</td>
                      <td>19</td>
                      <td>Male</td>
                  </tr>
              </table>
          </div>
      </div>
      </>
  )
}
