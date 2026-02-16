# POVIS2 — Implementační plán úprav Example4.jsx

## Kontext

Připomínky od OOV MŽP a VÚV požadují dvě hlavní změny:

1. **Doplnit dlaždice hlavních agend** na homepage nad životní situace
2. **Restrukturalizovat hlavní menu** — každá agenda jako samostatná záložka (ne sloučené pod „Plánování a území")

Zdrojové dokumenty: `GUI_HP_menu_verze4_dod.docx` a `POVIS2_Hlavní menu_návrh.docx`

---

## ZMĚNA 1: Restrukturalizace hlavního menu

### Současný stav (v kódu)

```
Úvod | Plánování a území ▼ | Mapový portál ▼ | Aktuální situace ▼ | Podpora a info ▼
```

Problém: hlavní agendy (PP, ZÚ, PS) jsou sloučeny pod jednu záložku „Plánování a území". Každá agenda má vlastní podpoložky — vzniklo by příliš mnoho podúrovní.

### Požadovaný stav

```
O POVIS2 ▼ | Povodňové plány ▼ | Záplavová území ▼ | Povodňová směrnice ▼ | Povodňová ochrana ▼ | Aktuality
```

### Struktura podmenu jednotlivých záložek

#### O POVIS2
- Základní informace o POVIS2 (co je POVIS2, terminologie, zkratky)
- Dokumentace POVIS2 (provozní řád, uživatelská dokumentace)
- FAQ

#### Povodňové plány
- Povodňový plán ČR
- Registr povodňových plánů (plány krajů, ORP, obcí)
- Povodňové komise
- Mapy povodňových plánů
- Export dat pro dPP
- Metodika tvorby dPP
- *Pro přihlášené:* Editace povodňových plánů

#### Záplavová území
- Základní informace o agendě
- Mapy záplavových území
- Záplavová území (evidence)
- *Pro přihlášené:* další funkce dle role

#### Povodňová směrnice
- Základní informace o agendě
- Úseky OsVPR
- Mapy OsVPR
- Strukturální opatření
- Plány pro zvládání povodňových rizik (2015-2021, 2021-2027, 2027-2033)
- Implementace PS (1., 2., 3. cyklus)
- *Pro přihlášené:* Plánovací období, Přehled protokolů, Přehled importů

#### Povodňová ochrana (Další informace k povodňové ochraně)
- Aktuální informace k povodňové situaci (odkazy ČHMÚ)
- Vyhodnocení minulých povodní
- OPŽP (2007-2013, 2014-2020, 2021-2027)
- Legislativa
- Kalendář akcí
- Školení a semináře
- Další dokumenty ke stažení

#### Aktuality
- Přímý odkaz na stránku aktualit (povodňové aktuality + aktuality z POVIS)

### Položky menu pro specifické role (zobrazovat podmíněně)

- **Administrace** (pouze správci)
- **Správa** (pouze správci): Konfigurace aplikace, Konfigurace notifikací, Číselníky, Role, Uživatelé, Příručky, Kontextová nápověda
- **Subjekty**: Přehled subjektů

### Postup kódování

1. Nahradit celý `<ul className="nav-list4">` blok (řádky 113–193)
2. Vytvořit 6 nových `<li className="nav-item4">` s odpovídajícími mega-dropdown obsahy
3. Každé mega-dropdown rozdělit do sloupců dle logických skupin (příklad: PP má sekci "Veřejné" a sekci "Pro přihlášené")
4. Záložka „Aktuality" bez dropdown — přímý odkaz
5. Přidat state pro podmíněné zobrazení přihlášených/admin položek (využít existující login logiku)

---

## ZMĚNA 2: Nová sekce dlaždic hlavních agend na homepage

### Umístění

Vložit **za hero sekci** (po `</section>` hero) a **před sekci životních situací**.

### Pořadí sekcí na stránce (shora dolů)

1. Emergency banner *(beze změn)*
2. Header + navigace *(viz ZMĚNA 1)*
3. Hero s mapou a vyhledáváním *(beze změn)*
4. **→ NOVÉ: Dlaždice hlavních agend ←**
5. Životní situace *(beze změn)*
6. Aktuální situace ČHMÚ *(beze změn)*
7. Aktuality *(beze změn)*
8. Footer *(beze změn)*

### Obsah sekce — 4 dlaždice

| # | Název dlaždice | Popisný text | Akce 1 | Akce 2 |
|---|---------------|--------------|--------|--------|
| 1 | **Povodňové plány** | Registr digitálních povodňových plánů ČR, krajů, ORP a obcí. Metodika tvorby a export dat. | Zjistit více → (info stránka) | — |
| 2 | **Záplavová území** | Evidence a vymezení záplavových území. Mapy aktivních zón a záplavových čar. | Zjistit více → (info stránka) | 🗺 Zobrazit na mapě (mapová kompozice ZÚ) |
| 3 | **Zvládání povodňových rizik** | Povodňová směrnice EU, úseky s významným povodňovým rizikem, plány a opatření. | Zjistit více → (info stránka) | 🗺 Zobrazit na mapě (mapová kompozice PS) |
| 4 | **Ochrana před povodněmi** | Financování protipovodňových opatření, legislativa, vyhodnocení minulých povodní. | Zjistit více → (info stránka) | — |

### Vizuální řešení dlaždic s mapou (ZÚ a PS)

U dlaždic Záplavová území a Zvládání povodňových rizik je požadavek na **dva přechody** — na info stránku i na mapu. Navrhuji:

```
┌─────────────────────────────┐
│  🗺                         │
│  Záplavová území            │
│  Evidence a vymezení...     │
│                             │
│  ┌───────────┐ ┌──────────┐ │
│  │Zjistit více│ │  Mapa  🗺│ │
│  └───────────┘ └──────────┘ │
└─────────────────────────────┘
```

Primární CTA „Zjistit více" (outline button) + sekundární CTA „Mapa" (icon button nebo ghost button).

### Postup kódování

1. Vytvořit novou `<section>` s nadpisem „Hlavní agendy" (nebo bez nadpisu — jen vizuální blok)
2. Grid layout 4 sloupce (`agenda-grid4`) s breakpointy pro tablet (2 sl.) a mobil (1 sl.)
3. Každá dlaždice jako `<article className="agenda-card4">`
4. Ikonky — buď SVG ikony nebo emoji placeholder (🗂 📋 🗺 🛡)
5. Pro ZÚ a PS přidat druhé tlačítko s mapovou ikonkou
6. Styl konzistentní s existujícím designem (zelený systém, zaoblené rohy, stíny)

### Vzorový JSX pro jednu dlaždici

```jsx
<article className="agenda-card4">
  <div className="agenda-icon4" aria-hidden="true">
    {/* SVG ikona nebo placeholder */}
  </div>
  <h3>Záplavová území</h3>
  <p>Evidence a vymezení záplavových území. Mapy aktivních zón a záplavových čar.</p>
  <div className="agenda-actions4">
    <a href="#" className="agenda-btn4">Zjistit více <span aria-hidden="true">→</span></a>
    <a href="#" className="agenda-btn-map4" aria-label="Zobrazit záplavová území na mapě">
      🗺 Mapa
    </a>
  </div>
</article>
```

---

## ZMĚNA 3: CSS doplnění (Example4.css)

### Nové třídy k vytvoření

```
.agenda-section4        — wrapper sekce (padding, pozadí)
.agenda-grid4           — CSS grid 4 sloupce
.agenda-card4           — jednotlivá dlaždice (border, radius, shadow, padding)
.agenda-card4:hover     — hover efekt (elevace stínu, posun nahoru)
.agenda-icon4           — ikona dlaždice
.agenda-actions4        — flex container pro tlačítka
.agenda-btn4            — primární odkaz „Zjistit více"
.agenda-btn-map4        — sekundární odkaz „Mapa" (pro ZÚ a PS)
```

### Responsive breakpointy

```css
/* Desktop: 4 sloupce */
.agenda-grid4 { grid-template-columns: repeat(4, 1fr); }

/* Tablet (~768px): 2 sloupce */
@media (max-width: 768px) {
  .agenda-grid4 { grid-template-columns: repeat(2, 1fr); }
}

/* Mobil (~480px): 1 sloupec */
@media (max-width: 480px) {
  .agenda-grid4 { grid-template-columns: 1fr; }
}
```

---

## ZMĚNA 4: Logika přechodů z dlaždic životních situací

Toto je popsáno v `GUI_HP_menu_verze4_dod.docx` jako ideový návrh, který bude dále rozpracován. Zatím **neimplementovat**, ale připravit strukturu pro budoucí rozšíření:

### „Ohrožení místa povodněmi" (ze životních situací)
- Uživatel klikne → obecná mapa ČR → zoomuje/vyhledá místo → označí bod
- Systém identifikuje: je bod v záplavovém území? v úseku OsVPR? existuje kritický bod / dPP?
- Výsledek: info výpis s přechody na detail/mapu

### „Co dělat mimo/při/po povodni"
- Každé vede na samostatnou stránku s texty a odkazy na relevantní agendy

**Poznámka:** Tato logika je zatím ideová. Stávající hero search + MapPage toto částečně pokrývá. Detailní implementace bude dle další analýzy.

---

## Shrnutí prací

| Priorita | Úprava | Soubor | Rozsah |
|----------|--------|--------|--------|
| 🔴 P1 | Restrukturalizace menu | Example4.jsx řádky 113–193 | Přepis celého nav bloku |
| 🔴 P1 | Dlaždice hlavních agend | Example4.jsx za řádek 246 | Nová sekce ~40 řádků JSX |
| 🟡 P2 | CSS pro dlaždice agend | Example4.css | Nové třídy ~60 řádků CSS |
| 🟡 P2 | CSS úpravy mega menu | Example4.css | Úprava existujících stylů |
| 🟢 P3 | Podmíněné menu pro role | Example4.jsx | State + podmíněné renderování |
| ⚪ P4 | Logika životních situací | Budoucí | Zatím neimplementovat |

---

## Poznámky

- Grafický návrh (barvy, font, velikost písma, obrázky) je na dodavateli — dokument říká: *„GRAFICKÝ NÁVRH NECHÁVÁME K NAVRŽENÍ DODAVATELEM"*
- Dodržovat DesignGov doporučení pro header navigaci: https://designsystem.gov.cz/organismy/header-navigation.html
- EMF obrázky z dokumentu se nepodařilo převést — jsou to vektorové schémata dlaždic (zelené zaoblené obdélníky s textem)
- Popisné texty k dlaždicím je třeba finalizovat s OOV — v plánu jsou pracovní verze
