import React from 'react'
import './BrifDetails.css'


const BrifDetails = ({ users ,user }) => {
    console.log(users)
    return (


        <div>

            {users.map((e, i) => 
                e.name===user&&
            
                <div className='brif'>


                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sit minima eos distinctio dolorum inventore praesentium consequatur est sunt id ut necessitatibus autem dicta perferendis, esse labore molestiae voluptas vel sequi tenetur atque delectus? Dolore voluptas ea ducimus ex architecto aliquam excepturi vitae beatae quas accusantium modi atque, veniam nisi!</p>
                    <div className='inner-div'>
                        <div>
                            <h4>Contact Person</h4>
                            <s>{e.name}</s>

                            <h4>Designation</h4>
                            <s>{e.address.city}</s>
                            <h4>Email</h4>
                            <p>{e.email}</p>
                            <h4>Phones</h4>
                            <p>{e.phone}</p>
                        </div>
                      
                        <div>
                            <h4>Address</h4>
                            <s>{e.company.name} {e.address.city} {e.address.zipcode}</s>

                            <h4>City</h4>
                            <s>{e.address.city}</s>
                            <h4>State</h4>
                            <p>{e.address.state}</p>
                            <h4>Country</h4>
                            <p>{e.address.city}</p>
                        </div>

                    </div>

                </div>)
            }
        </div>
    )
}

export default BrifDetails