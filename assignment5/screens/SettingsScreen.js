import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import { Icon } from 'react-native-elements'; // Assuming you are using react-native-elements for icons

// Footer component definition
const Footer = ({ navigation, isDarkTheme }) => {
  return (
    <View style={[styles.footer, isDarkTheme && styles.darkFooter]}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" type="font-awesome" size={24} color={isDarkTheme ? '#fff' : '#000'} />
      </TouchableOpacity>
      <Icon name="credit-card" type="font-awesome" size={24} color={isDarkTheme ? '#fff' : '#000'} />
      <Icon name="bar-chart" type="font-awesome" size={24} color={isDarkTheme ? '#fff' : '#000'} />
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Icon name="cog" type="font-awesome" size={24} color={isDarkTheme ? '#fff' : '#000'} />
      </TouchableOpacity>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <View style={[styles.contentContainer, isDarkTheme && styles.darkContentContainer]}>
        <Text style={[styles.title, isDarkTheme && styles.darkText]}>Settings</Text>
        {['Language', 'My Profile', 'Contact Us', 'Change Password', 'Privacy Policy'].map((item, index) => (
          <View key={index} style={styles.setting}>
            <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>{item}</Text>
          </View>
        ))}
        <View style={styles.setting}>
          <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>Theme</Text>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </View>
      </View>
      
      <Footer navigation={navigation} isDarkTheme={isDarkTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  darkText: {
    color: '#fff',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  darkFooter: {
    backgroundColor: '#222',
  },
});

export default SettingsScreen;
