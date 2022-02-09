console.log('hi')

// 1. Create a URL variable for dashboard URL
// 2. Grab container from html 
// 3. Set some dashboard options (w/h/etc)

const url = "https://public.tableau.com/views/CustomerSuccess-ContractManagementOverview/ContractManagementOverview?";
const vizContainer = document.getElementById('vizContainer');
const vizOptions = {
    device : "desktop",

}
// create an unassigned variable 'viz'
let viz;

//Button for downloading PDF
const pdfButton = document.getElementById('exportPDF');
const ppButton = document.getElementById('exportPowerpoint')

// Function to 
function initViz(){

    console.log('Hello from initViz()');
    viz = new tableau.Viz(vizContainer, url, vizOptions);
}

function exportPDF(){
    console.log("Generating PDF...");
    viz.showExportPDFDialog();
}

function exportPowerpoint(){
    console.log("Downloading Powerpoint...")
    viz.showExportPowerPointDialog();
}

document.addEventListener("DOMContentLoaded", initViz);
pdfButton.addEventListener("click", exportPDF);
ppButton.addEventListener("click", exportPowerpoint)

