import {
  Layers, Grid, Layout, Sparkles, Compass, Shield, Wrench, Award, Headphones,
} from 'lucide-react'

// Base URL helper for robust public asset resolution in Vite
const BASE = import.meta.env.BASE_URL || '/'

export const company = {
  name: 'ALUMINATO',
  fullName: 'ALUMINATO ESQUADRIAS DE ALUMINIO LTDA',
  cnpj: '95.756.276/0001-00',
  founded: 'Dezembro de 1994',
  foundedYear: 1994,
  founders: 'José Tadeu Mangolt e Marcelo L. Mangolt',
  slogan: 'Fazer melhor. Fazer bem feito. Fazer para sempre.',
  location: 'Tijucas, SC — Vale do Itajaí',
  employees: 170,
  logo: `${BASE}logo.png`,
  heroPhoto: `${BASE}projects/giusta-residenza.jpg`,
  address: 'Rua Falcão, Nº 240, Centro, Tijucas/SC, CEP 88220-000',
  whatsapp: '554832632200', // Using standard official contact number for WhatsApp
  phone: '(48) 3263-2200',
  email: 'contato@aluminato.com.br',
  instagram: '@aluminatoesquadrias',
  instagramFollowers: '4k',
  linkedin: '@aluminatoesquadrias',
  admin: 'Marcelo Luiz Mangolt',
  yearsActive: 32, // Founded in Dec 1994, current year is 2026
  projectsCount: 500,
  statesCount: 7,
  partnersCount: 11,
  factoryArea: '9.000m²',
  builtArea: '5.000m²',
}

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const services = [
  {
    icon: Layout,
    fallback: Layout,
    title: 'Esquadrias sob Medida',
    description: 'Fabricação sob medida de portas, janelas e esquadrias de alumínio. Atendemos desde linhas habitacionais até esquadrias de alto padrão com tecnologia de ponta.',
    label: 'Esquadrias',
    fullDescription: `A Aluminato está apta a fabricar os mais diversos tipos de esquadrias do mercado, desde linhas de entrada, as chamadas linhas habitacionais até as linhas de alto padrão, que contam com os mais diversos tipos de ferragens e acabamentos. Tudo isso graças a um setor técnico atualizado e com sintonia com as tendências do mercado, além de contar com equipamentos de ponta no parque fabril.
Assim atendemos qualquer sistema e ainda temos a liberdade de oferecer sistemas exclusivos, tudo isto para atender as necessidades do cliente e da obra.`,
    images: [`${BASE}services/esquadrias/cfd0bf69f9ba90207aba.jpg`],
  },
  {
    icon: Layers,
    fallback: Layers,
    title: 'Fachadas ACM',
    description: 'Painéis compostos de alumínio (ACM) com núcleo de polietileno. Combinação ideal de flexibilidade, leveza, amortecimento acústico e facilidade de limpeza.',
    label: 'Fachadas ACM',
    fullDescription: `ACM é um painel composto por duas lâminas de alumínio, ligadas por um núcleo de polietileno, que colabora para compor uma placa durável e leve para revestimentos de diversas fachadas. O revestimento de fachadas com ACM pode ser combinado com diversos tipos de materiais, como o vidro e o alumínio, possibilitando a criação das mais diferentes formas.
A placa de ACM, cada vez mais, é matéria-prima essencial nos grandes projetos arquitetônicos e comerciais.
Variedade de cores, flexibilidade que torna o material de fácil manuseio, leveza que não compromete a estrutura, resistência às intempéries, amortecimento acústico e fácil limpeza com detergente neutro e esponja macia.`,
    images: [
      `${BASE}services/acm/fad56f232ab7fc8d8078.jpg`,
      `${BASE}services/acm/a6a250e9e6fdc736b854.jpg`,
      `${BASE}services/acm/0b1c5632d8db0d0964d5.jpg`,
      `${BASE}services/acm/dd9f0fdd11e29a622ff1.jpg`,
      `${BASE}services/acm/2e982693df4148812645.jpg`,
      `${BASE}services/acm/e0ffe3e15b4c16da5372.jpg`,
    ],
  },
  {
    icon: Grid,
    fallback: Grid,
    title: 'Fachadas Glazing',
    description: 'Pele de vidro / "structural glazing" em sistemas Stick (instalação interna e perfis Alump) e Unitizados. Conforto térmico, luminosidade, privacidade e segurança.',
    label: 'Fachadas Glazing',
    fullDescription: `As fachadas conhecidas como pele de vidro ou "structural glazing" são utilizadas em edifícios comerciais e residenciais. Toda sua estrutura fica pelo lado interno do ambiente, transmitindo aspecto de leveza e modernidade na parte externa e garantindo maior privacidade para quem está do lado de dentro.
Trabalhamos com 2 sistemas: fachada Stick e fachada Unitizada. A Aluminato desenvolveu um projeto próprio de fachada tipo Stick, testada no ITEC (Instituto Tecnológico da Construção), cuja instalação é 100% interna, não necessitando uso de balancins/andaimes.
No sistema Unitizado, a instalação é feita através de ancoragens niveladas no pavimento, com módulos que fecham a altura do pavimento, encaixados de forma enfileirada de baixo para cima.
Conforto acústico, privacidade com vidros refletivos, luminosidade natural, conforto térmico com vidros especiais e segurança com sistemas de fixação eficientes e vidros laminados.`,
    images: [
      `${BASE}services/glazing/a9009c5e0f768ba8c318.jpg`,
      `${BASE}services/glazing/177144fa350311d81188.jpg`,
      `${BASE}services/glazing/31a1c53719b547039d51.png`,
      `${BASE}services/glazing/dd9f0fdd11e29a622ff1.jpg`,
      `${BASE}services/glazing/daeb6f6ba31ab3aaf6a1.jpg`,
    ],
  },
  {
    icon: Sparkles,
    fallback: Sparkles,
    title: 'Projetos Especiais',
    description: 'Soluções exclusivas sob medida: coberturas de vidro limpas, portões 100% alumínio (Linha Universal Alcoa), brise-soleil térmico e guarda-corpos certificados (NBR 14718).',
    label: 'Projetos Especiais',
    fullDescription: `Além de atender a parte de ACM, fachadas e esquadrias, trabalhamos com outras ramificações do alumínio para a construção civil.

Coberturas de vidro: ao longo desses anos no mercado, a Aluminato tem oferecido serviços de cobertura de vidro de alta qualidade, contando com uma equipe de colaboradores especialistas. As coberturas de vidro são uma solução inteligente, bonita e muito eficaz, que deixará seu empreendimento mais moderno e clean.

Portões 100% alumínio: contamos com a Linha Universal da Alcoa para oferecer portões com qualidade e durabilidade. Nossos portões de elevação contam com toda a estrutura em alumínio, componentes em aço inox e componentes com tratamento anti-corrosão, garantindo melhor funcionamento e vida útil maior.

Guarda-corpo / Sacadas: a Aluminato conta com um sistema de guarda-corpo com design próprio, seguindo as orientações da NBR 14718, buscando sempre qualidade e segurança.

Brise: destinado à aplicação em fachadas, o brise-soleil é um anteparo que controla a incidência dos raios solares. O alumínio é bastante usado devido à leveza e longa vida útil. O emprego de brise nos projetos é uma tendência mundial, sendo o sistema mais eficiente no controle térmico das edificações.`,
    images: [
      `${BASE}services/projetos-especiais/58d3c49ac38c2553ac18.jpg`,
      `${BASE}services/projetos-especiais/70b6c1bfac6fe75af4d1.png`,
      `${BASE}services/projetos-especiais/ef18a2a8abeda24dfc44.jpg`,
      `${BASE}services/projetos-especiais/a025b3974605b13a4d2c.png`,
      `${BASE}services/projetos-especiais/25eaf1f29b146417ff23.jpg`,
    ],
  },
  {
    icon: Compass,
    fallback: Compass,
    title: 'Engenharia e Projetos',
    description: 'Equipe de engenharia própria altamente qualificada e equipamentos de ponta para planejar e projetar soluções que desafiam os limites da arquitetura.',
  },
  {
    icon: Shield,
    fallback: Shield,
    title: 'Garantia e Parcerias',
    description: 'Parcerias consolidadas, como com a Vidrofort (Visual Design) desde 2007, e testes de conformidade no ITEC para garantir durabilidade estendida.',
  },
]

