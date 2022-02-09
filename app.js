console.log('hi')

// 1. Create a URL variable for dashboard URL
// 2. Grab container from html 
// 3. Set some dashboard options (w/h/etc)

const url = "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard"
const vizContainer = document.getElementById('vizContainer');
const vizOptions = {
    device : "desktop",
    Region : "North",

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

function getRangeValues(){
    const minValue = document.getElementById("minValue").value;
    const maxValue = document.getElementById("maxValue").value;
    console.log(minValue);
    //get workbook
    const workbook = viz.getWorkbook();
    //Get workbook sheet
    const activesheet = workbook.getActiveSheet();
    // get all sheets in active sheet
    const sheets = activesheet.getWorksheets();
    const sheetToFilter = sheets[1];
    console.log([sheetToFilter]);
    sheetToFilter.applyRangeFilterAsync("SUM(Sales)", {
        min:minValue, 
        max:maxValue,
    });
}

document.addEventListener("DOMContentLoaded", initViz);
pdfButton.addEventListener("click", exportPDF);
ppButton.addEventListener("click", exportPowerpoint)
document.getElementById("dashboardfilter").addEventListener("click", getRangeValues)


