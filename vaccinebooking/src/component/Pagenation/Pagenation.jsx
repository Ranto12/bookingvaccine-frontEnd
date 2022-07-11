import { useEffect , useState} from "react";
import ReactPagenation from 'react-paginate'
const Pagenation = ({data, size, page, setPage, lengthPage}) => {
  const [offside, setOffside] = useState(page);
  // const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  useEffect(()=>{
     setPageCount(Math.ceil(data.length / size));
  }, [offside, size])

  const handlePageClik =(e)=>{
    const selectedPage = e.selected;
    setPage(selectedPage + 1)
  };
  return (
    <ReactPagenation 
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={lengthPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClik}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  )
}

export default Pagenation