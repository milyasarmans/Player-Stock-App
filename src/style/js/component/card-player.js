class CardPlayer extends HTMLElement {
    set player(player) {
        this._player = player
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card my-3 shadow">
            <div class="row g-0">
                <div class="col-md-12">
                <img src="${this._player.strRender}"
                    class="img-fluid rounded-top" alt="${this._player.strPlayer}">
                    <div class="card-body">
                        <div class="text-center">
                            <a type="button" data-bs-toggle="modal" data-bs-target="#Modal${this._player.idPlayer}" class="card-title h4 card-link" id="btn${this._player.idPlayer}">${this._player.strPlayer}</a>
                            <h5 class="card-text fw-light">
                                <span class="badge">
                                 ${this._player.strSport}
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="Modal${this._player.idPlayer}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="Label${this._player.idPlayer}" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="${this._player.strRender}" alt="${this._player.strPlayer}">

                        <h3 class="modal-title mt-3" id="Label${this._player.idPlayer}">${this._player.strPlayer}
                        </h3>          
                        
                        <ul class="card-text text-muted mx-0 p-0" type="none">
                            <li>${this._player.strDescriptionEN}</li>
                            <li>Category: ${this._player.strSport}</li>
                            <li>Date of birth: ${this._player.dateBorn}</li>
                            <li>Place of birth: ${this._player.strBirthLocation}</li>
                            <li>Citizenship: ${this._player.strNationality}</li>
                            <li>Height: ${this._player.strHeight}</li>
                            <li>Gender: ${this._player.strGender}</li>
                        </ul>  
                        
                        <h6 class="card-text">Social Media:</h6>
                        <a class="btn btn-primary" href="${this._player.strFacebook}" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-facebook"></i> Facebook
                        </a>
                        <a class="btn btn-danger" href="${this._player.strInstagram}" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-instagram"></i> Instagram
                        </a>
                        <a class="btn btn-info" href="${this._player.strTwitter}" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-twitter"></i> Twitter
                        </a>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        this.querySelector(`#btn${this._player.idPlayer}`).addEventListener('click', this._playerIdClicked);
    }
}

customElements.define('card-player', CardPlayer);