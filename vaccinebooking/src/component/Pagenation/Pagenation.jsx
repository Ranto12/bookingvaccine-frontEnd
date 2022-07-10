import { useEffect , useState} from "react";
import ReactPagenation from 'react-paginate'
const Pagenation = ({data, size, page, setPage}) => {
  const [offside, setOffside] = useState(page);
  // const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
console.log(pageCount)
console.log(data.length)
console.log(size)
  useEffect(()=>{
     setPageCount(Math.ceil(data.length / size));
  }, [offside, size])

  const handlePageClik =(e)=>{
    const selectedPage = e.selected;
    setPage(selectedPage + 1)
  };
  return (
    <ReactPagenation 
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
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