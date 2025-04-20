import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          borderRadius: 50,
          backgroundColor: "#0f0D23",
          marginHorizontal: 20,
          marginBottom: 36,
          height: 56,
          overflow: "hidden",
          position: "absolute",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Search" icon="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Saved" icon="save" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Profile" icon="person" />
          ),
        }}
      />
    </Tabs>
  );
};

function TabIcon({
  focused,
  title,
  icon,
}: {
  focused: Boolean;
  title: string;
  icon: keyof typeof icons;
}) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-1 flex-row w-full min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icons[icon]} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base ml-2 font-semibold">
          {title}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className=" size-full justify-center items-center mt-4 rounded-full">
        <Image source={icons[icon]} tintColor="#A8B5DB" />
      </View>
    );
  }
}
export default _layout;
