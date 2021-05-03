import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import colors from '../../assets/colors/Colors';
import GOOGLE_API_KEY from '../../components/apis/Maps';
import restaurant from '../../components/apis/RestaurantData';
const { width, height } = Dimensions.get('window');

const OrderDelivery = ({ route, navigation }) => {
  const mapView = React.useRef();

  const [restaurant, setRestaurant] = useState(null);
  const [streetName, setStreetName] = useState('');
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);

  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    // let { restaurant, currentLocation } = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  function calculateAngle(coordinates) {
    let startLat = coordinates[0]['latitude'];
    let startLng = coordinates[0]['longitude'];
    let endLat = coordinates[1]['latitude'];
    let endLng = coordinates[1]['longitude'];
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  function zoomIn() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function zoomOut() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function renderMap() {
    const destinationMarker = () => (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
            }}>
            <Image
              source={require('../../assets/images/pin.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: colors.white,
              }}
            />
          </View>
        </View>
      </Marker>
    );

    const carIcon = () => (
      <Marker
        coordinate={fromLocation}
        anchor={{ x: 0.5, y: 0.5 }}
        flat={true}
        rotation={angle}>
        <Image
          source={require('../../assets/images/car.png')}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );

    return (
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{ flex: 1 }}>
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={colors.primary}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration(result.duration);

              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 4,
                    left: width / 20,
                    top: height / 8,
                  },
                });

                // Reposition the car
                let nextLoc = {
                  latitude: result.coordinates[0]['latitude'],
                  longitude: result.coordinates[0]['longitude'],
                };

                if (result.coordinates.length >= 2) {
                  let angle = calculateAngle(result.coordinates);
                  setAngle(angle);
                }

                setFromLocation(nextLoc);
                setIsReady(true);
              }
            }}
          />
          {destinationMarker()}
          {carIcon()}
        </MapView>
      </View>
    );
  }
  function renderDestinationHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width * 0.9,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 30,
            backgroundColor: colors.white,
          }}>
          <Image
            source={require('../../assets/images/red-pin.png')}
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18 }}>{streetName}</Text>
          </View>

          <Text style={{ fontSize: 18 }}>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  }

  function renderDeliveryInfo() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: width * 0.9,
            paddingVertical: 30,
            paddingHorizontal: 20,
            borderRadius: 30,
            backgroundColor: colors.white,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Avatar */}
            <Image
              source={restaurant?.courier.avatar}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />

            <View style={{ flex: 1, marginLeft: 10 }}>
              {/* Name & Rating */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ fontSize: 18 }}>{restaurant?.courier.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('../../assets/images/star.png')}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: colors.primary,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ fontSize: 18 }}>{restaurant?.rating}</Text>
                </View>
              </View>

              {/* Restaurant */}
              <Text style={{ color: colors.grey, fontSize: 18 }}>
                {restaurant?.name}
              </Text>
            </View>
          </View>
          {/* Buttons */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                marginRight: 10,
                backgroundColor: colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Text style={{ fontSize: 18, color: colors.white }}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                backgroundColor: colors.lightgrey,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 18, color: colors.white }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: height * 0.35,
          right: 20,
          width: 60,
          height: 130,
          justifyContent: 'space-between',
        }}>
        {/* Zoom In */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: colors.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomIn()}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>

        {/* Zoom Out */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: colors.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomOut()}>
          <Text style={{ fontSize: 30 }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderMap()}
      {renderDestinationHeader()}
      {renderDeliveryInfo()}
      {renderButtons()}
    </View>
  );
};
export default OrderDelivery;
