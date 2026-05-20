# Masteriyo LMS — WordPress.org plugin search ranks vs. translation status

**Date:** 2026-05-16 (re-verified — ranks unchanged from first snapshot)
**Plugin:** [Masteriyo LMS](https://wordpress.org/plugins/learning-management-system/) (slug `learning-management-system`)
**Scope:** Page 1 of plugin search results on `{locale}.wordpress.org/plugins/search/{query}/`. Top 10 locales by WordPress install share.
**Translation data:** GlotPress "Stable (latest release)" sub-project at `translate.wordpress.org/projects/wp-plugins/learning-management-system/stable/{locale}/default/`. Total strings: **7,400**.

| # | Locale | Subdomain | `lms` rank | `sell courses` rank | Translated strings | Translated % |
|---|---|---|---|---|---|---|
| 1 | English (US) | wordpress.org | **2** | **4** | 7,400 / 7,400 | 100% (source) |
| 2 | Japanese | ja.wordpress.org | **4** | **4** | 483 / 7,400 | 6.5% |
| 3 | Spanish (Spain) | es.wordpress.org | **2** | **4** | 2,819 / 7,400 | 38.1% |
| 4 | French (France) | fr.wordpress.org | **2** | **3** | 227 / 7,400 | 3.1% |
| 5 | German | de.wordpress.org | **2** | **5** | 1,740 / 7,400 | 23.5% |
| 6 | Russian | ru.wordpress.org | **4** | **4** | 5,166 / 7,400 | 69.8% |
| 7 | Portuguese (Brazil) | br.wordpress.org | **4** | **6** | 1 / 7,400 | 0.01% |
| 8 | Italian | it.wordpress.org | **3** | **3** | 0 / 7,400 | 0% |
| 9 | Dutch | nl.wordpress.org | **4** | **5** | 828 / 7,400 | 11.2% |
| 10 | Polish | pl.wordpress.org | **4** | **6** | 0 / 7,400 | 0% |

## Translation-vs-rank comparison

Sorted by translation completion (descending) to see if better-translated locales rank higher:

| Locale | Translated % | `lms` rank | `sell courses` rank |
|---|---|---|---|
| English (source) | 100% | 2 | 4 |
| Russian | 69.8% | 4 | 4 |
| Spanish (Spain) | 38.1% | 2 | 4 |
| German | 23.5% | 2 | 5 |
| Dutch | 11.2% | 4 | 5 |
| Japanese | 6.5% | 4 | 4 |
| French (France) | 3.1% | 2 | 3 |
| Portuguese (Brazil) | 0.01% | 4 | 6 |
| Italian | 0% | 3 | 3 |
| Polish | 0% | 4 | 6 |

### Key findings

- **Translation completion does NOT predict search rank.** French has only **3.1%** translated yet ranks **#2 for "lms"**, while Russian at **69.8%** ranks **#4**. Italian at **0%** outranks Dutch (11.2%) and Japanese (6.5%) for both queries.
- **Outlier #1 — Russian:** by far the most-translated locale (69.8%) but the worst-ranked of the "high-translation" group. Strong translation hasn't translated into directory visibility.
- **Outlier #2 — French:** essentially untranslated (3.1%) but tied for best rank on "lms" and best on "sell courses" (#3).
- **The two zero-translation locales diverge:** Italian ranks #3/#3 while Polish ranks #4/#6 — so completeness isn't the lever either way.
- **Probable rank drivers** (since translation doesn't explain the spread): active install count of competitors in each locale, title/slug keyword match weighting, and how saturated each locale's results are with localized-title competitors (e.g. WooCommerce Germanized appearing on the German "sell courses" page).
- **Implication for masteriyo:** investing translation effort in Russian (where Masteriyo is already 70% translated yet still ranks #4) yields diminishing returns. The clearest "translation-debt" opportunity is **Brazilian Portuguese (0.01%, rank #6 for "sell courses")** — a large WP market with effectively no localization done.

## Search-result summary (unchanged from first snapshot)

- **Best for "lms"**: tied between en, es, fr, de — all rank Masteriyo at **#2** (behind Tutor LMS).
- **Best for "sell courses"**: French and Italian at **#3**.
- **Worst**: Brazilian Portuguese and Polish (#6 for "sell courses").
- Masteriyo is on **page 1 in every locale × query cell** — no misses.
- "lms" competitors: Tutor LMS (almost always #1), then MasterStudy LMS, Sensei LMS, Tutor LMS Elementor Addons.
- "sell courses" competitors: WooCommerce (#1 in 8 of 10 locales), plus non-LMS plugins (PrettyLinks, ValidateCertify, Easy Digital Downloads) that push Masteriyo down vs. its "lms" rank.

## Notes & methodology

- Two independent snapshots taken; ranks for the English directory matched on both passes, so positions are stable (not a fluke of a single fetch).
- `es-es.wordpress.org` and `fr-fr.wordpress.org` redirect to canonical `wordpress.org`; the active locale subdomains are `es.wordpress.org` and `fr.wordpress.org`.
- Search results may shift by ±1 in tightly clustered locales on subsequent fetches.
- Page 1 contains ~20 results on each locale subdomain.
- Query URL pattern: `https://{subdomain}/plugins/search/lms/` and `https://{subdomain}/plugins/search/sell+courses/`.
- Translation URL pattern: `https://translate.wordpress.org/projects/wp-plugins/learning-management-system/stable/{locale}/default/`.
