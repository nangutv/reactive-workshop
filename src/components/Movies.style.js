
import { COVER_WIDTH, COVER_HEIGHT } from '../constants.js';

const containerStyle = {
    padding: 20,
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: "row",
    fontFamily: 'sans-serif',
};

const movieContainerStyle = {
    height: COVER_HEIGHT,
    margin: 10,
    marginTop: 60,
    width: COVER_WIDTH,
};

const imageSize = {
    height: COVER_HEIGHT,
    width: COVER_WIDTH,
};

const titleStyle = {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 13,
    marginTop: 10,
    overflow: 'hidden',
    textAlign: 'center',
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
