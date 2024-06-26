import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../ThemeContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { isDarkTheme } = useContext(ThemeContext);

  const actionLogos = {
    Sent: require('../assets/send.png'),
    Receive: require('../assets/recieve.png'),
    Loan: require('../assets/loan.png'),
    Topup: require('../assets/topUp.png'),
  };

  return (
    <ScrollView style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image style={styles.profileImage} source={require('../assets/profile.png')} />
          <View>
            <Text style={[styles.welcomeText, isDarkTheme && styles.darkText]}>Welcome back,</Text>
            <Text style={[styles.userName, isDarkTheme && styles.darkText]}>Abdul Halim Moomin</Text>
          </View>
        </View>
        <Icon name="search" size={24} color={isDarkTheme ? '#fff' : '#000'} />
      </View>
      <View style={styles.cardContainer}>
        <Image 
          style={styles.cardImage} 
          source={require('../assets/Card.png')} 
        />
      </View>
      <View style={styles.actions}>
        {['Sent', 'Receive', 'Loan', 'Topup'].map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionButton} color={isDarkTheme ? '#fff' : '#000'}>
            <Image source={actionLogos[action]} style={styles.actionLogo} />
            <Text style={[styles.actionText, isDarkTheme && styles.darkText]}>{action}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.transactions}>
        <View style={styles.transactionHeader}>
          <Text style={[styles.transactionTitle, isDarkTheme && styles.darkText]}>Transaction</Text>
          <TouchableOpacity>
            <Text style={[styles.sellAll, isDarkTheme && styles.darkText]}>Sell All</Text>
          </TouchableOpacity>
        </View>
        {[
          { name: 'Apple Store', category: 'Entertainment', amount: '- $5,99', icon: 'apple' },
          { name: 'Spotify', category: 'Music', amount: '- $12,99', icon: 'spotify' },
          { name: 'Money Transfer', category: 'Transaction', amount: '$300', icon: 'exchange', positive: true },
          { name: 'Grocery', category: 'Grocery', amount: '- $88', icon: 'shopping-cart' },
        ].map((transaction, index) => (
          <View key={index} style={styles.transaction}>
            <Icon name={transaction.icon} type="font-awesome" size={24} color={isDarkTheme ? '#fff' : '#000'} />
            <View style={styles.transactionDetails}>
              <Text style={[styles.transactionName, isDarkTheme && styles.darkText]}>{transaction.name}</Text>
              <Text style={[styles.transactionCategory, isDarkTheme && styles.darkText]}>{transaction.category}</Text>
            </View>
            <Text style={[styles.transactionAmount, transaction.positive && styles.positiveAmount, isDarkTheme && styles.darkText]}>
              {transaction.amount}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        {['home', 'credit-card', 'bar-chart'].map((icon, index) => (
          <Icon key={index} name={icon} type="font-awesome" size={24} color={isDarkTheme ? '#fff' : '#000'} />
        ))}
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" type="font-awesome" size={24} color={isDarkTheme ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    marginTop: 40,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cardContainer: {
    padding: 20,
    borderRadius: 15,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  welcomeText: {
    fontSize: 14,
    color: '#888',
  },
  darkText: {
    color: '#fff',
  },
  userName: {
    fontSize: 18,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionLogo: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  actionText: {
    color: '#007bff',
    fontSize: 14,
  },
  transactions: {
    padding: 20,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#333',
  },
  sellAll: {
    color: '#007bff',
    fontSize: 14,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    color: '#333',
  },
  transactionCategory: {
    fontSize: 12,
    color: '#999',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#333',
  },
  positiveAmount: {
    color: '#28a745',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});

export default HomeScreen;
