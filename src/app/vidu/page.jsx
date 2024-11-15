 'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  photo: Yup.mixed().required('A photo is required')
});

const FormExample = () => {
  const handleSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', photo: null }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="small" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="small" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" component="small" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="photo" className="form-label">Photo</label>
            <input
              name="photo"
              type="file"
              className="form-control"
              onChange={(event) => {
                setFieldValue('photo', event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage name="photo" component="small" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormExample;
// import { useState } from "react";
// export default function VD(){
//   const [data,setData]=useState('');
//   // const handleChange = (event) => {
//   //   setData(event.target.value);
//   // };

//   return (
//     <>
//         <input
//             type="text"
//             value={data}
//             onChange={(e)=>setData(e.target.value)}
//         />
//         <h1>{data}</h1>
//     </>
//   );
// }
// 
// 'use client';
// import { useRef } from 'react';

// export default function UncontrolledForm() {
//   const inputRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Input value: ${inputRef.current.value}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Input:
//         <input type="text" ref={inputRef} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// import { useState } from 'react';

// export default function FormExample() {
//   const [inputValue, setInputValue] = useState('');
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <form>
//       <label>
//         Input:
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//         />
//       </label>
//       {isFocused && <p>Vui lòng nhập thông tin</p>}
//       {!isFocused && <p>Vui lòng không nhập gì hết</p>}
//     </form>
//   );
// }















// import React,{useState} from "react";
// export default function Counter(){
//     const [count,setCount]=useState(0);
//     const increment=()=>{
//         setCount(count+1);
//     }
//     const decrement = ()=>{
//         setCount(count-1);
//     }
//     return(
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={increment}>Tăng</button>
//             <button onClick={decrement}>Giảm</button>
//         </div>
//     )
// }

// import React,{useState} from "react";
// export default function Like(){
//     const [like,setLike]=useState('Thích');
//     const changeLike =()=>{
//         if(like=="Thích"){
//             setLike("Đã thích")
//         }else{
//             setLike("Thích")
//         }
//     }
//     return(
//         <div>
//             <button onClick={changeLike}>{like}</button>
//         </div>
//     )
// }
// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function DataFetcher() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((responseData) => setData(responseData));
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </div>
//   );
// }

