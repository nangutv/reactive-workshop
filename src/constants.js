import isMobile from './lib/isMobile';

let COVER_HEIGHT = 157;
let COVER_WIDTH = 105;

if (isMobile()) {
    COVER_HEIGHT = 300;
    COVER_WIDTH = 200;
}

export { COVER_HEIGHT };
export { COVER_WIDTH };
