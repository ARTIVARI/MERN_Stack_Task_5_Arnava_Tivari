import React from 'react'
import data from '../data/data'
import DynamicTable from './DynamicTable'

function Table1() {
  return (
    <div className='w-full flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>A dynamic table with data in .js file </h1>
       <div>
       <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th  className="px-6 py-3">
                            ID
                        </th>
                        <th  className="px-6 py-3">
                            Name
                        </th>
                        <th  className="px-6 py-3">
                            Age
                        </th>
                        <th  className="px-6 py-3">
                            City
                        </th>
                    </tr>
                </thead>
               
            </table>
        </div>
       {data.map((card,index)=>(
            <DynamicTable key={index} id={card.id} name={card.name} age={card.age} city={card.city} />
        ))}
       </div>
    </div>
  )
}

export default Table1