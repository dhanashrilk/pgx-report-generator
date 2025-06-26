import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { MdOutlinePriorityHigh } from "react-icons/md";

const risperidoneData = [
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "DRD3 (RS6280)\nC>T (CT)",
    impact:
      "This patient with this CT genotype have an intermediate likelihood of improved risperidone response compared to those with the TT genotype.",
    pgxType: ["PD"],
    icon: <FiThumbsUp />,
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "ABCB1 (RS1128503)\nA>G (AG)",
    impact:
      "This patient with this AG genotype have an intermediate but favorable response to risperidone therapy, and those carrying the T allele may experience even better outcomes.",
    pgxType: ["PK", "PD"],
    icon: <FiThumbsUp />,
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "HTR2C (RS6318)\nC>G (GG)",
    impact:
      "This patient with this GG genotype are at the highest risk of significant weight gain during risperidone treatment for autism.",
    pgxType: ["PK", "PD"],
    icon: <FiThumbsDown />,
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "BDNF (RS6265)\nC>T (CT)",
    impact:
      "This patient with this CT genotype have an intermediate risk of experiencing more severe hyperprolactinemia when treated with risperidone for autism, and BDNF genetic variants may affect how this medication works.",
    pgxType: ["PD"],
    icon: <FiThumbsDown />,
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "CNR1 (RS1049353)\nC>T (CT)",
    impact:
      "This patient with this CT genotype have an intermediate risk of weight gain from antipsychotic medications, and future studies should focus on gene expression profiles related to this risk.",
    pgxType: ["PD"],
    icon: <FiThumbsUp />,
    interaction: "Moderate interaction",
    interactionType: "moderate",
    citation: "PMID: PMC3693401",
  },
];

export default function RisperidoneTable() {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table custom-drug-table">
          <thead className="text-center align-middle">
            <tr>
              <th>Drug</th>
              <th>Gene&nbsp;•&nbsp;Genotype</th>
              <th>Clinical Impact</th>
              <th className="pgx-column">
                PGx Response
                <br />
                <span className="pgx-subtext">
                  exclusively by NeuroPrecision
                </span>
              </th>
              <th>Citations</th>
            </tr>
          </thead>
          <tbody>
            {risperidoneData.map((item, index) => (
              <tr key={index}>
                <td>
                  <strong>{item.drug}</strong>
                  <div className="text-muted">{item.aliases}</div>
                </td>
                <td className="white-space-pre-line">{item.gene}</td>
                <td className="d-flex align-items-start justify-content-between gap-2">
                  <div className="pe-2">{item.impact}</div>
                  <div className="d-flex flex-column align-items-center gap-1">
                    {item.pgxType.map((type, i) => (
                      <span className="pgx-type" key={i}>
                        {type}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <span
                      className={`interaction-badge ${item.interactionType}`}
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
