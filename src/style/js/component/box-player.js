import './card-player';

class BoxPlayer extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._player.forEach(player => {
            const playerListElement = document.createElement('card-player');
            playerListElement.classList.add('col-lg-3', 'col-12');
            playerListElement.player = player;
            this.appendChild(playerListElement);
        })
    }

    renderError(message) {
        this.innerHTML = ``;
        this.innerHTML += `
        <div class="col">
            <div class="card my-3 shadow border-0">
                <div class="row g-0">
                    <div class="col">
                        <div class="card-body text-center py-5">
                            <h3 class="text-danger">${message}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('box-player', BoxPlayer);