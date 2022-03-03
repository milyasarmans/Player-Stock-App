import Data from './data-source';
import './component/box-player';
import './component/search-player.js';

const app = () => {
    const searchBox = document.querySelector('search-player');
    const playerBox = document.querySelector('box-player');

    const searchBtn = async() => {
        try {
            const Player = await Data.searchPlayer(searchBox.value);
            renderPlayer(Player);
        } catch (message) {
            fallbackPlayer(message)
        }
    };

    const renderPlayer = Players => {
        playerBox.player = Players;
    };

    const fallbackPlayer = message => {
        playerBox.renderError(message);
    };

    searchBox.clicked = searchBtn;
};

export default app;