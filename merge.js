// testpdf.mjs OR testpdf.js (if "type": "module" in package.json)
import PDFMerger from "pdf-merger-js";

const merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
  await merger.add("1.pdf");
  await merger.add("2.pdf");

  await merger.save("public/merged.pdf"); // Save merged file
};

module.exports = (mergePdfs)