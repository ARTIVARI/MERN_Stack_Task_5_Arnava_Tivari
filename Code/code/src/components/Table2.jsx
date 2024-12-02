import React , {useState , useEffect} from 'react'
import DynamicTable from './DynamicTable'

function Table2() {
    const [formData, setFormData] = useState({id: '',name: '',age: '',city: ''});
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
          setDataArray([JSON.parse(storedData)]);
        }
      }, []);

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };


//save data
 const saveData = (e) => {
        e.preventDefault(); 
        setDataArray([...dataArray,formData])
        localStorage.setItem('formData', JSON.stringify([...dataArray,formData])); 
        console.log([...dataArray,formData]); 
        setFormData({ id: '', name: '', age: '', city: '' });
        
  };

     

  

  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>A dynamic tablw with localStorage data</h1>
        <div className='flex sm:flex-row gap-4 flex-col-reverse'>
                <div className='basis-1/2'>
                {dataArray.length === 0 && <div>No Password to show</div>}
                {dataArray.length != 0 && (<div className="relative overflow-x-auto">
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
                    </div>)}
                    {dataArray.map((card,index)=>(
                            <DynamicTable key={index} id={card.id} name={card.name} age={card.age} city={card.city} />
                        ))}
                </div>

                <div className='basis-1/2'>
                    
                    <form onSubmit={saveData}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                                <input value={formData.id} onChange={handleChange}  type="number" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input value={formData.name} onChange={handleChange}  type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ram" required />
                            </div>
                            <div>
                                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input value={formData.age} onChange={handleChange}  type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="21" required />
                            </div>  
                            <div>
                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <input value={formData.city} onChange={handleChange}  type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rampur" required />
                            </div>
                           
                        </div>
                       
                        <button type="submit" className='text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-500 '>Submit</button>
                    </form>

                </div>
        </div>
    </div>
  )
}

export default Table2