# Quarterly 10-Q Audit — Non-Obvious Findings

**Window:** Filings landed at SEC EDGAR May 5–12, 2026 (peak Q1 2026 earnings season)
**Sample:** 30 filings — 20 large/mid-cap + 10 small/odd/special-situation
**Method:** Each 10-Q read for items markets and sell-side analysts typically don't lead with — footnotes, MD&A liquidity language, working-capital movements, segment-level surprises, subsequent events, related-party items, covenant language. Not a price target or rating exercise; this is a forensic-scan of the document itself.
**Caveat:** I do not have access to sell-side analyst notes, so "what analysts missed" is inferred from filing-vs-headline gap. Numbers are sourced from the 10-Q as cited; verify before acting.
**Security note:** Three of the WebFetch responses on this run contained injected fake "system-reminder" blocks (prompt-injection attempts in relayed filing content). They were ignored. Findings below come from the underlying filing text, not the injections.

---

## Cross-Cutting Patterns (read this first)

### 1. Private credit / BDC stress is visible in the marks, not yet in the NAV
A Q1 2026 mark-down wave hit non-traded BDCs and was almost entirely hidden by share issuance and PIK accretion:
- **Ares Strategic Income Fund:** $(267.9)M net unrealized loss this quarter — 4.5x the prior-year Q1. NAV/share fell only 2.3% ($27.48 → $26.85), but the capital-gains incentive fee was **reversed by $(19.1)M** (vs $(6.7)M prior year), meaning Ares clawed back $19M of previously-accrued performance fees because the high-water mark broke. Repurchase program **hit the 5.00% cap** with $524M of outflows (18x the prior-year quarter) and outstanding requests fulfilled at only 0.431% — proration is on.
- **Golub Capital Private Credit Fund:** EPS swung from +$0.47 to $(0.46) on a $(187.1)M unrealized loss (24x YoY). Cost basis $10.05B vs FV $9.93B — the book is marked at 98.8¢. Distribution at ~9.3% annualized yield is uncovered by NII ($0.06 NII/share over 6 months vs distributions paid).
- **Stellus Private Credit BDC:** non-accruals doubled (1 → 2 loans); the new non-accrual is carried at FV *above* cost (FV 4.0% / cost 2.9% of portfolio) implying a shallow ~73¢ mark. Distribution 117% of NII even with adviser waivers up 35%.
- **KKR Enhanced US Direct Lending Fund-L:** subscriptions cratered 86% YoY ($92.9M → $13.1M). Fair-value Level-3 yield input range now extends to **27.5%** (up from 12.68%) — distress-level effective yields on un-non-accrued positions.

**The signal markets miss:** capital-gains incentive fee reversals + PIK *dividend* line items (Ares: PIK dividend grew 5.5x YoY) are cleaner stress indicators than NAV. PIK dividends typically reflect equity converted from defaulted cash interest.

### 2. Spinoffs are quietly building permanent cost layers analysts will normalize away
- **Qnity Electronics (Q, DuPont spinoff):** $196M of DuPont-related indemnification liabilities on the BS ($87M current + $109M long-term), including $66M NJ Consent Order accrual + $77M MOU + $49M environmental, plus $84M of *reasonably-possible* additional exposure. ETR up 670 bps. Effective tail liability not surfaced in headlines.
- **Ralliant Corp (RAL, Fortive spinoff):** Test & Measurement segment running at a (1.5%) operating margin, took a $54M Q1 FX hit on goodwill; SBC stepped up to 2.08% of revenue from 1.35%; subsequent-event buyback authorization raised $200M→$500M with $100M ASR launching Q2 — material capital-return pivot buried after the quarter end.
- **Vestis Corp (VSTS, Aramark spinoff):** dividends and buybacks fully suspended via May 2025 covenant amendment until leverage ≤4.50x for two consecutive quarters — math doesn't allow that before mid-FY27. Consulting-heavy restructuring ($17.1M consultants vs $6.5M severance) signals strategic overhaul, not headcount action.

### 3. "Earnings beats" with non-recurring tailwinds
- **AKA Brands:** headline 600bps gross-margin "expansion" is almost entirely a $18.6M COGS credit from the Feb 2026 Supreme Court IEEPA tariff ruling ($14.4M relates to *prior-period* catch-up). Underlying Q1-2026 GM is ~52%, *down* YoY. New Section 122 10% tariff replaced IEEPA — go-forward margin headwind not in the print.
- **Ducommun:** Q1 2025 base was restated to add $10.6M of SBC for retirement-eligible vesting — the +607% YoY net income headline is largely against an artificially-depressed comp. Contract liabilities surged $11.8M, driving most of the $11.2M OCF (vs $0.8M PY) — non-repeating.
- **D-Wave Quantum:** $28.5M income tax *benefit* (DTA valuation allowance release from Quantum Circuits acquisition) flatters the headline loss. Adjusted pre-tax loss closer to $47M. System-sales revenue collapsed 93% YoY.

