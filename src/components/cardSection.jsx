import React from "react";

// drugData.js
export const drugData = [
  {
    category: "ANTIPSYCHOTICS",
    items: [
      "Amisulpride",
      "Clozapine",
      "Haloperidol",
      "Lurasidone",
      "Olanzapine",
      "Quatiapine",
      "Ziprasidone",
      "Brohmperidone",
      "Zuclopenthixol",
      "Perphenazine",
      "Fluphenthixol",
    ],
  },
  {
    category: "PSYCHOSTIMULANTS",
    items: ["Dextroamphetamine", "Atomoxetine"],
  },
  {
    category: "ANTIDEPRESSANTS",
    items: [
      "Citalopram",
      "Nortriptyline",
      "Venlafaxine",
      "Mirtazapine",
      "Fluoxetine",
      "Duloxetine",
      "Sertraline",
      "Paroxetine",
      "Imipramine",
      "Clomipramine",
    ],
  },
  {
    category: "ANTIEPILEPTICS",
    items: [
      "Phenobarbital",
      "Phenytoin",
      "Levetiracetam",
      "10-monohydroxy oxcarbazepine",
      "Oxcarbazepine",
      "Topiramate",
      "Eslicarbazepine",
      "Primidone",
    ],
  },
  {
    category: "ANTITHROMBOTIC AGENTS",
    items: ["Warfarin"],
  },
  {
    category: "BETA BLOCKING AGENTS",
    items: ["Carvedilol"],
  },
  {
    category: "ANESTHETICS",
    items: ["Ketamine"],
  },
  {
    category: "DRUGS FOR PEPTIC ULCER AND GERD",
    items: ["Lansoprazole"],
  },
  {
    category: "DIURETICS",
    items: ["Furosemide"],
  },
  {
    category: "IMMUNOSTIMULANTS",
    items: ["Peginterferon alfa-2a", "Peginterferon alfa-2b"],
  },
  {
    category: "DRUGS USED IN NICOTINE DEPENDENCE",
    items: ["Nicotine"],
  },
  {
    category: "LIPID MODIFYING AGENTS, PLAIN",
    items: ["Atorvastatin"],
  },
  {
    category: "OTHER ANTIDEPRESSANTS",
    items: ["Trazodone", "Hydroxybupropion", "Desvenlafaxine"],
  },
  {
    category: "OTHER ANTIEPILEPTICS",
    items: [
      "Gabapentin",
      "Lamotrigine",
      "Valproate",
      "Carbamazepine",
      "Levetiracetam",
    ],
  },
  {
    category: "PHENOTHIAZINES WITH PIPERAZINE STRUCTURE",
    items: ["Trifluoperazine"],
  },
  {
    category: "PSYCHOANALEPTICS",
    items: [
      "Escitalopram",
      "Paroxetine",
      "Sertraline",
      "Citalopram",
      "Fluoxetine",
      "Fluvoxamine",
      "Desipramine",
    ],
  },
  {
    category: "SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS",
    items: ["Nicardipine", "Nimodipine"],
  },
  {
    category: "CALCIUM CHANNEL BLOCKERS",
    items: ["Diltiazem"],
  },
  {
    category: "DRUGS USED IN ADDICTIVE DISORDERS",
    items: ["Naltrexone"],
  },
  {
    category: "LIPID MODIFYING AGENTS",
    items: [
      "Simvastatin",
      "Pravastatin",
      "Ezetimibe",
      "HMG CoA reductase inhibitors",
      "Rosuvastatin",
      "Atorvastatin",
      "Losartan",
    ],
  },
  {
    category: "OTHER BLOOD GLUCOSE LOWERING DRUGS",
    items: ["Dulaglutide"],
  },
  {
    category: "PSYCHOLEPTICS",
    items: ["Aripiprazole", "Chlorpromazine", "Fluphenazine", "Lithium"],
  },
];

const CardSection = () => {
  return (
    <div className="custom-container">
      <div
        className="card-grid-wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "auto",
          gap: "10px",
        }}
      >
        {drugData.map((section, idx) => {
          const customStyle = {};

          if (section.category === "ANTIEPILEPTICS") {
            customStyle.gridColumn = "2 / 0";
            customStyle.gridRow = "1 / 2";
          }
          if (section.category === "PSYCHOSTIMULANTS") {
            customStyle.gridColumn = "3 / 4";
            customStyle.gridRow = "2 / 3";
          }
          if (section.category === "ANTIDEPRESSANTS") {
            customStyle.gridColumn = "3 / 4";
            customStyle.gridRow = "1 / 2";
          }
          if (section.category === "PSYCHOANALEPTICS") {
            customStyle.gridColumn = "2 / 3";
            customStyle.gridRow = "5 / 7";
          }
          if (section.category === "PSYCHOLEPTICS") {
            customStyle.gridColumn = "3 / 4";
            customStyle.gridRow = "6 / 7";
          }
          if (section.category === "CALCIUM CHANNEL BLOCKERS") {
            customStyle.gridColumn = "3 / 4";
            customStyle.gridRow = "2 / 3";
          }
          if (section.category === "DRUGS USED IN ADDICTIVE DISORDERS") {
            customStyle.gridColumn = "3 / 4";
            customStyle.gridRow = "2 / 3";
          }

          return (
            <div
              key={idx}
              className="card-sec"
              style={{
                border: "1px solid #00bcd4",
                padding: "12px",
                background: "#fff",
                ...customStyle,
              }}
            >
              <h6 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {section.category}
              </h6>
              {section.items.map((item, i) => (
                <p key={i} style={{ marginBottom: "6px" }}>
                  {item}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
