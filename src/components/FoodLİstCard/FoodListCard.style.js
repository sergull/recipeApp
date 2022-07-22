import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 8,
  },
  inner_container: {
    margin: 5,
    flex: 1,
  },
  image: {
    
    minHeight: 170,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#00000099",
    padding: 10,
    borderRadius:5
  },
  text: {
    
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});
