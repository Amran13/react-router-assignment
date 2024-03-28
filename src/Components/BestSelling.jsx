import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function BestSelling() {
    const [loadedData, setLoadedData] = useState([]);
    const data = useLoaderData();
    console.log(data)
    useEffect( () => {
        if(data.length > 0){
            setLoadedData(data);
        }
    } ,[])
    console.log(data)
    console.log(loadedData)
  return (
    <div>
        <h2 className='text-center font-bold text-2xl mt-4'>Best Seller Books</h2>
        <div className='flex justify-center'>
      { loadedData.map(item => <div key={item.id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={item.book_img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title"> Author :  {item.author_name} </h2>
            <p> Published by :  {item.publisher}  </p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary"> Rating : {item.rating} </button>
            </div>
        </div>
    </div>)
    }
</div>
    </div>
)
}

export default BestSelling
