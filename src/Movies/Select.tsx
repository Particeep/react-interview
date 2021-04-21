import React, { useEffect } from "react";
import { colorArray } from "../utils/colorArray";
import { connect } from 'react-redux'
import { setCategoryFilters } from "../redux/reducers/movies/actions";
import { MdArrowDropDown } from 'react-icons/md';

import MovieType from "../types/movie";

import "./Select.css";

function Select(props: any){
    
    const {filters, categories} = props;
    
    const [show, setShow] = React.useState<boolean>(false);

    function handleFilters(event: React.ChangeEvent<HTMLSelectElement>){
        var selected = []
        const options = event.currentTarget.options
         
        for(let i = 0; i < options.length; i++){
            if(options[i].selected){
                selected.push(options[i].innerText);
            }
        }

        props.resetPagination()

        props.setFilters(selected)
    }

    function showOptions(){
        setShow(!show)
    }

    return(
        <div className="multi-select-container">
            <label htmlFor="categories" className="label-category">Choose a cateogory:</label>
            <div className="categories-dropdown">
                <div onClick={showOptions} className="selected-categories-tags">
                    {
                        filters.map((filter: string) => {
                            return <span key={filter} className="category-tag" style={{backgroundColor: colorArray[categories.indexOf(filter)]}}>{filter}</span>
                        })
                    }
                    <span className="arrow-dropdown">
                        <MdArrowDropDown></MdArrowDropDown>
                    </span>
                </div>

                {
                    show &&
                        <select 
                            onBlur={() => setShow(false)}
                            name="categories" 
                            className="categories-list" 
                            multiple
                            onChange={handleFilters} >
                            <option key="All" value="All">All</option>
                            {
                                props.categories.map((category: string) => {
                                    return <option key={category} value={category}>{ category }</option>
                                })
                            }
                        </select>
                    }
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        filters: state.moviesReducer.filters.filter((filter: string) => {
            return state.moviesReducer.categories.includes(filter);
        }) || ["All"],
        categories: state.moviesReducer.categories
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setFilters: (filters: string[]) => dispatch(setCategoryFilters(filters))
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);

