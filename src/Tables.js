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
                        <td>123</td>
                        <td>kamareddy</td>
                    </tr>
                    <tr>
                        <td>sravya</td>
                        <td>124</td>
                        <td>nizamabad</td>
                    </tr>
                    <tr>
                        <td>sekhar</td>
                        <td>125</td>
                        <td>chittor</td>
                    </tr>
                </tbody>
            </table>
            <div className='image'>
                <img src='https://th.bing.com/th/id/OIP.vHHBwcUFUaHWXntSnqKdCAAAAA?rs=1&pid=ImgDetMain'/>
            </div>
            <section>
             hello kmit welcome to narayanguda to Learn something
            </section>
            <footer>
                <h1>KOLIMI SNEHA 2024
                </h1>
                <h3>kolimisneha123@gmail.com</h3>
            </footer>

        </div>
       
    )
}
export default Tables;