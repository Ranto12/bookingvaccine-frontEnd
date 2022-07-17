import Sidebar from "../../component/Sidebar/Sidebar";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import FormEditDataAdmin from "../../component/KelolaAdmin/FormEditDataAdmin";

export default function EditAdmin() {
  const location = useLocation();
  const Name = location.state.Name;
  const hp = location.state.hp;
  const email = location.state.email;
  const role = location.state.role;
  const alamat = location.state.alamat;
  const tanggalLahir = location.state.tanggalLahir;
  const gender = location.state.gender;
  const pw = location.state.pw;
  const username = location.state.username;
  const id_user = location.state.id;
  return (
    <div>
      <div>
        <div className="row me-5 ">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-5 text-secondary">
            <div>
              <h4>Edit</h4>
              <h1>Admin</h1>
            </div>

            <div className="bg-card-kelola Font-white">
              <h5>
                Silahkan Masukkan Data Sesuai dengan bagian yang telah di
                Sediakan
              </h5>
            </div>

            <Form className="bg-form-jadwal">
              <FormEditDataAdmin 
              id_user={id_user}
              Name={Name} 
              hp={hp} 
              mail={email} 
              role={role} 
              address={alamat} 
              birth_date={tanggalLahir} 
              gender={gender} pw={pw} 
              usernames={username} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}