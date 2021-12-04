import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native';
import { ItemCard } from '..';

const { width, height } = Dimensions.get('window');

const ItemList = ({ 
	data,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.column}>
				{data.filter((item, index) => index % 2 === 0).map((item, index) => (
					<ItemCard key={index} {...item} style={{marginBottom: 8}} />
				))}
			</View>
			<View style={styles.column}>
				{data.filter((item, index) => index % 2 === 1).map((item, index) => (
					<ItemCard key={index} {...item} style={{marginBottom: 8}} />
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		width: width,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
	},
	column: {
		flex: 0,
		width: (width - 24) / 2,
	}
})

export default ItemList;