import { useState } from "react"



 function Alert(props) {
    const capitalize=(word)=>{
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
        const [showAlert, setShowAlert] = useState(true);
      
        const handleClose = () => {
          setShowAlert(false);
    };
  return showAlert? (props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
    <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={handleClose}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  )
   
 :null
 }


export default Alert 
