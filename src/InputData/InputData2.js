import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeData, removeData, updateData } from '../ActionType/DataAction'
import "./InputData.css"
const InsertData = () => {
  // const products = useSelector((state) => state.ProductReduce.products[0]);
  // const dispatch = useDispatch();
  // console.log("products", products)



  // console.log("title",products.title)
  // console.log("coments",(products.comments)[0].userId)
  // console.log("tags",(products.tags))
  // console.log("tags",(products.tags)[1])



  // const products = useSelector((state) => state.ProductReduce);
  // console.log("products", products)
  // console.log("first",(products.users)[0])
  // // console.log("sec",Object.keys((products.users)[0]))
  // // console.log("sec",Object.entries((products.users)[0]).map((el)=> el[1].name))
  // console.log("third",((products.posts)[0]))
  // console.log("forth",Object.entries((products.posts)[0]).map((el)=> el[1].title))
  // // console.log("sec",Object.entries((products.users)[0])[0][0])
  // console.log("sec",Object.entries((products.users)[0])[0][1])
  // const y = ((Object.entries((products.users)[0])[0][1]))
  // console.log("sec @@id",Object.entries(y.uu).map((e) => e[1])[0])
  // console.log("sec @@name",Object.entries(y.uu).map((e) => e[1])[1])



  // const products = useSelector((state) => state.ProductReduce);
  // // console.log("products",products.content.label)
  // console.log("products",products.content.templates[0])
  // // console.log("pro",products.content.templates[0].items[0].key)
  // console.log("pro",products.content.templates[0].items[1].properties.text.label)
  // const changeHandler = ("pro",products.content.templates[0].items[1].properties.text.label)
  // console.log("changeHandler",changeHandler)

  let namefRef = useRef("")
  let fnameRef = useRef("")
  let lnameRef = useRef("")

  const [upid,setUpid] = useState()
  // const [fulllDetail,setFulllDetail] = useState([])
  // console.log("ref",nameRef.current.value)



  let fullDetail = useSelector((state) => state.DataReduce.data);
  console.log("fiii",fullDetail)
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false)
  // const [currentUser, setCurrentUser] = useState()
  const [detail, setDetail] = useState({
    namef: "",
    fname: "",
    lname: ""
  })

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


//   const storeItem = () => {
//     setFulllDetail((oldFulDetail) => {
//         return[...oldFulDetail,detail];
//     });
//     setDetail({
//       namef: "",
//       fname: "",
//       lname: ""
//     })
//     dispatch(storeData(fullDetail))
// };



  // let upid = "";
  
  console.log("iii", upid)

  const storeDetailHandler = () => {
    // debugger;
    console.log("uuid",upid)
    if (isUpdated === false) 
    // if (upid === "") 
    {
      console.log("calleddddifff")
      console.log("detail", detail)
      dispatch(storeData(detail))
      setDetail({
        namef: "",
        fname: "",
        lname: ""
      })
      // setIsUpdated(false)
    }
    else {
      // handleChange(id)
      console.log("calledddd")
      fullDetail.find((ele, index) => {
        if (index === upid) {
          return {
            namef: namefRef.current.value,
            fname: fnameRef.current.value,
            lname: lnameRef.current.value
          }
        }
        else {
          return {
            ...ele
          }
        }
      })
      console.log("detail@@@", fullDetail[upid])
      fullDetail[upid] = { namef: detail.namef, fname: detail.fname, lname: detail.lname }
      dispatch(storeData(fullDetail))
      setDetail({
        namef: "",
        fname: "",
        lname: ""
      })
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
    setIsUpdated(true)
    const findData = fullDetail.find((element, index) => index === id)
    console.log("findData:", findData)
    setDetail({
      namef: findData.namef,
      fname: findData.fname,
      lname: findData.lname
    })
    // showHandler()
    // setIsUpdated(true)
    // upid = id
    setUpid(id)
    // console.log("uid",upid)
    console.log("set", isUpdated)
  }


  // console.log("fulldetail:", fullDetail)

  return (
    <>


      <input type="text" ref={namefRef} value={detail.namef} onChange={handleChange} name="namef" placeholder='name' /> <br />
      <input type="text" ref={fnameRef} value={detail.fname} onChange={handleChange} name="fname" placeholder="fname" /> <br />
      <input type="text" ref={lnameRef} value={detail.lname} onChange={handleChange} name="lname" placeholder="lname" /> <br />

      {/* <button onClick={handlerChange}>Click Me!</button> */}
      <button onClick={storeDetailHandler}>Click Me!</button>

      {

        fullDetail?.map((el, index) => {
          return (
            <>
              <div className="detail" key={index}>

                <p>{el.namef}</p>
                <p>{el.fname}</p>
                <p>{el.lname}</p>
                <button onClick={() => deleteHandler(index)}>Delete</button>
                <button onClick={() => updateHandler(index)}>Update</button>
              </div>
            </>
          )
        })
      }




    </>
  )
}

export default InsertData