export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: mode === 'light' ? '#1565c0' : '#90caf9',
        },
        secondary: {
            main: mode === 'light' ? '#26a69a' : '#80cbc4',
        },
        background: {
            default: mode === 'light' ? '#f4f6f8' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
        },
        brandRed: {
            main: mode === 'light' ? '#e74c3c' : '#ff5252',
        },
        text: {
            primary: mode === 'light' ? '#111111' : '#ffffff',
            secondary: mode === 'light' ? '#444444' : '#e0e0e0',
        },
    },
    typography: {
        fontFamily: 'Roboto, "Segoe UI", sans-serif',
        h3: {
            fontWeight: 700,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
                    color: mode === 'light' ? '#111111' : '#f5f5f5',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});
