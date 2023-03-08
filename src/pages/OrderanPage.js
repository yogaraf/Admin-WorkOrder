import React from 'react'
import Navigation from '../Components/Navigation'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function OrderanPage() {
  return (
    <>
    <Navigation />
    <div className='orderan-bg'>
      <div style={{zIndex:-2}} class="orderskuy card position-absolute top-0 bottom-0 start-0 end-0 opacity-75 bg-light"></div>
        <div className="table-orderan position-relative p-4">
          <div className='judul-orderan'> 
            <h1 className="text-center">Orderan</h1>
          </div>
          <div style={{zIndex:-1}} class="orderkuy card position-absolute top-0 bottom-0 start-0 end-0 opacity-50 bg-light"></div>
            <table>
                <tr>
                    <th>No</th>
                    <th>Kode Peralatan</th>
                    <th>Nama Peralatan</th>
                    <th>User</th>
                    <th>Permasalahan</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>Malewfwegwegergerger</td>
                    <td>lkwegnlwkenglrn rjgn elrkgnlkrmg wemglkwerglkwnglknwlgnlwk erknglekrngklerg rkgmelk</td>
                    <td>
                      <DropdownButton
                        variant="outline-success"
                        title="Dropdown"
                        id="input-group-dropdown-1"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>

                    </td>
                </tr>
            </table>
        </div>
    </div>
    </>
  )
}
