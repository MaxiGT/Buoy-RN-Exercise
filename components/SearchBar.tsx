import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

type IncomingProps = {
    onSearch: (filter: string) => void;
}

const SearchBar = (
    {
        onSearch
    }: IncomingProps
) => {

  const [filter, setFilter] = useState<string>('');

  const handleInputChange = (filter: string) => {
    setFilter(filter);
  };

  const clearFilter = () => {
    setFilter('');
  }
  
  useEffect(() => {
    onSearch(filter);
  }, [filter])


  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        onChangeText={handleInputChange}
        style={styles.txtInput}
        placeholder="Search Drinks"
        value={filter}
      />
      <Button
        onPress={clearFilter}
        title={'cancel'} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  txtInput: {
    height: 40,
    fontSize: 15,
    width: '80%',
    backgroundColor: "#FFFFFF",
    borderRadius: 5
  }
});

export default SearchBar;
