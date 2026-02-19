import { useState } from 'react';
import {
    GovBanner, GovInfobar, GovButton, GovCard,
    GovGrid, GovGridItem, GovFlex, GovTile,
    GovAccordion, GovAccordionItem, GovLink,
    GovIcon, GovDialog
} from '@gov-design-system-ce/react';
import './Example9.css';

function Example9() {
    const [alertOpen, setAlertOpen] = useState(true);
    const [emergencyOpen, setEmergencyOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [lang, setLang] = useState('cs');
    const [loginOpen, setLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('public');

    const selectLang = (l) => { setLang(l); setLangOpen(false); };

    return (
        <div className="example9-root">

            {/* ===== EMERGENCY BANNER ===== */}
            {emergencyOpen && (
                <div className="e9-emergency" role="alert">
                    <div className="e9-container e9-emergency__inner">
                        <span>
                            <strong>Výstraha ČHMÚ: Extrémní stupeň nebezpečí</strong>
                            {' — '}silné bouřky a přívalové srážky v Jihomoravském a Zlínském kraji.{' '}
                            <a href="https://www.chmi.cz/files/portal/docs/meteo/om/vystrahy/" target="_blank" rel="noopener noreferrer">Detail na ČHMÚ →</a>
                        </span>
                        <button className="e9-emergency__close" onClick={() => setEmergencyOpen(false)} aria-label="Zavřít upozornění" type="button">✕</button>
                    </div>
                </div>
            )}

            {/* ===== HEADER ===== */}
            <header className="e9-header" role="banner">
                <div className="e9-header__divider">
                    <div className="e9-container">
                        <GovFlex justifyContent="space-between" alignItems="center" responsive={false}>
                            <a href="/" className="e9-header__logo" aria-label="POVIS2 – přejít na úvodní stránku">
                                <GovFlex alignItems="center" gap="s" responsive={false}>
                                    <img src="/images/logo-mzp-cs.svg" alt="Ministerstvo životního prostředí" className="e9-header__mzp-logo" />
                                    <span className="e9-header__divider-line" aria-hidden="true"></span>
                                    <span className="e9-header__brand">POVIS2</span>
                                    <span className="e9-header__tagline">Povodňový informační systém</span>
                                </GovFlex>
                            </a>
                            <GovFlex alignItems="center" gap="s" responsive={false}>
                                <div className="e9-lang hide-mobile9">
                                    <button className="e9-lang__toggle" type="button" onClick={() => setLangOpen(!langOpen)} aria-expanded={langOpen} aria-label="Vybrat jazyk">
                                        <span>{lang === 'cs' ? '🇨🇿' : '🇬🇧'}</span>
                                        <span>{lang === 'cs' ? 'CZ' : 'EN'}</span>
                                    </button>
                                    {langOpen && (
                                        <div className="e9-lang__dropdown" role="menu">
                                            <button role="menuitem" className={lang === 'cs' ? 'active' : ''} onClick={() => selectLang('cs')} type="button">🇨🇿 Česky</button>
                                            <button role="menuitem" className={lang === 'en' ? 'active' : ''} onClick={() => selectLang('en')} type="button">🇬🇧 English</button>
                                        </div>
                                    )}
                                </div>
                                {isLoggedIn ? (
                                    <GovButton type="outlined" color="primary" size="s" className="hide-mobile9" onClick={() => { setIsLoggedIn(false); setUserRole('public'); }}>Odhlásit se</GovButton>
                                ) : (
                                    <GovButton type="solid" color="primary" size="s" className="hide-mobile9" onClick={() => setLoginOpen(true)}>Přihlásit se</GovButton>
                                )}
                                <button className="e9-hamburger" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}>
                                    <span className={`e9-hamburger__icon ${menuOpen ? 'open' : ''}`}>
                                        <span></span><span></span><span></span>
                                    </span>
                                </button>
                            </GovFlex>
                        </GovFlex>
                    </div>
                </div>

                {/* Navigation */}
                <nav className={`e9-nav ${menuOpen ? 'e9-nav--open' : ''}`} aria-label="Hlavní navigace">
                    <div className="e9-container">
                        <ul className="e9-nav__list" role="menubar">
                            <li className="e9-nav__item" role="none">
                                <GovButton type="base" aria-controls="megamenu0">O POVIS2</GovButton>
                                <ul className="e9-mega" id="megamenu0" role="menu">
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Základní informace</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Dokumentace POVIS2</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Provozní řád</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>FAQ</a></li>
                                </ul>
                            </li>
                            <li className="e9-nav__item" role="none">
                                <GovButton type="base" aria-controls="megamenu1">Povodňové plány</GovButton>
                                <ul className="e9-mega" id="megamenu1" role="menu">
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Povodňový plán ČR</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Registr povodňových plánů</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Povodňové komise</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Mapy povodňových plánů</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Metodika tvorby dPP</a></li>
                                </ul>
                            </li>
                            <li className="e9-nav__item" role="none">
                                <GovButton type="base" aria-controls="megamenu2">Záplavová území</GovButton>
                                <ul className="e9-mega" id="megamenu2" role="menu">
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Mapy záplavových území</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Evidence záplavových území</a></li>
                                </ul>
                            </li>
                            <li className="e9-nav__item" role="none">
                                <GovButton type="base" aria-controls="megamenu3">Zvládání povod. rizik</GovButton>
                                <ul className="e9-mega" id="megamenu3" role="menu">
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Úseky OsVPR</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Mapy OsVPR</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Strukturální opatření</a></li>
                                    <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Plány pro zvládání rizik</a></li>
                                </ul>
                            </li>
                            <li className="e9-nav__item" role="none">
                                <GovButton type="base">Povodňová ochrana</GovButton>
                            </li>
                            <li className="e9-nav__item" role="none">
                                <GovButton type="base" onClick={() => setMenuOpen(false)}>Aktuality</GovButton>
                            </li>
                            {isLoggedIn && (
                                <li className="e9-nav__item" role="none">
                                    <GovButton type="base" onClick={() => setMenuOpen(false)}>Subjekty</GovButton>
                                </li>
                            )}
                            {userRole === 'admin' && (
                                <li className="e9-nav__item" role="none">
                                    <GovButton type="base" aria-controls="megamenu-admin">Správa</GovButton>
                                    <ul className="e9-mega" id="megamenu-admin" role="menu">
                                        <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Konfigurace aplikace</a></li>
                                        <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Uživatelé a role</a></li>
                                        <li><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Číselníky</a></li>
                                    </ul>
                                </li>
                            )}
                        </ul>
                        <div className="e9-nav__mobile-extras">
                            {isLoggedIn ? (
                                <GovButton type="outlined" color="primary" size="s" onClick={() => { setIsLoggedIn(false); setUserRole('public'); setMenuOpen(false); }}>Odhlásit se</GovButton>
                            ) : (
                                <GovButton type="solid" color="primary" size="s" onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>Přihlásit se</GovButton>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            {/* ===== BANNER (Hero) ===== */}
            <GovBanner
                size="l"
                headline={<h1>Portál povodňového informačního systému POVIS2</h1>}
                button={<GovButton color="secondary" size="l" type="solid">Ověřit ohrožení na mapě</GovButton>}
                image={
                    <img
                        src="/images/flood-main.png"
                        alt="Povodňová mapa České republiky"
                        width="537"
                        height="360"
                    />
                }
            >
                <p>Spravujeme informace o povodňových rizicích, ochraně a postupech v mimořádných povodňových situacích. Pomáháme obcím, úřadům i veřejnosti se včas připravit a správně reagovat.</p>
            </GovBanner>

            {/* ===== INFOBAR ===== */}
            {alertOpen && (
                <div className="e9-container e9-infobar-wrap">
                    <GovInfobar
                        color="warning"
                        type="subtle"
                        closable
                        onClose={() => setAlertOpen(false)}
                        accessibleCloseLabel="Zavřít upozornění"
                    >
                        <p>Plánovaná údržba systému proběhne dne 15. 2. 2026. Omlouváme se za případné nepříjemnosti.</p>
                    </GovInfobar>
                </div>
            )}

            <main id="main-content">

                {/* ===== SEKCE 1: Hlavní agendy ===== */}
                <section className="e9-section" aria-labelledby="s-agendy">
                    <div className="e9-container">
                        <GovFlex direction="column" gap="l">
                            <div>
                                <h2 id="s-agendy">Hlavní agendy</h2>
                                <p className="e9-subtitle">Klíčové oblasti povodňového informačního systému.</p>
                            </div>
                            <GovGrid gap="l">
                                <GovGridItem column="12" columnLg="3">
                                    <GovCard
                                        headline={<h3 className="gov-card__headline">Povodňové plány</h3>}
                                    >
                                        <p>Registr digitálních povodňových plánů ČR, krajů, ORP a obcí. Metodika tvorby a export dat.</p>
                                    </GovCard>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="3">
                                    <GovCard
                                        headline={<h3 className="gov-card__headline">Záplavová území</h3>}
                                    >
                                        <p>Evidence a vymezení záplavových území. Mapy aktivních zón a záplavových čar.</p>
                                    </GovCard>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="3">
                                    <GovCard
                                        headline={<h3 className="gov-card__headline">Zvládání povodňových rizik</h3>}
                                    >
                                        <p>Směrnice EU o zvládání povodňových rizik, úseky s významným povodňovým rizikem, plány a opatření.</p>
                                    </GovCard>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="3">
                                    <GovCard
                                        headline={<h3 className="gov-card__headline">Ochrana před povodněmi</h3>}
                                    >
                                        <p>Financování protipovodňových opatření, legislativa, vyhodnocení minulých povodní.</p>
                                    </GovCard>
                                </GovGridItem>
                            </GovGrid>
                        </GovFlex>
                    </div>
                </section>

                {/* ===== SEKCE 2: Aktuality ===== */}
                <section className="e9-section e9-section--alt" aria-labelledby="s-aktuality">
                    <div className="e9-container">
                        <GovFlex direction="column" gap="l">
                            <div>
                                <h2 id="s-aktuality">Aktuality</h2>
                                <p className="e9-subtitle">Novinky ze systému POVIS2, legislativní změny a aktuální povodňové události.</p>
                            </div>
                            <GovGrid gap="l">
                                <GovGridItem column="12" columnLg="6" row="2">
                                    <article>
                                        <GovCard
                                            direction="vertical"
                                            img={
                                                <img src="/images/flood-main.png" alt="Letecký pohled na zaplavené české město" />
                                            }
                                            headline={<h3 className="gov-card__headline">Aktualizace záplavových území pro oblast Moravy</h3>}
                                        >
                                            <GovFlex gap="s" alignItems="center" responsive={false}>
                                                <GovIcon type="basic" name="calendar" />
                                                <time dateTime="2026-02-05">5. února 2026</time>
                                            </GovFlex>
                                            <p>Na základě nových hydrologických modelů byly přepracovány mapy záplavových území v povodí řeky Moravy. Změny se dotknou více než 120 obcí.</p>
                                        </GovCard>
                                    </article>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="6">
                                    <article>
                                        <GovCard
                                            direction="horizontal"
                                            img={
                                                <img src="/images/flood-gauge.png" alt="Hlásný profil na rozvodněné řece" />
                                            }
                                            headline={<h3 className="gov-card__headline">Nová metodika měření hlásných profilů</h3>}
                                        >
                                            <GovFlex gap="s" alignItems="center" responsive={false}>
                                                <GovIcon type="basic" name="calendar" />
                                                <time dateTime="2026-02-01">1. února 2026</time>
                                            </GovFlex>
                                        </GovCard>
                                    </article>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="6">
                                    <article>
                                        <GovCard
                                            direction="horizontal"
                                            img={
                                                <img src="/images/flood-sandbags.png" alt="Záchranáři při protipovodňové ochraně" />
                                            }
                                            headline={<h3 className="gov-card__headline">Školení pro obce — mimořádné situace</h3>}
                                        >
                                            <GovFlex gap="s" alignItems="center" responsive={false}>
                                                <GovIcon type="basic" name="calendar" />
                                                <time dateTime="2026-01-28">28. ledna 2026</time>
                                            </GovFlex>
                                        </GovCard>
                                    </article>
                                </GovGridItem>
                            </GovGrid>
                        </GovFlex>
                    </div>
                </section>

                {/* ===== SEKCE 3: Životní situace ===== */}
                <section className="e9-section" aria-labelledby="s-situace">
                    <div className="e9-container">
                        <GovFlex direction="column" gap="l">
                            <div>
                                <h2 id="s-situace">Životní situace</h2>
                                <p className="e9-subtitle">Praktický rádce — co dělat před povodní, při ní i po ní.</p>
                            </div>
                            <GovGrid gap="l">
                                <GovGridItem column="12" columnLg="4">
                                    <GovCard
                                        direction="horizontal"
                                        icon={<GovIcon type="basic" name="shield-check" />}
                                        headline={<h3 className="gov-card__headline">Co dělat mimo povodeň</h3>}
                                    >
                                        <p>Zjistěte rizika v okolí své parcely, prostudujte legislativu a digitální povodňové plány.</p>
                                    </GovCard>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="4">
                                    <GovCard
                                        direction="horizontal"
                                        icon={<GovIcon type="basic" name="lightning" />}
                                        headline={<h3 className="gov-card__headline">Co dělat při povodni</h3>}
                                    >
                                        <p>Okamžité informace o průběhu povodně, předpovědi a kontakty na povodňové komise.</p>
                                    </GovCard>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="4">
                                    <GovCard
                                        direction="horizontal"
                                        icon={<GovIcon type="basic" name="wrench" />}
                                        headline={<h3 className="gov-card__headline">Co dělat po povodni</h3>}
                                    >
                                        <p>Průvodce financováním obnovy, ochrana před povodněmi a důležité dokumenty k nápravě škod.</p>
                                    </GovCard>
                                </GovGridItem>
                            </GovGrid>
                        </GovFlex>
                    </div>
                </section>

                {/* ===== SEKCE 4: Výstrahy ČHMÚ ===== */}
                <section className="e9-section e9-section--alt" aria-labelledby="s-monitoring">
                    <div className="e9-container">
                        <GovFlex direction="column" gap="l">
                            <div>
                                <h2 id="s-monitoring">Výstrahy a monitoring ČHMÚ</h2>
                                <p className="e9-subtitle">Operativní informace ze stránek Českého hydrometeorologického ústavu.</p>
                            </div>
                            <GovGrid gap="l">
                                <GovGridItem column="12" columnLg="3">
                                    <GovTile
                                        orientation="vertical"
                                        size="s"
                                        noBorder={false}
                                        icon={<GovIcon type="basic" name="exclamation-triangle" />}
                                        title={<h3>Výstrahy</h3>}
                                    >
                                        <span>Aktuálně platná varování a stupně nebezpečí meteorologických jevů.</span>
                                    </GovTile>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="3">
                                    <GovTile
                                        orientation="vertical"
                                        size="s"
                                        icon={<GovIcon type="basic" name="cloud-rain" />}
                                        title={<h3>Radar a srážky</h3>}
                                    >
                                        <span>Srážkoměrné stanice a radarové snímky v reálném čase.</span>
                                    </GovTile>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="3">
                                    <GovTile
                                        orientation="vertical"
                                        size="s"
                                        icon={<GovIcon type="basic" name="bar-chart" />}
                                        title={<h3>Předpovědní služba</h3>}
                                    >
                                        <span>Hlásná a předpovědní povodňová služba — průtoky a stavy.</span>
                                    </GovTile>
                                </GovGridItem>
                                <GovGridItem column="12" columnLg="3">
                                    <GovTile
                                        orientation="vertical"
                                        size="s"
                                        icon={<GovIcon type="basic" name="lightning" />}
                                        title={<h3>Přívalové povodně</h3>}
                                    >
                                        <span>Indikátor rizik bleskových povodní a lokálních záplav.</span>
                                    </GovTile>
                                </GovGridItem>
                            </GovGrid>
                        </GovFlex>
                    </div>
                </section>

                {/* ===== SEKCE 5: FAQ ===== */}
                <section className="e9-section" aria-labelledby="s-faq">
                    <div className="e9-container">
                        <GovFlex direction="column" gap="l">
                            <h2 id="s-faq">Časté dotazy</h2>
                            <GovAccordion size="m">
                                <GovAccordionItem label={<span>Co je digitální povodňový plán (dPP)?</span>}>
                                    <p>Digitální povodňový plán je elektronická verze povodňového plánu obce, ORP nebo kraje zpracovaná v systému POVIS2. Obsahuje mapové přílohy, kontakty na povodňové komise a postupy při mimořádných situacích.</p>
                                </GovAccordionItem>
                                <GovAccordionItem label={<span>Jak zjistím, zda je moje nemovitost v záplavovém území?</span>}>
                                    <p>Využijte vyhledávání na úvodní stránce POVIS2 — zadejte adresu nebo číslo parcely a systém zobrazí, zda se nachází v aktivní zóně záplavového území.</p>
                                </GovAccordionItem>
                                <GovAccordionItem label={<span>Kdo spravuje povodňové plány obcí?</span>}>
                                    <p>Povodňové plány obcí zpracovávají a aktualizují orgány obcí s rozšířenou působností (ORP) ve spolupráci s obcemi a správci povodí.</p>
                                </GovAccordionItem>
                                <GovAccordionItem label={<span>Kde najdu aktuální výstrahy před povodněmi?</span>}>
                                    <p>Aktuální výstrahy naleznete na stránkách ČHMÚ v sekci Výstrahy nebo přímo v POVIS2 v sekci Výstrahy a monitoring ČHMÚ.</p>
                                </GovAccordionItem>
                            </GovAccordion>
                        </GovFlex>
                    </div>
                </section>

            </main>

            {/* ===== FOOTER ===== */}
            <footer className="e9-footer" role="contentinfo">
                <div className="e9-container">
                    <GovFlex className="e9-footer__content" direction="column" gap="xl">
                        <GovGrid gap="l">
                            <GovGridItem column="12" columnLg="3">
                                <nav aria-labelledby="fn1">
                                    <h5 id="fn1">POVIS2</h5>
                                    <ul className="e9-footer__list">
                                        <li><GovLink href="#" size="s">Základní informace</GovLink></li>
                                        <li><GovLink href="#" size="s">Dokumentace</GovLink></li>
                                        <li><GovLink href="#" size="s">Provozní řád</GovLink></li>
                                        <li><GovLink href="#" size="s">FAQ</GovLink></li>
                                    </ul>
                                </nav>
                            </GovGridItem>
                            <GovGridItem column="12" columnLg="3">
                                <nav aria-labelledby="fn2">
                                    <h5 id="fn2">Agendy</h5>
                                    <ul className="e9-footer__list">
                                        <li><GovLink href="#" size="s">Povodňové plány</GovLink></li>
                                        <li><GovLink href="#" size="s">Záplavová území</GovLink></li>
                                        <li><GovLink href="#" size="s">Zvládání rizik</GovLink></li>
                                        <li><GovLink href="#" size="s">Ochrana před povodněmi</GovLink></li>
                                    </ul>
                                </nav>
                            </GovGridItem>
                            <GovGridItem column="12" columnLg="3">
                                <nav aria-labelledby="fn3">
                                    <h5 id="fn3">Informace</h5>
                                    <ul className="e9-footer__list">
                                        <li><GovLink href="#" size="s">Ochrana osobních údajů</GovLink></li>
                                        <li><GovLink href="#" size="s">Přístupnost</GovLink></li>
                                        <li><GovLink href="#" size="s">Kontaktní formulář</GovLink></li>
                                    </ul>
                                </nav>
                            </GovGridItem>
                            <GovGridItem column="12" columnLg="3">
                                <h5 id="fn4">Kontakt</h5>
                                <address className="e9-footer__address">
                                    <GovLink href="tel:+420123456789" size="s">+420 123 456 789</GovLink>
                                    <GovLink href="mailto:podpora@povis.cz" size="s">podpora@povis.cz</GovLink>
                                    <p>
                                        Ministerstvo životního prostředí<br />
                                        Vršovická 1442/65<br />
                                        100 10 Praha 10
                                    </p>
                                </address>
                            </GovGridItem>
                        </GovGrid>
                        <div className="e9-footer__bottom">
                            <img src="/images/logo-mzp-cs.svg" alt="Ministerstvo životního prostředí" className="e9-footer__logo" />
                            <span>© 2026 Ministerstvo životního prostředí — Systém POVIS2 v2.2.0</span>
                        </div>
                    </GovFlex>
                </div>
            </footer>

            {/* ===== LOGIN DIALOG ===== */}
            <GovDialog
                open={loginOpen}
                onClose={() => setLoginOpen(false)}
                title={<span>Přihlášení do POVIS2</span>}
                accessibleCloseLabel="Zavřít"
                footer={
                    <GovFlex justifyContent="flex-end" gap="s" responsive={false}>
                        <GovButton type="outlined" color="neutral" onClick={() => setLoginOpen(false)}>Zrušit</GovButton>
                        <GovButton type="solid" color="primary" onClick={() => { setIsLoggedIn(true); setUserRole('admin'); setLoginOpen(false); }}>Přihlásit se (demo)</GovButton>
                    </GovFlex>
                }
            >
                <p>Zde bude rozlišeno přihlášení pro veřejnost / obce / odborníky.</p>
            </GovDialog>
        </div>
    );
}

export default Example9;