### 4. Going concern, near-going-concern, and covenant overhangs
- **Sleep Number (SNBR):** going-concern doubt is unqualified; April 2026 13th Amendment is a *forbearance*, not a cure — "Specified Defaults" already exist, covenant relief runs only through July 2026, new $25M bridge term at SOFR+800 matures June 30, 2026. ABL availability ($38.6M) is *below* the $40M minimum-liquidity covenant gross of LCs.
- **Harvard Bioscience (HBIO):** going-concern doubt **removed** this quarter (footnote-only, no headline). Effective borrowing rate is ~17.3% all-in, not the 12.8% coupon, once exit/prepayment fees and warrants are amortized.
- **Ambiq Micro (AMBQ):** unusually strong "highly dependent on additional sources of funding" language despite 18+ quarters of runway — suggests auditor pressure beyond what the cash balance implies.
- **Evolv Technologies (EVLV):** Min-ARR covenant ($107.3M) has roughly $1M of headroom; min-EBITDA covenant activates 6/30/27.

### 5. Working-capital reversals masking cash quality
- **Venture Global (VG):** Q1 NI $625M vs $517M PY (+$108M), but OCF $763M vs $1,114M PY (−$351M). AP/accruals swung from +$249M to −$340M — a $590M working-capital reversal. Headline beat masked materially weaker cash conversion.
- **Waters Corp:** post-BD-Biosciences-deal OCF swung to $(3)M from +$260M PY — a $263M swing vs only $193M NI swing. AR build of $533M and inventory $33M post-acquisition; $140M of AR is actually a single-counterparty receivable from BD itself under the Interim Operating Agreement (no cash until China/Italy approvals close).
- **Ambiq Micro:** $6.5M inventory build (+39%) on $14.2M COGS = ~150 days of inventory; $3.6M AR build; ~$10M of cash consumed by working capital.
- **Evolv:** AR grew $11.9M (+38%) against only $14.3M of revenue growth; DSO at ~83 days; allowance for credit losses unchanged at $600K.

### 6. Customer concentration shifts (often crossing the 10% disclosure line)
- **Smart Sand:** top three = 69% of revenue (EOG/EQT/ARC); 4 customers = 66% of AR. Sharp escalation.
- **Ambiq Micro:** top 3 = 71.5% (28.9% / 24.3% / 18.3%).
- **Qnity:** Samsung newly disclosed at 11%, TSMC at 8% — both Asian foundry/memory.
- **D-Wave:** Customer A 29%, but the 85%-concentrated Customer B from Q1 2025 has effectively churned.
- **Satellogic:** one customer = 74% of AR.
- **Hyliion:** 100% of $2.8M Q1 revenue from one customer (ONR/Navy R&D contract); zero commercial KARNO orders.
- **Via Transportation:** 93% government revenue ($118.5M of $127.4M); AR up $13.3M to $94.9M; DSO ~67 days (not 26-day SaaS-typical).
- **Federal Home Loan Bank of Dallas:** USAA FSB 13.5%, AIG-affiliated 12.0% — ~25.5% insurance-affiliated.

### 7. "Triggering events" and impairment cushions thinning
- **Janus International:** ran an interim quantitative goodwill impairment test citing "sustained decline in market capitalization." BETCO reporting unit has only **8.2% goodwill headroom** ($56.8M cushion, $22.7M goodwill); TMC 20%.
- **Ralliant T&M:** loss-making segment took a $54M goodwill FX hit in one quarter.
- **AtaiBeckley:** Beckley combination shows only $0.3M goodwill and $2.8M intangibles for what's framed as a transformational deal — suggests reverse-acquisition accounting or a provisional PPA.

### 8. Subsequent events that change the story
- **Stratus Properties:** Plan of Liquidation approved March 24, 2026 (in-quarter), with $29.73–$37.69/share distribution estimate. Buyback continued through Q1 at $25.88 avg — board approved liquidation a week after buying stock *below the low end* of its own range.
- **Netlist:** Federal Circuit oral arguments March 6, 2026 on Samsung Case 2024-2203 — ruling typically lands 3–9 months later. Near-term binary catalyst against $866M in jury verdicts.
- **Evolv:** DOJ confirmed no longer the subject of investigation (Aug 2025); securities class settled $15M with $14.3M insured (net $0.7M).
- **Immunome:** AbbVie collaboration terminated July 2025; Q1 2026 collab revenue $0 vs $2.9M PY.

---

## Per-Filing Findings

### Large/Mid-Cap (20)

