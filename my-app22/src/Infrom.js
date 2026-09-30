

export default function Infrom( {children, name = "unknown", email = "not email", phone = "unknown", age = "not age"} ) {
  return (
    <div>
        <div>
            <h2> {name} </h2>
            <p> {email} </p>
            <h4> {age} </h4>
            <h3> {phone} </h3>
            {children} 
        </div>
    </div>
  )
}
