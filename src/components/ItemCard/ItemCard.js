import React, {useEffect, useState} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ItemCard = ({
	title, 
	username,
	detail,
	image,
	price,
	buyable,
	onBuy,
	numOfLikes,
	style,
}) => {
	const [imageHeight, setImageHeight] = useState(0);

	return (
		<View style={[styles.container, style]}>
			<Image source={{uri: image.uri}} style={[styles.image, {
				height: (width - 24) / 2 * image.height / image.width,
			}]} />
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.username}>{username}</Text>
				<Text style={styles.detail}>{detail}</Text>
				<Text style={styles.price}>{price}</Text>
				<View style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Buy</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		width: (width - 24) / 2,
		borderRadius: 20,
		backgroundColor: '#fff',
		overflow: 'hidden',
		elevation: 5,
	},
	image: {
		width: (width - 24) / 2,
		height: 200,
	},
	infoContainer: {
		flex: 0,
		padding: 12,
	},
	title: {
		fontFamily: 'Work Sans SemiBold',
		fontSize: 12,
		color: '#000',
	}, 
	username: {
		fontFamily: 'Work Sans Regular',
		fontSize: 10,
		color: '#acacac',
		marginTop: -2,
		marginBottom: 4,
	},
	detail: {
		fontFamily: 'Work Sans Regular',
		fontSize: 10,
		color: '#000',
		marginBottom: 10,
	},
	price: {
		fontFamily: 'Work Sans Bold',
		fontSize: 18,
		color: '#000',
		marginBottom: 8,
	},
	buttonContainer: {
		width: '100%',
		height: 18,
		borderRadius: 5,
		backgroundColor: '#ff822d',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontFamily: 'Work Sans Bold',
		fontSize: 10,
		color: '#fff',
	}
})

export default ItemCard;