#### 1. Waters Corp (WAT) — life sciences tools; closed BD Biosciences acquisition Feb 9, 2026
- **$140M net receivable from BD inside AR**, because BD is operating the China/Italy entities on Waters' behalf pending regulatory approvals — a >10% counterparty AR concentration that won't show up in customer disclosure.
- **OCF swung to $(3)M from +$260M PY** ($263M swing vs $193M NI swing); $533M AR build + $33M inventory build + $99M non-cash step-up amortization.
- **18% Q1 tax benefit + $1.6B newly recognized DTL** from acquired-intangible step-ups — will reverse as a non-cash tax benefit over 8–15 years, structurally lowering GAAP ETR below what 19–20% normalized models assume.
- **Step-up amortization $152M Q1 vs $12M PY** — permanent GAAP headwind, not a one-time item. $83M transaction/integration costs in 7 weeks of Q1 only.

#### 2. Ralliant Corp (RAL) — Fortive precision-instruments spinoff
- **Sensors & Safety operating margin compressed 240 bps to 27.3%** despite +10.6% revenue/+2.8% price — standalone cost layer hitting the better segment. T&M improved 480 bps but is *still at* (1.5%) operating margin.
- **T&M goodwill took $54M FX hit in one quarter** ($901M → $847M); AOCI translation $(65.7M). Sustained dollar strength could trigger goodwill testing by year-end.
- **SBC jumped to 2.08% of revenue from 1.35% PY** (first-time PSU grants with dividend-equivalent rights, 39.1% vol Monte Carlo) — permanent dilution-adjusted earnings step-up.
- **Subsequent events bury major capital-return pivot:** buyback authorization $200M → $500M and $100M Q2 ASR; new Enterprise Productivity Program targeting $50–60M savings by 2028. $51M Fortive tax-reimbursement obligation, ~mostly settled.

#### 3. Qnity Electronics (Q) — DuPont Electronics spinoff
- **$196M DuPont indemnification liability** on the balance sheet ($87M current / $109M LT): $66M pre-tax + $3M interest for NJ Consent Order ("Applicable Qnity Percentage" 44% of $875M), $77M MOU, $49M legacy environmental. **Reasonably-possible additional exposure $84M** above accruals. Implicit PFAS tail.
- **FCF collapsed 87% YoY to $13M** despite +18% sales; OCF $135M (vs $207M); capex $122M (9.3% of sales); AR +$51M, inventory +$42M.
- **Samsung newly disclosed as 11% customer; TSMC 8%** — combined ~19% to two Asian customers, both Semiconductor Technologies.
- **ETR jumped 670 bps to 25.7%**; $29M Q1 transformation charges ($24M IT independence); $63M short-term note payable to Hitachi Chem DuP affiliate (related party, up from $53M).

#### 4. Venture Global (VG) — LNG exporter
- **Unquantified Calcasieu customer disputes** under post-COD SPAs; revenue is recognized net of variable-consideration reduction but no specific accrual disclosed. BP/Shell/Edison/Repsol arbitrations are the context.
- **OCF $763M vs $1,114M PY** despite higher NI — AP/accruals swung +$249M → −$340M (~$590M reversal); derivative gain flipped +$230M → −$57M.
- **CP2 facilities grew $11.3B → $20.7B** (+$9.4B); CIP +$1.3B QoQ to $8.96B; accrued capex $1.52B signals next-quarter GAAP capex run-rate even higher than the reported $3.18B.
- **ETR 15.1% (vs 22.6%)** partly on unquantified valuation-allowance release — ~$45M EPS tailwind that street may treat as recurring.

#### 5. Smart Sand (SND) — frac sand
- **$8.8M deferred revenue burn-down inflated Q1 revenue** (Dec $9.8M → Mar $1.0M, all recognized); ~9% of $92.5M sand revenue. Volumes up 40% but Q2 faces structural headwind absent new prepayments.
- **Contribution margin per ton compressed $8.96 → $8.84** despite "slightly higher" pricing — concentration spike at 69% top-3 customers (EOG/EQT/ARC) is a price-mix warning.
- **SmartSystems (wellsite) revenue dropped 43% YoY to $0.6M** — fleet under-utilization in the higher-margin line.
- **Capex guidance $15–20M vs $2.2M Q1 actuals** — 6–8x quarterly step-up coming, against $19.5M cash and $30M ABL.

#### 6. Janus International (JBI) — self-storage building products
- **Net income collapsed 98% YoY** ($10.8M → $0.2M); GM compressed 510 bps (38.9% → 33.8%); Janus NA segment GP −10%, Adj EBITDA −14.6%.
- **Triggering event mid-quarter:** interim quantitative goodwill test citing "sustained decline in market cap." BETCO has only **8.2% headroom** ($56.8M cushion / $22.7M goodwill); TMC 20%.
- **Buyback 4.6x'd at falling stock price:** $15.7M Q1'26 vs $5.1M Q1'25, 2.86M shares at ~$5.49 avg (vs $8+ prior year). Plus $97M Kiwi II acquisition adding $44.2M goodwill + $40.1M intangibles incl. $11M backlog.
- **Restructuring charges +550% YoY to $2.6M; SBC +22.5% to $4.9M.** 216k PSUs projected at 0% payout — internal targets being missed but RSU dilution clock keeps running.

