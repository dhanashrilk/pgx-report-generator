import { StyleSheet, Text, View } from "@react-pdf/renderer";
import CustomHeader from "./Header";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 15,
    width: "100%",
  },
  section: {
    marginBottom: 10,
    paddingBottom: 10,
  },
  titleBlue: {
    backgroundColor: "#00BAD7",
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    borderTopLeftRadius: 12,
    textAlign: "center",
    fontWeight: 500,
    minHeight: 30,
    paddingTop: 8,
  },
  titleGreen: {
    backgroundColor: "#5DC0A0",
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,

    textAlign: "center",
    fontWeight: 500,
    minHeight: 30,
    paddingTop: 8,
    fontWeight: 600,
  },
});
const SecondHeader = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.section}>
        <Text style={styles.titleBlue}>GENE DRUG INTERACTION</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.titleGreen}>
          Drug Synopsis with risk assessment
        </Text>
      </View>
    </View>
  );
};

export default SecondHeader;
