import { useContext } from "react"

import { CharacterContext } from "../context/characterContext"

export const Pagination = () => {

    const { totalResults, pages, actualPages, prevPages, nextPages, goToPage } = useContext(CharacterContext)

    return (
        <>
            <div className="col-3 d-flex align-items-center">
                <b>Total Results: </b>  {totalResults}
            </div>
            <div className="col-3 d-flex align-items-center">
                <b>Page: </b> Page {actualPages} of {pages}
            </div>
            <div className="col-3 d-flex align-items-center">
                <b>Go to page: </b>
                <select value={actualPages} name="goTo" className="form-select w-auto mx-1" onChange={e => goToPage(" ",e)} data-type="goTo">
                    {Array.from(Array(pages).keys()).map(page => {
                        return <option key={page + 1} value={page + 1}>{page + 1}</option>
                    })}
                </select>
            </div>
            <div className="col-3 text-end">
                {prevPages && (
                    <button className="btn btn-success mx-2" data-type="prev" onClick={(e) => goToPage(prevPages, e)}
                    >Prev</button>
                )}
                {nextPages && (
                    <button className="btn btn-success" data-type="next" onClick={(e) => goToPage(nextPages, e)}
                    >Next</button>
                )}
            </div>
        </>
    )
}