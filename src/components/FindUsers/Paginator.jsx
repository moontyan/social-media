import React, { useState } from 'react'

function Paginator(props) {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize
    
    return (
        <div className="pages">
            {portionNumber > 1 ? <span className="arrow-btn" onClick={() => setPortionNumber(portionNumber - 1)}>&larr;</span> : null}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => { return <span onClick={() => { props.onPageChange(p) }} key={p} className={props.currentPage === p ? "page-active" : "page"}>{p}</span> })}
            {portionNumber < portionCount ? <span className="arrow-btn" onClick={() => setPortionNumber(portionNumber + 1)}>&rarr;</span> : null}
        </div>
    )
}

export default Paginator