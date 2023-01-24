import React, { useState } from 'react'


const data = [
    "vikas ",
    "rahul ",
    "shivam ",
    "radhika ",
    "radha ",
    "shivani ",
    "sitaram ",
    "payal ",
    "oli ",
    "maggi "
]


const SearchFilter = () => {
    const [val, setValue] = useState();

    const fun = (e) => {
        setValue(e.target.value);
        console.log(val)

    }
    return (
        <div>
            <input onChange={fun} type="text" />

         
             <div>
                    {
                        data.filter((e, i) => {
                            return e.includes(val)  ;
                        })
                    }
                    
             </div>
                   
               
        

        </div>
    )

}

export default SearchFilter