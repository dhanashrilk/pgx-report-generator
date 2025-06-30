import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const methylphenidateData = [
  {
    drug: "Methylphenidate",
    aliases: "(Aptensio®, Biphentin®, Concerta®, Cotempla®, Daytrana®)",
    gene: "DRD3 (RS6280)\nC>T (CT)",
    impact:
      "This patient with the CT genotype have an intermediate risk of experiencing side effects from methylphenidate, which is associated with increased stimulant intolerance in children with Autism Spectrum Disorder.",
    pgxType: ["PK", "PD"],
    icon: <FiThumbsDown />,
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMCID: PMC4034115",
  },
  {
    drug: "Methylphenidate",
    aliases: "(Aptensio®, Biphentin®, Concerta®, Cotempla®, Daytrana®)",
    gene: "TRIB3 (RS2295490)\nA>G (GG)",
    impact:
      "This patient with the GG genotype have the lowest risk of suboptimal response to methylphenidate, as the G allele is associated with improved efficacy in ADHD patients.",
    pgxType: ["PD"],
    icon: <FiThumbsUp />,
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: PMC5789875",
  },
  {
    drug: "Methylphenidate",
    aliases: "(Aptensio®, Biphentin®, Concerta®, Cotempla®, Daytrana®)",
    gene: "TRIB3 (RS2295490)\nA>G (GG)",
    impact:
      "This patient with the GG genotype have the lowest risk of suboptimal response to methylphenidate, as the G allele is associated with improved efficacy in ADHD patients.",
    pgxType: ["PD"],
    icon: <FiThumbsUp />,
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: PMC5789875",
  },
];

export default function MethylphenidateTable() {
  return (
    <div className="custom-container mt-4">
      <div className="custom-table-responsive">
        <table className="custom-table custom-drug-table">
          <thead className="custom-text-center custom-align-middle">
            <tr>
              <th>Drug</th>
              <th>Gene&nbsp;•&nbsp;Genotype</th>
              <th>Clinical Impact</th>
              <th className="pgx-column">
                PGx Response
                <br />
                <span
                  className="pgx-subtext"
                  style={{ fontWeight: "300", fontSize: "12px" }}
                >
                  &nbsp;exclusively&nbsp;by&nbsp; NeuroPrecision
                </span>
              </th>
              <th>Citations</th>
            </tr>
          </thead>
          <tbody>
            {methylphenidateData.map((item, index) => (
              <tr key={index}>
                <td>
                  <strong>{item.drug}</strong>
                  <div className="text-muted">{item.aliases}</div>
                </td>
                <td className="white-space-pre-line">{item.gene}</td>
                <td className="custom-flex custom-align-start custom-justify-between custom-gap-2">
                  <div className="pe-2">{item.impact}</div>
                  <div className="custom-flex custom-flex-column custom-align-center custom-gap-1">
                    {item.pgxType.map((type, i) => (
                      <span className="pgx-type" key={i}>
                        {type}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="custom-text-center">
                  <div className="custom-flex custom-align-center custom-justify-center custom-gap-2">
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
