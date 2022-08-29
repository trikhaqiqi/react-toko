import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import { Column } from "primereact/column";
import { findAllPengguna } from "../../services/PenggunaService";

const PenggunaAdminPage = () => {

    const [penggunas, setPenggunas] = useState([]);
    
    useEffect(() => {

        load();

    }, [])

    const load = async () => {
        try {
            const response = await findAllPengguna();
            setPenggunas(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainPage>
            <div className="main-content">
                <div className="content">
                    <div className="content-header ml-3">
                        <h2>Pengguna</h2>
                        <div className="content-body mr-3">
                            <DataTable
                                value={penggunas}
                                size="large"
                                className="table-view"
                                stripesRows>
                                    <Column field="id" header="Username"></Column>
                                    <Column field="nama" header="Nama Lengkap"></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </MainPage>
    )
}

export default PenggunaAdminPage;