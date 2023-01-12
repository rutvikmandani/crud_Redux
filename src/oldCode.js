// import React, { useState,useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { storeData, removeData, updateData } from '../ActionType/DataAction'
// import "./InputData.css"
// const InsertData = () => {
//   // const products = useSelector((state) => state.ProductReduce.products[0]);
//   // const dispatch = useDispatch();
//   // console.log("products", products)



//   // console.log("title",products.title)
//   // console.log("coments",(products.comments)[0].userId)
//   // console.log("tags",(products.tags))
//   // console.log("tags",(products.tags)[1])



//   // const products = useSelector((state) => state.ProductReduce);
//   // console.log("products", products)
//   // console.log("first",(products.users)[0])
//   // // console.log("sec",Object.keys((products.users)[0]))
//   // // console.log("sec",Object.entries((products.users)[0]).map((el)=> el[1].name))
//   // console.log("third",((products.posts)[0]))
//   // console.log("forth",Object.entries((products.posts)[0]).map((el)=> el[1].title))
//   // // console.log("sec",Object.entries((products.users)[0])[0][0])
//   // console.log("sec",Object.entries((products.users)[0])[0][1])
//   // const y = ((Object.entries((products.users)[0])[0][1]))
//   // console.log("sec @@id",Object.entries(y.uu).map((e) => e[1])[0])
//   // console.log("sec @@name",Object.entries(y.uu).map((e) => e[1])[1])



//   // const products = useSelector((state) => state.ProductReduce);
//   // // console.log("products",products.content.label)
//   // console.log("products",products.content.templates[0])
//   // // console.log("pro",products.content.templates[0].items[0].key)
//   // console.log("pro",products.content.templates[0].items[1].properties.text.label)
//   // const changeHandler = ("pro",products.content.templates[0].items[1].properties.text.label)
//   // console.log("changeHandler",changeHandler)

//   let nameRef = useRef("")
//   let fnameRef = useRef("")
//   let lnameRef = useRef("")
//   // console.log("ref",nameRef.current.value)
//   let fullDetail = useSelector((state) => state.DataReduce.data);
//   const dispatch = useDispatch();
//   const [isUpdated, setIsUpdated] = useState(false)
//   const [currentUser, setCurrentUser] = useState(null)
//   const [detail, setDetail] = useState({
//     name: "",
//     fname: "",
//     lname: ""
//   })

//   const handleChange = (e,id) => {
//     // setName = e.target.value
//     const { name, value } = e.target;
//     setDetail((oldName) => {
//       return {
//         ...oldName,
//         [name]: value,
//       }
//     })

//   }
//   // var upid = 0;
//   const showHandler = (id) => {
//     // debugger;
//     if (isUpdated === false) {
//       console.log("detail", detail)
//       dispatch(storeData(detail))
//       setDetail({
//         name: "",
//         fname: "",
//         lname: ""
//       })
//       setIsUpdated(false)
//     }
//     else {
//       handleChange(id)
//       fullDetail.find((ele,index) => {
//         if(index === id){
//           return{
//             name: nameRef.current.value
//           }
//         }
//         else{
//           return{
//             ...ele
//         }
//       }
//     })
//       dispatch(storeData(detail))
//       console.log("detail@@@",detail)
//       // dispatch(updateData(id, detail))
//       // console.log("updatedId", upid)
//     }
//   }

//   console.log("fullDetail", fullDetail);


//   const deleteHandler = (id) => {
//     console.log("Index", id)
//     // debugger;
//     dispatch(removeData(id))
//     console.log("deleteDetail", fullDetail);
//   }

//   const updateHandler = (id) => {
//     // console.log("id:", id)
//     // debugger;
//     const findData = fullDetail.find((element, index) => index === id)
//     console.log("findData:", findData)
//     setDetail({
//       name: findData.name,
//       fname: findData.fname,
//       lname: findData.lname
//     })
//     setIsUpdated(true)
//   }


//   console.log("fulldetail:", fullDetail)

//   return (
//     <>


//       <input type="text" ref={nameRef} value={detail.name} onChange={handleChange} name="name" placeholder='name' /> <br />
//       <input type="text" ref={fnameRef} value={detail.fname} onChange={handleChange} name="fname" placeholder="fname" /> <br />
//       <input type="text" ref={lnameRef} value={detail.lname} onChange={handleChange} name="lname" placeholder="lname" /> <br />

//       {/* <button onClick={handlerChange}>Click Me!</button> */}
//       <button onClick={showHandler}>Click Me!</button>

//       {

//         fullDetail?.map((el, index) => {
//           return (
//             <>
//               <div className="detail" key={index}>

//                 <p>{el.name}</p>
//                 <p>{el.fname}</p>
//                 <p>{el.lname}</p>
//                 <button onClick={() => deleteHandler(index)}>Delete</button>
//                 <button onClick={() => updateHandler(index)}>Update</button>
//               </div>
//             </>
//           )
//         })
//       }




//     </>
//   )
// }

// export default InsertData