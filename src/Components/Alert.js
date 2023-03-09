import React from 'react'

 function Alert(props) {
    // const[alert,setalert]=useState(null);
    // const showalert=(message,type)=>{
// setalert({
//   msg:message,
//   type:type
// })
    // }
  return (
    <>
    <div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  {props.alert.type} and {props.alert.msg}
  <button type="button"  data-bs-dismiss="alert" aria-label="Close "className='btn-close'>
  </button>
</div>
    </div>
    </>
  )
}
export default Alert
