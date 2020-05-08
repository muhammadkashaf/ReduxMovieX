import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';
import mockMovies from '../mockMovies';
import MovieRow from '../components/MovieRow';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }


  async componentDidMount() {
    const response = await fetch('http://omdbapi.com/?apikey=8a00c4a5&s=Batman')
    const data = await response.json()
    this.setState({ movies: data.Search })
  }

  render() {

    const { movies } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item: movie }) => <MovieRow movie={movie} />}
          keyExtractor={movie => movie.imdbID}
        />


      </View>
    );
  }
}




const styles = StyleSheet.create({
  flex: 1,
});

// export default connect()(Home)