#### 7. D-Wave Quantum (QBTS)
- **Cash burn $(45)M vs NI $(18.4)M** — burn is 2.4x reported loss. $588M cash post Quantum Circuits acquisition ($250.8M outflow).
- **System-sales revenue collapsed 93% YoY** ($12.6M → $86K); Advantage2 unit shipments not disclosed. Customer A 29% concentration; the 85% Customer B from Q1 2025 has churned.
- **SBC = 280% of revenue** ($8.0M / $2.9M); GAAP gross margin mathematically unreachable until ~5x revenue.
- **$28.5M income-tax *benefit* from DTA VA release** triggered by Quantum Circuits acquisition — one-shot non-cash; adjusted pretax loss ~$47M. Deferred revenue +247% to $11.6M; RPO $42.4M (54% in <12mo).

#### 8. Ambiq Micro (AMBQ)
- **"Highly dependent on additional sources of funding"** language despite 18+ quarters of runway — auditor-pressure flavor.
- **China revenue jumped to 46.4% of revenue** ($11.6M of $25.1M) ship-to basis, from 35.6% PY. End-customer-headquartered basis only 13.7% — ~33 points of revenue ships to China for re-export.
- **Inventory +$6.5M (+39%) to $23.5M on $14.2M COGS** — ~150 days of inventory; classic pre-correction signal for a fabless name.
- **Top 3 customers = 71.5%** (28.9%/24.3%/18.3%); $3.0M related-party warrant exercise (insider monetization); $75.3M follow-on at $31 already +14% share count post-IPO; $27.7M manufacturing purchase commitments locked in.

#### 9. Satellogic (SATL) — earth observation, Tether-backed
- **Net loss $(118.3)M is 99% non-cash mirage:** OCF was +$0.2M; the loss came from a **$112M mark-to-market loss on the Tether/Liberty secured convertible note** (FV $56.1M → $142.6M against $30M principal — $1.20 conversion deep ITM).
- **Massive dilution stack:** 49.2M warrants vs 143.2M shares (34% potential); Liberty warrants $10/$15 strikes (35M shares); Tether already converted $6M into 5M shares (April subsequent event); remaining $24M principal = another 20M shares at $1.20. Effective fully-diluted closer to ~210M.
- **Constellation size not disclosed.** Satellites under construction $18.9M; launch service commitments $8.4M 2026 + $10.3M through 2028; capex $5.6M Q1.
- **74% of AR from one customer; $4M/yr non-cash imagery-for-software barter** generated 16% of Q1 reported revenue. Registered direct raised $32.3M (7.4M shares = +5% dilution in-quarter).

#### 10. Kura Oncology (KURA) — ziftomenib for NPM1m/KMT2A AML
- **SG&A +38.5% YoY (vs R&D +16.6%)** — pre-commercial launch infrastructure being built quietly. Implied burn ~$344M against $580.8M cash = **~20-month runway**, tighter than consensus.
- **Kyowa Kirin contract liability $464.4M, of which $275.7M is *constrained* commercialization/profit-share consideration** — analysts treating gross $595.7M transaction price as future tailwind ignore the constraint. Collaboration revenue *declined* YoY ($14.1M → $12.5M).
- **San Diego HQ lease amended June 2025;** 12.3% imputed rate (high), $6.2M TI allowance in 2026, 6.5-yr remaining, $14.5M lease liability; TI receivable is a non-cash 2026 working-capital benefit.
- **Inventory doubled to $843K** — small but a launch-readiness signal pre-approval.

#### 11. AtaiBeckley (ATAI)
- **Beckley combination shows only $0.3M goodwill, $2.8M intangibles, $0.3M contingent consideration** — suggests reverse-acquisition accounting (Beckley as accounting acquirer) or provisional PPA. The historical Beckley clinical investment is not reflected as intangibles.
- **Pre-funded warrant liability fell $6.0M ($44.4M → $38.4M)** — non-cash mark-to-market gain flattering GAAP. Will reverse if stock rallies.
- **Digital assets $6.8M** (down from $8.7M) — legacy crypto treasury; creates non-core P&L volatility.
- **Share count exploded 176M → 357M weighted avg** (+102% YoY dilution). Cash $230.8M; burn $21.1M; ~9–10 quarter runway, not "multi-year cushion."

#### 12. Immunome (IMNM)
- **AbbVie collaboration terminated July 2025; Q1 2026 collab revenue $0** (vs $2.9M PY). Consensus models with AbbVie option-exercise optionality are stale.
- **BMS/Ayala milestone overhang on varegacestat:** up to ~$142M dev/reg milestones + $50M per product commercial + high-single to low-teen royalties. Varegacestat R&D $14.4M → $9.8M (−32%) suggests enrollment winding down toward a readout → near-term milestone payment risk.
- **>$650M equity raised in 2025** ($432M Dec marketed at $21.50 + $7.75 Jan offering + $65.9M ATM YTD) to land at $582.7M cash — outraised its own ending balance in 15 months. ~$58M/qtr burn requires continuing cadence.
- **$9.3M unfunded TI allowance** on Bothell lease expansion — 2026 cash-flow tailwind not in operating-cash burn lines.

