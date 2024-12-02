import React from 'react'

function DynamicTable({id,name,age,city}) {
  return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {id}
                        </th>
                        <td class="px-6 py-4 text-start">
                            {name}
                        </td>
                        <td class="px-6 py-4 text-start">
                            {age}
                        </td>
                        <td class="px-6 py-4 text-start">
                            {city}
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

  )
}

export default DynamicTable