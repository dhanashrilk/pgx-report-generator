import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Footer from "./Footer";

const styles = StyleSheet.create({
  secondFooter: {
    height: 300,
  },
  wrapper: {
    backgroundColor: "#e7ebee",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingTop: 20,
    height: 150,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  column: {
    width: "33%",
    paddingHorizontal: 4,
    fontSize: 10,
    marginBottom: 10,
  },
  badge: {
    fontSize: 10,
    fontWeight: "bold",
    marginRight: 4,
  },
  improved: { color: "green" },
  moderate: { color: "orange" },
  significant: { color: "red" },
  bottomRow: {
    flexDirection: "row",
    marginBottom: 6,
    fontSize: 10,
  },
  col8: {
    width: "66%",
    paddingRight: 4,
  },
  col4: {
    width: "34%",
  },
  pkpdType: {
    fontSize: 9,
    fontWeight: "bold",
    border: "1 solid #000",
    paddingHorizontal: 4,
    paddingVertical: 1,
    marginRight: 4,
    borderRadius: 4,
    display: "inline-block",
    textAlign: "center",
  },
  note: {
    fontSize: 6,
    marginTop: 6,
    color: "#333",
    lineHeight: 1.2,
  },
  cpic: {
    color: "#f59524",
  },
  hr: {
    borderBottom: "1 solid #ccc",
    marginVertical: 6,
  },
});

const SecondFooter = () => {
  return (
    <View style={styles.secondFooter}>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={{ marginBottom: 4 }}>
              Drug Risk assessment annotations
            </Text>
            <Text style={{ paddingTop: 4 }}>
              {/* <Text style={[styles.badge, styles.improved]}>🟢</Text> */}
              Improved Clinical outcome
            </Text>
          </View>
          <View style={styles.column}>
            <Text>
              {/* <Text style={[styles.badge, styles.moderate]}>🟡</Text> */}
              Moderate interaction
            </Text>
          </View>
          <View style={styles.column}>
            <Text>
              {/* <Text style={[styles.badge, styles.significant]}>🔴</Text> */}
              Significant Interaction
            </Text>
          </View>
        </View>

        <View style={styles.hr} />

        <View style={styles.bottomRow}>
          <View style={styles.col8}>
            <Text>Pharmacokinetic & Pharmacodynamic genes annotations</Text>
          </View>
          <View style={styles.col4}>
            <Text style={{ marginBottom: 4 }}>*: FDA</Text>
            <Text style={{ paddingTop: 4 }}>*: CPIC</Text>
          </View>
        </View>

        <Text style={styles.note}>
          Pharmacogenomic (PGx) response outlined in this report is derived from
          peer-reviewed research and the patient’s specific genotype, enabling
          an assessment of the patient’s likelihood of experiencing strong or
          reduced efficacy, as well as a high or low risk involvement with the
          treatment.
        </Text>
      </View>
      <View style={styles.section}>
        <Footer />
      </View>
    </View>
  );
};

export default SecondFooter;
