import { Box, Typography, Paper, Divider, Grid, Button } from '@mui/material';
import resumeDocx from '../assets/vkoval@gmail.com.Resume.docx';

export default function Resume() {
  return (
    <Box sx={{ px: '8px', py: 2 }}>
      <Paper elevation={2} sx={{ p: 4, borderRadius: '10px', backgroundColor: '#fff' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 800 }}>
                Vlad Koval
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                vkoval@gmail.com | MA
              </Typography>

              <Button
                href={resumeDocx}
                download="vkoval@gmail.com.Resume.docx"
                variant="outlined"
                size="small"
                sx={{ mt: 2 }}
              >
                Download Word
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>SUMMARY</Typography>
            <Typography variant="body1" sx={{ mt: 1, color: 'text.primary', whiteSpace: 'pre-line' }}>
              Enterprise level Application Development professional with working experience in Financial/Investment Management Software
              Industry. Proficient in application and database development with solid understanding of software architecture and design
              principles. Excellent problem-solving and debugging, communication and collaboration as well as customer support skills.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 700, mt: 3 }}>TECHNICAL SKILLS</Typography>
            <Box component="ul" sx={{ pl: 3, mt: 1 }}>
              <li><strong>Programming languages:</strong> C#, SQL, PL/SQL, VB.NET, VB6, VB Script, JavaScript, CSS, HTML</li>
              <li><strong>Technologies:</strong> .NET Core 9, WPF, gRPC, Web API, WinForms, WebForms, WCF/Windows Services, ADO.NET, LINQ, Blazor, ASP.NET Web Services, ASP, IBM and MS MQ, ASP.NET Core, REST API, React, Infragistics Controls, Crystal Reports, SSRS Reports, SOAP, JSON, XML, MSTest, DataDog</li>
              <li><strong>Databases:</strong> SQL Server, Oracle, Sybase, InterSystems Cache</li>
              <li><strong>Development Tools:</strong> MS Visual Studio, SQL Server Management Studio, Rapid SQL, Toad for Oracle, MS Visio, IIS, SMTP, VS Code</li>
              <li><strong>CI/CD Software:</strong> Azure DevOps, TeamCity, Git, BitBucket, Jira, Confluence, Jenkins, Nexus, UrbanCode Deploy, SonarQube, TFS</li>
              <li><strong>Methodology/Architecture:</strong> Agile, Scrum, Waterfall, Microservices, Plugins, MVVM, MVC, API, Dependency Injection</li>
              <li><strong>APIs/Libraries:</strong> Charles River API/Plugins, Fincad API, MS Entity Framework</li>
              <li><strong>Trading Systems:</strong> Charles River IMS, HelioGraph, Omgeo Oasys/CTM</li>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 700, mt: 3 }}>EXPERIENCE</Typography>

            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Senior Software Developer | Dynamo Software, Watertown, MA | 2024 – 2025</Typography>
              <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                <li>Communicated with project managers, product owners and development team to facilitate understanding of deliverables, estimates, and prioritization for ASP.NET Core FinTech Research and Portfolio Management SaaS platform solving challenges across the alternative investment landscape.</li>
                <li>Delivered Composite benchmarks feature to automatically populate synthetic benchmark values based on the weighted combination of constituent index values (C#, SQL Server).</li>
                <li>Developed Dynamic benchmarks for LP clients to compare the performance of their portfolio to the return of a benchmark which automatically took into consideration the changing weight of investment asset classes during the holding period. Created composite investment for each asset class in the account so users could assign a primary benchmark to it and use its portfolio NAV % to reflect exposure category weight for a specific period.</li>
                <li>Implemented What-if scenario module which calculated projected portfolio exposures based on selected cash flow and statistics models. The feature took into account not only existing investment positions but also the impact of hypothetical future transactions (ASP.NET Core, REST API, JavaScript).</li>
                <li>Created and executed unit tests to ensure the robustness and reliability of the application. Worked closely with QA team to identify issues and devise solutions to them (MSTest).</li>
                <li>Provided resolution for tenant issues reported by client support and deployment teams from production and staging application slots.</li>
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Software Engineering Architect | MFS Investment Management, Boston, MA | 2007 – 2023</Typography>
              <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                <li>Collaborated with other developers, business analysts, and stakeholders to gather requirements and ensure successful migration of Portfolio Modelling Tool into .Net Core trading application responsible for sending 80% of company stock orders to Charles River Investment Management System running in Azure.</li>
                <li>Took the lead in designing, architecting, and developing authorization, health check, emailing, client logging, performance recording and data retrieval of Grpc/Web API microservices for the new Modelling Tool.</li>
                <li>Following best practices and coding standards implemented generic service API libraries, logging and rule engine components to be utilized in .Net Core services and new Modelling client.</li>
                <li>Contributed to the design and architecture of new Modelling Tool screens and workflows, implemented user input validation and business logic functions.</li>
                <li>Worked on integration of model approval process with MS Teams located in Azure so portfolio managers can approve or deny portfolio rebalance scenarios.</li>
                <li>Led the development of the Mfs Order Management system (MOM) designed for investment portfolio managers and specialists to check pre-trade compliance, validate brokers for IPO orders and send tickets to the CRD trading system (C#).</li>
                <li>Developed functionality allowing creation and execution of Total Return and Interest Rate Swaps in MOM for portfolio managers and traders. Incorporated IPO Deals functionality into MOM in order to standardize the Limited Offering order creation process. Enabled options trading in MOM to make the orders for this asset class a subject to pre-trade compliance.</li>
                <li>Built robust, performant, and scalable ASP.NET Web services for trading client applications to report the status of nightly jobs, execute pre-trade compliance checks, provide user authentication.</li>
                <li>Worked on the company wide initiative of integrating in-house order management client applications into newly adopted CRD Trading System. That included routing equity orders to CRD, performing compliance rule checks in the new trading system and overriding those rules.</li>
                <li>Created and improved WCF ETL services used to enable the flow of issuers, orders and unavailable shares into CRD Trading system. Worked on identifying split/merged CRD orders. (IBM MQ, C# Windows service, CRD API, Oracle).</li>
                <li>Designed and implemented Portfolio Manager Approval and Plugin services along with several UI add-ins to customize CRD Workbench order modelling. In the process created CRD result sets and workflow rules for trading data retrieval and updates, configured portfolio manager/specialist trading blotter layouts.</li>
                <li>Using clean, efficient, and maintainable coding techniques developed a module which provided notifications and approval process for orders created as a result of the Asset Mix re-balance exercise.</li>
                <li>Developed SSRS reports with complex compliance and audit related SQL. Created and improved financial data retrieval and persistence stored procedures for in-house orders management systems.</li>
                <li>Trying to stay up-to-date with industry trends and technologies designed and put into action Media Gallery single page web application for effective browsing and search of photo and video content (React, .NET Core Web API).</li>
                <li>Assisted in troubleshooting/resolution of production issues and ad-hoc data requests coming from the equity trading desk. Provided support for regular disaster recovery exercises, nightly and holiday cycles.</li>
                <li>Participated in trading systems upgrades. Ensured compatibility of order management systems with the latest operating systems and database drivers. Maintained high level of security protection by regular password changes for generic database accounts.</li>
                <li>Applied fundamentals and principles of agile development by participating in scrum meetings, helping to slice work into Jira stories, filling the backlog with new issues and updating their status on the board as the features are progressing, preparing completed work presentations at the end of each sprint and participating in lessons learned discussions.</li>
                <li>Created setup projects in Visual Studio, built installation files using Jenkins, helped release engineering deploy application releases into test and production environments using UrbanCode Deploy.</li>
                <li>Focused on product quality and risk mitigation by addressing issues discovered by SonarQube and IBM AppScan Jenkins plugins.</li>
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Internet Developer | PG Calc Incorporated, Cambridge, MA | 2000 – 2007</Typography>
              <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                <li>Ported ASP commercial charitable deduction calculator (GiftCalcs) to ASP.NET object-oriented application. Completely redesigned UI and replaced the database provider (ASP.NET, C#, JavaScript, HTML, SQL Server).</li>
                <li>Integrated gift presentation slideshow (GiftStory) into GiftCalcs (ASP.NET, Flash). Extended GiftCalcs admin features by adding templated email broadcaster (C#, Windows service).</li>
                <li>Implemented Windows service configurable from the OS system tray for handling bulk email files (VB.NET).</li>
                <li>Created GiftCalcs database diagrams, documented solution and SQL objects. Developed GiftCalcs InstallShield project and data migration application for rapid deployment to production server.</li>
                <li>Designed and implemented charitable deductions Batch Calculator capable of importing a file and producing a spreadsheet of computed results.</li>
                <li>Worked in the team of several programmers to migrate a gift planning administration product (GiftWrap) from the procedural into object-oriented application (VB6, SQL Server).</li>
                <li>Developed a component to merge GiftWrap database records with the templated PDF tax forms (FDF Toolkit, Adobe Acrobat).</li>
                <li>Created Database Manager tool for the customers using MSDE database engine to create users, backup and restore databases (VB6, SQLDMO, OSQL).</li>
                <li>Maintained GiftWrap InstallShield project that included several third party modules.</li>
                <li>Programmed desktop and web tools for batch generation of GiftWrap authorization codes.</li>
                <li>Handled GiftWrap and MSDE installation support issues, resolved application conflict situations and SQL Server connectivity problems, troubleshooted product setup and performance in various system/network configurations.</li>
                <li>Developed commercial application to merge GiftWrap databases (C#, SQL Server, HTML).</li>
                <li>Implemented company web site resources section, schedule of conferences, planned giving training service calendar and session registration section. Maintained employee sign-in scheduler (ASP).</li>
                <li>Extended company site shopping capabilities to promote new products and introduce discounted prices for the existing ones.</li>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ fontWeight: 700 }}>EDUCATION</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>B.A. in English Language and Literature | Zaporizhzhia State University, Ukraine</Typography>
            <Typography variant="body1">Contemporary Applications Development Certification | Computer Learning Center, MA</Typography>

            <Typography variant="h6" sx={{ fontWeight: 700, mt: 3 }}>CERTIFICATIONS</Typography>
            <Box component="ul" sx={{ pl: 3, mt: 1 }}>
              <li>Oracle University — Analytic SQL for Data Warehousing</li>
              <li>Pluralsight — Build Rich Web Applications with C# using Blazor</li>
              <li>Pluralsight — Building a RESTful API with ASP.NET Core</li>
              <li>Pluralsight — Building an Async API with ASP.NET Core</li>
              <li>Pluralsight — Dependency Injection in ASP.NET Core</li>
              <li>Pluralsight — Front-End Web Development With HTML5, CSS, and JavaScript</li>
              <li>Pluralsight — Implementing Advanced RESTful Concerns with ASP.NET Core</li>
              <li>Pluralsight — JavaScript Objects and Prototypes</li>
              <li>Pluralsight — React - The Big Picture</li>
              <li>Pluralsight — Using gRPC in ASP.NET Core</li>
              <li>Pluralsight — WPF MVVM in Depth</li>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
