import api from "./api";

export const findAllPesanan = async () => {
    return await api.get("/api/pesanans");
}

export const createPesanan = async (pesanan) => {
    return await api.post("/api/pesanans", pesanan);
}

export const updatePesanan = async(pesanan) => {
    return await api.put("/api/pesanans", pesanan);
}

export const deletePesananById = async(id) => {
    return await api.delete(`/api/pesanans/${id}`);
}