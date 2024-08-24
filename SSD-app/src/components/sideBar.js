import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function SideBar() {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>정보</Text>
      <TouchableOpacity onPress={() => handleNavigation("/login")}>
        <Text>프로필</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("/signup")}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}
