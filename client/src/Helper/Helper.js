import themes from '../theme.json'

const getInitials = name => {
    return name.split(' ').map(v => v.charAt(0).toUpperCase()).join('')
}

const colorPalettes = {
    palette1 : {
        backgroundColor : '#e91e63',
        color: '#fff'
    },
    palette2 : {
        backgroundColor : '#673ab7',
        color: '#fff'
    },
    palette3 : {
        backgroundColor : '#ff9800',
        color: '#222'
    },
    palette4 : {
        backgroundColor : '#009688',
        color: '#fff'
    },
    palette5 : {
        backgroundColor : '#3f51b5',
        color: '#fff'
    },
    palette6 : {
        backgroundColor : '#ff5722',
        color: '#fff'
    }
}

const generateRandomPalette = () => {
    const randNum = Math.floor(Math.random() * (Object.entries(colorPalettes).length))
    const randPalette = Object.values(colorPalettes)[randNum]
    return randPalette
}

const findAndSetTheme = (id) => {
    return themes.find(theme => theme.id === id)
}

export { getInitials , generateRandomPalette , findAndSetTheme }