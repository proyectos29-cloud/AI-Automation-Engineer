<h1>WideStep Landing Generator</h1>

<p>This project is a web-based automation engine designed to convert research inputs into conversion-ready listicle pre-landing pages ("advertorials"). The tool streamlines the end-to-end creation process, ensuring brand consistency and high performance.</p>

<h2>Prerequisites</h2>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> (v16 or higher recommended)</li>
    <li><a href="https://www.docker.com/">Docker</a> (optional, for containerized execution)</li>
</ul>

<h2>Setup & Execution</h2>
<h3>Option 1: Local Execution (Recommended)</h3>
<pre><code>npm install
node server.js</code></pre>
<p>Open your browser and navigate to <code>http://localhost:3000</code>.</p>

<h3>Option 2: Dockerized Execution</h3>
<pre><code>docker build -t widestep-generator .
docker run -p 3000:3000 widestep-generator</code></pre>

<h2>Key Architectural Decisions</h2>
<ul>
    <li><strong>Monolithic Node.js/Express Engine:</strong> Chosen for rapid orchestration of data inputs and template rendering.</li>
    <li><strong>Pragmatic Data Persistence:</strong> Uses a local JSON flat-file (<code>data/db.json</code>) for data storage. This design choice prioritizes <strong>deployment portability</strong> and <strong>zero-configuration setup</strong>.</li>
    <li><strong>CSS-First Resilience:</strong> Interactive UI elements (such as countdown timers) are built using CSS-only logic (<code>@keyframes</code>), ensuring 100% visual stability even if client-side JavaScript is restricted.</li>
    <li><strong>Modular Design:</strong> The application logic is decoupled, allowing for a seamless transition to a relational database if production traffic scales.</li>
</ul>

<h2>Project Structure</h2>
<ul>
    <li><code>/data</code>: Stores the JSON input research and the persistent <code>db.json</code> database.</li>
    <li><code>/public</code>: Houses generated static HTML files and site assets.</li>
    <li><code>/views</code>: Contains EJS templates for the Dashboard and Create pages.</li>
    <li><code>server.js</code>: The central Express.js controller.</li>
    <li><code>generator.js</code>: Core logic for parsing research JSON and rendering pages.</li>
</ul>

<h2>Loom Walkthrough</h2>
<p><a href="https://www.loom.com/share/[INSERT_YOUR_LOOM_LINK_HERE]">Watch the Walkthrough on Loom</a></p>