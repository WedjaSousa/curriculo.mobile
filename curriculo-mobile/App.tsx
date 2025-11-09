import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Linking,
  GestureResponderEvent,
} from 'react-native';

// Importa ícones da biblioteca Expo
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


interface Contact {
  type: 'email' | 'linkedin' | 'github' | 'phone'; // Tipos específicos permitidos
  icon: string;
  value: string;
  link: string;
}

interface Experience {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

interface Education {
  curso: string;
  instituicao: string;
  periodo: string;
}

interface CurriculoData {
  nome: string;
  titulo: string;
  fotoUrl: string;
  contatos: Contact[];
  sobreMim: string;
  experiencias: Experience[];
  formacao: Education[];
  habilidades: string[];
}


// --- DADOS DO CURRÍCULO (Tipado agora) ---
const DADOS_CURRICULO: CurriculoData = {
  nome: "Wedja Sousa",
  titulo: "Desenvolvedora Front-End | Estudante de Análise e Desenvolvimento de Sistemas | Design Gráfico | UX/UI",
  fotoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFSdCUPr1Ng3g/profile-displayphoto-scale_400_400/B4DZoxEjrZIkAg-/0/1761759872172?e=1764201600&v=beta&t=t2bLECJucZY4pu8Er9IEoc27bRfxKoYj0J-X8U_IPHI",
  sobreMim: "Analista e Desenvolvedora de Sistema em formação, com experiência em projetos de Residência Tecnológica e monitoria. Busco aplicar meus conhecimentos em Design Gráfico e UX/UI para criar interfaces amigáveis e eficientes. Apaixonada por aprendizado contínuo e desafios técnicos.",
  contatos: [
    { type: 'email', icon: 'email', value: 'wedja-maria2010@hotmail.com', link: 'mailto:wedja-maria2010@hotmail.com' },
    { type: 'linkedin', icon: 'linkedin', value: '/WedjaSousa - Linkedin', link: 'https://www.linkedin.com/in/wedja-sousa-43639b19b/' },
    { type: 'github', icon: 'github', value: '/WedjaSousa - GitHub', link: 'https://github.com/WedjaSousa' },
    { type: 'phone', icon: 'phone', value: '(81) 99573-2319', link: 'https://wa.link/hueyg4' },
  ],
  experiencias: [
    {
      cargo: "Residência Tecnológica",
      empresa: "SIDI",
      periodo: "Mar 2025 - Jun 2025",
      descricao: "Participei da Residência Tecnológica Rise Up, iniciativa do Porto Digital em parceria com o Programa Embarque Digital, onde meu grupo desenvolveu soluções para desafios reais da empresa Sidi onde criamos um sistema de espelho de ponto. Durante o programa, participei de cursos, mentorias e bootcamps que aprimoraram minhas habilidades técnicas e práticas em tecnologias e metodologias voltadas ao mercado de trabalho"
    },
    {
      cargo: "Monitora de Web Design",
      empresa: "IFPE - Olinda",
      periodo: "Ago 2023 - Dez 2023",
      descricao: "Atuei como monitora de Web Design no curso de Computação Gráfica do IFPE, auxiliando alunos em projetos, atividades práticas e no aprendizado de conceitos de estruturação de sites e usabilidade. Essa experiência aprimorou minhas habilidades em comunicação, didática e design para a web."
    },
    {
      cargo: "Auxiliar de Farmácia",
      empresa: "Hospital Miguel Arraes",
      periodo: "Set 2021 - Presente",
      descricao: "Atuo como Auxiliar de Farmácia, organizando medicamentos, desenvolvendo habilidades em organização, comunicação e responsabilidade."
    },
  ],
  formacao: [
    {
      curso: "Análise e Desenvolvimento de Sistemas",
      instituicao: "Faculdade Senac",
      periodo: "Ago 2024 - Dez 2026 (Previsto)",
    },
    {
      curso: "Design Gráfico",
      instituicao: "IFPE - Olinda",
      periodo: "2021 - 2024",
    },
    {
      curso: "Técnico em Finanças",
      instituicao: "Senac - Recife",
      periodo: "2020 - 2022",
    },
    {
      curso: "Técnico em Logística",
      instituicao: "ETE José Alencar Gomes da Silva",
      periodo: "2017 - 2019",
    },
  ],
  habilidades: [
    "JavaScript",
    "Expo / Firebase",
    "UX/UI Design",
    "Git e GitHub",
    "Metodologias Ágeis (Scrum/Kanban)",
    "Pacote Adobe",
    "Figma e Canva",
    "HTML e CSS",
  ],
};


// --- COMPONENTE DE SEÇÃO (Reutilizável) ---
interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>
      {children}
    </View>
  </View>
);

