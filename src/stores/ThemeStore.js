export function ThemeStore() {
    return {
        theme: 'light',
        setTheme(newTheme) {
            this.theme = newTheme
        }
    }
}