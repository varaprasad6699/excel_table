import React from 'react'
import TableBody from '../TableBody/TableBody';
import './Table.css';
const Table = ({excelData,filterByName}) => {

  return (
    <>  
        
        <table>
            <thead>
                <tr>
                    { excelData[0].slice(1,9).map((heading,index)=>{
                        return <th key={index}>{heading}</th>;
                    })}
                </tr>
            </thead>
            <TableBody data={excelData} filterByName={filterByName}/>
            
        </table>
        
    </>
  )
}

export default Table;
