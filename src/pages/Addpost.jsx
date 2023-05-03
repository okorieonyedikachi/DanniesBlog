import './Addpost.css'

function Addpost() {
    return (
        <div className='body'>
            <nav>
                <ul id='list1'>
                    <li>Read</li>
                    <li>Write</li>
                    <li>Edit</li>
                </ul>
                <ul id='list2'>
                    <li id='sign-in'>Sign up</li>
                    <li>Login</li>
                </ul>
            </nav>
            <form className="input-box">
                <div className='input-container'>
                    <input className='first-input' placeholder='Title'/>
                    <label></label>
                </div>
                <div className='input-container'>
                    <input className='second-input'/>
                    <label></label>
                </div>
            </form>
        </div>
    )
}
export default Addpost