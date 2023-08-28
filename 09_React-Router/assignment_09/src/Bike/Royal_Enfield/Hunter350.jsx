import React from 'react';

export default function Hunter350() {
    return (
        <div className='text-center'>
            <h1 className='mb-4'>Royal Enfield Hunter 350</h1>
            <img
                src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0"
                alt="Royal Enfield Hunter 350"
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
                            <td>800 mm</td>
                        </tr>
                        <tr>
                            <td>Tyre Size Front</td>
                            <td>100/90-19</td>
                        </tr>
                        <tr>
                            <td>Tyre Size Rear</td>
                            <td>130/70-18</td>
                        </tr>
                        <tr>
                            <td>Fuel Tank Capacity</td>
                            <td>15 Litres</td>
                        </tr>
                        <tr>
                            <td>Curb Weight</td>
                            <td>185 kg</td>
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
