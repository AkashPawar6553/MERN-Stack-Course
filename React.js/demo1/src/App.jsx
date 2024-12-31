import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <div class="Form-container">
            <h1> Employee Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            S.N
                        </th>
                        <th>
                            Full Name
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Email
                        </th>

                        <th>
                            State
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Amir
                        </td>
                        <td>
                            Male
                        </td>
                        <td>
                            a5555@gmail.com
                        </td>
                        <td>
                            Delhi
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            Nikita
                        </td>
                        <td>
                            Female
                        </td>
                        <td>
                            N5555@gmail.com
                        </td>
                        <td>
                            Delhi
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3
                        </td>
                        <td>
                            Sumit
                        </td>
                        <td>
                            Male
                        </td>
                        <td>
                            S5555@gmail.com
                        </td>
                        <td>
                            Panjab
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4
                        </td>
                        <td>
                            ajay
                        </td>
                        <td>
                            Male
                        </td>
                        <td>
                            aa5555@gmail.com
                        </td>
                        <td>
                            Gujarat
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="table-container">
            <h1> Employee List </h1>
            <input type="text" placeholder="Enter your Name" />

            <input type="password" placeholder="password" />

            <input type="email" placeholder="email" />

            <input type="Mobile No" placeholder="Enter your number" />
            <br />

            <button>Enter</button>
        </div>
    </div>
  )
}

export default App;
