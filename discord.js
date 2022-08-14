export class Fetch{
    #auth_header
    other_headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    constructor(token){
        if(!token){
            return this.error("Not token provided!")
        }
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
        return fetch(endPoint,{
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
        return fetch(endPoint,{
            headers: {
                "Authorization": this.#auth_header,
                ...this.other_headers
                // Añade los valores a un arreglo o objeto
            },
            method: "POST",
            body: bodyJSON.stringify(body)
        })

        .then(data => json ? data.json() : data.text())
        .then(data => data)
        .catch(err => this.error)
    }

    put(endPoint, body, json = true){
        return fetch(endPoint, {
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