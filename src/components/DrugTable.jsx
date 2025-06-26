import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const drugData = [
  {
    drug: "Lamotrigine",
    aliases: "(Lamictal®)",
    gene: "SCN1A (RS2298771)\nC>T (TT)",
    impact:
      "This patient with the TT genotype are at the highest risk of a less favorable response to lamotrigine, while those carrying the C allele have a lower risk of epilepsy and higher chances of achieving seizure remission.",
    pgxType: "PD",
    icon: <FiThumbsUp />,
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
    icon: <FiThumbsDown />,
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
    icon: <FiThumbsDown />,
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
    icon: <FiThumbsUp />,
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
    icon: <FiThumbsUp />,
    interaction: "Moderate Interaction",
    interactionType: "moderate",
    citation: "PMID: 23099353",
  },
];

export default function DrugTable() {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table  custom-drug-table">
          <thead className="text-center align-middle">
            <tr>
              <th>Drug</th>
              <th>Gene&nbsp;•&nbsp;Genotype</th>
              <th>Clinical Impact</th>
              <th className="pgx-column">PGx Response</th>
              <th>Citations</th>
            </tr>
          </thead>
          <tbody>
            {drugData.map((item, index) => (
              <tr key={index}>
                <td>
                  <strong>{item.drug}</strong>
                  <div className="text-muted">{item.aliases}</div>
                </td>
                <td className="white-space-pre-line">{item.gene}</td>
                <td className="d-flex align-items-start justify-content-between gap-2">
                  <div className="pe-2">{item.impact}</div>
                  <span className="pgx-type text-center px-2">
                    {item.pgxType}
                  </span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <span
                      className={`interaction-badge  ${item.interactionType}`}
                    >
                      {item.icon}
                    </span>
                    <div className="interaction-text">{item.interaction}</div>
                  </div>
                </td>

                <td>{item.citation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