export const projects = [
  {
    id: 1,
    name: 'Hard Rock Cafe Itapema',
    client: 'Píer Oporto',
    description: 'O único Hard Rock Cafe construído sobre o mar no mundo. Um projeto icônico e desafiador que consolida a Aluminato como referência absoluta em esquadrias e envidraçamentos de alta performance.',
    photo: `${BASE}projects/san-diego-residence.jpg`, // Using local high quality image as hero/HRC placeholder representation
    city: 'Itapema, SC',
    size: 'large',
  },
  {
    id: 2,
    name: 'San Diego Residence',
    client: 'Amaral Construções',
    description: 'Empreendimento residencial imponente com arquitetura contemporânea e sofisticada. Fachada com pele de vidro glazing e acabamentos premium em alumínio.',
    photo: `${BASE}projects/san-diego-residence.jpg`,
    city: 'Itapema, SC',
    size: 'large',
  },
  {
    id: 3,
    name: 'La Joie',
    client: 'GEA Construtora',
    description: 'Empreendimento de alto padrão com fachada moderna, integrando amplas esquadrias de correr de alumínio e sacadas envidraçadas de alta resistência.',
    photo: `${BASE}projects/la-joie.jpg`,
    city: 'Itapema, SC',
    size: 'medium',
  },
  {
    id: 4,
    name: 'Giusta Residenza',
    client: 'Edificare SC',
    description: 'Projeto residencial requintado que reflete a perfeita harmonia entre esquadrias escuras de alumínio sob medida, vidros laminados e design arquitetônico moderno.',
    photo: `${BASE}projects/giusta-residenza.jpg`,
    city: 'Itapema, SC',
    size: 'medium',
  },
  {
    id: 5,
    name: 'Viva Park Porto Belo',
    client: 'Vários Incorporadores',
    description: 'O maior bairro planejado do Brasil. A Aluminato orgulhosamente forneceu soluções integradas de esquadrias e fachadas de alto padrão para diversos lotes residenciais.',
    photo: `${BASE}projects/viva-park-porto-belo.jpg`,
    city: 'Porto Belo, SC',
    size: 'medium',
  },
]

