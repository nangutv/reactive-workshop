const wrapperStyle = {
    display: 'flex',
    position: 'absolute',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
};

const containerStyle = {
    display: 'flex',
    backgroundColor: '#333333',
    flex: 0.5,
    minHeight: 200,
    color: '#ffffff',
    borderRadius: 20,
    flexDirection: 'column',
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
    alignSelf: 'center',
};

const imageStyle = {
    width: 400,
    height: 200,
};

const closeButtonContainerStyle = {
    alignSelf: 'flex-end',
};

const closeButtonStyle = {
    color: '#ffffff',
    width: 50,
    height: 50,
    fontSize: 20,
    padding: 10,
    textAlign: 'right',
};

export default {
    wrapperStyle,
    containerStyle,
    titleStyle,
    descriptionStyle,
    imageContainerStyle,
    imageStyle,
    closeButtonStyle,
    closeButtonContainerStyle,
}
