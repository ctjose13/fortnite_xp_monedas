//
// FilterItem is a item of the list showed by Filter
//
// title:   It is the text displayed inside the FilterItem
// checked: If set to true, it shows a checked-square, otherwise it shows a square
// header:  If set to true, it applies styles appropriated for headers 
//          (top border radius, background color, no bottom border width)
// last:    If set to true, it applies styles appropriated for the last item
//          (bottom border radius and no bottom border width)
// onPress:     function called on the user clicks anywhere in the container, except the icon
// onPressIcon: function called when the user clicks on the icon
//

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

import { Colors, Typography, Sizes } from "../styles";


const FilterItem = ({ title, checked, header, last, onPress, onPressIcon}) => {

  const containerExtraStyle = {
    backgroundColor: header ? Colors.HEADER : Colors.SURFACE,
    borderTopLeftRadius: header ? Sizes.BORDER_RADIUS : 0,
    borderTopRightRadius: header ? Sizes.BORDER_RADIUS : 0,
    borderBottomWidth : header || last ? 0 : 1,
    borderBottomLeftRadius: last ? Sizes.BORDER_RADIUS : 0,
    borderBottomRightRadius: last ? Sizes.BORDER_RADIUS : 0,
  };
  const textStyle = header ? Typography.HEADER : Typography.BASE;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerExtraStyle]}>

        <Text style={textStyle}>{title}</Text>

        <TouchableOpacity onPress={onPressIcon}>
          <Feather name={checked ? 'check-square' : 'square'} size={Sizes.ICON} />
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  );
}

FilterItem.defaultProps = {
  title: '',
  checked: false,
  header: false,
  last: false,
  onPress: () => {},
  onPressIcon: () => {},
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.BORDER,
    padding: Sizes.BASE_SPACING,
  },
});

export default FilterItem;
