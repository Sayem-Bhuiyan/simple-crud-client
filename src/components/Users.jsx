import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadeUsers = useLoaderData();
    const [users, setUsers] = useState(loadeUsers)
    const handleDelete = _id => {
     fetch(`http://localhost:3000/users/${_id}`, {
        method: "DELETE"
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.deletedCount > 0) {
            alert('user deleted successfully')
            const remaining = users.filter(user => user._id !== _id)
            setUsers(remaining)
        }
     })
    }
    return (
        <div>
            <h2>{users.length}</h2>

            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} {user._id} <button onClick={() => handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;