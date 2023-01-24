import React from 'react'

const Pagination = ({ postsPerPage, totalPosts ,paginate}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <div>
            <ul style={{display:'flex',listStyle:'none',}}>
                {pageNumber.map(number=>(
                    <li style={{margin:'20px',}}>
                        <a onClick={()=>paginate(number)} href="!#"  style={{color:'white',}}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination