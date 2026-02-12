import { useState } from 'react';
import './MapPage.css';

function MapPage({ query, onBack }) {
    const [sidebarTab, setSidebarTab] = useState('results'); // 'results' | 'layers' | null
    const [layers, setLayers] = useState({
        zaplavova: true,
        osvpr: true,
        kriticke: false,
        dpp: false,
        povodnove_komise: false,
        radar: false,
    });

    const toggleLayer = (key) => {
        setLayers(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const closeSidebar = () => setSidebarTab(null);

    return (
        <div className="map-page4">
            {/* ===== HEADER ===== */}
            <header className="map-header4">
                <div className="map-header-top4">
                    <div className="map-header-left4">
                        <a href="/" className="map-logo4" onClick={(e) => { e.preventDefault(); onBack(); }}>
                            <div className="map-logo-icon4" aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="white" opacity="0.9" /></svg>
                            </div>
                            <span className="map-logo-text4">POVIS2</span>
                        </a>
                        <button className="map-back-btn4" type="button" onClick={onBack}>
                            ← <span className="back-text">Zpět na úvod</span>
                        </button>
                    </div>
                    <div className="map-header-right4">
                        <button className="toolbar-btn4" type="button" aria-label="Nápověda">
                            <span className="tb-icon">❓</span> Nápověda
                        </button>
                    </div>
                </div>

                {/* TOOLBAR */}
                <div className="map-toolbar4">
                    <div className="map-search-bar4">
                        <span className="map-search-icon4" aria-hidden="true">🔍</span>
                        <input
                            type="text"
                            defaultValue={query}
                            placeholder="Zadejte adresu, obec nebo parcelu..."
                            aria-label="Hledat místo na mapě"
                        />
                    </div>
                    <span className="toolbar-divider4"></span>
                    <button
                        className={`toolbar-btn4 ${sidebarTab === 'layers' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setSidebarTab(sidebarTab === 'layers' ? null : 'layers')}
                    >
                        <span className="tb-icon">🗂️</span> Vrstvy
                    </button>
                    <button
                        className={`toolbar-btn4 ${sidebarTab === 'results' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setSidebarTab(sidebarTab === 'results' ? null : 'results')}
                    >
                        <span className="tb-icon">📋</span> Výsledky
                    </button>
                    <span className="toolbar-divider4"></span>
                    <button className="toolbar-btn4" type="button">
                        <span className="tb-icon">📏</span> Měření
                    </button>
                    <button className="toolbar-btn4" type="button">
                        <span className="tb-icon">🖨️</span> Tisk
                    </button>
                    <button className="toolbar-btn4" type="button">
                        <span className="tb-icon">📤</span> Export
                    </button>
                </div>
            </header>

            {/* ===== MAP ===== */}
            <div className="map-container4">
                <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=14.2%2C49.9%2C14.8%2C50.2&layer=mapnik&marker=50.08%2C14.43`}
                    title={`Mapa — ${query}`}
                    loading="lazy"
                ></iframe>

                {/* Map controls */}
                <div className="map-controls4">
                    <div className="map-ctrl-group4">
                        <button className="map-ctrl-btn4" type="button" aria-label="Přiblížit">＋</button>
                        <button className="map-ctrl-btn4" type="button" aria-label="Oddálit">－</button>
                    </div>
                    <div className="map-ctrl-group4">
                        <button className="map-ctrl-btn4" type="button" aria-label="Moje poloha">📍</button>
                    </div>
                    <div className="map-ctrl-group4">
                        <button className="map-ctrl-btn4" type="button" aria-label="Celá ČR" style={{ fontSize: '0.7rem', fontWeight: 700 }}>ČR</button>
                    </div>
                </div>

                {/* Coordinate bar */}
                <div className="map-coords4">
                    <span>📍 50.0755° N, 14.4378° E</span>
                    <span>🔎 Měřítko 1:25 000</span>
                    <span>© OpenStreetMap</span>
                </div>

                {/* ===== SIDEBAR ===== */}
                {sidebarTab && (
                    <div className="map-sidebar4" role="region" aria-label={sidebarTab === 'layers' ? 'Mapové vrstvy' : 'Výsledky hledání'}>
                        <div className="sidebar-header4">
                            <h3>{sidebarTab === 'layers' ? 'Mapové vrstvy' : `Výsledky: ${query}`}</h3>
                            <button className="sidebar-close4" onClick={closeSidebar} aria-label="Zavřít panel" type="button">✕</button>
                        </div>
                        <div className="sidebar-content4">

                            {sidebarTab === 'layers' && (
                                <>
                                    <div className="layer-group4">
                                        <div className="layer-group-title4">Povodňová ochrana</div>
                                        <div className="layer-item4">
                                            <button className={`layer-toggle4 ${layers.zaplavova ? 'on' : ''}`} onClick={() => toggleLayer('zaplavova')} type="button" aria-label="Záplavová území"></button>
                                            <span className="layer-color4" style={{ background: '#4a7ec7' }}></span>
                                            <span className="layer-label4">Záplavová území</span>
                                        </div>
                                        <div className="layer-item4">
                                            <button className={`layer-toggle4 ${layers.osvpr ? 'on' : ''}`} onClick={() => toggleLayer('osvpr')} type="button" aria-label="Úseky OsVPR"></button>
                                            <span className="layer-color4" style={{ background: '#e8a838' }}></span>
                                            <span className="layer-label4">Úseky OsVPR</span>
                                        </div>
                                        <div className="layer-item4">
                                            <button className={`layer-toggle4 ${layers.kriticke ? 'on' : ''}`} onClick={() => toggleLayer('kriticke')} type="button" aria-label="Kritické body"></button>
                                            <span className="layer-color4" style={{ background: '#d06060' }}></span>
                                            <span className="layer-label4">Kritické body</span>
                                        </div>
                                    </div>
                                    <div className="layer-group4">
                                        <div className="layer-group-title4">Povodňové plány</div>
                                        <div className="layer-item4">
                                            <button className={`layer-toggle4 ${layers.dpp ? 'on' : ''}`} onClick={() => toggleLayer('dpp')} type="button" aria-label="Digitální povodňové plány"></button>
                                            <span className="layer-color4" style={{ background: '#86c9b8' }}></span>
                                            <span className="layer-label4">Digitální povodňové plány</span>
                                        </div>
                                        <div className="layer-item4">
                                            <button className={`layer-toggle4 ${layers.povodnove_komise ? 'on' : ''}`} onClick={() => toggleLayer('povodnove_komise')} type="button" aria-label="Povodňové komise"></button>
                                            <span className="layer-color4" style={{ background: '#b8a9d4' }}></span>
                                            <span className="layer-label4">Povodňové komise</span>
                                        </div>
                                    </div>
                                    <div className="layer-group4">
                                        <div className="layer-group-title4">Meteorologie (ČHMÚ)</div>
                                        <div className="layer-item4">
                                            <button className={`layer-toggle4 ${layers.radar ? 'on' : ''}`} onClick={() => toggleLayer('radar')} type="button" aria-label="Radarové snímky"></button>
                                            <span className="layer-color4" style={{ background: '#8ec8e8' }}></span>
                                            <span className="layer-label4">Radarové snímky a srážky</span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {sidebarTab === 'results' && (
                                <>
                                    <div className="result-summary4 summary-warn">
                                        <span aria-hidden="true">⚠</span>
                                        Místo se nachází v záplavovém území
                                    </div>

                                    <div className="result-card4">
                                        <span className="result-badge4 badge-danger">Záplavové území</span>
                                        <h4>Q₁₀₀ — stoletá voda</h4>
                                        <p>Zadaná lokalita „{query}" se nachází v záplavovém území pro průtok Q₁₀₀ (stoletá voda) na řece Vltavě.</p>
                                        <div className="result-meta4">
                                            <span className="result-tag4">Vltava</span>
                                            <span className="result-tag4">Povodí Vltavy</span>
                                            <span className="result-tag4">Q₁₀₀</span>
                                        </div>
                                        <a href="#" className="result-link4">Zobrazit detail ZÚ →</a>
                                    </div>

                                    <div className="result-card4">
                                        <span className="result-badge4 badge-warning">Úsek OsVPR</span>
                                        <h4>Úsek s významným povodňovým rizikem</h4>
                                        <p>Lokalita spadá do úseku OsVPR se středním povodňovým rizikem. Platí plán zvládání rizik pro cyklus 2021–2027.</p>
                                        <div className="result-meta4">
                                            <span className="result-tag4">2. implementační cyklus</span>
                                            <span className="result-tag4">Střední riziko</span>
                                        </div>
                                        <a href="#" className="result-link4">Zobrazit úsek OsVPR →</a>
                                    </div>

                                    <div className="result-card4">
                                        <span className="result-badge4 badge-info">Povodňový plán</span>
                                        <h4>Digitální povodňový plán obce</h4>
                                        <p>Pro tuto obec existuje zpracovaný digitální povodňový plán (dPP) s aktualizací platnou od 03/2025.</p>
                                        <div className="result-meta4">
                                            <span className="result-tag4">dPP</span>
                                            <span className="result-tag4">Aktuální</span>
                                        </div>
                                        <a href="#" className="result-link4">Otevřít povodňový plán →</a>
                                    </div>

                                    <div className="result-divider4"></div>

                                    <div className="result-card4">
                                        <span className="result-badge4 badge-ok">Povodňová komise</span>
                                        <h4>Povodňová komise obce</h4>
                                        <p>Na území obce je zřízena povodňová komise. Kontaktní údaje jsou k dispozici v povodňovém plánu.</p>
                                        <a href="#" className="result-link4">Zobrazit kontakty →</a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MapPage;
