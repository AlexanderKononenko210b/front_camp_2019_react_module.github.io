import config from "../../../config";

const urlBuilder = (path = config.PATH_DEFAULT, params,  id = "") => {

    const queryParams = params
        ? params.reduce((queryParams, currentItem, index, arr) => {
                if(currentItem[1] && index == arr.length - 1) {
                    queryParams += `${currentItem[0]}=${currentItem[1]}`;
                } else {
                    queryParams += `${currentItem[0]}=${currentItem[1]}&`;
                }
                return queryParams;
            }, "")
        : "";
    return id
        ? config.API_END_POINT + path + `${id != "" ? "/" + id : ""}`
        : config.API_END_POINT + path + `${queryParams != "" ? "?" + queryParams : ""}`;
}

export default urlBuilder;
