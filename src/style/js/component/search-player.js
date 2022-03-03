class SearchPlayer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clicked(event) {
        this._clicked = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-input").value;
    }

    render() {
        this.innerHTML = `
        <div class="d-flex mt-2 p-2 shadow">
            <input class="form-control form-control-lg me-2" type="search" placeholder="type player name.."
                aria-label="Search" id="search-input">
            <button class="btn btn-lg btn-warning" type="submit" id="search-button"><i class="bi bi-search"></i></button>
        </div>
        `;

        this.querySelector("#search-button").addEventListener("click", this._clicked);
    }
}

customElements.define('search-player', SearchPlayer);