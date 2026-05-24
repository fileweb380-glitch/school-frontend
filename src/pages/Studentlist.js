import { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("https://school-backend-1pzt.onrender.com/api/auth/students", {
      headers: { Authorization: token }
    })
    .then(res => setUsers(res.data));
  }, []);

 return (
  <div className="students-container">
    <h2 className="title">All Students</h2>

    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course</th>
            <th>Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.course}</td>
              <td>{u.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default Students;