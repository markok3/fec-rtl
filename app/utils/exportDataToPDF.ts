import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const exportDataToPDF = (data: any[]) => {
  const doc = new jsPDF();
  const tableColumn = [
    "id",
    "points",
    "email",
    "name",
    "creationDate",
    "gender",
  ]; // Add your columns
  const tableRows: string[][] = [];

  data.forEach((item) => {
    const data = [
      item.id,
      item.points,
      item.email,
      item.name,
      item.creationDate,
      item.gender,
    ];
    tableRows.push(data);
  });

  autoTable(doc, { head: [tableColumn], body: tableRows });

  doc.save("data.pdf");
};
