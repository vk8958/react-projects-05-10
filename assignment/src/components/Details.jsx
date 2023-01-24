import React, { useEffect, useState } from 'react';
import './Details.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BrifDetails from './BrifDetails';
import Pagination from './Pagination';

const Details = () => {
    const [users, setUsers] = useState([]);
    const [view, setView] = useState(true);
    const [user, setUser] = useState();

    //pagination
    const [currentPage,setCurrentPage]=useState(1);
    const[postsPerPage,setPostPerPage]=useState(3);

  

    const fun = (e) => {
        if (view) {
            setView(false)
            setUser(e);
        } else {
            setView(true)
            setUser()
        }
        // console.log(e.name)


    }
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
                console.log(data)
            })

    }

    useEffect(() => {
        fetchData();

    }, [])

      //Get current Posts
      const indexOfLastPost=currentPage*postsPerPage;
      const indexOfFirstPost=indexOfLastPost-postsPerPage;
      const currentPosts=users.slice(indexOfFirstPost,indexOfLastPost);


       //Change page 
       const paginate=(pageNumber)=>setCurrentPage(pageNumber)
    return (
        <div className='container'>
            {
                currentPosts.map((e, i) => (
                    <>
                        <div className='details-box'>
                            <div>
                                <p>Hello {e.company.name}</p>
                            </div>

                            <div>
                                <h5>CONTACT</h5>
                                <p>{e.name}</p>
                            </div>
                            <div>
                                <h5>CITY</h5>
                                <p>{e.address.city}</p>

                            </div>
                            <div>
                                <h5>STATE</h5>
                                <p>{e.address.city}</p>
                            </div>

                            <div>
                                <button onClick={() => fun(e.name)} className='btn'>{e.name === user ? "Hide" : "View"} Details</button>
                            </div>
                           
                            
                        </div>
                        
                      
                        {e.name===user && <BrifDetails users={users} user={user}/>}
                    </>






                ))
            }
             
             
            <div className='count-container'>
                
               <Pagination postsPerPage={postsPerPage} totalPosts={users.length} paginate={paginate}/>
                
            </div>
        </div>

    )
}


export default Details;