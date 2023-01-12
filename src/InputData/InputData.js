import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeData, removeData, updateData } from '../ActionType/DataAction'
import "./InputData.css"

const InsertData = () => {

  const [upid, setUpid] = useState()
  let fullDetail = useSelector((state) => state.DataReduce.data);
  console.log("fiii", fullDetail)
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false)
  // const [currentUser, setCurrentUser] = useState()
  const [detail, setDetail] = useState({
    namef: "",
    fname: "",
    lname: ""
  })

  const clearData = () => {
    setDetail({
      namef: "",
      fname: "",
      lname: ""
    })
  }

  const handleChange = (e) => {
    // setName = e.target.value
    const { name, value } = e.target;
    setDetail((oldName) => {
      return {
        ...oldName,
        [name]: value,
      }
    })
  }

  const storeDetailHandler = (e) => {
    // debugger;
    const { target: { name, value } } = e;
    console.log("uuid", upid)
    if (isUpdated === false)
    // if (upid === "") 
    {
      setDetail((oldName) => {
        return {
          ...oldName,
          [name]: value,
        }
      })
      console.log("calleddddifff")
      console.log("detail", detail)
      dispatch(storeData(detail))
      clearData()
      // setIsUpdated(false)
    }
    else {
      // handleChange(id)
      console.log("calledddd")
      let updatedDetail = fullDetail.map((ele, index) => {
        if (index === upid) {
          return {
            ...ele,
            [name]: value
          };
        }
        else {
          return {
            ...ele
          }
        }
      })
      console.log("detail@@@", fullDetail)
      fullDetail[upid] = { namef: detail.namef, fname: detail.fname, lname: detail.lname }
      dispatch(updateData(fullDetail))
      clearData()
      setIsUpdated(false)
    }
  }
  // console.log("fullDetail", fullDetail);

  const deleteHandler = (id) => {
    console.log("Index", id)
    // debugger;
    dispatch(removeData(id))
    console.log("deleteDetail", fullDetail);
  }

  const updateHandler = (id) => {
    console.log("id:", id)
    // debugger;
    setIsUpdated(true)
    const findData = fullDetail.find((element, index) => index === id)
    console.log("findData:", findData)
    setDetail({
      namef: findData.namef,
      fname: findData.fname,
      lname: findData.lname
    })
    // showHandler()
    setIsUpdated(true)
    // upid = id
    setUpid(id)
    // console.log("uid",upid)
    console.log("set", isUpdated)
  }
  // console.log("fulldetail:", fullDetail)

  return (
    <>
      <div className="container">
      <br/>
      <input type="text" value={detail.namef} onChange={(e) => handleChange(e)} name="namef" placeholder='name' /> <br />
      <input type="text" value={detail.fname} onChange={(e) => handleChange(e)} name="fname" placeholder="fname" /> <br />
      <input type="text" value={detail.lname} onChange={(e) => handleChange(e)} name="lname" placeholder="lname" /> <br />
      <button className='add' onClick={storeDetailHandler}> {(!isUpdated) ? "Add Data" : "Update Data"}</button>
      <br/>
      </div>
      {
        fullDetail?.map((el, index) => {
          return (
            <>
              <div className="detail" key={index}>
                <p>{el.namef}</p>
                <p>{el.fname}</p>
                <p>{el.lname}</p>
                <button className="delete" onClick={() => deleteHandler(index)}>Delete</button>
                <button className="update" onClick={() => updateHandler(index)}>Update</button>
              </div>
            </>
          )
        })
      }
    </>
  )
}
export default InsertData