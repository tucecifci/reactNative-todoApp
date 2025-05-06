import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="random"
        options={{
          headerShown: true,
          headerTitle: "Random Page",
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
          headerTintColor: "#333",
        }}
      />
    </Stack>
  );
}
