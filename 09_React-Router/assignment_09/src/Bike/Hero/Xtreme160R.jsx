import React from 'react';

export default function Xtreme160R() {
  return (
    <div className='text-center'>
      <h1 className='mb-4'>Hero Xtreme 160R 4V</h1>
      <img
        className='rounded'
        src="https://static.autox.com/uploads/2023/06/667A0082.jpg"
        alt='Hero Xtreme 160R 4V'
      />

      <h2 className='my-4'>Key Specifications</h2>
      <div className='w-100 d-flex justify-content-center'>
        <table className='w-50 table table-bordered'>
          <tbody>
            <tr>
              <th className='table-dark'>Specification</th>
              <th className='table-dark'>Value</th>
            </tr>
            <tr>
              <td>Seat Height</td>
              <td>795 mm</td>
            </tr>
            <tr>
              <td>Tyre Size Front</td>
              <td>100/80-17(TL)</td>
            </tr>
            <tr>
              <td>Tyre Size Rear</td>
              <td>130/70 R 17</td>
            </tr>
            <tr>
              <td>Fuel Tank Capacity</td>
              <td>12 Litres</td>
            </tr>
            <tr>
              <td>Curb Weight</td>
              <td>144 kg</td>
            </tr>
            <tr>
              <td>Rear Brake Type</td>
              <td>Disc</td>
            </tr>
            <tr>
              <td>Front Suspension</td>
              <td>Standard Telescopic, 37mm Dia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
