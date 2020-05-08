import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieRow({ movie }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text style={styles.title}>{movie.Title}</Text>

            <View style={styles.iconContainer}>
                <Icon name='heart-o' size={36} color='red' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    poster: {
        height: 100,
        width: 70,
        resizeMode: 'contain'
    },
    title: {
        flex: 2,
        fontSize: 24,
        fontWeight: '300',
        marginLeft: 10,
    },
})