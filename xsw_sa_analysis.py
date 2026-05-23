"""XSW per-name situational-awareness thesis pass (deep version).

Schema per holding:
    (ticker, name, weight%, score, confidence, business, thesis_fit, uncertainty)

Score:        -2 strong CON .. +2 strong PRO
Confidence:   H (high), M (medium), L (low – flag)

Thesis (Aschenbrenner, June 2024): scaling + algorithmic progress reach
near-AGI by ~2027 and superintelligence by ~2030, driving trillions of
$ into compute / power / data-centers, AI agents becoming drop-in remote
workers across knowledge work, and AI becoming a top-tier national-
security priority. PRO = picks-and-shovels (chips, EDA, power, data-
center, observability, security) and AI-native apps that compound as
models scale. CON = SaaS whose moat is a human workflow that a competent
agent can simply execute.
"""

# Deep per-name pass. Numbered for easy reference (1..138).
HOLDINGS = [
# 1
("AIP",  "Arteris",                 1.616, +2, "M",
 "Network-on-chip (NoC) and SoC integration IP licensed to chip designers.",
 "Every modern AI accelerator (NVDA, custom hyperscaler silicon, automotive ADAS SoCs) needs on-die interconnect — Arteris's IP is increasingly designed into AI/ML SoCs. Revenue is licenses-then-royalties: license growth leads, royalties follow with a multi-year lag, so the upside is in the back half of the SA buildout.",
 "Small-cap with concentrated customer base; royalty ramp could slip."),
# 2
("HUT",  "Hut 8",                   1.447, +1, "M",
 "BTC miner with AI/HPC pivot via Highrise AI JV.",
 "Owns large blocks of cheap power and re-developable sites. Pivot to GPU hosting is real but small as a % of revenue today; trade is on power-asset re-rating, not on existing AI revenue.",
 "Pivot still mostly narrative; balance-sheet capacity to build out is the gating factor."),
# 3
("DDOG", "Datadog",                 1.202, +2, "H",
 "Cloud observability platform (infra/APM/logs/security/LLM observability).",
 "LLM Observability product launched 2024; AI customers spend more (more services, more metrics, more cost-anxiety). Every AI build-out drives Datadog seats.",
 "AI-customer cohort growth is the bull case; if hyperscalers' own observability tools compete it caps upside."),
# 4
("RIOT", "Riot Platforms",          1.161, +1, "M",
 "Pure-play BTC miner, large Texas footprint.",
 "Power assets are SA-thesis adjacent (same physical asset hyperscalers want), but management has stayed more BTC-focused than HUT/WULF/CORZ. Optionality, not commitment.",
 "Could pivot or could double-down on BTC; depends on BTC price and management."),
# 5
("AUR",  "Aurora Innovation",       1.133, +1, "M",
 "Autonomous trucking, launched commercial driverless ops late 2024.",
 "Pure applied AI — capability gains in foundation models and perception directly help robotaxi/robo-truck economics. Pre-profit and dilutive.",
 "Dilution risk + slow scale-up; binary outcome on safety/commercial scaling."),
# 6
("CLSK", "CleanSpark",              1.129,  0, "M",
 "Pure-play BTC miner, no announced material AI/HPC pivot.",
 "Owns power and sites but management is committed to BTC. Less SA-thesis exposure than the pivoting peers.",
 "Could announce a pivot — would re-rate immediately. (Revised from +1)"),
# 7
("MARA", "MARA Holdings",           1.114, +1, "M",
 "Largest US BTC miner by hash, talked about HPC but mostly BTC-focused.",
 "Owns enormous power but allocation to AI/HPC is small. Trade is mostly BTC-correlated.",
 "Pivot announcements would re-score; without them this is effectively a BTC proxy."),
# 8
("FTNT", "Fortinet",                1.090, +1, "H",
 "Network security – firewalls, SD-WAN, SASE; ASIC-led hardware moat.",
 "Cybersec spend is structurally higher in an AI-led nat-sec posture. Fortinet's ASIC moat is more durable than pure-software peers because price/performance matters in network security.",
 "Macro on security spend (cyclical), and AI-on-AI offense/defense arms race."),
# 9
("PANW", "Palo Alto Networks",      1.078, +1, "H",
 "Cybersec platform – firewalls + Prisma SASE + Cortex XSIAM/AI ops.",
 "Cortex XSIAM is one of the larger AI-on-security products in production. Platform consolidation play also benefits from CISO budget concentration.",
 "Heavy stock-comp dilution + valuation already pricing some AI-on-security premium."),
# 10
("CIFR", "Cipher Mining",           1.072,  0, "M",
 "BTC miner; has talked HPC but is not as far along as WULF/CORZ.",
 "Power-asset optionality only; no material AI/HPC revenue yet.",
 "(Revised from +1) Would re-score if they announce an AI HPC anchor tenant."),
# 11
("WULF", "TeraWulf",                1.059, +2, "M",
 "BTC miner with explicit AI/HPC commitment – 72.5MW signed contracts (e.g. Core42).",
 "One of the two cleanest miner-to-AI pivots: signed customer, multi-year contracted MW, separate AI subsidiary.",
 "Customer concentration risk; execution on power delivery."),
# 12
("CORZ", "Core Scientific",         1.055, +2, "H",
 "Post-bankruptcy operator hosting CoreWeave (~$3.5B contracted revenue).",
 "Effectively a CoreWeave landlord — direct play on AI-training capacity demand. Long-dated take-or-pay revenue from a hyperscaler-adjacent counterparty.",
 "Counterparty risk on CoreWeave itself; capex requirements to deliver more MW."),
# 13
("CRWD", "CrowdStrike",             1.031, +1, "H",
 "Cloud-native endpoint security + Falcon platform + Charlotte AI.",
 "AI-native EDR/XDR; Charlotte AI agent for SOC. Platform consolidation winner alongside PANW.",
 "Post-2024 outage residual reputational drag; competitive intensity in EDR."),
# 14
("CRNC", "Cerence",                 0.972,  0, "M",
 "Embedded automotive voice AI / in-car assistant.",
 "Applied AI but OEMs increasingly bring voice in-house (Mercedes-MBUX-MBOS, BMW with Amazon, etc.). Squeezed by Soundhound on one side, OEM in-house on the other.",
 "Could be -1 if OEM insourcing accelerates; license footprint protects near term."),
# 15
("YOU",  "CLEAR Secure",            0.959,  0, "M",
 "Biometric identity (airport + venue + healthcare).",
 "Network/distribution moat, not an AI play. AI-driven fraud could increase demand for biometric ID; AI-driven synthetic biometrics could erode it.",
 "Mixed AI exposure – net effect unclear."),
# 16
("QBTS", "D-Wave Quantum",          0.957,  0, "L",
 "Quantum annealing systems and cloud service.",
 "Hype-name. Quantum annealing is not on the SA timeline – AGI by 2027-2030 is a classical-compute story, not a quantum one. (Revised from +1.)",
 "Could re-rate on any quantum-advantage announcement, regardless of relevance."),
# 17
("ATEN", "A10 Networks",            0.950,  0, "M",
 "Networking, DDoS protection, load-balancers.",
 "Tangential. Some uplift from AI-driven traffic / DDoS volumes but not a primary beneficiary.",
 "Modest cyclical exposure."),
# 18
("RAMP", "LiveRamp",                0.931,  0, "M",
 "Ad-tech identity resolution / data collaboration.",
 "Mixed: cookieless world should help; AI-driven ad targeting could either consolidate to walled gardens (bad for LiveRamp) or push more middleware demand (good).",
 "Adtech regime change is the real driver, not SA thesis."),
# 19
("CVLT", "Commvault",               0.921, +1, "H",
 "Data protection and cyber-recovery platform.",
 "AI multiplies data volumes and increases ransomware blast radius — both drive backup/recovery spend. Cyber-recovery suite (post-ransomware restore) is a structural tailwind.",
 "Competitive vs Rubrik/Cohesity; execution risk on cloud transition."),
# 20
("FIVN", "Five9",                   0.915, -2, "H",
 "Cloud contact-center (CCaaS).",
 "The canonical AI-agent target: voice/chat agents can handle T1 customer service. Five9 has launched 'Five9 Genius AI' to defend but the underlying labor pool they replace is shrinking.",
 "Could survive as the *platform* for voice agents – but seat-based pricing is fundamentally threatened."),
# 21
("PRCH", "Porch Group",             0.902, -1, "M",
 "Home-services + home-insurance vertical SaaS.",
 "Small, fragile, recently leverage-stressed. Vertical SaaS to a fragmented SMB base — workflow can be commoditized.",
 "Idiosyncratic balance-sheet risk dominates the AI story."),
# 22
("S",    "SentinelOne",             0.899, +1, "H",
 "AI-native endpoint security; Purple AI assistant.",
 "Smaller cousin of CrowdStrike. AI-on-security tailwind, but distant #3 in EDR; margins still bleed.",
 "Path to profitability + market-share defense."),
# 23
("U",    "Unity Software",          0.896,  0, "M",
 "Game engine + ad-tech (post Levelplay).",
 "Gen-AI for game content cuts both ways: helps Unity dev productivity but threatens content-creation moat. Ad-tech segment is more clearly competitive vs APP.",
 "Real fork in outcomes; could be +1 or -1 depending on Muse adoption."),
# 24
("VRNS", "Varonis",                 0.895, +1, "M",
 "Data security posture management (DSPM) / unstructured-data security.",
 "AI multiplies the surface area of sensitive data (every employee LLM prompt is a leak vector). DSPM is one of the cleanest 'AI-creates-this-problem' security categories.",
 "SaaS transition execution + competition from cyber platforms."),
# 25
("ZM",   "Zoom",                    0.894, -1, "H",
 "Video conferencing + AI Companion + (small) contact center.",
 "Core video product is commoditized; AI Companion is being given away rather than monetized. Contact-center entry into FIVN territory is too small to matter.",
 "Buybacks and FCF provide a floor; thesis is just that growth doesn't come back."),
# 26
("NN",   "NextNav",                 0.892,  0, "L",
 "Terrestrial PNT (positioning/timing) spectrum holder lobbying for FCC reallocation.",
 "Spectrum policy story – orthogonal to SA thesis.",
 "Driven by FCC decisions, not AI."),
# 27
("BRZE", "Braze",                   0.873, -1, "M",
 "Customer engagement / cross-channel marketing.",
 "Marketing workflow SaaS – agents will increasingly compose campaigns directly. Braze has shipped AI features but pricing is per-MAU, not seat, so disruption mechanics are different.",
 "Could prove more resilient than seat-based marketing tools."),
# 28
("TENB", "Tenable",                 0.863, +1, "H",
 "Vulnerability + exposure management.",
 "AI both creates new attack surface and accelerates discovery — exposure-management category structurally grows.",
 "Slower-growth incumbent vs newer cloud-security plays."),
# 29
("CDNS", "Cadence Design Systems",  0.857, +2, "H",
 "EDA tools, IP, and computational software for chip design.",
 "Every AI accelerator and every hyperscaler-custom chip flows through Cadence (and SNPS). Duopoly with structural pricing power. AI-on-EDA (Cerebrus, JedAI) is a real productivity layer.",
 "Concentration in advanced-node spend; geopolitical risk on China revenue."),
# 30
("TDC",  "Teradata",                0.844, -1, "H",
 "Legacy MPP data warehouse, hybrid-cloud rewrite.",
 "Losing share to Snowflake/Databricks/BigQuery; AI use cases require modern lakehouse stack. Cloud transition has been slower than peers.",
 "PE/take-private optionality from the cheap valuation."),
# 31
("MSTR", "Strategy (MicroStrategy)",0.838,  0, "H",
 "BTC treasury vehicle with a small legacy BI software business.",
 "Trades on BTC NAV premium; tangential to AI thesis.",
 "Effectively a BTC-leveraged equity proxy."),
# 32
("BTBT", "Bit Digital",             0.837, +2, "M",
 "BTC miner with Enovum acquisition – aggressive AI/HPC pivot.",
 "Enovum gives them an immediate AI-data-center foothold (Montreal liquid-cooled). Of the smaller miners, the clearest pivot.",
 "Capital intensity + AI customer concentration."),
# 33
("OSPN", "OneSpan",                 0.833,  0, "M",
 "Digital agreements + authentication (legacy e-sign + Vasco).",
 "Authentication side benefits from AI fraud arms race; e-sign side competes with DOCU's downward pressure.",
 "Small-cap with restructuring story."),
# 34
("APPS", "Digital Turbine",         0.832, -1, "M",
 "Mobile app installs / on-device ad tech.",
 "Adtech is consolidating to AI-driven walled gardens (AppLovin Axon, Meta Andromeda). Digital Turbine is sub-scale.",
 "Highly cyclical mobile-spend exposure."),
# 35
("GEN",  "Gen Digital",             0.822,  0, "H",
 "Consumer cybersecurity – Norton, Avast, LifeLock, AVG, MoneyLion.",
 "AI-fraud arms race grows the TAM (synthetic ID, deepfake scams), but consumer security is also commoditized via OS-level defenses. Net wash.",
 "Subscriber retention + Avast cross-sell."),
# 36
("NTNX", "Nutanix",                 0.822,  0, "M",
 "Hyperconverged infra for hybrid/on-prem cloud.",
 "Some AI tailwind from on-prem AI inference / sovereign clouds; faces commoditization pressure from hyperscaler-native and Broadcom-VMware consolidation.",
 "Could shift to +1 if sovereign-AI on-prem becomes a real category."),
# 37
("SNPS", "Synopsys",                0.818, +2, "H",
 "EDA + IP – DesignWare + Ansys (post-merger) for multi-physics.",
 "Same duopoly thesis as CDNS, with the Ansys add adding chip-to-system simulation – critical for AI accelerators where thermal/power co-design matters.",
 "Ansys integration; China revenue exposure."),
# 38
("ORCL", "Oracle",                  0.818, +2, "H",
 "Databases + OCI cloud + applications. OCI is the breakout AI-training cloud (Stargate involvement).",
 "RPO crossed $130B+ on AI training contracts; capacity-constrained, not demand-constrained. One of the cleanest SA picks among mega-caps.",
 "Capex digestion; profitability of low-margin AI-training revenue."),
# 39
("FRSH", "Freshworks",              0.797, -2, "H",
 "SMB-focused CRM, ITSM, customer support SaaS.",
 "Core support-desk product is exactly what AI agents replace first. Freshworks has shipped Freddy AI but seat economics break before AI revenue scales.",
 "Could pivot to outcome-based pricing; balance-sheet allows experimentation."),
# 40
("ADEA", "Adeia",                   0.795,  0, "M",
 "Semiconductor + media IP licensing (Xperi spin-out).",
 "Licensing-based moat; tangential to SA thesis. Some semi-IP relevance but not in the AI critical path.",
 "Patent-litigation outcomes drive returns."),
# 41
("TTWO", "Take-Two Interactive",    0.793,  0, "M",
 "Games – Rockstar (GTA), 2K, Zynga.",
 "Gen-AI cuts both ways for games: lowers production cost (helpful), erodes IP scarcity (harmful). GTA VI cycle dominates short-term.",
 "Cycle dynamics overwhelm AI thesis for 2–3 years."),
# 42
("RBRK", "Rubrik",                  0.792, +1, "M",
 "Cyber-recovery + data security platform.",
 "Same thesis as Commvault but cloud-native and faster-growing. AI doubles down on data-security-meets-resilience narrative.",
 "FCF transition + competitive intensity vs Commvault, Cohesity."),
# 43
("WEAV", "Weave Communications",    0.790, -1, "M",
 "Comms platform for SMB healthcare/dental practices.",
 "Vertical-SMB SaaS – exactly the layer where embedded AI agents in horizontal voice platforms substitute the workflow.",
 "Could survive in vertical niches with deep practice-management integration."),
# 44
("SPT",  "Sprout Social",           0.783, -1, "M",
 "Social-media management for mid-market enterprises.",
 "AI-native content + scheduling tools commoditize the basic workflow; enterprise governance features hold for now.",
 "Could be -2 in 18 months."),
# 45
("ZS",   "Zscaler",                 0.782, +1, "H",
 "Cloud security – ZTNA, SWG, CASB; building data-protection platform.",
 "SASE/SSE consolidation winner; AI data-protection a natural extension.",
 "Decelerating growth; competition vs Netskope/PANW/CSCO."),
# 46
("GTLB", "GitLab",                  0.778,  0, "M",
 "DevSecOps platform; Duo AI assistant.",
 "AI-coding agents shift value from IDE to platform — could benefit GitLab as the workflow substrate, or marginalize it if Copilot/Cursor extend.",
 "Duo monetization is the key swing factor."),
# 47
("AGYS", "Agilysys",                0.771, -1, "M",
 "Hospitality SaaS – PMS, POS, F&B.",
 "Vertical workflow SaaS for hotels/casinos; sticky integration moat partially insulates but core staff-facing UI is replaceable.",
 "Vertical moats hold longer than horizontal."),
# 48
("TEAM", "Atlassian",               0.766, -1, "H",
 "Jira / Confluence / Bitbucket + Rovo AI.",
 "Software-team collaboration directly in the crosshairs of AI-coding workflows (Cursor, Copilot agents). Rovo and Loom acquisition are partial hedges but core seat-based Jira economics are at risk.",
 "Could be -2 if AI-coding flows route around tickets/PRs entirely."),
# 49
("RNG",  "RingCentral",             0.764, -2, "H",
 "UCaaS – cloud phones, meetings, contact center.",
 "Cloud telephony is commodity; voice-AI agents directly subtract from per-seat economics; Microsoft Teams Phone is taking enterprise share.",
 "Buybacks and FCF support price floor; growth story is gone."),
# 50
("SOUN", "SoundHound AI",           0.751, +1, "M",
 "Voice AI for restaurants, automotive, IoT.",
 "Pure-play applied voice AI; competing with Cerence (auto) and big-tech (everywhere else).",
 "Heavy dilution + execution risk; meme-name volatility."),
# 51
("GDYN", "Grid Dynamics",           0.749,  0, "M",
 "Digital engineering services with AI-engineering focus (Pythia LLM, multiple AI pods).",
 "Smaller IT-services name actively repositioning as AI-native consulting. Less obviously in the disrupted bucket than CTSH/EPAM/ACN. (Revised from -1.)",
 "Could go either way: AI-native services could win or commoditize."),
# 52
("FICO", "Fair Isaac",              0.741, +1, "H",
 "FICO Score (regulated US credit-score monopoly) + decisioning platform.",
 "Score business is a regulated toll – AI is irrelevant to its moat. Platform business benefits from AI/ML decisioning adoption. (Revised from 0.)",
 "Pricing-power regulatory backlash is the only meaningful downside."),
# 53
("APP",  "AppLovin",                0.740, +2, "H",
 "Mobile ad tech – Axon AI ad-targeting engine + AppDiscovery.",
 "Axon is one of the highest-ROI deployed AI systems in public markets — pure machine-learning attribution/targeting at scale, e-commerce expansion adds TAM.",
 "Audit / data-source disclosure risk; rich valuation."),
# 54
("DBX",  "Dropbox",                 0.740, -2, "H",
 "File sync + share; Dash (AI-search) and FormSwift adjacencies.",
 "Core sync product is the canonical AI-commoditized utility — every LLM and every OS is bundling 'find your file by semantic query.' Dash has not gained scale.",
 "Buybacks float the price; FCF is real."),
# 55
("MITK", "Mitek Systems",           0.738,  0, "M",
 "Mobile check deposit + identity verification.",
 "Check-deposit is structurally declining; identity side benefits from fraud arms race but faces well-funded AI-native ID competitors.",
 "Activist / take-private optionality."),
# 56
("CWAN", "Clearwater Analytics",    0.737,  0, "M",
 "Investment accounting + reporting SaaS for asset managers/insurers.",
 "Sticky vertical accounting workflow; AI agents could automate some workflows but compliance/audit requirements limit autonomy.",
 "Slow but defensible."),
# 57
("QLYS", "Qualys",                  0.733, +1, "M",
 "Cloud-based vulnerability + compliance scanner.",
 "Slower-growing vuln-mgmt incumbent; benefits from cybersec budget growth but losing share to Tenable / Wiz-style cloud-security platforms.",
 "Slower-growth penalty offsets SA tailwind."),
# 58
("DT",   "Dynatrace",               0.733, +1, "H",
 "Observability platform – Davis AI for AIOps.",
 "Smaller cousin of Datadog; AIOps positioning resonates with AI infra ops teams.",
 "Subscription transition complete; competing with DDOG and hyperscaler-native tools."),
# 59
("RDVT", "Red Violet",              0.729,  0, "L",
 "Identity / data analytics (idiCORE for collections, fraud, due diligence).",
 "Niche data-services play; not a primary AI beneficiary.",
 "Small-cap with limited float."),
# 60
("MSFT", "Microsoft",               0.728, +2, "H",
 "Azure cloud (incl. Azure OpenAI), Office Copilot, Windows, Dynamics, GitHub Copilot.",
 "The single largest direct equity beneficiary of the SA thesis: hyperscaler compute, frontier-model partnership, agent-distribution channel into every enterprise seat.",
 "OpenAI relationship dynamics; capex digestion cycle."),
# 61
("BOX",  "Box",                     0.724, -1, "M",
 "Enterprise content management + Box AI.",
 "Similar to DBX but more enterprise-skewed; governance/compliance moat is partial protection. Box AI exists but is not a category-defining product.",
 "Take-private / strategic-sale optionality."),
# 62
("ACIW", "ACI Worldwide",           0.721,  0, "M",
 "Real-time payments + biller solutions software.",
 "Payments rails are AI-neutral; modest fraud/AI tailwind.",
 "Slow-growth utility."),
# 63
("DOCU", "DocuSign",                0.717, -2, "H",
 "E-signature + agreement management (IAM platform).",
 "The signature step itself isn't going away, but the unbundling of the contracting workflow into agent-driven flows (where signature is just an API call) erodes pricing power. IAM pivot is real but slow.",
 "Buybacks and FCF support floor; not a near-term zero."),
# 64
("ESTC", "Elastic",                 0.716, +1, "M",
 "Elasticsearch + observability + security; vector search for RAG.",
 "Vector-search RAG positioning is real – Elastic is in many AI-app reference stacks. Observability and SIEM segments add diversification.",
 "Open-source pressure (OpenSearch fork) caps pricing."),
# 65
("CRCL", "Circle Internet Group",   0.716,  0, "M",
 "USDC stablecoin issuer.",
 "Orthogonal to AI thesis. AI-driven payments narrative is speculative.",
 "Stablecoin regulation drives the equity, not AI."),
# 66
("IBM",  "IBM",                     0.715, +1, "H",
 "Hybrid cloud + Red Hat + Watsonx + Consulting (post-Kyndryl, post-HashiCorp).",
 "Consulting backlog tied to enterprise AI migrations; Watsonx Code Assistant + AI assistants land in enterprises that won't run frontier-cloud workloads. Slower beta but real exposure.",
 "Execution; AI-on-consulting is also AI-disrupting consulting (own product cannibalizes own services)."),
# 67
("BBAI", "BigBear.AI",              0.713, +2, "M",
 "Defense + intel AI – mission analytics, biometrics, vision.",
 "Textbook SA-thesis equity: government-AI exposure, defense customer concentration. Small, speculative.",
 "Lumpy government revenue; meme-name volatility."),
# 68
("EA",   "Electronic Arts",         0.710,  0, "H",
 "Games – sports franchises (FC, Madden, NHL), Apex.",
 "Sports licenses are an annuity. Gen-AI both reduces dev cost and threatens IP scarcity. Net wash on a 2–3-year horizon.",
 "PE buyout reports in late 2025/2026 dominate near-term move."),
# 69
("RPD",  "Rapid7",                  0.709, +1, "M",
 "Cybersec – MDR + Insight platform.",
 "Smaller, slower cybersec play; benefits from sector tailwind but losing share narrative.",
 "Margin/FCF story rather than growth."),
# 70
("AI",   "C3.ai",                   0.708, +1, "M",
 "Enterprise AI application platform + vertical apps.",
 "Pure-play enterprise AI; sales-cycle and revenue-recognition history have been rough. Federal pipeline is real.",
 "Persistent execution risk; high SBC; concentration in federal contracts."),
# 71
("NCNO", "nCino",                   0.705, -1, "M",
 "Banking-vertical cloud SaaS for loan origination.",
 "Vertical bank workflow SaaS – not first in the AI crosshairs but moat is process, not data, so erodes over time.",
 "Cross-sell + international expansion are partial offsets."),
# 72
("ZETA", "Zeta Global",             0.696,  0, "M",
 "Marketing technology platform with first-party data + AI.",
 "Mid-market marketing automation with AI veneer; competing with much larger CDP/marketing platforms.",
 "Disclosure/audit history; growth + margin combination is unusual for category."),
# 73
("IT",   "Gartner",                 0.689, -1, "H",
 "IT research subscriptions + consulting + conferences.",
 "Research-and-summarize is exactly what LLMs do well. Gartner's vendor-evaluation moat is real but the basic-research tier of demand is most exposed.",
 "Conference + consulting partially insulated; analyst-relationship moat persistent."),
# 74
("AVPT", "AvePoint",                0.680,  0, "M",
 "Microsoft 365 management/governance/migration.",
 "Tied to M365 footprint; AI uplift comes from Copilot governance/security but offset by Microsoft-native tooling competition.",
 "Microsoft-relationship dependence."),
# 75
("PD",   "PagerDuty",               0.672,  0, "M",
 "Incident response + AIOps.",
 "On-call routing automation could be AI-driven directly, but is also a natural AI-agent hosting platform. Net wash.",
 "Slowing growth + competitive intensity."),
# 76
("NTSK", "Netskope",                0.671, +1, "M",
 "SASE / cloud security; new IPO.",
 "SASE consolidation winner alongside ZS/PANW; AI-data-protection extension.",
 "Lockup expiries; competitive intensity."),
# 77
("ADSK", "Autodesk",                0.670,  0, "H",
 "CAD/AEC/M&E – AutoCAD, Revit, Fusion 360, Maya.",
 "Generative design is real but the moat is the construction-document workflow and ecosystem, not the geometry kernel. Limited near-term AI threat.",
 "Activist/margin story dominates."),
# 78
("KD",   "Kyndryl",                 0.670, -1, "M",
 "IBM infrastructure-services spin-out.",
 "Old-school IT services / managed infra – directly in path of AI labor substitution.",
 "Margin expansion story is the bull case independent of AI."),
# 79
("SAIL", "SailPoint",               0.668, +1, "M",
 "Identity governance & administration (IGA).",
 "AI accelerates the proliferation of non-human identities (agents, service accounts) – directly increases IGA TAM.",
 "Re-IPO float dynamics."),
# 80
("IOT",  "Samsara",                 0.661, +1, "H",
 "Connected fleet + industrial IoT + AI-on-video safety.",
 "Sensor + AI in the physical world – exactly the applied-AI category that benefits from cheaper inference.",
 "Valuation already prices in long-runway."),
# 81
("MANH", "Manhattan Associates",    0.660,  0, "H",
 "Warehouse + transportation + order management.",
 "Supply-chain workflow software with deep integration moats. AI optimizations a feature, not a threat.",
 "Premium valuation; mature category."),
# 82
("VERX", "Vertex",                  0.655,  0, "M",
 "Indirect tax software (sales tax, VAT).",
 "Tax-compliance moat is regulatory, not AI-vulnerable. Slow growth.",
 "Steady utility, low AI signal."),
# 83
("BMNR", "Bitmine Immersion",       0.655, +1, "L",
 "Small BTC miner / immersion cooling, recent AI/HPC pivot talk.",
 "Power-asset optionality at small scale.",
 "Penny-stock dynamics dominate fundamentals."),
# 84
("ROP",  "Roper Technologies",      0.647,  0, "H",
 "Software conglomerate – Aderant, Vertafore, CBORD, Deltek, etc.",
 "Diversified vertical-SaaS roll-up; some segments win from AI, some lose, in aggregate neutral.",
 "Capital-allocation track record is the real story."),
# 85
("PTC",  "PTC",                     0.644,  0, "M",
 "PLM (Windchill) + CAD (Creo) + IoT (ThingWorx) + ALM (Codebeamer).",
 "Industrial workflow software; AI adds productivity features but not threat. Like ADSK.",
 "Macro on industrial capex."),
# 86
("QTWO", "Q2 Holdings",             0.644, -1, "M",
 "Digital banking platform for community/regional banks.",
 "Sticky core but AI-banking-experience players (and big-bank in-house tech) increasingly threaten the mid-tier.",
 "Bank consolidation cuts both ways."),
# 87
("VYX",  "NCR Voyix",               0.642,  0, "M",
 "Digital commerce platform for retail/restaurant (POS, payments).",
 "Hardware + software for in-store ops; AI is incremental, not foundational.",
 "Post-split execution + leverage."),
# 88
("ALKT", "Alkami Technology",       0.639, -1, "M",
 "Digital banking platform competing with QTWO.",
 "Same thesis as Q2 – mid-tier-bank workflow SaaS in slow erosion path.",
 "Higher growth than QTWO offsets the long-term risk."),
# 89
("CRM",  "Salesforce",              0.639,  0, "H",
 "CRM platform + Slack + Tableau + Mulesoft + Agentforce.",
 "Genuine fork: legacy CRM workflows under siege from AI-native CRMs (e.g., Day.ai-style competitors); Agentforce is the most credible incumbent counter-offering but pricing/monetization unclear. Wash on current evidence.",
 "If Agentforce ramps, this moves to +1 quickly; if not, -1."),
# 90
("APPF", "AppFolio",                0.638, -1, "M",
 "Property-management vertical SaaS.",
 "Vertical SMB SaaS; AI agents will eat the tenant-comms and accounting layers.",
 "Sticky integration plus vertical moats slow the timeline."),
# 91
("PLTR", "Palantir",                0.637, +2, "H",
 "Foundry + AIP + Gotham; commercial AI deployment + defense/intel.",
 "Purest SA-thesis equity in the public market – defense AI exposure, AIP platform doing enterprise AI deployment, accelerating commercial growth.",
 "Extreme valuation; concentration in US gov; key-person risk."),
# 92
("ASAN", "Asana",                   0.634, -2, "H",
 "Work management / task tracking + AI Studio.",
 "The reductive case for AI replacement: agents that just do the tasks make the tracking layer redundant. AI Studio is an attempt to redefine but late.",
 "Buyback + founder ownership provide floor."),
# 93
("ALRM", "Alarm.com",               0.629,  0, "M",
 "Smart-home + commercial security platform.",
 "Embedded AI features in video analytics; not transformatively exposed.",
 "Slow-grow ecosystem play."),
# 94
("ADBE", "Adobe",                   0.627, -1, "H",
 "Creative Cloud + Document Cloud + Experience Cloud + Firefly.",
 "Gen-AI is the most existential threat in the public software space, but Firefly + integrated workflows + enterprise distribution are the most credible incumbent defense. Score reflects net negative even after defense.",
 "Could be 0 in the bull case if Firefly monetization compounds."),
# 95
("LIF",  "Life360",                 0.624,  0, "M",
 "Family location and safety app; expanding ad platform.",
 "Consumer subscription + advertising; not a primary AI bet.",
 "Ad platform growth is the story, not AI."),
# 96
("TYL",  "Tyler Technologies",      0.623,  0, "H",
 "State/local government SaaS – courts, justice, ERP, schools.",
 "Government workflows are slow-moving and procurement-protected. Premium valuation already prices the moat.",
 "Multiple is the risk, not the AI thesis."),
# 97
("CXM",  "Sprinklr",                0.623, -1, "M",
 "Unified-CX SaaS (social, contact center, listening).",
 "Cross-channel customer-experience workflow exactly in the path of AI agents.",
 "Restructuring story is the near-term driver."),
# 98
("BILL", "Bill Holdings",           0.622, -1, "M",
 "SMB AP/AR + Divvy spend mgmt + BILL Network.",
 "AP/AR is exactly the workflow that AI agents naturally execute. Network effects on the BILL Network are partial protection.",
 "Margin-recovery story is the bull case."),
# 99
("WDAY", "Workday",                 0.622, -1, "H",
 "Cloud HCM + Financials + Adaptive Planning.",
 "Core HR + finance back-office is a multi-year agent-replacement target. Workday is investing aggressively (Illuminate, agents) – defense is credible but timeline is long.",
 "Could move to 0 or +1 if their agent strategy executes."),
# 100
("ACN",  "Accenture",               0.621, -1, "H",
 "Global consulting + tech services + outsourcing.",
 "Already actively cutting headcount; AI labor substitution + customer in-housing + GenAI consulting boom are simultaneously offsetting forces.",
 "Largest AI-consulting backlog publicly; partial offset to displacement."),
# 101
("DJCO", "Daily Journal",           0.607, -1, "L",
 "Small media + Journal Technologies (court case-mgmt software).",
 "Idiosyncratic Munger-legacy holding; legal-vertical SaaS at small scale.",
 "Off-radar name; thin liquidity."),
# 102
("BSY",  "Bentley Systems",         0.606,  0, "M",
 "Infrastructure engineering software (CAD for civil/transport).",
 "Niche AEC-vertical; AI adds productivity but limited threat or upside.",
 "Family-controlled; specialist software."),
# 103
("NOW",  "ServiceNow",              0.606,  0, "H",
 "ITSM + workflow platform + Now Assist (AI).",
 "Most aggressive AI rollout in enterprise SaaS (every workflow gets a Now Assist agent), but ITSM workflow itself is fundamentally what AI agents subsume. Net wash – could surprise either way.",
 "Now Assist monetization is the swing factor."),
# 104
("GWRE", "Guidewire Software",      0.603,  0, "H",
 "P&C insurance core systems (PolicyCenter, ClaimCenter, BillingCenter).",
 "Insurance back-office is sticky and regulated; AI helps claims/underwriting but doesn't disrupt core platform.",
 "Cloud transition execution."),
# 105
("PATH", "UiPath",                  0.600, +1, "M",
 "RPA + emerging agentic automation platform.",
 "RPA-to-agents transition is real and necessary; UiPath has the customer base but agentic competition is wide open.",
 "Execution and competitive intensity from hyperscalers and pure-play agentic startups."),
# 106
("AMPL", "Amplitude",               0.600,  0, "M",
 "Product analytics + experimentation + AI insights.",
 "Analytics workflow + competition from cheap LLM-driven analysis. Mid-tier player.",
 "Slow growth; margin recovery story."),
# 107
("SPSC", "SPS Commerce",            0.597, -1, "M",
 "Retail EDI + supply-chain connectivity.",
 "EDI is dated but network-effect protected; AI doesn't directly threaten data-exchange but does enable next-gen substitutes.",
 "Slow but defensible erosion."),
# 108
("IIIV", "i3 Verticals",            0.596,  0, "L",
 "Vertical-software (mostly public-sector and education).",
 "Roll-up; pieces are mostly procurement-protected.",
 "Small-cap; M&A driven."),
# 109
("DLB",  "Dolby Laboratories",      0.595,  0, "M",
 "Audio/video IP licensing (Dolby Atmos, Vision, AC-4).",
 "License moat is hardware-OEM driven; AI is irrelevant.",
 "Steady utility."),
# 110
("PAR",  "PAR Technology",          0.594,  0, "M",
 "Restaurant management software (Brink POS) + payments.",
 "Vertical restaurant SaaS; AI is incremental.",
 "Roll-up execution."),
# 111
("CTSH", "Cognizant",               0.589, -2, "H",
 "Global IT services with major India delivery footprint.",
 "India IT services is the most direct AI-labor-substitution target: every billable hour displaced by GenAI is direct revenue at risk.",
 "GenAI-consulting growth partial offset, but pricing reset on labor arbitrage is structural."),
# 112
("BLND", "Blend Labs",              0.587, -1, "M",
 "Mortgage + consumer-banking software platform.",
 "Vertical SaaS to mortgage origination – AI agents will increasingly own the consumer-facing intake.",
 "Mortgage rate environment overwhelms thesis."),
# 113
("CCSI", "Consensus Cloud",         0.587, -2, "H",
 "Cloud fax + healthcare interoperability.",
 "Cloud fax — the literal definition of being on borrowed time. Healthcare-interop adjacency is partial defense.",
 "FCF and dividend support price floor longer than fundamentals justify."),
# 114
("TRMB", "Trimble",                 0.582,  0, "M",
 "Positioning + construction/agriculture tech post-AGCO JV.",
 "Sensor + workflow; AI adds productivity in specific verticals but no transformational thesis.",
 "Capital-light post-divestitures."),
# 115
("APPN", "Appian",                  0.582, -1, "M",
 "Low-code + process automation + AI agents.",
 "Low-code value-prop is partially eroded by 'just have the AI write the app' alternatives.",
 "Agent positioning is a partial hedge."),
# 116
("PCOR", "Procore Technologies",    0.581,  0, "M",
 "Construction-vertical SaaS (project, financials, workforce).",
 "Vertical depth + integration moats slow AI substitution.",
 "Macro on construction cycle."),
# 117
("WK",   "Workiva",                 0.565, -1, "M",
 "Connected financial + ESG + risk reporting (SEC, sustainability).",
 "Compliance/reporting workflow with regulator-driven moats; AI agents pressure the report-assembly layer.",
 "Regulatory tailwinds (climate disclosure) are a partial offset."),
# 118
("INTA", "Intapp",                  0.564, -1, "M",
 "Vertical SaaS for legal + professional services + private capital.",
 "Vertical professional-services workflow – the customer base (lawyers, bankers, consultants) is itself being AI-disrupted, which is double-sided risk.",
 "AI features priced in; vertical-depth moats are real."),
# 119
("BL",   "BlackLine",               0.563, -2, "H",
 "Accounting close + intercompany + AR automation.",
 "Accounting-close workflow is exactly the AI-agent target. BlackLine has launched Studio360 and AI features but core seat economics are at risk.",
 "Take-private optionality at current multiple."),
# 120
("PRGS", "Progress Software",       0.558,  0, "M",
 "Infrastructure software roll-up (OpenEdge, Sitefinity, Chef, MarkLogic, ShareFile, Nuclia).",
 "Diversified infra/data; some segments win from AI (Nuclia/RAG, MarkLogic), some lose.",
 "Capital-allocation play; M&A driven."),
# 121
("PEGA", "Pegasystems",             0.552, -1, "M",
 "BPM + CRM + decisioning with GenAI/Agent Experience.",
 "Process-automation incumbent caught between low-code competitors and AI-native disruption; long-running litigation overhang.",
 "Margin-recovery story is the bull case."),
# 122
("TTAN", "ServiceTitan",            0.549,  0, "M",
 "Field-service SaaS for trades (HVAC, plumbing, electrical).",
 "Vertical SaaS to trades – the workforce is hard-to-automate (physical), so the workflow software is more protected than other SaaS.",
 "Premium valuation; recent IPO dynamics."),
# 123
("HUBS", "HubSpot",                 0.538, -1, "H",
 "SMB CRM + marketing + service + ops + Breeze AI.",
 "SMB CRM directly exposed to AI-native CRMs targeting price-sensitive buyers; Breeze is defense but late.",
 "Could pivot to outcome-based pricing; mid-market trade-up is the bull case."),
# 124
("RBLX", "Roblox",                  0.537,  0, "M",
 "User-generated games platform with AI creator tools.",
 "Gen-AI helps creator economy (Roblox Assistant for code/3D); platform-network moat is real.",
 "Cyclical user engagement; ad business ramp."),
# 125
("CCC",  "CCC Intelligent Solutions",0.530, 0, "M",
 "P&C claims network for insurance + auto repair.",
 "Network-effect moat; AI computer-vision claims estimation is incremental.",
 "Dual-sided network is the moat, not AI."),
# 126
("DXC",  "DXC Technology",          0.528, -2, "H",
 "Legacy IT services / managed services / consulting.",
 "Worst-in-class positioning in IT services: declining revenue base, lower-margin engagements, direct labor-substitution exposure.",
 "Take-private optionality the only bull case."),
# 127
("KVYO", "Klaviyo",                 0.528, -1, "M",
 "SMB + mid-market e-commerce marketing automation (email/SMS).",
 "Marketing-workflow SaaS; AI agents will increasingly compose and target. Shopify partnership is a real moat against pure disruption.",
 "Could be more resilient than other marketing SaaS due to e-commerce data depth."),
# 128
("NABL", "N-able",                  0.520,  0, "M",
 "MSP-focused IT management + security.",
 "MSP-channel tailwinds; AI features incremental.",
 "Spin-off execution; competitive intensity."),
# 129
("EPAM", "EPAM Systems",            0.511, -2, "H",
 "Premium engineering services with heavy CEE/India footprint.",
 "Custom-software-engineering services directly disrupted by AI-coding agents; Ukraine exposure historical drag.",
 "Higher-end skill mix gives slightly more resilience than CTSH/DXC but trajectory is the same."),
# 130
("IDCC", "InterDigital",            0.510,  0, "M",
 "Wireless + video patent licensing (3G/4G/5G, HEVC).",
 "Licensing toll on standards; AI irrelevant.",
 "License-renewal cycle drives the equity."),
# 131
("HCKT", "Hackett Group",           0.506, -1, "M",
 "Benchmarking + consulting + AI XPLR pivot.",
 "Small consulting roll-up; AI-XPLR rebrand is real but small base. Same direction as larger consulting names.",
 "Could surprise as AI-consulting specialist."),
# 132
("INTU", "Intuit",                  0.490,  0, "H",
 "QuickBooks + TurboTax + Credit Karma + Mailchimp; AI assistants across.",
 "Genuinely two-sided: AI rebundling (one assistant for taxes + accounting) threatens TurboTax; incumbency + data + distribution + regulatory moats are large. (Revised from -1.)",
 "Could be -1 if first-party AI tax filers materialize; could be +1 if Intuit Assist monetizes."),
# 133
("BLKB", "Blackbaud",               0.463, -1, "M",
 "Vertical SaaS for non-profits, foundations, education.",
 "Slow-growth vertical SaaS; AI agents pressure the admin workflow.",
 "Activist-driven margin recovery is the bull case."),
# 134
("YEXT", "Yext",                    0.461, -1, "M",
 "Brand listings + Q&A / Hitch (post-acquisition) parent-brand mgmt.",
 "Listings-management category is being eaten by LLM-driven search ('Just ask the model'); Hitch acquisition is a hedge.",
 "Could find a niche; declining core."),
# 135
("EFOR", "Everforth",               0.348,  0, "L",
 "Small-cap, limited public coverage (flagged: low conviction).",
 "Insufficient signal to score with conviction; default neutral.",
 "Would need a dedicated dive to score properly."),
# 136
("CASH", "SSI Govt Money Market",   0.042,  0, "H",
 "Cash equivalent.",
 "Cash.",
 "Cash."),
# 137
("ESCPIV","ESC Pivotal Software",   0.000,  0, "H",
 "Legacy escrow position from Pivotal/VMW acquisition.",
 "Inert.",
 "Inert."),
# 138
("USD",  "US Dollar",              -0.000,  0, "H",
 "FX/cash residual.",
 "Inert.",
 "Inert."),
]

