import React from 'react';

export default function Thunderbird350X() {
    return (
        <div className='text-center'>
            <h1 className='mb-4'>Royal Enfield Thunderbird 350X</h1>
            <img
                src="https://imgd.aeplcdn.com/0x0/bw/ec/33557/Royal-Enfield-Thunderbird-350X-Front-threequarter-122867.jpg?wm=0"
                alt="Royal Enfield Thunderbird 350X"
                className='rounded'
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
                            <td>775 mm</td>
                        </tr>
                        <tr>
                            <td>Tyre Size Front</td>
                            <td>90/90-19</td>
                        </tr>
                        <tr>
                            <td>Tyre Size Rear</td>
                            <td>120/80-18</td>
                        </tr>
                        <tr>
                            <td>Fuel Tank Capacity</td>
                            <td>20 Litres</td>
                        </tr>
                        <tr>
                            <td>Curb Weight</td>
                            <td>192 kg</td>
                        </tr>
                        <tr>
                            <td>Rear Brake Type</td>
                            <td>Disc</td>
                        </tr>
                        <tr>
                            <td>Front Suspension</td>
                            <td>Telescopic Forks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
