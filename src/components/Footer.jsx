import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import footerLogo from "../images/footer-logo.png";

const styles = StyleSheet.create({
  footer: {
    padding: "20px",
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 8,
    width: "100%",
    padding: "20px 0",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  footerImage: {
    height: 40,
    width: 80,
    paddingLeft: 4,
  },
});
const Footer = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>
      Disclaimer: This report is intended to supplement a comprehensive patient
      assessment, including but not limited to diagnosis, clinical history, and
      evaluation of co-morbid conditions. It should not be used as the sole
      basis for prescribing decisions. For the most current information on
      gene-drug associations, please refer to resources such as CPIC, FDA Table
      of Pharmacogenetic Associations. Please note that pharmacokinetics and
      pharmacodynamics may evolve over time, and this report may not reflect the
      latest findings. Prescribers should also consider approved drug labeling,
      clinical practice guidelines, and other relevant factors such as family
      history when making treatment decisions.
    </Text>
    <Image src={footerLogo} style={styles.footerImage} />
  </View>
);

export default Footer;
