export const List =(props)=>{
    return (
<>
<h1>Item</h1>
{/* <newItem/> */}
<div>{props.msg.id}</div>
<div>{props.msg.title}</div>
<div>{props.msg.desc}</div>
</>
    );
}