def bucket(s):
    return {+2: "PRO ++", +1: "PRO +", 0: "Neutral", -1: "CON -", -2: "CON --"}[s]

def main():
    total_w = sum(w for _, _, w, *_ in HOLDINGS)
    weighted = sum(w * s for _, _, w, s, *_ in HOLDINGS) / total_w
    simple = sum(s for _, _, _, s, *_ in HOLDINGS) / len(HOLDINGS)

    print(f"Holdings: {len(HOLDINGS)}    Σweight: {total_w:.2f}%")
    print(f"Weighted SA score: {weighted:+.3f}    Simple avg: {simple:+.3f}")
    print()

    from collections import defaultdict
    by_b_w = defaultdict(float); by_b_n = defaultdict(int); by_b_c = defaultdict(lambda: defaultdict(int))
    for _, _, w, s, c, *_ in HOLDINGS:
        by_b_w[s] += w; by_b_n[s] += 1; by_b_c[s][c] += 1
    print(f"  {'Bucket':<10} {'#':>4} {'Weight%':>8}  Conf (H/M/L)")
    for s in (+2, +1, 0, -1, -2):
        c = by_b_c[s]
        print(f"  {bucket(s):<10} {by_b_n[s]:>4} {by_b_w[s]:>7.2f}%   {c['H']}/{c['M']}/{c['L']}")
    print()

    print("=" * 100)
    print("PER-NAME DETAIL")
    print("=" * 100)
    for i, h in enumerate(HOLDINGS, 1):
        t, n, w, s, c, biz, fit, unc = h
        print(f"\n{i:>3}. {t:<6} {n:<30} {w:>5.2f}%  score={s:+d}  conf={c}")
        print(f"     business    : {biz}")
        print(f"     thesis fit  : {fit}")
        print(f"     uncertainty : {unc}")

if __name__ == "__main__":
    main()
