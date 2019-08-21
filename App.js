/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import BasicButton from './src/Components/BasicButton'
import StatusItem from './src/Components/StatusItem'
import RNRainbowFilesManager from 'react-native-rainbow-files-manager';





const App = () => {
  let bulletPoints = [
    { id: 1, uri: 'https://hackernoon.com/hn-images/0*4ty0Adbdg4dsVBo3.png', localFilePath: './song.wav', status: '0' },
    { id: 2, uri: 'http', localFilePath: './asssets/movie.avi', status: '1' },
    { id: 3, uri: 'http', localFilePath: './asssets/doc.docx', status: '2' },
    { id: 3, uri: 'http', localFilePath: './asssets/doc.docx', status: '3' },
  ];
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height * 0.3,
              alignItems: 'center',
            }}
            source={require('./assets/roygibiv.png')}
            resizeMode="cover"
          />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={[styles.sectionTitle, { fontSize: 28, }]}>RainbowFilesSampleApp</Text>
              <Text style={[styles.sectionDescription, { fontSize: 22, }]}>
                Uploading and downloading big files for fun... With colours
              </Text>
            </View>

            <View style={styles.seperator} />


            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Progress</Text>
              <Text style={styles.sectionDescription}>
                0: undefined/unknown, 1: running, 2: completed, 3: error ,4: cancel
              </Text>
              <View style={[styles.statusContainer]}>
                {bulletPoints.map(item => (
                  <StatusItem
                    item={item}
                    onPress={(e) => RNRainbowFilesManager.downloadFile(e)}
                  />
                ))}
              </View>
            </View>

            <View style={styles.seperator} />

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Download</Text>
              <Text style={styles.sectionDescription}>
                Click a task to trigger the download
              </Text>
              <BasicButton
                title="MUSIC TRACK A"
                onPress={() =>
                  RNRainbowFilesManager.uploadFile(
                    'https://hackernoon.com/hn-images/0*4ty0Adbdg4dsVBo3.png',
                  )
                }
              />
            </View>

            <View style={styles.seperator} />

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Upload</Text>
              <Text style={styles.sectionDescription}>
                Click a task to trigger the download
  </Text>
              <BasicButton
                title="Select File"
                onPress={() => console.log("select file")}
              />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: "center"
  },
  seperator: {
    width: Dimensions.get('window').width * 0.8,
    height: 3,
    backgroundColor: 'red',
    margin: Dimensions.get('window').width * 0.1,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: "center",
    marginBottom: 20,
  },

  statusContainer: {
    marginTop: 2,
    width: Dimensions.get('window').width,
    backgroundColor: 'yellow',
    justifyContent: "center"

  },
  statusText: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    textAlign: "center"
  },
});

export default App;
