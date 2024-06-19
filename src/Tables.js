import './App.css';

function Tables(){
    return(
        <div className='table'>
         <table style={{ width: '50%', border: '1px solid black', textAlign: 'center', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROLL NUMBER</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sneha</td>
                        <td>sneha bihojou</td>
                        <td>sneha</td>
                    </tr>
                    <tr>
                        <td>Decrement</td>
                        <td>sneha</td>
                        <td>sneha</td>
                    </tr>
                </tbody>
            </table>
            <div className='image'>
                <img src='https://th.bing.com/th/id/OIP.vHHBwcUFUaHWXntSnqKdCAAAAA?rs=1&pid=ImgDetMain'/>
            </div>
        </div>
       
    )
}
export default Tables;