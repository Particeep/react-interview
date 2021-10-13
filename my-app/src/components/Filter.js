import React, {useState, useEffect} from 'react';
import {movies$} from '../movies'

export default function Filter() {
    const [categoryList, setCategoryList] = useState([])
    const [filter, setFilter] = useState('');
    useEffect(() => {
        movies$.then(res=>{
            let categoryList = res.map(el => el.category);
            setCategoryList(categoryList)
        })
    }, [])
    return (
        <div className='category-list'>
            {categoryList.map(el=>{
                return (
                    <div>
                    {el}
                    </div>
                )
            })}
        </div>
    )
}
