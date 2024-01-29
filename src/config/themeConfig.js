export const themeColors = {
    primary: '#8d448a',
    secondary: 'rgba(31,42,64,1)',
    tertiary: 'rgba(81,32,123,1)',
    cuarternary: 'rgba(123,48,202,1)',
    dark: '#141b2d',
    purpleGradient: 'linear-gradient(90deg, rgba(31,42,64,1) 0%, rgba(141,68,138,1) 100%)',

}

export const themeConfig = {

    components: {
        Button: {
          colorPrimary: themeColors.primary,
          algorithm: true,
        },
        Menu:{
            darkItemSelectedBg: themeColors.primary,
            darkSubMenuItemBg: themeColors.secondary,
        },
        Card:{
            headerBg: themeColors.purpleGradient
        },
        Table:{
            headerBg: themeColors.secondary,
            headerColor: 'white',
            headerSortHoverBg: themeColors.primary,
            headerSortActiveBg: themeColors.tertiary
        }
    }
}