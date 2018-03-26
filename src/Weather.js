import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const seaIcon = require('./img/sea.png');
const groundIcon = require('./img/ground.png');
const sunriseIcon = require('./img/sunrise.png');
const sunsetIcon = require('./img/sunset.png');
const preasureIcon = require('./img/preasure.png');
const humidityIcon = require('./img/humidity.png');

export default class Weather extends React.Component {
constructor(props) {
  super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
}
async getWeather() {
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city +
  '&appid=77a6cbc5d7ff383b81f917930b9f0869&units=metric';
try {
  const response = await fetch(URL);
  const responseJson = await response.json();
  return this.setState({
    forecast: {
      main: responseJson.weather[0].main,
      description: responseJson.weather[0].description,
      temp: responseJson.main.temp,
      sunrise: responseJson.sys.sunrise,
      sunset: responseJson.sys.sunset,
      pressure: responseJson.main.pressure,
      humidity: responseJson.main.humidity,
      sea_level: responseJson.main.sea_level,
      grnd_level: responseJson.main.grnd_level,
      speed: responseJson.wind.speed
    }
  });
} catch (error) {
  console.error(error);
  }
}
  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box2}>
          <Text style={styles.title}>Masukan Nama Kota</Text>
          <TextInput
              style={styles.textInput}
              placeholder=" Masukan Nama kota "
              selectionColor='#FFFFFF'
              underlineColorAndroid='#FFFFFF'
              onChangeText={(city) => this.setState({ city })}/>
            <Button
            style={{ paddingTop: 20 }}
            onPress={() => this.getWeather()}
            title="Lihat"
            color="#EF6C00"
            accessibilityLabel="Klik untuk melihat cuaca"/>
      </View>

    <View style={styles.weather}>
      <View style={styles.box4}>
        <View style={styles.button}>
          <View style={styles.iconContainer}>
            <Image source={windIcon} style={styles.icon} />
          </View>
          <Text> Wind Speed : { this.state.forecast.speed}</Text>
        </View>

        <View style={styles.button}>
          <View style={styles.iconContainer}>
            <Image source={tempIcon} style={styles.icon} />
          </View>
          <Text> Temp : { this.state.forecast.temp} </Text>
        </View>
      </View>

      <View style={styles.box4}>
        <View style={styles.button}>
          <View style={styles.iconContainer}>
            <Image source={mainIcon} style={styles.icon} />
          </View>
          <Text> Main : { this.state.forecast.main} </Text>
        </View>

        <View style={styles.button}>
          <View style={styles.iconContainer}>
            <Image source={mainIcon} style={styles.icon} />
          </View>
          <Text> Main Desc : { this.state.forecast.description} </Text>
        </View>
      </View>

    <View style={styles.box4}>
      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={sunriseIcon} style={styles.icon} />
        </View>
        <Text> Sunrise : { this.state.forecast.sunrise} </Text>
      </View>

      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={sunsetIcon} style={styles.icon} />
        </View>
        <Text> Sunset : { this.state.forecast.sunset} </Text>
      </View>
    </View>

    <View style={styles.box4}>
      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={preasureIcon} style={styles.icon} />
        </View>
        <Text> Pressure : { this.state.forecast.pressure} </Text>
      </View>

      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={humidityIcon} style={styles.icon} />
        </View>
        <Text> Humidity : { this.state.forecast.humidity} </Text>
      </View>
    </View>

    <View style={styles.box4}>
      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={seaIcon} style={styles.icon} />
        </View>
        <Text> Sea Level : { this.state.forecast.sea_level} </Text>
      </View>

      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={groundIcon} style={styles.icon} />
        </View>
        <Text> Ground Level :{ this.state.forecast.grnd_level} </Text>
      </View>
    </View>
  </View>




  </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput:{
    height: 40,
    width: 250,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 22,
  },
  title: {
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 20,
    color: '#FFFFFF'
  },

  containerMain: {
    backgroundColor: '#B2DFDB',
    flex: 5,
    flexDirection: 'column',
    padding: 10,
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 2,
    backgroundColor: '#009688',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#90CAF9',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  weather:{
    flex: 4,
    paddingTop: 10,
    borderRadius: 3,
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#1565C0',
    margin: 10
  },
  button: {
    width: 125,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#B2DFDB',
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#26A69A',
    borderColor: '#E0F2F1',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    height: 20,
    width: 20,
  }
});
