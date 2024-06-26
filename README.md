### rn-assignment5-11116157

### SettingsScreen.js
The SettingsScreen component displays various settings options and a theme toggle switch. It uses the ThemeContext to get and set the current theme. The Footer component is also included to provide navigation options.

### Homescreen.js
This code defines a HomeScreen component for a React Native application, utilizing Context API for theme management, and react-native-elements for icons. The screen includes a profile section, a card display, action buttons, a list of transactions, and a footer for navigation.
##Features
Profile Header: Displays the user's profile image and name.
Card Display: Shows a card image.
Action Buttons: Provides quick actions (Sent, Receive, Loan, Topup) with icons.
Transactions List: Displays recent transactions with category and amount.
Footer Navigation: Navigation buttons at the bottom of the screen.

### ThemeContext.js
This code defines a ThemeContext and ThemeProvider using React's Context API to manage and toggle between light and dark themes across the application. It provides a mechanism to share theme-related state and functions throughout the component tree.
ThemeContext: Creates a new context using createContext() from React. This context will hold the state and methods related to theme management.
ThemeProvider: This component is responsible for providing the theme-related state and functions to its child components using ThemeContext.Provider.
useState Hook: useState(false) initializes isDarkTheme state with false, indicating the light theme is active by default.
toggleTheme: This function toggles the isDarkTheme state between true and false whenever it's called. It uses the functional form of setState to ensure the toggle is based on the previous state.
Context Provider
ThemeContext.Provider: Wraps the children components with ThemeContext.Provider to make the isDarkTheme state and toggleTheme function available to all descendant components.
value Prop: Provides the values (isDarkTheme and toggleTheme) to the context, which can be accessed by any component nested within ThemeProvider.

### App.js
Imports necessary components from React and React Navigation.
Imports HomeScreen and SettingsScreen from their respective files.
Imports ThemeProvider from ThemeContext to provide theme management throughout the app.
ThemeProvider: Wraps the entire app with the ThemeProvider component. This ensures that all components within the app can access the theme-related state and functions provided by ThemeProvider.
NavigationContainer: Wraps the Stack.Navigator, providing the navigation context to the app.
StackNavigator: Sets up a stack navigator with two screens:
HomeScreen: Configured with headerShown: false to hide the default header.
SettingsScreen: Similarly configured with headerShown: false to hide the default header.

### ScreenShots Of the app from EXPO
![transaction](https://github.com/Shutarah1/rn-assignment5-11116157/assets/169838342/d1ab54bf-a27a-4723-83f9-79e90111f8c8)
![transaction3](https://github.com/Shutarah1/rn-assignment5-11116157/assets/169838342/35ba456f-117b-48d3-9389-34ff3d83cbda)

![transaction1](https://github.com/Shutarah1/rn-assignment5-11116157/assets/169838342/0661acb6-b125-4650-8347-a69db6a6aab5)

![transaction2](https://github.com/Shutarah1/rn-assignment5-11116157/assets/169838342/528e138c-636e-4b8f-8978-a3de764c3cf4)

