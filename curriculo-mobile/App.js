import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image,
  SafeAreaView, 
  Linking 
} from 'react-native';


import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

// --- DADOS DO CURRÍCULO ---
const DADOS_CURRICULO = {
  nome: "Wedja Sousa ",
  titulo: "Desenvolvedora Front-End | Estudante de Análise e Desenvolvimento de Sistemas | Design Gráfico | UX/UI",
  fotoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFSdCUPr1Ng3g/profile-displayphoto-scale_400_400/B4DZoxEjrZIkAg-/0/1761759872172?e=1764201600&v=beta&t=t2bLECJucZY4pu8Er9IEoc27bRfxKoYj0J-X8U_IPHI", // Coloque o link da sua foto aqui
  contatos: [
    { type: 'email', icon: 'email', value: 'wedja-maria2010@hotmail.com', link: 'mailto:seu.email@exemplo.com' },
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
      cargo: "INOVAPED",
      empresa: "Ideação de Startup",
      periodo: "Out 2024 - Dez 2024",
      descricao: "O INOVAPED é um aplicativo criado para facilitar a comunicação e a gestão escolar, conectando professores, alunos e responsáveis. Desenvolvido por alunos da Faculdade Senac Pernambuco no Programa Embarque Digital, em parceria com a Prefeitura do Recife e o Porto Digital, o projeto visa aprimorar a qualidade do ensino e a integração no ambiente educacional."
    },
    {
      cargo: "Auxiliar de Farmácia",
      empresa: "Hospital Miguel Arraes",
      periodo: "Set 2021 - Presente",
      descricao: "Atuo como Auxiliar de Farmácia, organizando medicamentos, desenvolvendo habilidades em organização, comunicação e responsabilidade."
    },
  ],
  

};


// --- COMPONENTE DE SEÇÃO (Reutilizável) ---
const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>
      {children}
    </View>
  </View>
);

// --- COMPONENTE DE ITEM DE EXPERIÊNCIA ---
const ExperienceItem = ({ cargo, empresa, periodo, descricao }) => (
  <View style={styles.experienceItem}>
    <Text style={styles.jobTitle}>{cargo} na {empresa}</Text>
    <Text style={styles.jobPeriod}>{periodo}</Text>
    <Text style={styles.jobDescription}>{descricao}</Text>
  </View>
);

// --- COMPONENTE DE ITEM DE CONTATO ---
const ContactItem = ({ icon, value, link, type }) => {
  const IconComponent = type === 'github' || type === 'linkedin' ? FontAwesome5 : MaterialIcons;
  
  return (
    <View style={styles.contactItemContainer}>
      <IconComponent name={icon} size={18} color="#007AFF" style={styles.contactIcon} />
      <Text style={styles.contactText} onPress={() => link ? Linking.openURL(link) : null}>
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

        {/* 2. SEÇÃO DE CONTATOS */}
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

        {/* 3. SEÇÃO DE EXPERIÊNCIA */}
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
    color: '#007AFF', // Cor principal
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
    paddingBottom: 5,
  },
  sectionContent: {
    paddingLeft: 5,
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
});