import React from "react";
import "../../assets/Style/style.css";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const TabelKelolaBerita = () => {
  return (
    <div className="d-flex TabelkelolaBerita justify-content-center">
      <div className="col-1">1</div>
      <div className="col-4">lorem Ipsum</div>
      <div className="col-2">Author</div>
      <div className="col-4">Author</div>
      <div className="col-1 d-flex justify-content-center">
        <div className="me-2">
          <RiPencilFill />
        </div>
        <div className="me-2">
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default TabelKelolaBerita;

// ok
