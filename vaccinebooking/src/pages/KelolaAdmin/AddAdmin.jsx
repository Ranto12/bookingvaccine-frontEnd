import Sidebar from "../../component/Sidebar/Sidebar";
import { Form } from "react-bootstrap";
import FormKelolaDataAdmin from "../../component/KelolaAdmin/FormKelolaDataAdmin";

export default function AddAdmin() {
 
  return (
    <div>
      <div>
        <div className="row me-5 ">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-5 text-secondary">
            <div>
              <h4>Tambahkan</h4>
              <h1>Admin</h1>
            </div>

            <div className="bg-card-kelola Font-white">
              <h5>
                Silahkan Masukkan Data Sesuai dengan bagian yang telah di
                Sediakan
              </h5>
            </div>

            <Form className="bg-form-jadwal">
              <FormKelolaDataAdmin />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
