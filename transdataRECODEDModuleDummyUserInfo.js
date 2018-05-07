/* based on transaction data April, client 223 through July 7, client 411 */
/* added dummy user info */
/* cluster number now associated with modules*/
/* modules are determined by using the original transaction data and website: http://www.saptransactions.com/ */
var dataset ={
	nodes:[
	{name: "FE45", size:8, fullName: "Table T005BU", cluster:1, module: "CA",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "DR", size:1, fullName: "Maintain Business Partner", cluster:2, module: "AP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GE46", size:38, fullName: "Change Routing", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GI[F", size:1, fullName: "PP: Engineering Workbench", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GS45", size:2, fullName: "Create production order", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GS46", size:13, fullName: "Change Production Order", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GS47", size:75, fullName: "Display Production Order", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GS4=", size:57, fullName: "Availability Overview", cluster:4, module: "SD",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GS59", size:36, fullName: "Enter Production order Confirmation", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GS84", size:75, fullName: "Converting Planned Order", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GS8<", size:2, fullName: "Conv.plan.ord.to prod.ord.part.redct", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GSV;", size:7, fullName: "Convert Planned Order to Proc. Order", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GV56", size:1, fullName: "Change capacity", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GV66", size:1, fullName: "Change Hierarchy", cluster:3, module: "PP",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "GW47", size:5, fullName: "Display Material BOM", cluster:5, module: "LO",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "IJKQ", size:1, fullName: "Print Workbench Mass Processing", cluster: 1, module: "CA",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "J146", size:4, fullName: "Enter G/L Account Posting", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "J16<", size:149, fullName: "Post Incoming Payments", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "J185", size:1, fullName: "Enter Vendor Credit Memo", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "J187", size:5, fullName: "Enter Vendor Invoice", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "J197", size:78, fullName: "Post Outgoing Payments", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "MHNSI7:", size:26, fullName: "Display Balances", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF44", size:10, fullName: "Accounting Editing Options", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF46", size:2, fullName: "Change Document", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF47", size:62, fullName: "Display Document", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF54", size:1, fullName: "Invoice/Credit Fast Entry", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF94", size:6, fullName: "G/L Acct Pstg: Single Screen Trans.", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF:4", size:4, fullName: "Enter Incoming Invoices", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF:9", size:1, fullName: "Enter Incoming Credit Memos", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "KGQ6S", size:11, fullName: "Vendor Line Items", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF^5", size:41, fullName: "Post Incoming Payments", cluster:6, module: "FI",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "JF^6", size:30, fullName: "Post Outgoing Payments", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JGL5", size:1, fullName: "Display Check Information", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JGL6", size:1, fullName: "Display Payment Document Checks", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JH47", size:25, fullName: "Display Customer (Accounting)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JH4<", size:1, fullName: "Confirm Customer Individually(Actng)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JM47", size:1, fullName: "Display Bank", cluster:1, module: "CA",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "KP65S", size:24, fullName: "Vendor Balance Display", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JOQX", size:1, fullName: "FI Acct Assignment Model Management", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JW44", size:1, fullName: "G/L acct master record maintenance", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "JWT4", size:1, fullName: "G/L acct master record in chrt/accts", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "X-/^]@@:QS/Y1Q/U", size:1, fullName: "Activate Training Needs Management", cluster:7, module: "PY",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "V?^RX-Y[N-QP", size:2, fullName: "Stock Overview (Russia)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "OIHH", size:1, fullName: "COPA Char. Derivation Overview ALV", cluster:8, module: "CO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "OS<<", size:45, fullName: "Actual Settlement: Order", cluster:8, module: "CO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QF47", size:8, fullName: "Display Material Document", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QF5E", size:92, fullName: "Goods Withdrawal", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QF5G", size:135, fullName: "Other Goods Receipts", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QF75", size:33, fullName: "Goods Receipt for Production Order", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QF95", size:8, fullName: "Material Doc. List", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QF97", size:1, fullName: "Display Plant Stock Availability", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QG;9", size:39, fullName: "Transfer PG to Demand Management", cluster: 33, module: "PP",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QG;;", size:1, fullName: "Disaggregation: Display Planning", cluster:3, module: "PP",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QG<6", size:66, fullName: "Sales and Operations Planning", cluster:3, module: "PP",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QG<7", size:4, fullName: "Sales and Operations Planning", cluster:3, module: "PP",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QG<9", size:30, fullName: "Display Product Group", cluster:3, module: "PP",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QG<:", size:1, fullName: "Change Product Groups", cluster:3, module: "PP",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QG=8", size:40, fullName: "Change Flexible LIS Planning", cluster:3, module: "PP",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QG=9", size:1, fullName: "Display Flexible LIS Planning", cluster:3, module: "PP",
histories:[]
	},
	{name: "QGZ[", size:3, fullName: "INVCO: Update Diagnosis MatDoc", cluster:5, module: "LO",
histories:[]
	},
	{name: "QH47", size:1, fullName: "MRP-Individual Planning-Single Level", cluster:3, module: "PP",
histories:[]
	},
	{name: "QH48", size:204, fullName: "Display Stock/Requirements Situation", cluster:3, module: "PP",
histories:[]
	},
	{name: "QH4;", size:1, fullName: "Current Material Overview", cluster:3, module: "PP",
histories:[]
	},
	{name: "QH55", size:1, fullName: "Create Planned Order", cluster:3, module: "PP",
histories:[]
	},
	{name: "QH58", size:1, fullName: "Individual Conversion of Plnned Ord.", cluster:3, module: "PP",
histories:[]
	},
	{name: "QH85", size:41, fullName: "MPS - Single-item Multi-level -", cluster:3, module: "PP",
histories:[]
	},
	{name: "QH:7", size:34, fullName: "Display Planned Indep. Requirements", cluster:3, module: "PP",
histories:[]
	},
	{name: "QI45", size:19, fullName: "Maintain Source List", cluster:9, module: "MM",
histories:[]
	},
	{name: "QI57", size:4, fullName: "Display Purchasing Info Record", cluster:9, module: "MM",
histories:[]
	},
	{name: "QI5P", size:2, fullName: "Info Records per Vendor", cluster:9, module: "MM",
histories:[]
	},
	{name: "RJ76S", size:69, fullName: "Create Purchase Order", cluster:9, module: "MM",
histories:[]
	},
	{name: "RJ77S", size:9, fullName: "Change Purchase Order", cluster:9, module: "MM",
histories:[]
	},
	{name: "RJ78S", size:137, fullName: "Display Purchase Order", cluster:9, module: "MM",
histories:[]
	},
	{name: "QI68", size:2, fullName: "Maintain Purchase Order Supplement", cluster:9, module: "MM",
histories:[]
	},
	{name: "QI69", size:1, fullName: "Create PO with Source Determination", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI6F", size:1, fullName: "POs by Requirement Tracking Number", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI6P", size:1, fullName: "Purchase Orders by Vendor", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI7=", size:1, fullName: "Display Sched. Agmt. Schedule (TEST)", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI85", size:43, fullName: "Create Request For Quotation", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI86", size:2, fullName: "Change Request For Quotation", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI8;", size:142, fullName: "Create Quotation", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI8<", size:2, fullName: "Display Quotation", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI8=", size:125, fullName: "Price Comparison List", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI95", size:1, fullName: "Create Purchase Requisition", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "RJ:6S", size:28, fullName: "Create Purchase Requisition", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "RJ:8S", size:3, fullName: "Display Purchase Requisition", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QI9=", size:3, fullName: "Automatic Generation of POs", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "RJ:>S", size:1, fullName: "Automatic generation of POs", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "SK>6LT", size:1, fullName: "General Analyses (F)", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QMKS", size:15, fullName: "Goods Movement", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "TPNV1NV", size:2, fullName: "Goods Movement", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "TPNV1NY", size:50, fullName: "Goods Movement", cluster:9, module: "MM",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "QMV8", size:57, fullName: "Call MIRO - Change Status", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QMVS", size:70, fullName: "Enter Incoming Invoice", cluster:9, module: "MM",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QO45", size:1, fullName: "Create vendor (Purchasing)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQ45", size:7, fullName: "Create Material", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQ46", size:88, fullName: "Change Material", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQ47", size:61, fullName: "Display Material", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQ4:", size:1, fullName: "Flag Material for Deletion", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQ5;", size:4, fullName: "Mass Maintenance: Indus. Matl Master", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQ5=", size:3, fullName: "Display Material   at Key Date", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQ:4", size:1, fullName: "Materials List", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQFI", size:147, fullName: "Stock Overview", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQL5", size:59, fullName: "Create Trading Goods", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "QQV5", size:19, fullName: "Create Raw Material", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "SQS5", size:1, fullName: "Update Maintenance: SIS", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "SQS6", size:1, fullName: "Update Maintenance: PURCHIS", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "SZ45", size:1, fullName: "Access Sequence: Matl Listng/Exclsn", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "+\]:Q0TY/]_^Y/_-", size:1, fullName: "Audit Management: Evaluations", cluster:1, module: "CA",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "UURIY", size:3, fullName: "Manager's Desktop", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "VWE7", size:1, fullName: "Extractor Checker", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "V^64", size:1, fullName: "CCMS Monitoring", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "WF[T", size:17, fullName: "SAP Business Workplace", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "WI5:", size:19, fullName: "Data Browser", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "WI7<", size:2, fullName: "ABAP Editor", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: ".UQ-SX:0.U-:]U^0", size:7, fullName: "Find in User Menu", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'}]
	},
	{name: "WQ7;", size:1, fullName: "Overview of job selection", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WS44", size:2, fullName: "SAPoffice: Short Message", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WTVS", size:6, fullName: "Customizing - Edit Project", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WX45", size:2, fullName: "System Trace", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WX47", size:4, fullName: "Workload and Performance Statistics", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "XY58S", size:24, fullName: "Workload and Performance Statistics", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WX4:", size:1, fullName: "Operating System Monitor", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WX4;", size:2, fullName: "Application monitor", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WXEH", size:26, fullName: "Statistics display for all systems", cluster:10, module: "BC",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "WY45", size:31, fullName: "User Maintenance", cluster:10, module: "BC",
histories:[]
	},
	{name: "VX6", size:8, fullName: "Maintain Users Own Data", cluster:10, module: "BC",
histories:[]
	},
	{name: ",8OZ+8FE>?@?DE", size:3, fullName: "Accounts Rec. Information System", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8OZ+8FE>?@?DG", size:2, fullName: "Transaction Figures: Account Balance", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8OZ+8FE>?@?E?", size:3, fullName: "Transaction Figures: Sales", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8OZ+8FE>?@?E@", size:100, fullName: "Customer Balances in Local Currency", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8OZ+8FE>?@?EE", size:1, fullName: "Customer Payment History", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8OZ+8FE>?@?FD", size:2, fullName: "Customer Sales", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8OZ+8FE>?@A@D", size:2, fullName: "Chart of Accounts", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8OZ+8FE>?@A@F", size:1, fullName: "G/L Account List", cluster:1, module: "CA",
histories:[]
	},
	{name: ",8^V>8BF>>>C?A", size:1, fullName: "Ad Hoc Query", cluster:11, module: "PA",
histories:[]
	},
	{name: "ZE45", size:241, fullName: "Create Sales Order", cluster:4, module: "SD",
histories:[]
	},
	{name: "ZE46", size:24, fullName: "Change Sales Order", cluster:4, module: "SD",
histories:[]
	},
	{name: "ZE47", size:127, fullName: "Display Sales Order", cluster:4, module: "SD",
histories:[]
	},
	{name: "ZE49", size:10, fullName: "List of Sales Orders", cluster:4, module: "SD",
histories:[]
	},
	{name: "ZE55", size:1, fullName: "Create Inquiry", cluster:4, module: "SD",
histories:[]
	},
	{name: "ZE56", size:2, fullName: "Change Inquiry", cluster:4, module: "SD",
histories:[]
	},
	{name: "ZE57", size:3, fullName: "Display Inquiry", cluster:4, module: "SD",
histories:[]
	},
	{name: "ZE65", size:188, fullName: "Create Quotation", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZE66", size:41, fullName: "Change Quotation", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZE67", size:30, fullName: "Display Quotation", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZE87", size:1, fullName: "Display Contract", cluster: 4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZET5", size:1, fullName: "Create Contact Person", cluster:5, module: "LO",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZEWO", size:1, fullName: "Deleting Groups", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZF,;", size:1, fullName: "Rebate Agreement Settlement", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZH45", size:3, fullName: "Create Customer (Sales)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZH46", size:2, fullName: "Change Customer (Sales)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZH47", size:10, fullName: "Display Customer (Sales)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZJ45", size:132, fullName: "Create Billing Document", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZJ46", size:9, fullName: "Change Billing Document", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZJ47", size:17, fullName: "Display Billing Document", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZJ48", size:38, fullName: "Maintain Billing Due List", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZJ49", size:2, fullName: "List Billing Documents", cluster:4, module: "SD",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZJ4;", size:1, fullName: "Display bill. document from archive", cluster:4, module: "SD",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZJ87", size:1, fullName: "Revenue Recognition: Posting Doc.", cluster:4, module: "SD",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZK45", size:2, fullName: "Create Group", cluster:12, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZO75", size:4, fullName: "Condition Maintenance: Create", cluster:4, module: "SD",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZO77", size:2, fullName: "Condition Maintenance: Display", cluster:4, module: "SD",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "[Q56S", size:183, fullName: "Create Outbound Dlv. with Order Ref.", cluster:3, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\R67TU", size:6, fullName: "Create Outbound Dlv. w/o Order Ref.", cluster:3, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "[Q57S", size:240, fullName: "Change Outbound Delivery", cluster:3, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "[Q58S", size:28, fullName: "Display Outbound Delivery", cluster:3, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZP4=", size:1, fullName: "Cancel Goods Issue for Delivery Note", cluster:12, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZP66", size:2, fullName: "Display Delivery Change Documents", cluster:12, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZPWT", size:2, fullName: "Subsequent Outbound-Delivery Split", cluster:12, module: "LE",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "ZXPE", size:1, fullName: "Order to delivery copying control", cluster:4, module: "SD",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "[G6;", size:1, fullName: "Batch Requirements Planning per Plnt", cluster:5, module: "LO",
histories:[{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\H45", size:5, fullName: "Create Customer (Centrally)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\H47", size:22, fullName: "Display Customer (Centrally)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\O45", size:26, fullName: "Create Vendor (Centrally)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\O46", size:3, fullName: "Change vendor (centrally)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\O47", size:6, fullName: "Display vendor (centrally)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\O49", size:1, fullName: "Block Vendor (Centrally)", cluster:6, module: "FI",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]
	},
	{name: "\O==", size:2, fullName: "Mass maintenance  vendor master", cluster:4, module: "SD",
histories:[
	{user:'asmith', date :'2017-01-17', department: 'Sales'},
	{user:'brogers', date :'2017-01-16', department: 'Accounting'}]}
	],
  edges :[{source: 0, target: 0, freq:2	},
{source: 0, target: 136, freq:6},
{source: 2, target: 2, freq:10},
{source: 2, target: 55, freq:26},
{source: 5, target: 5, freq:2},
{source: 5, target: 14, freq:3},
{source: 5, target: 61, freq:4},
{source: 6, target: 6, freq:14},
{source: 6, target: 8, freq:27},
{source: 6, target: 44, freq:26},
{source: 6, target: 46, freq:2},
{source: 6, target: 61, freq:5},
{source: 7, target: 7, freq:2},
{source: 7, target: 130, freq:2},
{source: 7, target: 163, freq:4},
{source: 7, target: 165, freq:42},
{source: 8, target: 8, freq:6},
{source: 8, target: 48, freq:27},
{source: 9, target: 9, freq:7},
{source: 9, target: 61, freq:66},
{source: 10, target: 61, freq:2},
{source: 11, target: 61, freq:7},
{source: 14, target: 5, freq:2},
{source: 14, target: 102, freq:2},
{source: 16, target: 16, freq:2},
{source: 17, target: 17, freq:25},
{source: 17, target: 22, freq:5},
{source: 17, target: 30, freq:41},
{source: 17, target: 102, freq:2},
{source: 17, target: 130, freq:11},
{source: 17, target: 138, freq:48},
{source: 17, target: 143, freq:3},
{source: 17, target: 165, freq:2},
{source: 19, target: 19, freq:2},
{source: 19, target: 27, freq:2},
{source: 20, target: 20, freq:4},
{source: 20, target: 22, freq:4},
{source: 20, target: 29, freq:10},
{source: 20, target: 31, freq:30},
{source: 20, target: 37, freq:20},
{source: 20, target: 89, freq:2},
{source: 21, target: 21, freq:5},
{source: 21, target: 97, freq:2},
{source: 21, target: 103, freq:2},
{source: 22, target: 17, freq:5},
{source: 22, target: 20, freq:4},
{source: 24, target: 72, freq:31},
{source: 24, target: 92, freq:24},
{source: 26, target: 16, freq:2},
{source: 29, target: 70, freq:2},
{source: 29, target: 174, freq:5},
{source: 30, target: 17, freq:40},
{source: 31, target: 20, freq:28},
{source: 31, target: 37, freq:2},
{source: 34, target: 34, freq:5},
{source: 34, target: 136, freq:3},
{source: 34, target: 138, freq:14},
{source: 37, target: 37, freq:2},
{source: 37, target: 72, freq:19},
{source: 44, target: 44, freq:18},
{source: 44, target: 96, freq:4},
{source: 45, target: 49, freq:3},
{source: 46, target: 6, freq:31},
{source: 46, target: 46, freq:48},
{source: 46, target: 47, freq:5},
{source: 46, target: 126, freq:2},
{source: 47, target: 46, freq:37},
{source: 47, target: 47, freq:87},
{source: 47, target: 53, freq:4},
{source: 47, target: 125, freq:4},
{source: 48, target: 6, freq:26},
{source: 48, target: 48, freq:5},
{source: 49, target: 45, freq:3},
{source: 49, target: 59, freq:2},
{source: 51, target: 51, freq:8},
{source: 51, target: 66, freq:29},
{source: 53, target: 53, freq:14},
{source: 53, target: 54, freq:2},
{source: 53, target: 55, freq:2},
{source: 53, target: 57, freq:38},
{source: 53, target: 96, freq:5},
{source: 54, target: 53, freq:2},
{source: 54, target: 54, freq:2},
{source: 55, target: 53, freq:28},
{source: 57, target: 51, freq:27},
{source: 57, target: 53, freq:10},
{source: 57, target: 57, freq:2},
{source: 59, target: 49, freq:2},
{source: 61, target: 5, freq:4},
{source: 61, target: 6, freq:4},
{source: 61, target: 9, freq:66},
{source: 61, target: 10, freq:2},
{source: 61, target: 11, freq:7},
{source: 61, target: 47, freq:30},
{source: 61, target: 61, freq:45},
{source: 61, target: 78, freq:22},
{source: 61, target: 84, freq:18},
{source: 65, target: 61, freq:28},
{source: 65, target: 65, freq:11},
{source: 66, target: 65, freq:30},
{source: 66, target: 66, freq:3},
{source: 67, target: 67, freq:2},
{source: 67, target: 96, freq:13},
{source: 67, target: 104, freq:2},
{source: 67, target: 136, freq:2},
{source: 68, target: 72, freq:10},
{source: 68, target: 97, freq:12},
{source: 68, target: 104, freq:2},
{source: 70, target: 70, freq:27},
{source: 70, target: 72, freq:21},
{source: 70, target: 85, freq:2},
{source: 70, target: 89, freq:3},
{source: 70, target: 91, freq:6},
{source: 71, target: 20, freq:3},
{source: 71, target: 71, freq:2},
{source: 72, target: 20, freq:2},
{source: 72, target: 21, freq:19},
{source: 72, target: 24, freq:30},
{source: 72, target: 72, freq:5},
{source: 72, target: 89, freq:7},
{source: 72, target: 91, freq:34},
{source: 72, target: 92, freq:33},
{source: 72, target: 93, freq:2},
{source: 72, target: 130, freq:2},
{source: 78, target: 78, freq:12},
{source: 78, target: 80, freq:24},
{source: 79, target: 80, freq:2},
{source: 80, target: 70, freq:18},
{source: 80, target: 78, freq:4},
{source: 80, target: 80, freq:13},
{source: 80, target: 81, freq:2},
{source: 80, target: 82, freq:101},
{source: 82, target: 70, freq:5},
{source: 82, target: 80, freq:100},
{source: 82, target: 82, freq:20},
{source: 84, target: 61, freq:19},
{source: 84, target: 78, freq:2},
{source: 84, target: 97, freq:2},
{source: 85, target: 70, freq:2},
{source: 89, target: 89, freq:2},
{source: 89, target: 93, freq:7},
{source: 89, target: 102, freq:2},
{source: 91, target: 90, freq:2},
{source: 91, target: 91, freq:2},
{source: 91, target: 93, freq:26},
{source: 91, target: 102, freq:19},
{source: 92, target: 24, freq:25},
{source: 92, target: 72, freq:30},
{source: 93, target: 20, freq:32},
{source: 93, target: 72, freq:23},
{source: 93, target: 91, freq:2},
{source: 93, target: 93, freq:10},
{source: 95, target: 97, freq:3},
{source: 96, target: 2, freq:27},
{source: 96, target: 53, freq:2},
{source: 96, target: 67, freq:3},
{source: 96, target: 70, freq:2},
{source: 96, target: 96, freq:40},
{source: 96, target: 103, freq:2},
{source: 96, target: 104, freq:2},
{source: 96, target: 136, freq:4},
{source: 97, target: 34, freq:16},
{source: 97, target: 96, freq:2},
{source: 97, target: 97, freq:24},
{source: 97, target: 100, freq:2},
{source: 97, target: 112, freq:2},
{source: 97, target: 138, freq:2},
{source: 99, target: 95, freq:2},
{source: 100, target: 97, freq:2},
{source: 102, target: 4, freq:2},
{source: 102, target: 7, freq:48},
{source: 102, target: 14, freq:2},
{source: 102, target: 47, freq:2},
{source: 102, target: 93, freq:21},
{source: 102, target: 102, freq:30},
{source: 102, target: 137, freq:2},
{source: 102, target: 143, freq:3},
{source: 102, target: 153, freq:2},
{source: 102, target: 163, freq:6},
{source: 102, target: 165, freq:15},
{source: 103, target: 61, freq:19},
{source: 103, target: 97, freq:2},
{source: 103, target: 103, freq:33},
{source: 103, target: 175, freq:2},
{source: 104, target: 34, freq:2},
{source: 104, target: 67, freq:11},
{source: 104, target: 97, freq:2},
{source: 112, target: 70, freq:2},
{source: 112, target: 84, freq:2},
{source: 112, target: 97, freq:4},
{source: 112, target: 143, freq:3},
{source: 113, target: 113, freq:2},
{source: 113, target: 125, freq:2},
{source: 113, target: 138, freq:3},
{source: 113, target: 144, freq:5},
{source: 117, target: 144, freq:2},
{source: 119, target: 121, freq:2},
{source: 120, target: 124, freq:2},
{source: 121, target: 119, freq:2},
{source: 121, target: 120, freq:2},
{source: 121, target: 121, freq:4},
{source: 121, target: 124, freq:11},
{source: 123, target: 121, freq:2},
{source: 124, target: 118, freq:2},
{source: 124, target: 121, freq:11},
{source: 124, target: 124, freq:6},
{source: 125, target: 113, freq:6},
{source: 125, target: 121, freq:2},
{source: 125, target: 125, freq:16},
{source: 126, target: 46, freq:2},
{source: 126, target: 126, freq:5},
{source: 127, target: 130, freq:2},
{source: 129, target: 129, freq:2},
{source: 130, target: 17, freq:53},
{source: 130, target: 72, freq:2},
{source: 130, target: 102, freq:3},
{source: 130, target: 127, freq:2},
{source: 130, target: 128, freq:2},
{source: 130, target: 130, freq:12},
{source: 130, target: 138, freq:4},
{source: 130, target: 143, freq:2},
{source: 130, target: 153, freq:4},
{source: 130, target: 154, freq:2},
{source: 130, target: 165, freq:6},
{source: 136, target: 103, freq:2},
{source: 136, target: 136, freq:83},
{source: 136, target: 137, freq:4},
{source: 136, target: 138, freq:4},
{source: 136, target: 143, freq:6},
{source: 136, target: 144, freq:7},
{source: 136, target: 145, freq:4},
{source: 136, target: 153, freq:2},
{source: 136, target: 156, freq:2},
{source: 136, target: 163, freq:81},
{source: 136, target: 165, freq:5},
{source: 136, target: 173, freq:14},
{source: 136, target: 174, freq:3},
{source: 137, target: 137, freq:2},
{source: 137, target: 97, freq:13},
{source: 137, target: 138, freq:3},
{source: 137, target: 143, freq:2},
{source: 137, target: 163, freq:5},
{source: 138, target: 7, freq:2},
{source: 138, target: 17, freq:7},
{source: 138, target: 67, freq:2},
{source: 138, target: 102, freq:2},
{source: 138, target: 104, freq:14},
{source: 138, target: 130, freq:3},
{source: 138, target: 136, freq:6},
{source: 138, target: 137, freq:5},
{source: 138, target: 138, freq:22},
{source: 138, target: 139, freq:2},
{source: 138, target: 143, freq:11},
{source: 138, target: 145, freq:4},
{source: 138, target: 163, freq:11},
{source: 138, target: 165, freq:6},
{source: 138, target: 166, freq:2},
{source: 139, target: 137, freq:3},
{source: 139, target: 143, freq:2},
{source: 141, target: 142, freq:2},
{source: 143, target: 112, freq:2},
{source: 143, target: 136, freq:70},
{source: 143, target: 138, freq:3},
{source: 143, target: 139, freq:3},
{source: 143, target: 143, freq:70},
{source: 143, target: 144, freq:7},
{source: 143, target: 145, freq:7},
{source: 143, target: 150, freq:2},
{source: 143, target: 152, freq:5},
{source: 143, target: 153, freq:3},
{source: 143, target: 163, freq:4},
{source: 144, target: 102, freq:2},
{source: 144, target: 113, freq:3},
{source: 144, target: 117, freq:2},
{source: 144, target: 136, freq:5},
{source: 144, target: 139, freq:2},
{source: 144, target: 143, freq:5},
{source: 144, target: 144, freq:10},
{source: 144, target: 145, freq:5},
{source: 144, target: 161, freq:3},
{source: 145, target: 130, freq:2},
{source: 145, target: 136, freq:14},
{source: 145, target: 138, freq:2},
{source: 145, target: 143, freq:4},
{source: 145, target: 145, freq:4},
{source: 150, target: 143, freq:2},
{source: 152, target: 143, freq:5},
{source: 152, target: 152, freq:2},
{source: 153, target: 17, freq:2},
{source: 153, target: 130, freq:48},
{source: 153, target: 136, freq:2},
{source: 153, target: 143, freq:4},
{source: 153, target: 153, freq:25},
{source: 153, target: 154, freq:3},
{source: 153, target: 155, freq:2},
{source: 153, target: 156, freq:25},
{source: 153, target: 165, freq:10},
{source: 154, target: 153, freq:4},
{source: 155, target: 17, freq:6},
{source: 155, target: 153, freq:4},
{source: 156, target: 153, freq:24},
{source: 156, target: 155, freq:6},
{source: 156, target: 156, freq:3},
{source: 161, target: 144, freq:2},
{source: 163, target: 7, freq:2},
{source: 163, target: 42, freq:2},
{source: 163, target: 102, freq:58},
{source: 163, target: 130, freq:3},
{source: 163, target: 136, freq:7},
{source: 163, target: 137, freq:2},
{source: 163, target: 138, freq:7},
{source: 163, target: 143, freq:2},
{source: 163, target: 153, freq:3},
{source: 163, target: 156, freq:2},
{source: 163, target: 163, freq:49},
{source: 163, target: 164, freq:6},
{source: 163, target: 165, freq:19},
{source: 163, target: 166, freq:10},
{source: 164, target: 143, freq:3},
{source: 164, target: 163, freq:3},
{source: 165, target: 7, freq:2},
{source: 165, target: 102, freq:8},
{source: 165, target: 130, freq:6},
{source: 165, target: 136, freq:3},
{source: 165, target: 138, freq:2},
{source: 165, target: 143, freq:4},
{source: 165, target: 153, freq:57},
{source: 165, target: 155, freq:3},
{source: 165, target: 156, freq:3},
{source: 165, target: 163, freq:9},
{source: 165, target: 165, freq:115},
{source: 165, target: 166, freq:6},
{source: 166, target: 102, freq:3},
{source: 166, target: 138, freq:2},
{source: 166, target: 163, freq:3},
{source: 166, target: 165, freq:10},
{source: 166, target: 166, freq:6},
{source: 172, target: 172, freq:3},
{source: 173, target: 0, freq:6},
{source: 173, target: 136, freq:8},
{source: 173, target: 173, freq:5},
{source: 174, target: 103, freq:15},
{source: 174, target: 174, freq:5},
{source: 174, target: 176, freq:4},
{source: 176, target: 103, freq:3},
]};