#### 13. Sleep Number (SNBR)
- **Going-concern doubt unqualified;** April 2026 13th Amendment is *forbearance* not cure; "Specified Defaults" already exist; relief through ~July 2026 only; new $25M bridge at SOFR+800 maturing June 30, 2026 with $5M June 1 amort.
- **ABL availability $38.6M is *below* the $40M minimum-liquidity covenant** (gross of LCs). Effective runway is the bridge maturity.
- **$18M ROU asset impairment** for ceased/to-be-ceased locations buried in Note 6 — store footprint cut coming but not yet announced. TTM sales/store $2.5M → $2.2M (−12%).
- **$2.1M inventory obsolescence** (vs zero PY); 330bps GM compression to 57.9% on −19% revenue = ~75% decremental margin (worse than peers).

#### 14. Usana Health Sciences (USNA)
- **Greater China active customers −7.5% YoY (254K → 235K);** reported revenue +3.9% only because spend per customer +7.8%. Constant-currency Greater China was −0.3%. The MLM leading indicator (associate base) is eroding.
- **Rise segment GM collapsed 34.9% → 7.1%** (−2,780bps); Hiya improved 62.0% → 68.9%. Two acquisitions diverging sharply.
- **Brand Partner incentive payout +70bps to 43.4% of Core Nutritional** — code for mix shifting toward higher-commission geographies and promotions. Structurally bearish for MLMs.
- **Cash trapped in China:** $111.0M of $163M total cash in China (US only $16.1M). SAFE-imposed remittance delays. No Q1 buybacks vs $12.4M Q1 2025 — implicit acknowledgment of domestic cash tightness.

#### 15. A.K.A. Brands (AKA)
- **600bps GM "expansion" is entirely a $18.6M COGS credit from Feb 2026 IEEPA tariff ruling,** of which $14.4M is *prior-period catch-up*. Underlying Q1-2026 GM ~52%, *down* YoY. Also a $12M streetwear inventory write-down.
- **Section 122 10% global tariff replaced IEEPA Feb 2026** — go-forward burden not in the optical margin. Only $6.4M of $25.8M IEEPA receivable received; ~$19.4M residual collection risk.
- **Inventory underlying −7% Q/Q against +3% sales** — genuine destock; Culture Kings/mnml exposure being deliberately shrunk. Brand-level disclosure suppressed via single-segment aggregation.
- **Credit facility net leverage covenant steps 3.50x → 3.25x in 2027 → 3.00x in 2028.** Growth capex capped at $17.5M; ECF sweep at 50% above 2.0x.

#### 16. Evolv Technologies (EVLV)
- **GM collapsed 880 bps (59.8% → 51.0%)** despite +45% revenue — Product revenue jumped $2.3M → $13.4M while License fees fell $3.7M → $1.2M. Upfront equipment replacing high-margin license catch-ups = lower revenue quality.
- **AR ballooned $11.9M (+38%) on $14.3M revenue growth** — DSO ~83 days; allowance for credit losses unchanged at $600K. Suggests slipping collections, not new bookings.
- **DOJ confirmed no longer subject of investigation (Aug 7, 2025); securities class settled $15M with $14.3M insured (net $0.7M); derivative settled $1.3M insured.** Materially de-risks post-restatement overhang.
- **Min-ARR covenant $107.3M sits ~$1M above floor;** min-EBITDA covenant activates 6/30/27. SBC $5.6M/qtr against operating loss makes GAAP path to covenant EBITDA non-trivial.

#### 17. Ducommun (DCO)
- **Q1 2025 restated to add $10.6M SBC for retirement-eligible vesting** — the +607% YoY headline is against an artificially-depressed base. Underlying SBC ran $11.4M vs historical ~$5M.
- **Contract liabilities surged $11.8M;** drove most of OCF ($11.2M vs $0.8M PY). Without it, CFO ~breakeven — one-time working-capital tailwind.
- **$4.1M legal accrual went to zero with no narrative** — implies ~$4M payment not separately broken out. Guaymas-fire subrogation matter still pending unquantified.
- **Commercial Aerospace +28.5%, Industrial-within-Electronic −15.9%** — Industrial weakness is the cycle canary. Backlog $1.07B but no program-level mix; tariff risk on Guaymas Mexico facility newly emphasized.

