// import React, { useState } from 'react';
// import ProgramModel from '../models/ProgramModel';
// import axios from 'axios'
// import { withRouter } from 'react-router-dom';
// import CKEditor from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// function CreateTeamFunc(){
// // const [name, setName] = useState(''),
// // const [date, setDate] = useState(''),
// // const [content, setContent] = useState(''),
// const [text, setText] = useState('')
// //   const handleNameChange =(event) => {
// //     setName(event.target.value)
    
// //   }
// //   const handleDateChange =(event) => {
// //     setDate(event.target.value)
    
// //   }
// //   const handleContentChange =(event) => {
// //     setContent(event.target.value)
   
// //   }
//   const handleFormSubmit = (event) => {
//     event.preventDefault() 
//     console.log('form was submitted')
//     axios.post(`http://localhost:4000/api/programs/${props.match.params.programId}`, {
//     // name: name,
//     // date: date,
//     // content: content,
//     text:text
//     }).then((response)=>{
//         this.props.history.push(`/programs/${props.match.params.programId}`)  
//     }).catch(function(error){
//       console.log(error)
//     })
    
//   }
//     return (
//       <div >
//         <h2>Add an Experiment</h2>
//         <form 
//         onSubmit={handleFormSubmit}>
//             {/* <h2>Experiment Name</h2>
//           <input 
//           type='text'
//           value={name}
//           onChange={handleNameChange}
//           />
//           <h2>Experiment Date</h2>
//           <input 
//           type='text'
//           value={date}
//           onChange={handleDateChange}
//           />
//           <h2>Content</h2>
//           <input 
//           type='text'
//           value={content}
//           onChange={handleContentChange}
//           /> */}
//           <input type='submit' />
//           <div className='editor'>
//               <CKEditor
//               editor={ClassicEditor}
//               data={text}
//               onChange={(event, editor)=>{
//                   const data = editor.getData()
//                   setText(data)}
//               } 
//               />

//           </div>
//           <div>
//               <h2>Content</h2>
//               <p>{text}</p>
//           </div>
//         </form>

//         </div>
//     );
//   }


// export default withRouter(CreateTeamFunc);