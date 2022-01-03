import React from 'react'
import { Button } from 'react-bootstrap'

const Newslater = () => {
    const bg = {
        backgroundImage:`url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`,
        backgroundPosition:"center"
    }
    return (
        <div className='newslater text-center my-5 py-5' style={bg}>
            <h2 className='text-capitalize' style={{color:"var(--text-color)"}}>get latest update by subscribe <br/>our newslater</h2>
            <Button variant="danger">Shop Now</Button>
        </div>
    )
}

export default Newslater
