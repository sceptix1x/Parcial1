import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const NFLGamePassForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({ id, name, email, phone });
    setId('');
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/nfl-image-left.jpeg')} style={styles.sideImage} />
      </View>
      <View style={styles.formContainer}>
        <Image source={require('./assets/nfl-logo-0.png')} style={styles.logo} />
        <Text style={styles.title}>NFL Gamepass Registration</Text>
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={id}
          onChangeText={setId}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <Button title="Register" onPress={handleSubmit} />
        {submittedData && (
          <View style={styles.result}>
            <Text>ID: {submittedData.id}</Text>
            <Text>Name: {submittedData.name}</Text>
            <Text>Email: {submittedData.email}</Text>
            <Text>Phone: {submittedData.phone}</Text>
          </View>
        )}
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/nfl-image-left.jpeg')} style={styles.sideImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sideImage: {
    width: 100,
    height: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default NFLGamePassForm;