#### 18. Hyliion (HYLN) — KARNO generator pivot
- **R&D collapsed 37% YoY ($12.2M → $7.7M)** — not efficiency. First $1.9M WIP inventory appeared on the balance sheet; pre-commercial component costs are expensed as R&D, so capitalizing into inventory mechanically reduces opex. Reclassification, not improvement.
- **Cash + investments down $12.9M sequentially** to $139.4M; ~$50M annualized burn. **Repurchase program paused** with $6.1M remaining unused — management conserving cash signals longer commercialization runway than "by year-end" guidance.
- **100% of Q1 revenue ($2.8M) from one customer (ONR / Navy R&D);** only $11.2M remaining contract value mostly recognized through 2026. **No commercial KARNO orders, no deferred revenue, no customer deposits.** The "479% revenue growth" is government R&D services.
- **2.3M price-threshold RSUs granted at $1.57 implied value** (Monte Carlo), vesting through 12/31/28, zero thresholds achieved — management locking in long-dated equity near share lows = bearish on near-term re-rating.

#### 19. Harvard Bioscience (HBIO)
- **Effective borrowing rate ~17.3% all-in, not 12.8% coupon** — 10% exit fee + 3% prepayment + $0.8M closing + $2.1M legal + 200K warrants at $5 ($1.4M FV) on $40M term loan.
- **Going-concern "substantial doubt" REMOVED this quarter** (Note 1) — covenant cushion still tight (min $3.0M liquidity, min $6.0M TTM Adj EBITDA).
- **OCF swung +$3.0M → −$0.7M YoY on a smaller loss** — Q1 2025 had a $50M goodwill non-cash impairment masking weak conversion. Inventory built $1.4M (DIO rising); AR fell $1.4M (order-book softening).
- **NIH/university funding cuts: generic risk language only, not quantified.** Given ~60%+ academic/research customer mix, this absence of sizing is itself notable. China only 13.5% of revenue — academic exposure dwarfs China tariff risk.

#### 20. Via Transportation (VIA)
- **SBC 12.2% of revenue (vs 4.8% YoY);** $15.6M on $127.4M revenue; $163.1M unamortized over 3.7 yrs = ~$44M/yr run-rate = ~9% of forward revenue *structurally*. PSUs to CEO/CFO have 7-yr vesting plus stock-price tranches.
- **93% government revenue** ($118.5M of $127.4M); AR up $13.3M to $94.9M; DSO ~67 days (not 26-day SaaS-typical). $(21.2)M OCF burn.
- **180-day IPO lockup expired ~March 13, 2026 — no disclosure of it in the 10-Q** despite the period closing mid-quarter. Substantial registered-share overhang now freely tradeable.
- **Platform ARR $510M disclosed, but no take rate, no Platform/Marketplace/TaaS split, no segment CODM detail** — unit economics dropped vs S-1 granularity. ARR doesn't cleanly reconcile to $127.4M quarterly revenue. **No subsequent-events note at all** — unusual for an 8-week-old quarter.

### Small / Odd / Special-Situation (10)

#### 21. Vestis (VSTS)
- **No mention of Corvex anywhere in the 10-Q** — given the public activist campaign, the absence (no cooperation agreement, no board-refresh disclosure, no risk factor edit) is itself a tell.
- **Uniform rental revenue −5.2% YTD (−$28.5M in US uniforms); workplace supplies +0.3%.** Uniforms now 37.4% of revenue vs 38.8% PY. **Rental merchandise in service fell $13.8M** to $391.8M — garment base is depleting (customer losses, not productivity).
- **Dividends and buybacks fully suspended** via May 2025 covenant amendment until leverage ≤4.50x for two consecutive quarters — math doesn't allow that before mid-FY27.
- **$23.6M of $30–35M restructuring already spent in 6 months — $17.1M is consultants vs $6.5M severance.** Consulting-heavy is unusual; signals strategic/operating-model overhaul.
- **OCF +$95.9M on $(3.8)M NI YTD** — variance from AR drawdown ($12.8M), inventory ($4.1M), rental merchandise depletion ($13.8M). Working-capital harvesting from a shrinking book, not earnings power.

#### 22. Stellus Private Credit BDC
- **Non-accruals doubled (1 → 2 loans);** FV 4.0% / cost 2.9% of portfolio. New non-accrual carried *above* cost — ~73¢ mark, shallow.
- **Adviser waivers up 35% YoY ($622K → $842K)** vs total opex up 19%. Without waivers, NII would have been $3.12M (21% lower than reported $3.97M). Distribution at $0.35/share vs $0.30 NII = 117% uncovered even with waiver.
- **Asset coverage 192% — 42 pp cushion** to the 150% regulatory floor.
- **Share count contracted 13.12M → 12.97M** in the quarter despite supposed capital raising — quiet outflow signal.

