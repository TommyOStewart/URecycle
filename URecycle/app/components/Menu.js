import React, { Component } from 'react';
import {ScrollView, Dimensions, View, StyleSheet, InteractionManager} from 'react-native';
import PropTypes from 'prop-types';

const window = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: 'row',
  },
  scrollViewVertical: {
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    width: window.width,
  },
  verticalItem: {
    flex: 1,
    height: window.height,
    width: window.width,
  },
});

class Menu extends Component {



  static propTypes = {
    routes: PropTypes.array,
    horizontal: PropTypes.bool,
    initialIndex: PropTypes.number,
  };

  static defaultProps = {
    routes: [],
    horizontal: true,
    initialIndex: 1,
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {


  }

  goTo() {
    InteractionManager.runAfterInteractions(() => {
      if (this.props.horizontal) {
        const offset = window.width * this.props.initialIndex;
        setTimeout(() => {this.myScroll.scrollTo({x: offset, y: 0, animated: false})}, 0)
      } else {
        const offset = window.height * this.props.initialIndex;
        setTimeout(() => {this.myScroll.scrollTo({x: 0, y: offset, animated: false})}, 0)
      }

    });
  }

  goToRewards() {
      if (typeof this.props.rewards === 'undefined') {
          setTimeout(() => {this.myScroll.scrollTo({x: 0, y: 0, animated: true})}, 0)
      } else {
          this.props.rewards();
      }


  }

  goToScan() {
      setTimeout(() => {this.myScroll.scrollTo({x: window.width, y: window.height, animated: true})}, 0)

  }

  goToNews() {

      if (typeof this.props.news === 'undefined') {
          setTimeout(() => {this.myScroll.scrollTo({x: window.width * 2, y: 0, animated: true})}, 0);
      } else {
          this.props.news();
      }
  }

  renderScreens() {
    const { horizontal, routes } = this.props;
    const itemStyle = horizontal ? styles.item : styles.verticalItem;

    return this.props.routes.map((route, index) => {
      return (
        <View key={index} style={itemStyle}>
          <route.component username={this.props.username} rewards={this.goToRewards.bind(this)} scan={this.goToScan.bind(this)} news={this.goToNews.bind(this)}/>
        </View>

      );

    });
  }

  render() {
    const { horizontal } = this.props;
    const scrollViewStyle = horizontal ? styles.scrollView : styles.scrollViewVertical;

    return (

        <ScrollView
          ref={(ref) => this.myScroll = ref}
          horizontal={horizontal}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={scrollViewStyle}
          bounces={false}
          directionalLockEnabled={true}
          onLayout={this.goTo()}
        >
          {this.renderScreens()}
        </ScrollView>

    );
  }
}

export default Menu;
