const descriptionDetails = [
  "Genes Analyzed Exome sequencing targeted coding regions of 19,433 genes, with analysis focused on condition-relevant genes to detect genetic variants",
  "Quality Metrics Total Reads: 81,295,668 Mapped Reads: 81,003,478 On-Target Reads: 99.64% Average Unique Coverage:255.47x",
  "Sample Preparation: DNA extracted from buccal swabs using Qiagen Blood Mini Kit and underwent quality control (QC) checks, including sample and library QC. Only samples passing QC proceeded to library preparation.",
  "Library Preparation: Libraries constructed using IDT xGen™ DNA Library Prep EZ kit via enzymatic fragmentation and ligation. Hybridization capture performed with IDT xGen™ Panel v2. Libraries sequenced on Illumina NovaSeq (2 x 150 bp paired-end reads).",
  "Quality Assessment: Nucleic acid quality evaluated using Qubit fluorometry and Agilent TapeStation at extraction, fragmentation, indexing, and amplification stages. Only samples meeting QC standards proceeded further.",
  "Variant Calling: Reads aligned to GRCh38 (hg38) human reference genome using DRAGEN v4.2.4 pipeline, with read mapping, duplicate marking, base quality recalibration, and variant calling. High-confidence variants outputted ",
  "Data Mapping and Reporting: Variants in VCF files mapped to POD database, reviewed by a pathologist, and reported clinically.",
];

const FourthPage = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <h5 className="head-line test-method text-center mb-0">
          {" "}
          TEST METHODOLOGY
        </h5>
        <div className="desc-text m-0 py-2">
          <ol className="lh-md fw-medium my-2">
            {descriptionDetails.map((item) => (
              <li className="">{item}</li>
            ))}
          </ol>
        </div>
        <div className="reference py-2 mt-2">
          <p className="fw-bold m-0"> REFERENCES</p>
        </div>
        <p>
          This report relies on literature information that was aggregated and
          reviewed by PODHealth. The sources are available upon request.
        </p>
      </div>
    </div>
  );
};

export default FourthPage;