#### 23. Ares Strategic Income Fund (non-traded BDC, $10.5B NAV)
- **PIK dividend line grew 5.5x YoY** ($1.3M → $7.2M); PIK interest $22.0M vs $11.5M. Combined PIK 6.2% of total income, up from 4.8%. PIK *dividends* typically come from restructured equity-converted positions = high-quality stress signal.
- **$(267.9)M unrealized loss in Q1 — 4.5x prior year;** capital-gains incentive fee accrual **reversed by $(19.1)M** (vs $(6.7)M PY) — high-water mark broke. NAV/share down only 2.3% ($27.48 → $26.85).
- **Repurchase program hit 5.00% cap with proration** (only 0.431% of outstanding requests fulfilled); $524M repurchases = 18x PY. Major liquidity-stress signal hidden by stable NAV.
- **Unfunded commitments $7.4B (revolver/DDTLs $3.56B + equity $3.84B) vs $10.5B NAV** — 70% contingent liquidity demand. Average FX-derivative notional grew 4x YoY ($65M → $260M).

#### 24. Golub Capital Private Credit Fund (non-traded BDC, $4.55B NAV)
- **EPS swung +$0.47 → $(0.46) on $(187.1)M unrealized loss** (24x YoY). Cost $10.05B vs FV $9.93B — book marked at 98.8¢. Distribution at ~9.3% yield is uncovered ($0.06 NII/share over 6 months).
- **PIK 5.3% (up from 4.6%).**
- **$868.6M 2025 securitization** with 72 pledged portfolio companies (down to 59 as CLO ramps) at 3.70% blended spread. Term financing locks in specific borrowers.
- **10 consolidated CLO/holding SPVs** under "GCRED Holdings LLC." Bank facilities (Citi $600M + BNP $300M) only $651M avg drawn at 5.5% — small fraction of $5.49B total debt; most leverage is in less-visible securitizations and notes.

#### 25. KKR Enhanced US Direct Lending Fund-L
- **Subscriptions cratered 86% YoY** ($92.9M → $13.1M). Continuous-offering vehicle losing capital-raise momentum despite $10B max offering authorization.
- **Fair-value Level-3 yield input upper range 27.50% (vs 12.68%)** — distress-level effective yields on un-non-accrued positions, buried in the FV-input table.
- **Distribution coverage ~99.4% — fee waivers are the entire difference between covered and uncovered.** Waivers discretionary, not contractual past current period.
- **Asset coverage 209.5%; debt/equity 0.91x.** No share-repurchase activity disclosed — early-stage fund without meaningful tender, itself a liquidity warning.

#### 26. Stratus Properties (STRS)
- **Plan of Liquidation approved March 24, 2026.** Estimated distribution range **$29.73–$37.69/share.** Going-concern basis maintained (not liquidation basis yet).
- **Buyback continued through Q1 at $25.88 avg — *below* low end of own liquidation range.** Board approved the plan ~1 week after a buyback below the floor.
- **Holden Hills Phase 1 construction loan extended only to June 8, 2026** — short-term band-aid while longer extension negotiated. $22.6M outstanding.
- **April 2026 MUD bond reimbursements $14.6M cash (subsequent event):** Holden Hills $13.0M + $1.4M interest; Magnolia $1.6M + $0.2M. Stratus's direct share only $3.9M; rest flows through partnership NCI.
- **Capitalized interest $2.6M ~= 100% of interest cost.** Reported earnings heavily flattered relative to cash.

#### 27. Blackstone Private Real Estate Credit & Income Fund (BPRECIF)
- **Top-10 = ~124% of NAV** (only ~57% of total assets). Three positions each >20% of NAV: KKR AIP V $201M (21.9%), Karlin Multifamily $198M (21.6%), CBREIM Logistics $193M (20.8%). Extraordinary single-borrower concentration; KKR AIP V and CBREIM acquired only 10/28/2025 and 3/30/2026 — fresh ramp, not stable book.
- **Total assets grew $1.58B → $2.01B in 90 days** while net assets only grew with $170M new equity. D/E now 1.18x with $1.08B secured debt. **April 23, 2026 facility amendment** (rate component restructure) right after 27% asset-base expansion.
- **Distribution coverage marginal 1.07x** ($19.3M NII vs $18.0M paid + $6.5M payable). With $1.4M adviser expense support, unsupported coverage ~0.99x — *below* 1.0x.
- **Office exposure effectively ~0.3%** (only 1710 17th St NE). Book is multifamily + logistics — "CRE debt" branding is really "multifamily + industrial debt."

#### 28. Manulife Private Credit Fund
- **Sector concentration:** 45% healthcare providers/services, 21% professional services, ~18% trading-cos/distributors = ~84% in three sectors. Branded as diversified private credit.
- **Beacon Behavioral Holdings carries a 15.000% PIK term loan** — single-name PIK in the most concentrated sector.
- **Unfunded loan commitments ~62% (likely of net assets)** — large off-balance-sheet liquidity claim.
- **Senior loans 238.9% of net assets via JPM Funding Facility;** rough asset coverage ~1.7x. Specific balances not extractable from rendered text (XBRL extraction limitation flagged).

