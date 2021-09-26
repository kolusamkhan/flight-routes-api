export default function Buttom(props){
    const {title, onClick, type='button', className} = props;
    return(
        <button className={className} type={type} onClick={onClick}> {title}</button>
    )
}