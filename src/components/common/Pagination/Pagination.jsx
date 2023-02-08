import React, { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({totalUsersCount, pageSize, currentPage, setCurrentPage, portionSize, ...props}) => {
    
    let totalPageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= totalPageCount; i++) {
        pages.push(i);
    }

    let  [currentPortion, setCurrentPortion] = useState(1);
    let totalPotionsCount = Math.ceil(totalPageCount / portionSize) 
    let minPaginationNumber = (currentPortion - 1) * portionSize;
    let maxPaginationNumber = minPaginationNumber + portionSize;
    
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationContainer}>
                {currentPortion > 1 && <button onClick={() => setCurrentPortion(currentPortion - 1)} className={styles.button + ' ' + styles.buttonPrev}></button>}
                {
                    pages.filter(page => {
                        return page >= minPaginationNumber && page < maxPaginationNumber ;
                    }).map((page) => {
                    return <div 
                            key={page}
                            className={currentPage === page ? styles.paginationItem + ' ' + styles.paginationItemActive : styles.paginationItem}
                            onClick={() => {setCurrentPage(page)}}>{page}</div>
                    })
                }
                {currentPortion < totalPotionsCount && 
                    <button onClick={() => setCurrentPortion(currentPortion + 1)} className={styles.button + ' ' + styles.buttonNext}></button>
                }
            </div>
        </div>
    )
};

export default Pagination;