import './Intro4.css';

export default function Intro4({ onOpenExample }) {
    return (
        <div className="intro4-page">
            {/* ===== HERO ===== */}
            <section className="intro4-hero">
                <div className="intro4-badge">Design Brief — POVIS2</div>
                <h1>Návrh UI pro <span>POVIS2</span></h1>
                <p>Přehled vizuálního stylu, komponent a informační architektury použité v prototypu nového Povodňového informačního systému.</p>
            </section>

            <div className="intro4-container">

                {/* ===== 1. BAREVNÁ PALETA ===== */}
                <section className="intro4-section">
                    <div className="intro4-section-label">01</div>
                    <h2 className="intro4-section-title">Barevná paleta</h2>

                    <div className="intro4-colors">
                        {[
                            { bg: '#4a7ec7', name: 'Blue' },
                            { bg: '#3565a8', name: 'Deep' },
                            { bg: '#e8f0fa', name: 'Soft' },
                            { bg: '#111827', name: 'Dark' },
                            { bg: '#f7f9fc', name: 'BG' },
                            { bg: '#ffffff', name: 'White' },
                        ].map(c => (
                            <div key={c.name} className="intro4-color-chip">
                                <div className="intro4-color-swatch" style={{ background: c.bg }} />
                                <span>{c.bg}</span>
                            </div>
                        ))}
                    </div>

                    <div className="intro4-colors-secondary">
                        {[
                            { bg: '#e8a838', name: 'Amber (během)' },
                            { bg: '#5ea87a', name: 'Green (po)' },
                            { bg: '#d06060', name: 'Red (alert)' },
                            { bg: '#86c9b8', name: 'Mint' },
                            { bg: '#8ec8e8', name: 'Sky' },
                            { bg: '#b8a9d4', name: 'Lavender' },
                        ].map(c => (
                            <div key={c.name} className="intro4-color-dot">
                                <i style={{ background: c.bg }} />
                                <span>{c.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 2. TYPOGRAFIE ===== */}
                <section className="intro4-section">
                    <div className="intro4-section-label">02</div>
                    <h2 className="intro4-section-title">Typografie</h2>

                    <div className="intro4-type-row">
                        <span className="intro4-type-sample" style={{ fontSize: '1.5rem' }}>Inter — Nadpis</span>
                        <span className="intro4-type-meta">800 / 1.5rem</span>
                    </div>
                    <div className="intro4-type-row">
                        <span className="intro4-type-sample" style={{ fontSize: '1.1rem' }}>Sekční nadpis</span>
                        <span className="intro4-type-meta">700 / 1.1rem</span>
                    </div>
                    <div className="intro4-type-row">
                        <span className="intro4-type-sample" style={{ fontSize: '0.87rem', fontWeight: 500 }}>Navigační položka</span>
                        <span className="intro4-type-meta">500 / 0.87rem</span>
                    </div>
                    <div className="intro4-type-row">
                        <span className="intro4-type-sample" style={{ fontSize: '0.85rem', fontWeight: 400, color: '#9ca3af' }}>Odstavcový text — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span className="intro4-type-meta">400 / 0.85rem</span>
                    </div>
                </section>

                {/* ===== 3. KOMPONENTY ===== */}
                <section className="intro4-section">
                    <div className="intro4-section-label">03</div>
                    <h2 className="intro4-section-title">Klíčové komponenty</h2>

                    <div className="intro4-comp-grid">
                        {[
                            { title: 'Hlavička + Mega menu', desc: 'Logo POVIS2, tagline, přihlášení, jazykový přepínač. Navigace s mega-dropdown podmenu.' },
                            { title: 'Emergency banner', desc: 'Červený banner s povodňovými výstrahami. Zavíratelný. Zobrazuje se pouze v krizové situaci.' },
                            { title: 'Hero s mapou', desc: 'Vyhledávání adresy/parcely s interaktivní mapou ČR. Hlavní vstupní bod pro veřejnost.' },
                            { title: 'Fázové karty', desc: 'Tří-kartový layout: Před povodní (modrá), Při povodni (amber), Po povodni (zelená). Barevné kódování + textové labely.' },
                            { title: 'Monitoring tiles', desc: 'Real-time dlaždice: Výstrahy, Radar, Předpovědi, Přívalové povodně. Hover efekty, přímé linky.' },
                            { title: 'Aktuality', desc: 'Hlavní článek + 3 postranní karty. Datum, nadpis, popis. Grid layout s responzivním zalamováním.' },
                            { title: 'Login modal', desc: 'Dialog pro přihlášení obcí a správců. Sekce pro obecní i administrátorský přístup. Escape zavírá.' },
                            { title: 'Footer', desc: '4-sloupcový footer: O systému, Sekce, Podpora, Kontakt. Tmavé pozadí, světlé odkazy.' },
                            { title: 'Mapová stránka', desc: 'Fullscreen iframe mapa. Overlay panel s výsledky vyhledávání. Předávaná query z hero.' },
                        ].map(c => (
                            <div key={c.title} className="intro4-comp-card">
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 4. INFORMAČNÍ ARCHITEKTURA ===== */}
                <section className="intro4-section">
                    <div className="intro4-section-label">04</div>
                    <h2 className="intro4-section-title">Informační architektura</h2>

                    <div className="intro4-ia">
                        <div className="intro4-ia-col">
                            <h4>🛡️ Plánování a území</h4>
                            <ul>
                                <li>Povodňové plány</li>
                                <li>Záplavová území</li>
                                <li>Digitální plány (dPP)</li>
                            </ul>
                        </div>
                        <div className="intro4-ia-col">
                            <h4>🗺️ Mapový portál</h4>
                            <ul>
                                <li>Záplavová území</li>
                                <li>Ohrožené objekty</li>
                                <li>Mapa obcí s dPP</li>
                            </ul>
                        </div>
                        <div className="intro4-ia-col">
                            <h4>⚡ Aktuální situace</h4>
                            <ul>
                                <li>Výstrahy ČHMÚ</li>
                                <li>Srážkový radar</li>
                                <li>Předpovědní modely</li>
                                <li>Přívalové povodně</li>
                            </ul>
                        </div>
                        <div className="intro4-ia-col">
                            <h4>📋 Podpora a info</h4>
                            <ul>
                                <li>Metodiky</li>
                                <li>FAQ a nápověda</li>
                                <li>Legislativa</li>
                                <li>Kontakty</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===== 5. DESIGN PRINCIPY ===== */}
                <section className="intro4-section">
                    <div className="intro4-section-label">05</div>
                    <h2 className="intro4-section-title">Design principy</h2>

                    <div className="intro4-principles">
                        <div className="intro4-principle">
                            <div className="intro4-principle-icon">♿</div>
                            <h4>WCAG 2.1 AA</h4>
                            <p>Kontrast 4.5:1, klávesnicová navigace, ARIA labely, prefers-reduced-motion.</p>
                        </div>
                        <div className="intro4-principle">
                            <div className="intro4-principle-icon">📱</div>
                            <h4>Responzivní</h4>
                            <p>Mobile-first, hamburger menu, flexibilní gridy, breakpointy 900px a 600px.</p>
                        </div>
                        <div className="intro4-principle">
                            <div className="intro4-principle-icon">🏛️</div>
                            <h4>design.gov.cz</h4>
                            <p>Soulad s designovým systémem veřejné správy ČR. Institucionální, ale moderní.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* ===== CTA ===== */}
            <div className="intro4-cta">
                <button className="intro4-cta-btn" onClick={onOpenExample}>
                    Otevřít ukázku →
                </button>
                <p className="intro4-cta-sub">Interaktivní prototyp — živý kód, ne statický mockup</p>
            </div>
        </div>
    );
}
