import axios from "axios";

export const getData = async (params) => {
    const { data } = await axios.get("https://randomuser.me/api/", {
        dataType: 'json',
        params
    });
    return data;
};

export const getFlag = (uf) => {
    return <img src={`https://www.countryflags.io/${uf}/flat/24.png`} alt="Bandeira" />;
}