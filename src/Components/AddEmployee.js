import React from 'react';
import { useState, useEffect } from 'react';
import EmployeeServices from '../Services/EmployeeServices';
import {  useNavigate, useParams  } from 'react-router-dom';


export const AddEmployee = () => {

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName, lastName, emailId}
        
        if(id){
            EmployeeServices.updateEmployee(id, employee)
            .then((response) => {
                console.log(response.data)
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })
            
        }else{

        EmployeeServices.createEmployee(employee)
        .then((response) => {
            console.log(response.data)
            navigate('/employees')
        }).catch(error => {
            console.log(error)
        })
    }
    }
    const title = () => {
        if(id){
            return <h2 className='text-center'> Update Employee </h2>
        }else{
            return <h2 className='text-center'> Add Employee </h2>
        }
    }

    const cancel = () => {
        navigate('/employees')
    }

    useEffect(() => {
        EmployeeServices.getEmployeeById(id).then((response) => {
            setfirstName(response.data.firstName)
            setlastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    },[])

  return (
    <div>
        <br />
        <br />
        <div className='container'>
            <div className='row'> 
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    title()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name :</label>
                            <input
                                type="text"
                                placeholder='Enter First Name'
                                name="firstName"
                                className='form-control'
                                value={firstName}
                                onChange = {(e) => setfirstName(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name :</label>
                            <input
                                type="text"
                                placeholder='Enter Last Name'
                                name="lastName"
                                className='form-control'
                                value={lastName}
                                onChange = {(e) => setlastName(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email Id :</label>
                            <input
                                type="text"
                                placeholder='Enter Email Id'
                                name="emailId"
                                className='form-control'
                                value={emailId}
                                onChange = {(e) => setEmailId(e.target.value)}
                            ></input>
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                        <button className='btn btn-danger' onClick={() => cancel()}>Cancel</button>
                    </form>
                </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}
