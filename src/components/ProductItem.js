import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({item, index}) => {
  return (
    <Pressable style={styles.container}>
      <Image style={{width: 150, height: 150}} source={{uri:item?.image}} />

      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>{item?.title}</Text>

      <View style={styles.detailsBottomContainer}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item?.price}ALL</Text>
        <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>{item?.rating?.rate} ratings</Text>
      </View>

      <Pressable style={styles.addToCartButton}>
        <Text>Add to Cart</Text>
      </Pressable>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 25 
    },
    detailsBottomContainer: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addToCartButton: {
        backgroundColor: "#FFC72C", 
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10
    }
})