// import React, { Component } from 'react';
// import Table1 from '../Components/TableOrderan'

// var data = [
//   {id: 1, name: 'Gob', value: '2'},
//   {id: 2, name: 'Buster', value: '5'},
//   {id: 3, name: 'George Michael', value: '4'}
// ];
// class OrderanPage extends Component {
//   render() {
//     return (
//       <div className="App">
//         <p className="Table-header">Basic Table</p> 
//         <Table1 data={data}/> 
//       </div> 
//     );
//   }
// }
// export default OrderanPage;

import React from 'react'
import Navigation from '../Components/Navigation'

export default function OrderanPage() {
  return (
    <div className='orderan-bg'>
        <Navigation />
        <div className='judul-orderan'> 
          <h1>Orderan</h1>
        </div>
        <div className="table-orderan">
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
                    <td>wefwe</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
