import React, {useState} from 'react';
import s from "./Paginator.module.css";
import cn from "classnames";
import {Button} from "antd";


let Paginator = ({totalItemsCount, portionSize, currentPage, onPageChange}) => {

    let pagesCount = Math.ceil(totalItemsCount / portionSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <>
        <div className={s.paginator}>

          {portionNumber > 1 &&
        <Button onClick={()=> {setPortionNumber (1)}}>First</Button>}
        {portionNumber > 1 &&
        <Button onClick={()=> {setPortionNumber (portionNumber- 1)}}>Previous</Button>}
        {pages.filter(p => p >= leftPortionNumber && p<= rightPortionNumber)
            .map(p => {
            return<Button className={
                cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                           key={p}
                           onClick={(e) => {
                               onPageChange(p)
                           }}
            >{p}</Button>
        })}
        {portionCount > portionNumber &&
        <Button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</Button>}
        {portionCount > portionNumber &&
        <Button onClick={()=>{setPortionNumber(portionCount)}}>Last</Button>}

    </div>
    </>
}
export default Paginator;