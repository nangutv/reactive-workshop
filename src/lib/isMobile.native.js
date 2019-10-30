import { Platform } from 'react-native';

export default function isMobile() {
    return (Platform.isTV === false);
}
