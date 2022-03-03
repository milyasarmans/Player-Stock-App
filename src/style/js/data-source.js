class Data {
    static searchPlayer(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const player = data.player
                if (player) {
                    return Promise.resolve(player);
                } else {
                    return Promise.reject(`The player with name ${keyword} could not be found.`);
                }
            })
    }

    static detailPlayer(id) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const detail = data.player
                if (detail) {
                    return Promise.resolve(detail);
                } else {
                    return Promise.reject(`The player with ID ${id} could not be found.`);
                }
            })
    }
}

export default Data;