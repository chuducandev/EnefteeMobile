import React from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Dimensions,
}	from 'react-native';

import { SearchGray } from '../../../../assets/icons';

const { width, height } = Dimensions.get('window');

const SearchBar = ({

}) => {
	return (
		<View style={styles.container}>
			<SearchGray width={20} height={20} />
			<TextInput style={styles.input} placeholder="Useless search bar" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: width - 30,
		height: 33,
		borderRadius: 30,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 11,
		marginHorizontal: 15,
	}, 
	input: {
		fontFamily: 'Work Sans Regular',
		color: '#acacac',
		fontSize: 10,
		flex: 1,
		marginHorizontal: 15,
		marginBottom: -2,
	}
})

export default SearchBar;