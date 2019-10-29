
import { COVER_WIDTH, COVER_HEIGHT } from '../constants.js';

const containerStyle = {
    padding: 20,
    textAlign: 'center',
};

const movieContainerStyle = {
    // display: 'inline-block',
    height: COVER_HEIGHT,
    margin: 10,
    marginTop: 40,
    width: COVER_WIDTH,
};

const imageSize = {
    height: COVER_HEIGHT,
    width: COVER_WIDTH,
};

const titleStyle = {
    color: '#ffffff',
    // display: 'inline-block',
    fontFamily: 'sans-serif',
    fontSize: 20,
    height: 25,
    marginTop: 10,
    overflow: 'hidden',
    textAlign: 'center',
    // textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: COVER_WIDTH,
};

const loadingStyle = {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 50,
};

export default {
    containerStyle,
    movieContainerStyle,
    imageSize,
    titleStyle,
    loadingStyle
}
