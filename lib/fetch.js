export class Fetch{
    #base_url = "https://discord.com/api/v10/"
    #auth_header
    other_headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    constructor(token){
        this.#auth_header = `Bot ${token}`;
    }
    error(err){
        throw new Error("[Error] - Discord API\n"  + err)
    }
    /**
     * 
     * @param {string} endPoint Request endpoint
     * @param {RequestInit} configuration Request Configuration
     */
    get(endPoint, configuration, json = true){
        return fetch(this.#base_url + endPoint,{
            headers: {
                "Authorization": this.#auth_header
            },
            ...configuration
        })

        .then(data => json ? data.json() : data.text())
        .then(data => data)
        .catch(err => this.error)
    }

    post(endPoint, body, json = true){
        return fetch(this.#base_url + endPoint,{
            headers: {
                "Authorization": this.#auth_header,
                ...this.other_headersx
                // Añade los valores a un arreglo o objeto
            },
            method: "POST",
            body: JSON.stringify(body)
        })

        .then(data => json ? data.json() : data.text())
        .then(data => data)
        .catch(err => this.error)
    }

    put(endPoint, body, json = true){
        return fetch(this.#base_url + endPoint, {
            headers: {
                "Authorization": this.#auth_header,
                ...this.other_headers
            },
            method: "PUT",
            body: JSON.stringify(body)
        })
        .then(data => json ? data.json() : data.text())
        .then(data => data)
        .catch(this.error)
    }
}