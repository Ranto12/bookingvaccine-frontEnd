import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function DataPopUpjadwal({
  number,
  namaAdmin,
  alamatLengkap,
  jenisVaksin,
  stock,
  sesi,
}) {
  // console.log(nama, "ini namanya")
  return (
    <div className="title-das">
      <ul className="title-das">
        <li>
          <h5>Nama Admin</h5>
          <h6 className="data-popup"> {namaAdmin}</h6>
        </li>
        <li>
          <h5>Alamat Lengkap</h5>
          <h6 className="data-popup">{alamatLengkap}</h6>
        </li>
        <li>
          <h5>Jenis Vaksin</h5>
          <RadioGroup
            value={jenisVaksin}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Sinovac"
              control={<Radio />}
              label="Sinovac"
            />
            <FormControlLabel
              value="Moderna"
              control={<Radio />}
              label="Moderna"
            />
            <FormControlLabel
              value="Pfizer"
              control={<Radio />}
              label="Pfizer"
            />
            <FormControlLabel
              value="AstraZeneca"
              control={<Radio />}
              label="AstraZeneca"
            />
            <FormControlLabel
              value="Sinopharm"
              control={<Radio />}
              label="Sinopharm"
            />
          </RadioGroup>
          <h6 className="data-popup"> {}</h6>
        </li>
        <li>
          <h5>Stok</h5>
          <h6 className="data-popup">{stock}</h6>
        </li>
        <li>
          <h5>Sesi</h5>
          <h6 className="data-popup"> {sesi}</h6>
        </li>
      </ul>
    </div>
  );
}
