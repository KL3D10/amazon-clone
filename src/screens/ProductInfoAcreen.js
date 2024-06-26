import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import { useRoute } from '@react-navigation/core'

const ProductInfoAcreen = () => {
    const route = useRoute();
    const { width } = Dimensions.get("window");
    const height = (width * 100) / 100;
  return (
    <ScrollView
        style={{ marginTop: 55, flex: 1, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
    >
        <View  style={styles.topSearchContainer}>
            <Pressable style={styles.searchBarRow}>
                <VectorIcon style={{paddingLeft: 10}} type="AntDesign" name="search1" size={22} color="black" />
                <TextInput placeholder="Search Amazon.it" />
            </Pressable>
            <VectorIcon type="Feather"  name="mic" size={24} color="black" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {route.params.carouselImages.map((item, index) => (
                <ImageBackground 
                style={{ width, height, marginTop: 25, resizeMode: "contain" }}
                source={{ uri: item }}
                key={index}>
                    <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#C60C30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <VectorIcon
                  type="MaterialCommunityIcons"
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>
                </ImageBackground>
            ))}
        </ScrollView>
    </ScrollView>
  )
}

export default ProductInfoAcreen

const styles = StyleSheet.create({
    topSearchContainer: {
        backgroundColor: "#00CED1",
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    searchBarRow: {
        flex: 1,
        flexDirection: "row", 
        alignItems: "center", 
        marginHorizontal: 7, 
        gap: 10, 
        backgroundColor: "white", 
        borderRadius: 3, 
        height: 38, 
    },
})