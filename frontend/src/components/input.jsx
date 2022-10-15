function input(props) {
    return (
      <input 
      className="form-control input"
      id={props.id} 
      type={props.type} 
      name={props.name} 
      value={props.value}
      placeholder={props.placeHolder}
      onChange={props.onChange}></input>
    )
}
  
export default input