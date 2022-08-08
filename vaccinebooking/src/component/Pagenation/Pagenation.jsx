import ReactPagenation from 'react-paginate'
const Pagenation = ({setPage, lengthPage}) => {

  const handlePageClik =(e)=>{
    const selectedPage = e.selected;
    setPage(selectedPage)
  };
  return (
    <ReactPagenation 
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={lengthPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClik}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  )
}

export default Pagenation