import { StyleSheet, Text, View } from "@react-pdf/renderer";

// Sample data (same as provided)
const drugData = [
  {
    drug: "Lamotrigine",
    aliases: "(Lamictal®)",
    gene: "SCN1A (RS2298771)\nC>T (TT)",
    impact:
      "This patient with the TT genotype are at the highest risk of a less favorable response to lamotrigine, while those carrying the C allele have a lower risk of epilepsy and higher chances of achieving seizure remission.",
    pgxType: "PD",
    icon: "👍",
    interaction: "Moderate Interaction",
    interactionType: "moderate",
    citation: "PMID: 28754367",
  },
  {
    drug: "Lamotrigine",
    aliases: "(Lamictal®)",
    gene: "CACNA1H (RS2753326)\nA>G (GG)",
    impact:
      "This patient with the GG genotype are at the highest risk of experiencing seizures and may require adjusted dosing of lamotrigine due to reduced clinical benefit compared to those with the A allele.",
    pgxType: "PD",
    icon: "👎",
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: PMC6711340",
  },
  {
    drug: "Carbamazepine",
    aliases: "(Carbatrol®, Carnexiv®, Epitol®, Equetro®, Tegretol®)",
    gene: "CYP1A1 (RS2606345)\nC>A (CA)",
    impact:
      "This patient with the CA genotype have an intermediate risk of seizures when treated with carbamazepine, and those with genotype AA may need adjusted dosing due to a higher likelihood of recurrent seizures.",
    pgxType: "PK",
    icon: "👎",
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: 21121773",
  },
  {
    drug: "Carbamazepine",
    aliases: "(Carbatrol®, Carnexiv®, Epitol®, Equetro®, Tegretol®)",
    gene: "CYP2C9 (RS9332120)\nT>C (TC)",
    impact:
      "This patient with the TC genotype have an intermediate chance of not responding well to carbamazepine, and further research is needed to understand how common these genetic variations are in patients with difficult-to-treat epilepsy.",
    pgxType: "PK",
    icon: "👍",
    interaction: "Moderate Interaction",
    interactionType: "moderate",
    citation: "PMID: 2834093",
  },
  {
    drug: "Valproic acid",
    aliases: "(Depakene®, Depakote®, Epival®)",
    gene: "UGT2B7 (RS7439366)\nT>C (TC)",
    impact:
      "This patient with the TC genotype have an intermediate risk of altered valproic acid metabolism, but the UGT2B7*2 genotype does not affect plasma VPA concentrations.",
    pgxType: "PK",
    icon: "👍",
    interaction: "Moderate Interaction",
    interactionType: "moderate",
    citation: "PMID: 23099353",
  },
];

// Styles

const borderColor = "#53c4cd";

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "100%",
    marginTop: 10,
  },
  // Header row: top, bottom, right borders
  tableHeader: {
    flexDirection: "row",
    borderWidth: 1,
    // borderBottomWidth: 1,
    borderColor: borderColor,
    minHeight: 40,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: borderColor,
    breakInside: "avoid",
    paddingTop: 8,
  },
  tableColHeader: {
    width: "15%",
    padding: 4,
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: borderColor,
    color: "#007d8c",
    minHeight: 40,
  },
  tableCol: {
    width: "15%",
    padding: 4,
    fontSize: 9,
    lineHeight: 1.3,
  },
  tableColFirst: {
    width: "15%",
    padding: 4,
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 1.3,
  },
  longColHeader: {
    width: "40%",
    padding: 4,
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 1.3,
    textAlign: "center",
    color: "#007d8c",
    borderRightWidth: 1,
    borderColor: borderColor,
    minHeight: 40,
  },
  longCol: {
    width: "40%",
    padding: 4,
    fontSize: 9,
    lineHeight: 1.3,
    minHeight: 120,
    wordBreak: "break-word",
  },
});

const DrugTable = () => (
  <View style={styles.table}>
    <View
      style={{
        flexDirection: "row",
        flexWrap: "nowrap",
        breakInside: "avoid",
      }}
    >
      <View style={styles.tableHeader} wrap={false}>
        <Text style={styles.tableColHeader}>Drug</Text>
        <Text style={styles.tableColHeader}>Gene&nbsp;•&nbsp;Genotype</Text>
        <Text style={styles.longColHeader}>Clinical Impact</Text>
        <Text style={styles.tableColHeader}>PGx</Text>
        <Text style={styles.tableColHeader}>Citation</Text>
      </View>
    </View>

    {drugData.map((item, index) => (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          breakInside: "avoid",
        }}
      >
        <View style={styles.tableRow} key={index} wrap={false}>
          <Text style={styles.tableColFirst}>
            {item.drug}
            {"\n"}
            <Text style={{ color: "gray" }}>{item.aliases}</Text>
          </Text>
          <Text style={styles.tableCol}>{item.gene}</Text>
          <Text style={styles.longCol}>{item.impact}</Text>
          <Text style={styles.tableCol}>{item.interaction}</Text>
          <Text style={styles.tableCol}>{item.citation}</Text>
        </View>
      </View>
    ))}
  </View>
);

export default DrugTable;
