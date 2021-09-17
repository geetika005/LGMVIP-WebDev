import { useState } from 'react';
import './App.css';

function App() {

    const [users, setUsers] = useState([]);
    const loadUsers = async() => {
        const response = await fetch("https://reqres.in/api/users?");
        const jsonresponse =
            await
        response.json();
        setUsers(jsonresponse.data);


    }

    function myloader() {
        var myvar = setTimeout(showPage, 3000);

    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "block";
    }
    return ( < >

        <
        header > <
        div className = "brand-name" > LetsGrowMore < /div> 

        <
        button className = "BTN "
        onClick = { loadUsers }
        onLoad =
        " myloader()" >
        Get Users < /button> < /header >
        <
        div className = "banner" > < br / > Click on Get Users < /div > <
        div className = "loader" > < /div><
        div className = "container" > {
            users.map((now, id) => {
                return ( <
                    div className = "grid"
                    key = { id } >
                    <
                    img src = { now.avatar }
                    alt = "..." / >
                    <
                    div className = "name" > { now.first_name } { now.last_name } < /div> <
                    div className = "email" > { now.email } < /div>< /
                    div >
                );
            })
        } <
        /div> </ >
    );
}

export default App;