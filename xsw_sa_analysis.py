"""XSW holdings scored against the 'Situational Awareness' thesis.

Thesis (Aschenbrenner, 2024): scaling + algorithmic progress reach AGI by ~2027
and superintelligence by ~2030, driving trillions into compute/power/data-centers,
making AI agents drop-in knowledge workers, and turning AI into a national-security
race. So PRO = picks-and-shovels for compute/power/security/AI infra and AI-native
apps that get *more* valuable as models scale. CON = SaaS whose moat is a human
workflow that a competent agent could just do.

Scale: -2 strongly threatened, -1 threatened, 0 neutral, +1 benefits, +2 core
picks-and-shovels / direct AI infrastructure beneficiary.
"""

# (ticker, name, weight%, score, one-line rationale)
HOLDINGS = [
    ("AIP",  "Arteris",                 1.616, +2, "Network-on-chip IP licensed into AI accelerators / SoCs"),
    ("HUT",  "Hut 8",                   1.447, +2, "BTC miner repurposing power + sites to GPU/HPC colo"),
    ("DDOG", "Datadog",                 1.202, +2, "Observability for AI infra; LLM monitoring tailwind"),
    ("RIOT", "Riot Platforms",          1.161, +1, "BTC miner with optionality on HPC pivot"),
    ("AUR",  "Aurora Innovation",       1.133, +1, "Applied AI (autonomous trucking) – capability-driven"),
    ("CLSK", "CleanSpark",              1.129, +1, "BTC miner – power assets re-deployable to AI"),
    ("MARA", "MARA Holdings",           1.114, +1, "BTC miner, partial HPC/AI pivot"),
    ("FTNT", "Fortinet",                1.090, +1, "Cybersec – attack surface and nat-sec budget rise"),
    ("PANW", "Palo Alto Networks",      1.078, +1, "Cybersec platform leader"),
    ("CIFR", "Cipher Mining",           1.072, +1, "BTC miner, AI/HPC site optionality"),
    ("WULF", "TeraWulf",                1.059, +2, "Explicit AI/HPC pivot (Core42, etc.)"),
    ("CORZ", "Core Scientific",         1.055, +2, "CoreWeave host – AI datacenter buildout"),
    ("CRWD", "CrowdStrike",             1.031, +1, "Cybersec leader, AI-native detection"),
    ("CRNC", "Cerence",                 0.972,  0, "Auto voice AI – small player, mixed"),
    ("YOU",  "CLEAR Secure",            0.959,  0, "Identity – AI both helps (fraud) and commoditises"),
    ("QBTS", "D-Wave Quantum",          0.957, +1, "Tech-forward / compute frontier optionality"),
    ("ATEN", "A10 Networks",            0.950,  0, "Networking/sec – tangential"),
    ("RAMP", "LiveRamp",                0.931,  0, "Ad-tech identity – cookieless + AI noise"),
    ("CVLT", "Commvault",               0.921, +1, "Data protection – AI multiplies data volumes"),
    ("FIVN", "Five9",                   0.915, -2, "Contact-center SaaS – the canonical AI-agent target"),
    ("PRCH", "Porch Group",             0.902, -1, "Home-services vertical SaaS"),
    ("S",    "SentinelOne",             0.899, +1, "AI-native endpoint security"),
    ("U",    "Unity Software",          0.896,  0, "Game engine – gen-AI is both threat and tool"),
    ("VRNS", "Varonis",                 0.895, +1, "Data security – matters more in AI era"),
    ("ZM",   "Zoom",                    0.894, -1, "Video commoditised; AI features not a moat"),
    ("NN",   "NextNav",                 0.892,  0, "PNT / spectrum – tangential"),
    ("BRZE", "Braze",                   0.873, -1, "Marketing engagement SaaS – workflow at risk"),
    ("TENB", "Tenable",                 0.863, +1, "Vulnerability management"),
    ("CDNS", "Cadence Design Systems",  0.857, +2, "EDA – essential for every AI chip"),
    ("TDC",  "Teradata",                0.844, -1, "Legacy data warehouse – losing to modern stack"),
    ("MSTR", "Strategy (MicroStrategy)",0.838,  0, "BTC treasury vehicle – orthogonal"),
    ("BTBT", "Bit Digital",             0.837, +2, "Aggressive AI/HPC pivot (Enovum)"),
    ("OSPN", "OneSpan",                 0.833,  0, "Authentication – mixed"),
    ("APPS", "Digital Turbine",         0.832, -1, "Mobile ad-tech – pressured"),
    ("GEN",  "Gen Digital",             0.822,  0, "Consumer security – fraud tailwind, commodity product"),
    ("NTNX", "Nutanix",                 0.822,  0, "Hyperconverged infra – modest AI angle"),
    ("SNPS", "Synopsys",                0.818, +2, "EDA + AI chip design IP"),
    ("ORCL", "Oracle",                  0.818, +2, "OCI for AI training, Stargate, RPO explosion"),
    ("FRSH", "Freshworks",              0.797, -2, "CRM/support SaaS – directly agent-replaceable"),
    ("ADEA", "Adeia",                   0.795,  0, "IP licensing – tangential"),
    ("TTWO", "Take-Two Interactive",    0.793,  0, "Games – gen-AI mixed"),
    ("RBRK", "Rubrik",                  0.792, +1, "Data security/cyber-recovery"),
    ("WEAV", "Weave Communications",    0.790, -1, "SMB comms SaaS"),
    ("SPT",  "Sprout Social",           0.783, -1, "Social-media management – AI commoditises"),
    ("ZS",   "Zscaler",                 0.782, +1, "Cloud/SASE security"),
    ("GTLB", "GitLab",                  0.778,  0, "Devops – AI both platform and threat (Copilot)"),
    ("AGYS", "Agilysys",                0.771, -1, "Hospitality SaaS"),
    ("TEAM", "Atlassian",               0.766, -1, "Jira/Confluence – workflow moat eroding"),
    ("RNG",  "RingCentral",             0.764, -2, "Cloud telephony – commoditised, voice-AI threat"),
    ("SOUN", "SoundHound AI",           0.751, +1, "Voice AI pure-play"),
    ("GDYN", "Grid Dynamics",           0.749, -1, "IT services consultancy"),
    ("FICO", "Fair Isaac",              0.741,  0, "Credit scoring – moat vs ML competition"),
    ("APP",  "AppLovin",                0.740, +2, "Axon is one of the highest-ROI applied-AI engines"),
    ("DBX",  "Dropbox",                 0.740, -2, "Generic file sync – commodity, AI doesn't help moat"),
    ("MITK", "Mitek Systems",           0.738,  0, "ID capture – fraud arms race"),
    ("CWAN", "Clearwater Analytics",    0.737,  0, "Investment accounting SaaS"),
    ("QLYS", "Qualys",                  0.733, +1, "Vulnerability/exposure management"),
    ("DT",   "Dynatrace",               0.733, +1, "Observability platform"),
    ("RDVT", "Red Violet",              0.729,  0, "Data analytics – niche"),
    ("MSFT", "Microsoft",               0.728, +2, "Azure AI, OpenAI partner, Copilot – #1 SA beneficiary"),
    ("BOX",  "Box",                     0.724, -1, "Content cloud – commoditising"),
    ("ACIW", "ACI Worldwide",           0.721,  0, "Payments – tangential"),
    ("DOCU", "DocuSign",                0.717, -2, "E-sign – ripe for agent-led disruption / unbundling"),
    ("ESTC", "Elastic",                 0.716, +1, "Search/vector – RAG infrastructure"),
    ("CRCL", "Circle Internet Group",   0.716,  0, "Stablecoin issuer – orthogonal"),
    ("IBM",  "IBM",                     0.715, +1, "Watsonx + Red Hat + AI consulting backlog"),
    ("BBAI", "BigBear.AI",              0.713, +2, "Defense/intel AI – textbook SA bet"),
    ("EA",   "Electronic Arts",         0.710,  0, "Games"),
    ("RPD",  "Rapid7",                  0.709, +1, "Cybersec"),
    ("AI",   "C3.ai",                   0.708, +1, "Enterprise AI pure-play (execution risk)"),
    ("NCNO", "nCino",                   0.705, -1, "Banking SaaS – vertical workflow risk"),
    ("ZETA", "Zeta Global",             0.696,  0, "Marketing AI"),
    ("IT",   "Gartner",                 0.689, -1, "Research/analyst – LLMs eat the read-and-summarise tier"),
    ("AVPT", "AvePoint",                0.680,  0, "M365 governance"),
    ("PD",   "PagerDuty",               0.672,  0, "Incident response – could be AI-automated"),
    ("NTSK", "Netskope",                0.671, +1, "SASE/cloud security"),
    ("ADSK", "Autodesk",                0.670,  0, "CAD – gen-design mixed"),
    ("KD",   "Kyndryl",                 0.670, -1, "IT services spinout"),
    ("SAIL", "SailPoint",               0.668, +1, "Identity governance"),
    ("IOT",  "Samsara",                 0.661, +1, "Connected ops – physical-world AI"),
    ("MANH", "Manhattan Associates",    0.660,  0, "WMS / supply chain"),
    ("VERX", "Vertex",                  0.655,  0, "Tax software"),
    ("BMNR", "Bitmine Immersion",       0.655, +1, "Miner / HPC optionality"),
    ("ROP",  "Roper Technologies",      0.647,  0, "Vertical-software conglomerate"),
    ("PTC",  "PTC",                     0.644,  0, "CAD/PLM"),
    ("QTWO", "Q2 Holdings",             0.644, -1, "Banking SaaS"),
    ("VYX",  "NCR Voyix",               0.642,  0, "Retail/POS tech"),
    ("ALKT", "Alkami Technology",       0.639, -1, "Banking SaaS"),
    ("CRM",  "Salesforce",              0.639,  0, "Legacy CRM at risk; Agentforce is hedge – net wash"),
    ("APPF", "AppFolio",                0.638, -1, "Property-mgmt SaaS"),
    ("PLTR", "Palantir",                0.637, +2, "Gov/enterprise AI – purest SA-thesis equity"),
    ("ASAN", "Asana",                   0.634, -2, "Work management – textbook agent-replaceable"),
    ("ALRM", "Alarm.com",               0.629,  0, "Smart home/security"),
    ("ADBE", "Adobe",                   0.627, -1, "Creative SW – gen-AI disrupts; Firefly partial hedge"),
    ("LIF",  "Life360",                 0.624,  0, "Family location app"),
    ("TYL",  "Tyler Technologies",      0.623,  0, "Gov SaaS – sticky moat"),
    ("CXM",  "Sprinklr",                0.623, -1, "CX SaaS"),
    ("BILL", "Bill Holdings",           0.622, -1, "SMB AP/AR – AI-agent target"),
    ("WDAY", "Workday",                 0.622, -1, "HCM/finance SaaS – workflow at risk"),
    ("ACN",  "Accenture",               0.621, -1, "Big-IT consulting – classic AI displacement risk"),
    ("DJCO", "Daily Journal",           0.607, -1, "Small legal-publishing"),
    ("BSY",  "Bentley Systems",         0.606,  0, "Infrastructure CAD"),
    ("NOW",  "ServiceNow",              0.606,  0, "Workflow incumbent w/ aggressive AI bets – net wash"),
    ("GWRE", "Guidewire Software",      0.603,  0, "Insurance core SaaS – sticky"),
    ("PATH", "UiPath",                  0.600, +1, "RPA→agentic transition; ambivalent execution"),
    ("AMPL", "Amplitude",               0.600,  0, "Product analytics"),
    ("SPSC", "SPS Commerce",            0.597, -1, "EDI/retail integration"),
    ("IIIV", "i3 Verticals",            0.596,  0, "Vertical SaaS roll-up"),
    ("DLB",  "Dolby Laboratories",      0.595,  0, "Audio IP"),
    ("PAR",  "PAR Technology",          0.594,  0, "Restaurant tech"),
    ("CTSH", "Cognizant",               0.589, -2, "India IT services – directly substituted by AI labor"),
    ("BLND", "Blend Labs",              0.587, -1, "Mortgage software"),
    ("CCSI", "Consensus Cloud",         0.587, -2, "Cloud fax – on borrowed time"),
    ("TRMB", "Trimble",                 0.582,  0, "Geospatial/construction"),
    ("APPN", "Appian",                  0.582, -1, "Low-code – AI generates apps directly"),
    ("PCOR", "Procore Technologies",    0.581,  0, "Construction SaaS – sticky vertical"),
    ("WK",   "Workiva",                 0.565, -1, "Reporting SaaS"),
    ("INTA", "Intapp",                  0.564, -1, "Legal/PS SaaS"),
    ("BL",   "BlackLine",               0.563, -2, "Accounting close – core AI-agent target"),
    ("PRGS", "Progress Software",       0.558,  0, "Infrastructure SW"),
    ("PEGA", "Pegasystems",             0.552, -1, "BPM/CRM"),
    ("TTAN", "ServiceTitan",            0.549,  0, "Field-service SaaS"),
    ("HUBS", "HubSpot",                 0.538, -1, "SMB CRM – directly competing w/ AI-native"),
    ("RBLX", "Roblox",                  0.537,  0, "Gaming platform"),
    ("CCC",  "CCC Intelligent Solutions",0.530, 0, "Insurance/auto network"),
    ("DXC",  "DXC Technology",          0.528, -2, "Legacy IT services"),
    ("KVYO", "Klaviyo",                 0.528, -1, "Marketing automation"),
    ("NABL", "N-able",                  0.520,  0, "MSP IT mgmt"),
    ("EPAM", "EPAM Systems",            0.511, -2, "Outsourced engineering – direct AI displacement"),
    ("IDCC", "InterDigital",            0.510,  0, "Wireless IP"),
    ("HCKT", "Hackett Group",           0.506, -1, "Consulting"),
    ("INTU", "Intuit",                  0.490, -1, "TurboTax/QuickBooks – AI rebundling risk"),
    ("BLKB", "Blackbaud",               0.463, -1, "Nonprofit SaaS"),
    ("YEXT", "Yext",                    0.461, -1, "Listings/answers – LLMs eat the use case"),
    ("EFOR", "Everforth",               0.348,  0, "Small-cap; treated neutral"),
    ("CASH", "Money market / cash",     0.042,  0, "Cash"),
    ("ESCPIV","ESC Pivotal Software",   0.000,  0, "Legacy escrow holding"),
    ("USD",  "US Dollar",              -0.000,  0, "FX residual"),
]

