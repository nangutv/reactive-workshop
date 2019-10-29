const wrapperStyle = {
    position: 'absolute',
    textAlign: 'left',
    width:1080,
    height: 720,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
};

const containerStyle = {
    backgroundColor: '#333333',
    width: '60%',
    minHeight: 200,
    color: '#ffffff',
    borderRadius: 20,
};

const titleStyle = {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
};

const descriptionStyle = {
    color: '#ffffff',
    fontSize: 20,
    padding: 20,
    paddingBottom: 30,
};

const imageContainerStyle = {
    textAlign: 'center',
    width: 200,
    height: 200,
};

const closeButtonStyle = {
    color: '#ffffff',
    width: 50,
    height: 50,
    fontSize: 30,
    padding: 10,
    textAlign: 'right',
};

export default {
    wrapperStyle,
    containerStyle,
    titleStyle,
    descriptionStyle,
    imageContainerStyle,
    closeButtonStyle
}
