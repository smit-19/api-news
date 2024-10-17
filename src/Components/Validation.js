import React, { useState } from 'react'
import { Table } from "antd";


function Validation() {
    const [UserDetails, setUserDetails] = useState({
        fname: '',
        lname: '',
        countary: '',
        gender: '',
    }
    );
    const [userData, setuserData] = useState([])
    const [editindex, seteditindex] = useState(null)

    const columns = [
        {
            title: 'First name',
            dataIndex: 'fname',
            key: 'fname',
        },
        {
            title: 'Last Name',
            dataIndex: 'lname',
            key: 'lname',
        },
        {
            title: 'Countary',
            dataIndex: 'countary',
            key: 'countary',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        }, {
            title: 'Action',
            render: (_, item, index) => (
                <>
                    <button className='btn btn-danger' style={{ marginRight: 10 }} onClick={() => handleDelete(index)}>Delete</button>
                    <button className='btn btn-success' onClick={() => handleEdit(index)}>Edit</button>
                </>

            )
        }

    ];
    const handlechange = (e) => {
        setUserDetails({ ...UserDetails, [e.target.name]: e.target.value });
        console.log(UserDetails);
    }

    const handleSubmit = () => {
        const arr = userData;
        if (editindex !== null) {
            arr[editindex] = UserDetails;
        }
        else {
            arr.push(UserDetails);
        }
        setuserData([...arr]);
        seteditindex(null)
        setUserDetails({
            name: '',
            countary: '',
            gender: ''
        })

    }
    const handleDelete = (index) => {
        const arr = userData
        arr.splice(index, 1);
        setuserData([...arr]);
    }

    const handleEdit = (item, index) => {
        setUserDetails(item)
        seteditindex(index)
    }
    return (
        <div className='container'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
            <label class="form-label">First Name</label>
            <input type='text' name='fname' id='fname' placeholder='First Name' className='form-control' value={UserDetails.fname} onChange={(e) => handlechange(e)} />

            <label class="form-label">Last Name</label>
            <input type='text' name='lname' id='lname' placeholder='Last Name' className='form-control' value={UserDetails.lname} onChange={(e) => handlechange(e)} />

            <label className='form-label'>Countary</label>
            <select className='form-control' name='countary' id='countary' value={UserDetails.countary} onChange={(e) => handlechange(e)}>
                <option value='default'>Select Country</option>
                <option value='USA'>USA</option>
                <option value='UK'>UK</option>
                <option value='Canada'>Canada</option>
                <option value='Australia'>Australia</option>
                <option value='India'>India</option>
            </select>
            <br />

            <label>Gender</label><br />
            <input type="radio" id="Male" name="gender" value="Male" checked={UserDetails.gender === 'Male'} onChange={(e) => handlechange(e)} />
            <label >Male</label><br />
            <input type="radio" id="Female" name="gender" value="Female" checked={UserDetails.gender === 'Female'} onChange={(e) => handlechange(e)} />
            <label>Female</label><br />
            <input type="radio" id="Other" name="gender" value="Other" checked={UserDetails.gender === 'Other'} onChange={(e) => handlechange(e)} />
            <label >Other</label>
            <br /><br />

            <button type='submit' className='btn btn-success' style={{ marginTop: '10px', marginBottom: '10px', }} onClick={() => handleSubmit()}>Submit</button>


        </div>
    )
}

export default Validation