def bucket(score: int) -> str:
    return {+2: "PRO ++", +1: "PRO +", 0: "Neutral", -1: "CON -", -2: "CON --"}[score]

total_w = sum(w for _, _, w, _, _ in HOLDINGS)
weighted_score = sum(w * s for _, _, w, s, _ in HOLDINGS) / total_w
simple_avg = sum(s for _, _, _, s, _ in HOLDINGS) / len(HOLDINGS)

print(f"Holdings: {len(HOLDINGS)}   Σweight: {total_w:.2f}%")
print(f"Weighted score: {weighted_score:+.3f}   Simple avg: {simple_avg:+.3f}")
print()

from collections import defaultdict
by_bucket_w = defaultdict(float)
by_bucket_n = defaultdict(int)
for _, _, w, s, _ in HOLDINGS:
    by_bucket_w[s] += w
    by_bucket_n[s] += 1
print("By bucket:")
print(f"  {'Bucket':<10} {'#':>4} {'Weight%':>8}")
for s in (+2, +1, 0, -1, -2):
    print(f"  {bucket(s):<10} {by_bucket_n[s]:>4} {by_bucket_w[s]:>7.2f}%")

print()
print("Top PRO (+2) names:")
for t, n, w, s, r in sorted(HOLDINGS, key=lambda x: -x[2]):
    if s == +2:
        print(f"  {t:<6} {w:>5.2f}%  {n:<28} {r}")
print()
print("Top CON (-2) names:")
for t, n, w, s, r in sorted(HOLDINGS, key=lambda x: -x[2]):
    if s == -2:
        print(f"  {t:<6} {w:>5.2f}%  {n:<28} {r}")
