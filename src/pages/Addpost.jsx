import './Addpost.css'

function Addpost() {
    return (
        <div className='body'>
            <nav>
                <ul>
                    <li>Read</li>
                    <li>Write</li>
                    <li>Edit</li>
                </ul>
            </nav>
            <div className="input-box">
                <div className='input-container'>
                    <input className='first-input' placeholder='Title'/>
                    <label></label>
                </div>
                <div className='input-container'>
                    <input className='second-input'/>
                    <label></label>
                </div>
            </div>
        </div>
    )
}
export default Addpost