// --- COMPONENTE DE ITEM DE EXPERIÊNCIA ---
const ExperienceItem: React.FC<Experience> = ({ cargo, empresa, periodo, descricao }) => (
  <View style={styles.experienceItem}>
    <Text style={styles.jobTitle}>{cargo} na {empresa}</Text>
    <Text style={styles.jobPeriod}>{periodo}</Text>
    <Text style={styles.jobDescription}>{descricao}</Text>
  </View>
);

// --- COMPONENTE DE ITEM DE FORMAÇÃO ---
const EducationItem: React.FC<Education> = ({ curso, instituicao, periodo }) => (
  <View style={styles.educationItem}>
    <Text style={styles.educationCourse}>{curso}</Text>
    <Text style={styles.educationInstitution}>{instituicao}</Text>
    <Text style={styles.educationPeriod}>{periodo}</Text>
  </View>
);


// --- COMPONENTE DE ITEM DE CONTATO ---
const ContactItem: React.FC<Contact> = ({ icon, value, link, type }) => {
  const IconComponent = type === 'github' || type === 'linkedin' ? FontAwesome5 : MaterialIcons;

  const handlePress = (e: GestureResponderEvent) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <View style={styles.contactItemContainer}>
      <IconComponent name={icon as any} size={18} color="#007AFF" style={styles.contactIcon} />
      <Text style={styles.contactText} onPress={handlePress}>
        {value}
      </Text>
    </View>
  );
};


// --- COMPONENTE PRINCIPAL ---
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* 1. SEÇÃO DE FOTO E NOME */}
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={{ uri: DADOS_CURRICULO.fotoUrl }}
          />
          <Text style={styles.name}>{DADOS_CURRICULO.nome}</Text>
          <Text style={styles.title}>{DADOS_CURRICULO.titulo}</Text>
        </View>

        {/* 2. SEÇÃO SOBRE MIM */}
        <Section title="Sobre Mim">
          <Text style={styles.bioText}>{DADOS_CURRICULO.sobreMim}</Text>
        </Section>

        {/* 3. SEÇÃO DE CONTATOS */}
        <Section title="Contato">
          {DADOS_CURRICULO.contatos.map((item, index) => (
            <ContactItem
              key={index}
              icon={item.icon}
              value={item.value}
              link={item.link}
              type={item.type}
            />
          ))}
        </Section>

        {/* 4. SEÇÃO DE EXPERIÊNCIA */}
        <Section title="Experiência Profissional">
          {DADOS_CURRICULO.experiencias.map((exp, index) => (
            <ExperienceItem
              key={index}
              cargo={exp.cargo}
              empresa={exp.empresa}
              periodo={exp.periodo}
              descricao={exp.descricao}
            />
          ))}
        </Section>

        {/* 5. SEÇÃO DE FORMAÇÃO */}
        <Section title="Formação Acadêmica">
          {DADOS_CURRICULO.formacao.map((item, index) => (
            <EducationItem
              key={index}
              curso={item.curso}
              instituicao={item.instituicao}
              periodo={item.periodo}
            />
          ))}
        </Section>

        {/* 6. SEÇÃO DE HABILIDADES */}
        <Section title="Habilidades Técnicas">
          <View style={styles.skillsContainer}>
            {DADOS_CURRICULO.habilidades.map((skill, index) => (
              <View key={index} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </Section>

      </ScrollView>
    </SafeAreaView>
  );
}

// --- ESTILOS (STYLESHEET) ---
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  // Estilos do Cabeçalho (Foto e Nome)
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },

  // Estilos da Seção (Título Geral)
  section: {
    marginBottom: 25,
    paddingBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#007AFF',
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
    paddingBottom: 5,
  },
  sectionContent: {
    paddingLeft: 5,
  },

  // Estilo para o texto "Sobre Mim"
  bioText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
    textAlign: 'justify',
  },

  // Estilos de Item de Experiência
  experienceItem: {
    marginBottom: 15,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#ccc',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  jobPeriod: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },

  // Estilos de Item de Contato
  contactItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactIcon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },

  // Estilos de Item de Formação
  educationItem: {
    marginBottom: 15,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  educationCourse: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  educationInstitution: {
    fontSize: 14,
    color: '#555',
  },
  educationPeriod: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },

  // Estilos de Habilidades (Tags)
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skillTag: {
    backgroundColor: '#E6F0FF',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
  },
});