#### 29. Netlist (NLST) — memory IP litigation
- **Q1 legal spend $8.97M (+28% YoY)** while licensing revenue is zero. Quarterly operating cash burn $21.8M against $17.0M unrestricted cash + $10M restricted = burn-clock matters more than the $866M jury verdict tape ($303M + $118M Samsung, $445M Micron).
- **Federal Circuit oral arguments held March 6, 2026 on Samsung Case 2024-2203** — ruling likely Q3/Q4 2026, near-term binary catalyst.
- **No going-concern language despite ~$10.4M stockholders' equity, $76M current liabilities, $21.8M quarterly burn.** Math only works if Lincoln Park $75M facility gets used — zero drawn in Q1 (vs $11.6M June + $9.3M October 2025 at $0.70).
- **Customer concentration shifted to product business** (Customer A 30%, C 11%, D 11%) because licensing revenue = $0 — currently a small product business + a litigation option, not a licensor.

#### 30. Federal Home Loan Bank of Dallas (GSE)
- **Advances fell $6.6B Q/Q (−13.0%)** to $44.2B — leading indicator of 11th-District member liquidity *easing*; net income down 19.1% YoY ($121.9M vs $150.6M); NII −9.8%.
- **USAA FSB 13.5% of advances ($6.0B); AIG-affiliated (American General Life + VALIC) combined 12.0% ($5.33B)** — ~25.5% insurance-affiliated. Insurance-co advances are spread/arbitrage trades that unwind quickly on rate moves.
- **Dividend rates cut sharply:** Class B-1 4.78% → 4.09%; Class B-2 5.78% → 5.09% — ~69 bps cuts larger than Fed funds move over the period.
- **AOCI +$205.4M unrealized gain** on $18.9B AFS — $17.5B GSE CMBS + $1.4B GSE debentures. CMBS-heavy AFS is non-standard among FHLBs.

#### Bonus: Brookfield Oaktree Holdings (OAK)
- **Preferred coverage 5.7x at BOH entity** ($39.3M NI vs $6.83M pref dist: $2.98M Series A + $3.85M Series B). Class A unitholders received $0/unit cash despite $3.9M declared — cash extraction to Brookfield parent throttled at common while preferreds serviced.
- **Equity-method accounting masks Oaktree Capital Management entirely** — BOH holds ~74% of Oaktree Capital I via equity method; no AUM, no fee-related earnings disclosure. Public preferred investors flying blind on subsidiary fundamentals.
- **Only $1.93M cash at BOH level vs $307.7M headline** ($305.8M is at consolidated funds, unavailable to service preferreds). Distributions received from corporate investments $7.4M vs $6.83M preferred obligations — actual holdco margin ~$0.6M/quarter, vs apparent 5.7x earnings coverage.
- **Consolidated funds carry $1.37B debt with $19.5M quarterly interest expense; subordination/covenant detail not surfaced.**

---

## What this exercise can't tell you
- Sell-side consensus and analyst-note coverage are not in this read — "what analysts missed" is inferred from headline-vs-filing gap, not direct comparison.
- 10-Q reads via WebFetch are partial: footnote text may be summarized; XBRL rendering occasionally degraded (Manulife Private Credit was partial).
- No price action or valuation overlay is attempted here.
- Several filings (HBIO, VIA, VSTS) had absent or thin subsequent-events sections — material developments may have occurred between period-end and filing date that aren't captured.

## Highest-conviction signals from the run (in order)
1. **Stratus Properties** — Plan of Liquidation already approved; buyback in-quarter below the bottom of the disclosed liquidation range.
2. **Ares Strategic Income Fund** — capital-gains incentive fee reversal + 5x PIK dividend growth + 5%-cap repurchase + 18x outflows; the cleanest "private credit is cracking" tape of the batch.
3. **Sleep Number** — going-concern + already-defaulted covenants + ABL availability below the covenant floor + bridge maturing June 30 = forced strategic outcome.
4. **AKA Brands** — almost the entire reported margin expansion is a non-recurring tariff true-up.
5. **Waters Corp** — $140M of single-counterparty receivable (BD) hiding inside post-deal AR; permanent step-up amortization headwind.
6. **Netlist** — Federal Circuit ruling clock is imminent and cash burn vs unrestricted cash forces a dilution/settlement before year-end.
7. **Hyliion** — opex "improvement" is a reclassification; zero commercial KARNO orders 2.5 years into the pivot; long-dated low-strike RSUs signal management's own view.
8. **Qnity Electronics** — $196M of inherited DuPont indemnification liabilities + $84M reasonably-possible additional exposure; underappreciated post-spin tail.
9. **Janus International** — interim goodwill triggering event with only 8.2% headroom at BETCO; aggressive buyback into a stock the market is repricing.
10. **Via Transportation** — silent IPO lockup expiry mid-quarter + 93% government revenue + 67-day DSO + 12.2% SBC.