export const partners = [
  { name: 'May Belly', logo: `${BASE}clients/may-belly.jpg` },
  { name: 'DMJ', logo: `${BASE}clients/dmj.jpg` },
  { name: 'Du Art', logo: `${BASE}clients/du-art.jpg` },
  { name: 'Nova Carmel', logo: `${BASE}clients/nova-carmel.jpg` },
  { name: 'Pasqualotto', logo: `${BASE}clients/pasqualotto.jpg` },
  { name: 'Poti', logo: `${BASE}clients/poti.jpg` },
  { name: 'Amaral Construções', logo: `${BASE}clients/amaral.jpg` },
  { name: 'Supercon', logo: `${BASE}clients/supercon.jpg` },
  { name: 'Dela Valle', logo: `${BASE}clients/dela-valle.jpg` },
  { name: 'Edificare', logo: `${BASE}clients/edificare.jpg` },
  { name: 'G V Construtora', logo: `${BASE}clients/gv-construtora.jpg` },
]

export const milestones = [
  { year: 1994, title: 'Fundação da Barrasul', description: 'José Tadeu Mangolt, com apoio de seu filho Marcelo L. Mangolt, funda a Barrasul Esquadrias de Alumínio em Tijucas, SC, atendendo a construção civil local.' },
  { year: 1999, title: 'Nova Marca: Aluminato', description: 'Transição da marca fantasia e consolidação da nova identidade comercial Aluminato, expandindo serviços para o litoral catarinense.' },
  { year: 2007, title: 'Parceria Vidrofort', description: 'Início da parceria técnica com a Vidrofort (Visual Design), otimizando a qualidade de vidros temperados, laminados e insulados.' },
  { year: 2016, title: 'Associação à AFEAL', description: 'Filiação oficial da Aluminato à Associação Nacional de Fabricantes de Esquadrias de Alumínio (AFEAL), atestando conformidade técnica nacional.' },
  { year: 2023, title: 'Projeto Hard Rock Cafe', description: 'Fornecimento de esquadrias e fachadas glazing estruturais para o Hard Rock Cafe Itapema, construído sobre o mar.' },
  { year: 2026, title: '32 Anos de Liderança', description: 'Com 170 colaboradores, 9.000m² de infraestrutura e atuação em 7 estados, a Aluminato continua sendo sinônimo de excelência premium.' },
]

export const stats = [
  { value: 32, suffix: '+', label: 'Anos de História' },
  { value: 170, suffix: '', label: 'Colaboradores' },
  { value: 9000, suffix: 'm²', label: 'Parque Fabril' },
  { value: 7, suffix: '', label: 'Estados Atendidos' },
]

export const whatsappLinks = {
  comercial: 'https://wa.link/u2jnq6',
  posVenda: 'https://wa.link/wb55m1',
  trabalheConosco: 'https://wa.link/dnez65',
  trabalheConoscoForm: 'http://aluminato.sistemapeoplenet.com.br/rh/vagas/triagem/3e7439e6331c460fb2f0a3c4ca52ec42',
}

export const socialLinks = [
  { label: 'Instagram', key: 'instagram', href: 'https://www.instagram.com/aluminatoesquadrias/' },
  { label: 'Facebook', key: 'facebook', href: 'https://www.facebook.com/aluminatoesquadrias/' },
]

export const differences = [
  {
    icon: Shield,
    title: 'Tradição e Segurança',
    description: 'Mais de 30 anos no mercado com sede própria em Tijucas/SC, associada à AFEAL, e produtos testados e homologados no ITEC.',
  },
  {
    icon: Wrench,
    title: 'Infraestrutura de Ponta',
    description: 'Parque fabril moderno com 9.000m² de área total (5.000m² construída) e equipamentos industriais de última geração.',
  },
  {
    icon: Award,
    title: 'Engenharia Estrutural',
    description: 'Equipe de engenheiros e técnicos dedicados no desenvolvimento de esquadrias personalizadas e soluções inovadoras sob medida.',
  },
  {
    icon: Headphones,
    title: 'Parcerias Certificadas',
    description: 'Trabalhamos em parceria com a Vidrofort (Visual Design) desde 2007 e extrusoras renomadas para garantir matérias-primas de padrão mundial.',
  },
]
