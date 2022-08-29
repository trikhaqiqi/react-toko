import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import { findAllPesanan } from "../../services/PesananService";
import { Column } from "primereact/column";

const PesananAdminPage = () => {

    const [pesanans, setPesanans] = useState([]);
    
    useEffect(() => {

        load();

    }, [])

    const load = async () => {
        try {
            const response = await findAllPesanan();
            setPesanans(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainPage>
            <div className="main-content">
                <div className="content">
                    <div className="content-header ml-3">
                        <h2>Pesanan</h2>
                        <div className="content-body mr-3">
                            <DataTable
                                value={pesanans}
                                size="large"
                                className="table-view"
                                stripesRows>
                                    <Column field="nomor" header="Nomor Pesanan"></Column>
                                    <Column field="tanggal" header="Tanggal Pesanan"></Column>
                                    <Column field="pengguna.nama" header="Nama"></Column>
                                    <Column field="alamatPengiriman" header="Alamat Pengiriman"></Column>
                                    <Column field="jumlah" header="Harga Barang"></Column>
                                    <Column field="ongkir" header="Jasa Kirim"></Column>
                                    <Column field="total" header="Total"></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </MainPage>
    )
}

export default PesananAdminPage;