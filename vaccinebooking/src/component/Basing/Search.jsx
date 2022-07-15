function Search({icons, message,message2}) {
    return (
    <div className="errorPages justify-content-center">
      <div className=" d-flex justify-content-center">
        <img src={icons} alt="/"></img>
      </div>
      <div className=" d-flex justify-content-center py-5 ">
        <div className="titleErrorMessage">
          <div className="fw-bolder colortextMessage d-inline-flex">{message}</div>
          <div className="d-inline-flex colortextMessage ">{message2}</div>
        </div>
      </div>
    </div>
    )
}
export default Search