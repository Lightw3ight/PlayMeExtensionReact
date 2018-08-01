export class SearchService {
    constructor (zoneUrl) {
        this.zoneUrl = zoneUrl;
    }

    search (query) {
        const url = `${this.zoneUrl}/api/search?provider=sp&searchTerm=${query}`;

        return fetch(url, { credentials: "include" }).then((response) => {
            return response.json();
        });
    }
}