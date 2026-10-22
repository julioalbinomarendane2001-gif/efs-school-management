
import {
  Users,
  Wallet,
  GraduationCap,
  CalendarCheck,
  BookOpen,
  FileText,
  Settings,
  LayoutDashboard,
  Menu,
  Search,
  Bell,
  ArrowUpRight,
  Plus,
} from 'lucide-react';
import { useState } from 'react';

const menu = [
  { label: 'Painel principal', icon: LayoutDashboard },
  { label: 'Estudantes', icon: Users },
  { label: 'Cursos e turmas', icon: BookOpen },
  { label: 'Pagamentos', icon: Wallet },
  { label: 'Presenças', icon: CalendarCheck },
  { label: 'Avaliações', icon: GraduationCap },
  { label: 'Recibos e relatórios', icon: FileText },
  { label: 'Definições', icon: Settings },
];

export default function App() {
  const [active, setActive] = useState('Painel principal');
  const [search, setSearch] = useState('');

  const stats = [
    { title: 'Estudantes', value: '0', note: 'Estudantes registados', icon: Users },
    { title: 'Receitas do mês', value: '0 MT', note: 'Pagamentos registados', icon: Wallet },
    { title: 'Cursos', value: '7', note: '6 níveis de Inglês + Informática', icon: BookOpen },
    { title: 'Presenças hoje', value: '0', note: 'Registos de presença', icon: CalendarCheck },
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">EFS</div>
          <div>
            <strong>English Fluency</strong>
            <span> SCHOOL MANAGEMENT</span>
          </div>
        </div>

        <p className="nav-heading">MENU PRINCIPAL</p>
        <nav>
          {menu.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-item ${active === label ? 'active' : ''}`}
              onClick={() => setActive(label)}
            >
              <Icon size={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot" />
          <span>Projeto em configuração</span>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" aria-label="Menu">
            <Menu size={21} />
          </button>
          <div className="breadcrumb">EFS <span>/</span> {active}</div>
          <div className="top-actions">
            <button className="icon-button" aria-label="Notificações">
              <Bell size={19} />
            </button>
            <div className="avatar">AD</div>
          </div>
        </header>

        <section className="page-content">
          <div className="welcome-row">
            <div>
              <p className="eyebrow">GESTÃO ESCOLAR</p>
              <h1>{active}</h1>
              <p className="subtitle">
                Bem-vindo ao sistema de gestão da English Fluency School.
              </p>
            </div>
            <button className="primary-button" onClick={() => setActive('Estudantes')}>
              <Plus size={18} /> Novo estudante
            </button>
          </div>

          <div className="notice">
            <div className="notice-icon"><GraduationCap size={22} /></div>
            <div>
              <strong>O teu novo sistema escolar</strong>
              <p>Estamos a preparar a plataforma para gerir estudantes, cursos, pagamentos e atividades escolares.</p>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map(({ title, value, note, icon: Icon }) => (
              <article className="stat-card" key={title}>
                <div className="stat-top">
                  <span>{title}</span>
                  <div className="stat-icon"><Icon size={20} /></div>
                </div>
                <strong className="stat-value">{value}</strong>
                <span className="stat-note">{note}</span>
              </article>
            ))}
          </div>

          <div className="content-grid">
            <section className="panel">
              <div className="panel-heading">
                <div>
                  <h2>Acesso rápido</h2>
                  <p>Escolhe uma área de gestão.</p>
                </div>
                <ArrowUpRight size={20} />
              </div>
              <div className="quick-grid">
                {menu.slice(1, 5).map(({ label, icon: Icon }) => (
                  <button key={label} className="quick-item" onClick={() => setActive(label)}>
                    <Icon size={22} />
                    <span>{label}</span>
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-heading">
                <div>
                  <h2>Estudantes</h2>
                  <p>Pesquisa de registos escolares.</p>
                </div>
                <Users size={20} />
              </div>
              <label className="search-box">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Pesquisar estudante..."
                />
              </label>
              <div className="empty-state">
                <Users size={28} />
                <strong>{search ? 'Pesquisa preparada' : 'Ainda sem estudantes'}</strong>
                <span>
                  {search
                    ? `A pesquisa por "${search}" ficará disponível quando ligarmos a base de dados.`
                    : 'Os estudantes aparecerão aqui depois de configurarmos a base de dados.'}
                </span>
              </div>
            </section>
          </div>

          <footer className="page-footer">
            English Fluency School · Sistema de gestão escolar
            <span>Versão inicial · 2026</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
