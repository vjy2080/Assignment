import React from 'react';

export default function XPulse400() {
    return (
        <div className='text-center'>
            <h1 className='mb-4'>Hero XPulse 400</h1>
            <img
                className='rounded'
                src="https://naxontech.com/wp-content/uploads/2023/06/Big-news-about-Hero-Xpulse-420-know-when-this-powerful.jpg"
                alt='Hero XPulse 400'
            />

            <h2 className='my-4'>Key Specifications</h2>

            <div className='w-100 d-flex justify-content-center'>

                <table className='w-50 table table-bordered'>
                    <tbody>
                        <tr>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>Seat Height</td>
                            <td>820 mm</td>
                        </tr>
                        <tr>
                            <td>Tyre Size Front</td>
                            <td>90/90-21</td>
                        </tr>
                        <tr>
                            <td>Tyre Size Rear</td>
                            <td>120/80-18</td>
                        </tr>
                        <tr>
                            <td>Fuel Tank Capacity</td>
                            <td>13 Litres</td>
                        </tr>
                        <tr>
                            <td>Curb Weight</td>
                            <td>170 kg</td>
                        </tr>
                        <tr>
                            <td>Rear Brake Type</td>
                            <td>Disc</td>
                        </tr>
                        <tr>
                            <td>Front Suspension</td>
                            <td>Inverted (USD) Forks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
