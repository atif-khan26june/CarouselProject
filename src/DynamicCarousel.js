import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const DynamicCarousel = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'green',
              textAlign: 'center',
              paddingBottom: 10,
            }}>
            {data.count}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'green',
              textAlign: 'center',
              paddingBottom: 10,
            }}>
            Articles:
          </Text>
          <FlatList
            data={data.entries}
            //keyExtractor={({ id }, index) => id}
            renderItem={({item, index}) => (
              <Text>{index + 1 + '. ' + item.Description}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default DynamicCarousel;
