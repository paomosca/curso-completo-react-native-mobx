import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./Styles/RecommendationBoxStyles";

import MiniRecipe from "../Components/MiniRecipe";

class RecommendationBox extends React.Component {
  renderScroll = () => {
    const { data } = this.props;
    return (
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroller}
      >
        {data.map(item => {
          return <MiniRecipe key={item.id} data={item} />;
        })}
      </ScrollView>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Platos recomendados</Text>
        {this.renderScroll()}
      </View>
    );
  }
}

export default RecommendationBox;
