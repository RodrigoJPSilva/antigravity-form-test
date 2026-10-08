// ============================================================================
// BASE DE DADOS DOS SIMULADOS E PROVAS
// ============================================================================

const examsData = {
  "requisitos": {
    id: "requisitos",
    title: "Levantamento de Requisitos",
    subtitle: "Engenharia de Requisitos, Elicitação, Casos de Uso e Validação",
    badgeClass: "badge-purple",
    badgeText: "Engenharia de Software",
    desc: "20 questões de múltipla escolha abordando requisitos funcionais, não funcionais, stakeholders, técnicas de elicitação e validação de escopo.",
    questions: [
      {
        id: 1,
        type: "choice",
        title: "O que é um requisito funcional?",
        options: [
          "Define restrições do sistema",
          "Descreve uma funcionalidade do sistema",
          "Define tecnologia usada",
          "Define prazo do projeto"
        ],
        answer: 1,
        explanation: "Requisitos funcionais descrevem o comportamento, ações e funções que o software deve executar (o que o sistema deve fazer)."
      },
      {
        id: 2,
        type: "choice",
        title: "O que é um requisito não funcional?",
        options: [
          "Funcionalidade principal",
          "Regra de negócio",
          "Característica de qualidade (desempenho, segurança, etc.)",
          "Código do sistema"
        ],
        answer: 2,
        explanation: "Requisitos não funcionais determinam critérios de qualidade, restrições e atributos como desempenho, segurança, escalabilidade e usabilidade."
      },
      {
        id: 3,
        type: "choice",
        title: "Qual técnica é usada para coletar requisitos diretamente com usuários?",
        options: [
          "Compilação",
          "Entrevista",
          "Deploy",
          "Debug"
        ],
        answer: 1,
        explanation: "A entrevista direta é uma das principais técnicas de elicitação para extrair necessidades e expectativas dos usuários e stakeholders."
      },
      {
        id: 4,
        type: "choice",
        title: "O que é um stakeholder?",
        options: [
          "Apenas o programador",
          "Qualquer pessoa impactada pelo sistema",
          "Somente o cliente",
          "Apenas o gerente"
        ],
        answer: 1,
        explanation: "Stakeholder é qualquer indivíduo ou grupo que possua interesse no projeto ou que seja impactado direta ou indiretamente por ele."
      },
      {
        id: 5,
        type: "choice",
        title: "O que é um caso de uso?",
        options: [
          "Um banco de dados",
          "Uma linguagem",
          "Descrição de interação entre usuário e sistema",
          "Um código"
        ],
        answer: 2,
        explanation: "Casos de uso documentam a sequência de passos e interações entre um ator externo e o sistema para alcançar um objetivo específico."
      },
      {
        id: 6,
        type: "choice",
        title: "Qual dessas é uma técnica de levantamento de requisitos?",
        options: [
          "Loop",
          "Brainstorming",
          "Herança",
          "Compilação"
        ],
        answer: 1,
        explanation: "O Brainstorming é uma dinâmica em grupo para geração rápida de ideias e levantamento de necessidades."
      },
      {
        id: 7,
        type: "choice",
        title: "O que é um requisito mal definido?",
        options: [
          "Claro e objetivo",
          "Ambíguo e confuso",
          "Documentado corretamente",
          "Validado pelo cliente"
        ],
        answer: 1,
        explanation: "Requisitos ambíguos ou vagos geram interpretações conflitantes e são a principal fonte de retrabalho no desenvolvimento."
      },
      {
        id: 8,
        type: "choice",
        title: "O que significa validar requisitos?",
        options: [
          "Codificar requisitos",
          "Testar código",
          "Garantir que estão corretos e atendem ao cliente",
          "Excluir requisitos"
        ],
        answer: 2,
        explanation: "Validação assegura que os requisitos capturados refletem fielmente as reais necessidades do cliente antes do desenvolvimento."
      },
      {
        id: 9,
        type: "choice",
        title: "Qual documento descreve requisitos do sistema?",
        options: [
          "DER",
          "Documento de Requisitos",
          "HTML",
          "Código fonte"
        ],
        answer: 1,
        explanation: "O Documento de Requisitos (ou SRS - Software Requirements Specification) reúne a especificação formal de requisitos do sistema."
      },
      {
        id: 10,
        type: "choice",
        title: "O que é um requisito de segurança?",
        options: [
          "Função do sistema",
          "Restrição de acesso e proteção de dados",
          "Tipo de variável",
          "Interface gráfica"
        ],
        answer: 1,
        explanation: "Requisitos de segurança definem restrições, criptografia, autenticação e proteção contra acessos indevidos e vulnerabilidades."
      },
      {
        id: 11,
        type: "choice",
        title: "O que é prototipação?",
        options: [
          "Criar código final",
          "Criar modelo inicial do sistema",
          "Testar banco",
          "Fazer deploy"
        ],
        answer: 1,
        explanation: "Prototipação cria maquetes visuais e modelos iniciais do sistema para coletar feedback rápido e validar o entendimento com o cliente."
      },
      {
        id: 12,
        type: "choice",
        title: "Qual o objetivo da elicitação de requisitos?",
        options: [
          "Apagar dados",
          "Coletar requisitos dos stakeholders",
          "Executar código",
          "Testar sistema"
        ],
        answer: 1,
        explanation: "Elicitação é a fase de descoberta, busca ativa e coleta dos requisitos junto às partes interessadas."
      },
      {
        id: 13,
        type: "choice",
        title: "O que é um requisito obrigatório?",
        options: [
          "Opcional",
          "Pode ser ignorado",
          "Essencial para o sistema funcionar",
          "Decorativo"
        ],
        answer: 2,
        explanation: "Requisitos obrigatórios (core/must-have) são indispensáveis para o funcionamento e viabilidade da solução."
      },
      {
        id: 14,
        type: "choice",
        title: "O que pode causar erro em requisitos?",
        options: [
          "Clareza",
          "Boa comunicação",
          "Falta de comunicação",
          "Validação"
        ],
        answer: 2,
        explanation: "Ruídos de comunicação entre equipe e clientes são a principal causa de requisitos incompletos ou equivocados."
      },
      {
        id: 15,
        type: "choice",
        title: "O que é rastreabilidade de requisitos?",
        options: [
          "Excluir requisitos",
          "Acompanhar origem e mudanças dos requisitos",
          "Codificar requisitos",
          "Testar requisitos"
        ],
        answer: 1,
        explanation: "Rastreabilidade permite mapear a vida de um requisito desde sua origem de negócio até as linhas de código e testes."
      },
      {
        id: 16,
        type: "choice",
        title: "Qual técnica usa reuniões em grupo para levantar ideias?",
        options: [
          "Loop",
          "Brainstorming",
          "Deploy",
          "Debug"
        ],
        answer: 1,
        explanation: "O Brainstorming reúne múltiplos participantes estimulando a livre expressão de ideias para inovação e levantamento."
      },
      {
        id: 17,
        type: "choice",
        title: "O que é escopo do sistema?",
        options: [
          "Código fonte",
          "Limites e funcionalidades do sistema",
          "Banco de dados",
          "Interface"
        ],
        answer: 1,
        explanation: "O escopo delimita as fronteiras do projeto: define exatamente o que será entregue e o que fica fora do projeto."
      },
      {
        id: 18,
        type: "choice",
        title: "O que acontece com requisitos mal definidos?",
        options: [
          "Facilitam o projeto",
          "Geram erros e retrabalho",
          "Melhoram desempenho",
          "Aceleram entrega"
        ],
        answer: 1,
        explanation: "Requisitos mal definidos acarretam estouro de custos, prazos dilatados e necessidade de refatorar código já desenvolvido."
      },
      {
        id: 19,
        type: "choice",
        title: "Quem valida os requisitos?",
        options: [
          "Somente programador",
          "Cliente e stakeholders",
          "Banco de dados",
          "Servidor"
        ],
        answer: 1,
        explanation: "Os clientes e stakeholders que demandaram o sistema são quem possuem a autoridade para aprovar se os requisitos estão corretos."
      },
      {
        id: 20,
        type: "choice",
        title: "O que é priorização de requisitos?",
        options: [
          "Excluir requisitos",
          "Organizar por importância",
          "Codificar requisitos",
          "Testar requisitos"
        ],
        answer: 1,
        explanation: "Priorização ordena os requisitos por valor de negócio, risco e urgência (ex: MoSCoW, matriz esforço vs impacto)."
      }
    ]
  },

  "iot-eletrica": {
    id: "iot-eletrica",
    title: "Fundamentos Elétricos e IoT",
    subtitle: "Instrumentação, Circuitos Elétricos, Sensores, Arduino e Redes IoT",
    badgeClass: "badge-cyan",
    badgeText: "IoT & Hardware",
    desc: "30 questões práticas incluindo suporte a imagens técnicas de instrumentos (multímetro analógico/digital e alicate amperímetro).",
    questions: [
      {
        id: 1,
        type: "choice",
        title: "Arduino e Raspberry Pi têm papéis distintos em projetos de IoT. Quando seria mais adequado utilizar um Raspberry Pi?",
        options: [
          "Quando é necessário controlar motores simples com precisão.",
          "Quando o projeto requer maior capacidade de processamento e um sistema operacional.",
          "Para projetos onde o consumo de energia é uma prioridade.",
          "Para projetos que exigem apenas a leitura de sensores."
        ],
        answer: 1,
        explanation: "O Raspberry Pi é um computador de placa única (SBC) com suporte a sistema operacional completo (Linux) e alto poder de processamento, enquanto o Arduino é um microcontrolador vocacionado para tarefas de tempo real e controle direto de hardware de baixo nível."
      },
      {
        id: 2,
        type: "choice",
        title: "Divisores de tensão são usados para reduzir a tensão de entrada a um nível adequado para os componentes do circuito. Qual das opções abaixo descreve corretamente o papel de um divisor de tensão?",
        options: [
          "Aumentar a corrente em um circuito para alimentar sensores.",
          "Converter sinais analógicos em digitais para o Arduino processar.",
          "Proteger o circuito contra sobrecarga de corrente.",
          "Dividir a tensão de entrada para fornecer níveis seguros para componentes."
        ],
        answer: 3,
        explanation: "Os divisores de tensão utilizam uma associação de resistores para fracionar a tensão de entrada numa tensão de saída proporcional e segura para portas lógicas ou conversores analógicos."
      },
      {
        id: 3,
        type: "choice",
        title: "Potenciômetros são frequentemente usados para ajustar manualmente o valor de uma variável, como a intensidade de luz ou volume. Qual das alternativas abaixo explica o uso correto de um potenciômetro em um projeto com Arduino?",
        options: [
          "Como um sensor que converte luz em energia elétrica.",
          "Para proteger o circuito contra sobrecargas elétricas.",
          "Para controlar a resistência variável e ajustar valores de entrada.",
          "Para converter corrente alternada em corrente contínua."
        ],
        answer: 2,
        explanation: "O potenciômetro funciona como um divisor de tensão resistivo variável ajustável manualmente, permitindo ao Arduino ler tensões entre 0V e 5V através de uma porta analógica."
      },
      {
        id: 4,
        type: "choice",
        title: "Os sensores desempenham um papel essencial nos sistemas de Internet das Coisas (IoT), sendo responsáveis por captar dados do ambiente. Eles são cruciais para conectar o mundo físico ao mundo digital. Qual das opções abaixo melhor descreve a função de um sensor?",
        options: [
          "Processar dados vindos de outros dispositivos.",
          "Capturar e transmitir dados do ambiente.",
          "Armazenar grandes quantidades de dados na nuvem.",
          "Enviar comandos a atuadores para realizar ações físicas."
        ],
        answer: 1,
        explanation: "A função primária de um transdutor/sensor é recolher grandezas físicas do ambiente e convertê-las em sinais elétricos mensuráveis."
      },
      {
        id: 5,
        type: "choice",
        title: "A conectividade é um elemento chave para que os dispositivos IoT possam se comunicar entre si e com a internet. Qual das opções abaixo descreve corretamente esse conceito?",
        options: [
          "A capacidade de um dispositivo IoT de funcionar offline sem interrupção.",
          "O método pelo qual os dispositivos IoT se conectam uns aos outros e à internet.",
          "A habilidade de um dispositivo IoT processar grandes volumes de dados em tempo real.",
          "A integração de dispositivos IoT com redes celulares 5G."
        ],
        answer: 1,
        explanation: "A conectividade abrange as tecnologias e protocolos que viabilizam a troca de pacotes e dados entre os nós e a rede externa."
      },
      {
        id: 6,
        type: "choice",
        title: "Edge computing é um conceito importante para otimizar o processamento de dados em IoT. Como ele é aplicado?",
        options: [
          "Processamento de dados exclusivamente na nuvem.",
          "Coleta e processamento de dados próximos à fonte dos dados.",
          "Exclusivamente para reduzir o consumo de energia dos dispositivos.",
          "Transmissão de dados em tempo real para servidores centrais."
        ],
        answer: 1,
        explanation: "A computação na borda (Edge Computing) aproxima a capacidade analítica e de tratamento do ponto de recolha dos dados, reduzindo a latência e o tráfego de rede para a nuvem."
      },
      {
        id: 7,
        type: "choice",
        title: "Um circuito em série tem uma fonte de 12V e uma corrente de 300mA. Qual deve ser o valor do resistor utilizado para que o circuito funcione corretamente?\nPara calcular o valor da resistência em um circuito, utilizamos a Lei de Ohm: R = V / I. Qual valor de resistência atende às especificações do circuito?",
        options: [
          "20Ω",
          "30Ω",
          "40Ω",
          "50Ω"
        ],
        answer: 2,
        explanation: "Cálculo: R = V / I. Convertendo 300mA para Amperes temos 0,3A. Logo: R = 12 / 0,3 = 40Ω."
      },
      {
        id: 8,
        type: "choice",
        title: "O multímetro é um instrumento que desempenha diversas funções na medição de grandezas elétricas. A maioria dos modelos atuais mede tensão, corrente e resistência elétrica, podendo agregar algumas funções especiais como teste de continuidade e de diodos. Sobre este equipamento é correto afirmar que?",
        options: [
          "Na função amperímetro, os terminais devem ser dispostos em paralelo com o circuito.",
          "Na função voltímetro, os terminais devem ser dispostos em série com o circuito.",
          "A medição de resistência elétrica pode ser realizada com o circuito ligado a uma fonte de tensão.",
          "Para se medir a corrente elétrica, o circuito deve ser aberto no ponto desejado, conectando o multímetro, na função amperímetro, em série com o circuito de modo que a corrente flua por ele.",
          "Não é possível determinar a potência de um circuito CC apenas com um multímetro, como o descrito no enunciado."
        ],
        answer: 3,
        explanation: "Para medir corrente com um amperímetro tradicional, é obrigatório intercalar o instrumento em série com o ramo onde a corrente circula."
      },
      {
        id: 9,
        type: "choice",
        title: "No Arduino, o comando pinMode() é essencial para configurar as funções dos pinos de entrada e saída. Qual das alternativas abaixo explica corretamente sua função?",
        options: [
          "Configura a tensão de alimentação dos pinos.",
          "Define se um pino será utilizado como entrada ou saída digital.",
          "Controla a comunicação serial entre dispositivos.",
          "Verifica o estado atual de um pino específico."
        ],
        answer: 1,
        explanation: "A função pinMode(pino, modo) define a direção do fluxo elétrico no registro DDR do microcontrolador (INPUT, OUTPUT ou INPUT_PULLUP)."
      },
      {
        id: 10,
        type: "choice",
        title: "Atuadores são componentes importantes para transformar sinais elétricos em ações físicas. Qual das alternativas abaixo descreve corretamente o papel de um atuador?",
        options: [
          "Capturar dados ambientais e convertê-los em sinais digitais.",
          "Processar dados e realizar cálculos complexos.",
          "Executar ações físicas com base em comandos recebidos de um controlador.",
          "Monitorar o estado da conexão entre dispositivos."
        ],
        answer: 2,
        explanation: "Ao contrário dos sensores que convertem grandezas físicas em elétricas, os atuadores convertem energia elétrica em ação física (movimento, luz, calor, etc.)."
      },
      {
        id: 11,
        type: "choice",
        title: "O microcontrolador é o \"cérebro\" de qualquer projeto baseado em Arduino. Ele permite que o dispositivo execute diversas tarefas. Qual das opções abaixo descreve melhor a função de um microcontrolador em um sistema IoT?",
        options: [
          "Receber dados da internet e transmitir para sensores.",
          "Processar e executar instruções com base em entradas recebidas.",
          "Controlar diretamente a comunicação entre dispositivos IoT.",
          "Fornecer energia para os componentes do sistema."
        ],
        answer: 1,
        explanation: "O microcontrolador integra processador, memória e periféricos para ler entradas, processar a lógica gravada no programa e comandar as saídas."
      },
      {
        id: 12,
        type: "choice",
        title: "Em um outro projeto elétrico em que você participa ocorreu um problema em seu funcionamento que provocou a atuação do dispositivo de segurança da instalação onde esse projeto elétrico estava operando. Indique o dispositivo de segurança entre as opções abaixo:",
        options: [
          "Gerador",
          "Disjuntor",
          "Receptor",
          "Capacitor",
          "Indutor"
        ],
        answer: 1,
        explanation: "O disjuntor é o dispositivo eletromecânico concebido para seccionar o circuito em situações de sobrecarga ou curto-circuito."
      },
      {
        id: 13,
        type: "choice",
        title: "Em um projeto de Redes você foi questionado sobre a necessidade de usar um dispositivo de controle para efetuar a medição de uma grandeza elétrica no circuito sendo desenvolvido. Entre as opções abaixo, qual representa um dispositivo de controle que poderia ser usado?",
        options: [
          "Receptor",
          "Capacitor",
          "Resistor",
          "Amperímetro",
          "Fusível"
        ],
        answer: 3,
        explanation: "Entre as alternativas apresentadas no contexto do teste para efetuar a medição da grandeza elétrica corrente, o amperímetro é o equipamento adequado."
      },
      {
        id: 14,
        type: "choice",
        title: "O Arduino é amplamente utilizado para prototipagem devido à sua simplicidade e flexibilidade. Qual das alternativas abaixo melhor descreve como ele facilita o desenvolvimento?",
        options: [
          "Permite a criação de aplicativos móveis sem programação.",
          "Oferece uma plataforma de hardware e software open-source de fácil utilização.",
          "Fornece comunicação com a internet sem a necessidade de componentes adicionais.",
          "É projetado para ser utilizado exclusivamente com sensores digitais."
        ],
        answer: 1,
        explanation: "A grande adesão ao ecossistema Arduino decorre do seu ambiente de desenvolvimento integrado aberto, bibliotecas padronizadas e comunidade ativa."
      },
      {
        id: 15,
        type: "choice",
        title: "A eficiência energética é fundamental em projetos de IoT, especialmente em dispositivos alimentados por bateria. Qual das alternativas abaixo aponta a principal vantagem de sensores de baixa energia?",
        options: [
          "Permitem que os dispositivos realizem processamento de dados mais rápido.",
          "Aumentam a quantidade de dados que podem ser processados.",
          "Prolongam a vida útil da bateria, permitindo maior tempo de operação.",
          "Melhora a precisão dos dados coletados."
        ],
        answer: 2,
        explanation: "Componentes com baixo consumo permitem que nós remotos operem durante meses ou anos com recurso a baterias ou células solares."
      },
      {
        id: 16,
        type: "choice",
        title: "A segurança é um dos aspectos críticos em projetos de IoT, especialmente quando vários dispositivos estão conectados à internet. Qual das alternativas abaixo representa um dos principais desafios de segurança em dispositivos IoT?",
        options: [
          "A dificuldade em integrar dispositivos de diferentes fabricantes.",
          "A exposição de dados pessoais e senhas a possíveis ataques cibernéticos.",
          "O alto consumo de energia dos dispositivos conectados.",
          "A necessidade de grandes quantidades de memória para processar dados."
        ],
        answer: 1,
        explanation: "Dispositivos conectados sem credenciais robustas ou canais encriptados expõem a rede interna a invasões e fuga de dados confidenciais."
      },
      {
        id: 17,
        type: "choice",
        title: "Em um circuito em série com três resistores de valores 10Ω, 20Ω e 30Ω, qual é o valor da resistência total?\nQuando resistores estão conectados em série, a resistência total do circuito é a soma dos valores dos resistores. Qual das alternativas abaixo representa corretamente a resistência total deste circuito?",
        options: [
          "15Ω",
          "20Ω",
          "30Ω",
          "60Ω"
        ],
        answer: 3,
        explanation: "Cálculo em série: R_total = R1 + R2 + R3 = 10 + 20 + 30 = 60Ω."
      },
      {
        id: 18,
        type: "choice",
        title: "O instrumento disponível para efetuar a medição da tensão elétrica era um multímetro analógico, exibido entre as opções da figura acima. Qual alternativa corresponde ao multímetro analógico?",
        image: "images/imagem1.png",
        visual: "Referência da Imagem 1: [Figura A: Multímetro digital portátil com visor LCD] | [Figura B: Multímetro analógico com galvanômetro de ponteiro mecânico] | [Figura C: Osciloscópio digital com forma de onda] | [Figura D: Switch de rede com portas RJ-45].",
        options: [
          "Figura A",
          "Figura B",
          "Figura C",
          "Figura D"
        ],
        answer: 1,
        explanation: "A Figura B apresenta um multímetro com indicador mecânico de ponteiro (galvanômetro analógico d'Arsonval), característico dos instrumentos analógicos."
      },
      {
        id: 19,
        type: "choice",
        title: "Para identificar a causa do problema que provocou a atuação do dispositivo de segurança, você foi convidado a colaborar no ajuste e uso do multímetro disponível. Um de seus colegas não sabia como efetuar o ajuste no seletor do instrumento e escolher a função voltímetro do aparelho. Qual número na figura acima representa a chave seletora de função do aparelho?",
        image: "images/imagem2.png",
        visual: "Referência da Imagem 2: [Item 1: Ecrã/Display LCD digital] | [Item 2: Chave seletora rotativa central] | [Item 3: Pontas de prova] | [Item 4: Bornes de ligação dos cabos] | [Item 5: Soquete azul de teste de transístor hFE].",
        options: [
          "Item 1",
          "Item 2",
          "Item 3",
          "Item 4",
          "Item 5"
        ],
        answer: 1,
        explanation: "O Item 2 aponta diretamente para o comutador rotativo central que define a escala e a função de medição do multímetro."
      },
      {
        id: 20,
        type: "choice",
        title: "Qual é a potência dissipada por um resistor de 50Ω quando uma corrente de 2A passa por ele? (Use a fórmula da potência: P = I² * R)\nA potência dissipada em um resistor pode ser calculada com base na corrente que o atravessa e em sua resistência. Qual das alternativas abaixo descreve corretamente a potência dissipada?",
        options: [
          "100W",
          "150W",
          "20000mW",
          "200W"
        ],
        answer: 3,
        explanation: "Cálculo: P = I² * R = (2A)² * 50Ω = 4 * 50 = 200W."
      },
      {
        id: 21,
        type: "choice",
        title: "Atuadores são usados para realizar ações físicas em resposta a comandos de controle. Qual das alternativas abaixo é um exemplo correto de um atuador?",
        options: [
          "Um sensor de temperatura.",
          "Um LED que acende ao receber um comando.",
          "Um módulo Wi-Fi que conecta o dispositivo à internet.",
          "Um servidor de nuvem para armazenamento de dados."
        ],
        answer: 1,
        explanation: "O LED (Diodo Emissor de Luz) converte a corrente elétrica em radiação luminosa visível após um comando do circuito, sendo um exemplo clássico de atuador óptico."
      },
      {
        id: 22,
        type: "choice",
        title: "Em um circuito em série com dois resistores de 40Ω e 60Ω, a corrente é de 0,5A. Qual é a tensão total do circuito? (Use a fórmula da Lei de Ohm: V = I * R)\nNeste caso, a resistência total deve ser somada antes de aplicar a Lei de Ohm para calcular a tensão. Qual é a tensão total do circuito?",
        options: [
          "25V",
          "30V",
          "50V",
          "100V"
        ],
        answer: 2,
        explanation: "Cálculo: R_total = 40 + 60 = 100Ω. Tensão: V = I * R_total = 0,5A * 100Ω = 50V."
      },
      {
        id: 23,
        type: "choice",
        title: "Se a corrente que passa por um circuito em série com uma resistência total de 100Ω é de 500mA, qual é a tensão aplicada ao circuito? (Use a Lei de Ohm: V = I * R).\nA Lei de Ohm descreve a relação entre tensão (V), corrente (I) e resistência (R). Qual é a tensão aplicada nesse circuito?",
        options: [
          "25V",
          "50V",
          "75V",
          "100V"
        ],
        answer: 1,
        explanation: "Cálculo: 500mA = 0,5A. Tensão: V = 0,5A * 100Ω = 50V."
      },
      {
        id: 24,
        type: "choice",
        title: "Para ajudar no processo de solução de problemas relativo ao acionamento do dispositivo de segurança você foi solicitado a identificar a função que mede a resistência ôhmica de um componente do circuito. Ao analisar qual parte da chave seletora do multímetro você escolheu a alternativa:",
        image: "images/imagem3.png",
        visual: "Referência da Imagem 3: [Posição A: Zona azul com indicação 'A~' (Corrente Alternada)] | [Posição B: 'V~' (Tensão Alternada)] | [Posição C: 'V=' (Tensão Contínua)] | [Posição D: Zona com o símbolo 'Ω' e teste sonoro de continuidade (Resistência Ôhmica)].",
        options: [
          "Posição A",
          "Posição B",
          "Posição C",
          "Posição D"
        ],
        answer: 3,
        explanation: "A medição de resistência ôhmica é assinalada pela letra grega Ômega (Ω), localizada na Posição D do comutador."
      },
      {
        id: 25,
        type: "choice",
        title: "Resistores são usados frequentemente em circuitos com Arduino para controlar o fluxo de corrente elétrica. Qual das opções abaixo descreve corretamente o papel de um resistor?",
        image: "images/imagem3.png",
        options: [
          "Armazenar energia elétrica temporariamente.",
          "Reduzir a corrente elétrica e proteger outros componentes.",
          "Ampliar a tensão para dispositivos conectados.",
          "Regular a comunicação entre dispositivos digitais."
        ],
        answer: 1,
        explanation: "O resistor introduz oposição à passagem dos elétrons, limitando o valor da corrente e evitando a queima de componentes sensíveis como portas lógicas e LEDs."
      },
      {
        id: 26,
        type: "choice",
        title: "Nesse mesmo instrumento, se for necessário escolher a opção para medir tensões contínuas a alternativa correta será:",
        image: "images/imagem3.png",
        visual: "Referência da Imagem 3: [Posição A: Corrente AC 'A~'] | [Posição B: Tensão AC 'V~'] | [Posição C: Tensão DC com linha contínua e tracejada 'V='] | [Posição D: Escalas de Resistência 'Ω'].",
        options: [
          "Posição A",
          "Posição B",
          "Posição C",
          "Posição D"
        ],
        answer: 2,
        explanation: "As grandezas de tensão contínua (DC) são identificadas pela letra V seguida do símbolo com traço contínuo e tracejado (V=), correspondendo à Posição C."
      },
      {
        id: 27,
        type: "choice",
        title: "Tanto Wi-Fi quanto Bluetooth são usados para comunicação sem fio em projetos de IoT, mas eles têm propósitos e alcances diferentes. Qual das alternativas melhor explica essa diferença?",
        options: [
          "Bluetooth tem maior alcance e velocidade que Wi-Fi.",
          "Wi-Fi consome menos energia que Bluetooth.",
          "Bluetooth é mais indicado para comunicações de curto alcance e baixo consumo.",
          "Wi-Fi não pode ser utilizado em dispositivos IoT."
        ],
        answer: 2,
        explanation: "O Bluetooth (particularmente na versão BLE) é desenhado para periféricos próximos que requerem autonomia energética prolongada, enquanto o Wi-Fi oferece maior largura de banda à custa de consumo elétrico superior."
      },
      {
        id: 28,
        type: "choice",
        title: "O MQTT é amplamente utilizado em IoT devido à sua leveza e eficiência em dispositivos com baixa capacidade de processamento. Qual das alternativas abaixo descreve corretamente o funcionamento do protocolo MQTT?",
        options: [
          "Um protocolo que criptografa dados para transmissão segura.",
          "Um protocolo de comunicação orientado a mensagens entre cliente e servidor.",
          "Um protocolo para transmitir dados em redes locais de alta velocidade.",
          "Um protocolo de controle para dispositivos IoT complexos."
        ],
        answer: 1,
        explanation: "O protocolo MQTT utiliza uma arquitetura de publicação/subscrição (publish/subscribe) com cabeçalhos reduzidos, ideal para nós com recursos limitados de rede e memória."
      },
      {
        id: 29,
        type: "choice",
        title: "Qual será a corrente em um circuito em série com uma fonte de 24V e um resistor de 12Ω? (Use a Lei de Ohm: I = V / R)\nSabendo que a tensão é 24V e a resistência é 12Ω, qual será a corrente fluindo pelo circuito?",
        options: [
          "1A",
          "2A",
          "3A",
          "4A"
        ],
        answer: 1,
        explanation: "Cálculo direto: I = V / R = 24V / 12Ω = 2A."
      },
      {
        id: 30,
        type: "choice",
        title: "Sensores digitais e analógicos são usados em projetos de IoT com diferentes funcionalidades. Qual a principal diferença entre eles?",
        options: [
          "Sensores digitais fornecem leituras contínuas, enquanto os analógicos fornecem leituras discretas.",
          "Sensores analógicos exigem conversão de sinal para uso no Arduino, enquanto os digitais não.",
          "Sensores digitais são mais precisos que os analógicos.",
          "Sensores analógicos não são compatíveis com o Arduino."
        ],
        answer: 1,
        explanation: "Os sinais analógicos variam de modo contínuo e exigem conversão analógico-digital (ADC) interna para serem processados pelo microcontrolador, ao passo que os sinais digitais chegam já em níveis lógicos discretos."
      }
    ]
  },

  "banco-de-dados": {
    id: "banco-de-dados",
    title: "Banco de Dados",
    subtitle: "Conceitos de SGBD, Modelo Relacional, Cardinalidade e SQL Básico",
    badgeClass: "badge-green",
    badgeText: "Modelagem & Dados",
    desc: "20 questões de múltipla escolha cobrindo tabelas, atributos, chaves primárias e estrangeiras, normalização e comandos DML.",
    questions: [
      {
        id: 1,
        type: "choice",
        title: "O que é um banco de dados?",
        options: [
          "Um conjunto organizado de dados armazenados de forma estruturada",
          "Um software de edição de texto",
          "Um tipo de linguagem de programação",
          "Um dispositivo de armazenamento físico",
          "Um sistema operacional"
        ],
        answer: 0,
        explanation: "Banco de dados é uma coleção estruturada de dados organizados para permitir consulta, atualização e recuperação eficiente."
      },
      {
        id: 2,
        type: "choice",
        title: "Qual é a principal função de um SGBD?",
        options: [
          "Criar interfaces gráficas",
          "Gerenciar, armazenar e recuperar dados de forma eficiente",
          "Executar códigos em Java",
          "Substituir o sistema operacional",
          "Criar redes de computadores"
        ],
        answer: 1,
        explanation: "O Sistema Gerenciador de Banco de Dados (SGBD) gerencia a persistência, integridade, concorrência e acesso seguro aos dados."
      },
      {
        id: 3,
        type: "choice",
        title: "No modelo entidade-relacionamento, o que representa uma entidade?",
        options: [
          "Um relacionamento entre tabelas",
          "Um objeto do mundo real com existência própria",
          "Um tipo de dado",
          "Um comando SQL",
          "Uma chave estrangeira"
        ],
        answer: 1,
        explanation: "Entidade representa uma coisa ou objeto do mundo real (físico ou conceitual) sobre o qual desejamos guardar informações (ex: Aluno, Produto)."
      },
      {
        id: 4,
        type: "choice",
        title: "Qual é a função de uma chave primária?",
        options: [
          "Armazenar dados duplicados",
          "Identificar unicamente cada registro",
          "Criar relacionamento",
          "Ordenar automaticamente",
          "Excluir registros"
        ],
        answer: 1,
        explanation: "A chave primária (Primary Key) garante que cada tupla/linha na tabela seja única e não nula."
      },
      {
        id: 5,
        type: "choice",
        title: "O que é uma chave estrangeira?",
        options: [
          "Campo obrigatório",
          "Identificador único",
          "Campo que referencia outra tabela",
          "Índice",
          "Comando SQL"
        ],
        answer: 2,
        explanation: "A chave estrangeira (Foreign Key) cria um vínculo entre duas tabelas ao apontar para a chave primária de outra tabela."
      },
      {
        id: 6,
        type: "choice",
        title: "Qual é a técnica mais adequada para o relacionamento entre Produto e Pedido?",
        options: [
          "1:1",
          "1:N",
          "N:1",
          "N:N",
          "Não é possível"
        ],
        answer: 3,
        explanation: "Um pedido pode conter múltiplos produtos, e o mesmo produto pode estar presente em vários pedidos, configurando uma relação Muitos para Muitos (N:N)."
      },
      {
        id: 7,
        type: "choice",
        title: "Qual o principal objetivo da normalização?",
        options: [
          "Aumentar redundância",
          "Melhorar aparência",
          "Evitar redundância e inconsistência",
          "Criar mais tabelas",
          "Substituir SQL"
        ],
        answer: 2,
        explanation: "A normalização organiza os dados de modo a evitar redundâncias, desperdício de espaço e anomalias de atualização, inserção ou exclusão."
      },
      {
        id: 8,
        type: "choice",
        title: "Para que serve o comando SELECT?",
        options: [
          "Inserir",
          "Atualizar",
          "Excluir",
          "Consultar dados",
          "Criar tabelas"
        ],
        answer: 3,
        explanation: "SELECT é o principal comando do SQL (DQL) utilizado para recuperar dados gravados nas tabelas."
      },
      {
        id: 9,
        type: "choice",
        title: "Qual a função da cláusula WHERE?",
        options: [
          "Ordenar",
          "Filtrar",
          "Criar",
          "Inserir",
          "Excluir"
        ],
        answer: 1,
        explanation: "A cláusula WHERE impõe condições e critérios para filtrar os registros que devem ser retornados ou manipulados."
      },
      {
        id: 10,
        type: "choice",
        title: "O comando INSERT faz o quê?",
        options: [
          "Atualiza",
          "Insere novos registros",
          "Exclui",
          "Consulta",
          "Cria índice"
        ],
        answer: 1,
        explanation: "O comando INSERT adiciona uma ou mais novas linhas de dados a uma tabela."
      },
      {
        id: 11,
        type: "choice",
        title: "O comando UPDATE serve para?",
        options: [
          "Inserir",
          "Atualizar dados existentes",
          "Excluir",
          "Consultar",
          "Criar"
        ],
        answer: 1,
        explanation: "UPDATE modifica valores de colunas já gravadas em registros existentes na tabela."
      },
      {
        id: 12,
        type: "choice",
        title: "O comando DELETE faz o quê?",
        options: [
          "Atualiza",
          "Insere",
          "Remove registros",
          "Consulta",
          "Cria"
        ],
        answer: 2,
        explanation: "DELETE remove linhas de uma tabela (se usado sem WHERE, apaga todas as linhas)."
      },
      {
        id: 13,
        type: "choice",
        title: "O que é uma tabela em banco de dados relacional?",
        options: [
          "Conjunto de linhas e colunas",
          "Software",
          "Hardware",
          "Código",
          "Rede"
        ],
        answer: 0,
        explanation: "Tabelas (ou relações) são estruturas compostas por linhas (tuplas/registros) e colunas (atributos/campos)."
      },
      {
        id: 14,
        type: "choice",
        title: "O que é um atributo em banco de dados?",
        options: [
          "Tabela",
          "Coluna",
          "Linha",
          "Chave",
          "Índice"
        ],
        answer: 1,
        explanation: "Atributos representam as características ou propriedades de uma entidade, correspondendo às colunas da tabela."
      },
      {
        id: 15,
        type: "choice",
        title: "O que é um registro em banco de dados?",
        options: [
          "Coluna",
          "Linha",
          "Tabela",
          "Chave",
          "Índice"
        ],
        answer: 1,
        explanation: "Um registro (ou tupla) corresponde a uma linha completa da tabela contendo a instância específica de dados."
      },
      {
        id: 16,
        type: "choice",
        title: "Qual das opções abaixo é um exemplo de SGBD?",
        options: [
          "Windows",
          "MySQL",
          "Google Chrome",
          "Java",
          "Linux"
        ],
        answer: 1,
        explanation: "MySQL é um dos Sistemas Gerenciadores de Banco de Dados relacionais mais populares do mundo."
      },
      {
        id: 17,
        type: "choice",
        title: "O que significa o relacionamento 1:N?",
        options: [
          "Um para um",
          "Um para muitos",
          "Muitos para um",
          "Muitos para muitos",
          "Nenhum"
        ],
        answer: 1,
        explanation: "1:N (Um para Muitos) significa que um único registro da primeira tabela pode estar relacionado a vários registros da segunda tabela (ex: um Cliente tem vários Pedidos)."
      },
      {
        id: 18,
        type: "choice",
        title: "Em um banco relacional, um relacionamento N:N necessita de?",
        options: [
          "Nada",
          "Tabela intermediária (associativa/junção)",
          "Chave primária apenas",
          "Índice",
          "Trigger"
        ],
        answer: 1,
        explanation: "Para implementar N:N em bancos relacionais, cria-se uma tabela associativa intermediária contendo as chaves estrangeiras das duas tabelas originais."
      },
      {
        id: 19,
        type: "choice",
        title: "A integridade referencial garante o quê?",
        options: [
          "Velocidade",
          "Relacionamentos válidos entre tabelas",
          "Interface",
          "Design",
          "Backup"
        ],
        answer: 1,
        explanation: "A integridade referencial assegura que o valor de uma chave estrangeira sempre aponte para uma chave primária válida e existente na tabela referenciada."
      },
      {
        id: 20,
        type: "choice",
        title: "O SQL é classificado como:",
        options: [
          "Linguagem de consulta estruturada",
          "Sistema operacional",
          "Hardware",
          "Rede",
          "Editor de texto"
        ],
        answer: 0,
        explanation: "SQL (Structured Query Language) é a linguagem padrão declarativa para consultar e gerenciar dados em bancos relacionais."
      }
    ]
  },

  "poo": {
    id: "poo",
    title: "Orientação a Objetos",
    subtitle: "Classes, Construtores, Encapsulamento, Herança, Polimorfismo e Interfaces em Java",
    badgeClass: "badge-orange",
    badgeText: "Programação Java",
    desc: "23 questões dinâmicas combinando múltipla escolha, verdadeiro ou falso e questões dissertativas de código e conceitos.",
    questions: [
      {
        id: 1,
        type: "choice",
        title: "Qual é a função de um construtor em Java?",
        options: [
          "Criar métodos automaticamente",
          "Inicializar objetos de uma classe",
          "Deletar atributos de um objeto",
          "Garantir polimorfismo"
        ],
        answer: 1,
        explanation: "O construtor é um método especial executado no momento da instanciação (`new`) para inicializar o estado dos atributos do objeto."
      },
      {
        id: 2,
        type: "choice",
        title: "Qual palavra-chave é usada para chamar o construtor da superclasse dentro de uma subclasse?",
        options: [
          "this",
          "super",
          "extends",
          "parent"
        ],
        answer: 1,
        explanation: "A instrução `super(...)` invoca o construtor da superclasse imediata e deve ser a primeira linha do construtor da subclasse."
      },
      {
        id: 3,
        type: "choice",
        title: "Qual é a diferença principal entre uma interface e uma classe abstrata?",
        options: [
          "Interface não pode declarar métodos.",
          "Interface só define contratos (embora versões recentes permitam default methods), enquanto a classe abstrata pode conter atributos de instância e implementação de métodos.",
          "Classe abstrata não pode ter atributos.",
          "Interface pode ser instanciada."
        ],
        answer: 1,
        explanation: "Interfaces definem contratos abstratos puros de métodos que classes implementam, ao passo que classes abstratas podem manter estado (atributos) e métodos concretos reutilizáveis."
      },
      {
        id: 4,
        type: "choice",
        title: "Na herança em Java, qual palavra-chave é usada para indicar que uma classe herda de outra?",
        options: [
          "extends",
          "implements",
          "inherits",
          "super"
        ],
        answer: 0,
        explanation: "A palavra-chave `extends` estabelece a relação de herança entre classes em Java."
      },
      {
        id: 5,
        type: "text",
        title: "Explique a diferença entre atributo e método em uma classe Java.",
        sampleAnswer: "Atributos representam as propriedades, características ou o estado de um objeto (são as variáveis da classe).\n\nMétodos representam as ações, operações e comportamentos que o objeto pode executar (são as funções associadas à classe).",
        explanation: "Em POO, estado é dado por atributos e comportamento é definido por métodos."
      },
      {
        id: 6,
        type: "choice",
        title: "Qual das opções abaixo define uma classe abstrata corretamente?",
        options: [
          "Uma classe que não pode ser instanciada diretamente e pode conter métodos abstratos",
          "Uma classe que só contém atributos estáticos",
          "Uma classe que herda de várias classes",
          "Uma classe que não possui atributos"
        ],
        answer: 0,
        explanation: "Classes marcadas com `abstract` servem como molde base para subclasses e não podem ser instanciadas diretamente com `new`."
      },
      {
        id: 7,
        type: "choice",
        title: "Qual modificador de acesso garante que um atributo só pode ser acessado dentro da própria classe?",
        options: [
          "public",
          "private",
          "protected",
          "default"
        ],
        answer: 1,
        explanation: "O modificador `private` restringe a visibilidade do membro estritamente ao escopo interno da própria classe."
      },
      {
        id: 8,
        type: "choice",
        title: "Qual opção define corretamente sobrescrita de métodos (overriding)?",
        options: [
          "Criar métodos iguais em classes diferentes",
          "Substituir um método da superclasse por um novo comportamento na subclasse",
          "Criar vários métodos com nomes iguais, mas parâmetros diferentes",
          "Usar construtores diferentes"
        ],
        answer: 1,
        explanation: "Sobrescrita (@Override) ocorre quando uma subclasse reimplementa um método herdado da superclasse mantendo a mesma assinatura."
      },
      {
        id: 9,
        type: "choice",
        title: "Um objeto em Java é:",
        options: [
          "Um método",
          "Um molde",
          "Uma instância de uma classe",
          "Uma variável global"
        ],
        answer: 2,
        explanation: "A classe é o modelo/molde arquitetural, e o objeto é a instância concreta desse modelo materializada na memória."
      },
      {
        id: 10,
        type: "choice",
        title: "Qual seria a forma correta de criar um getter para o atributo `nome` do tipo String?",
        options: [
          "public void getNome(String nome) { this.nome = nome; }",
          "public String getNome() { return nome; }",
          "private String getNome() { return nome; }",
          "public getNome() { return nome; }"
        ],
        answer: 1,
        explanation: "Um getter tem modificador `public`, tipo de retorno correspondente ao atributo e retorna o valor sem receber parâmetros."
      },
      {
        id: 11,
        type: "choice",
        title: "Qual vantagem de usar getters e setters em vez de atributos públicos?",
        options: [
          "Melhora o desempenho da aplicação.",
          "Permite validar ou processar dados antes de acessar/modificar.",
          "Evita necessidade de construtores.",
          "Obriga todos os métodos a serem privados."
        ],
        answer: 1,
        explanation: "Getters e setters protegem a integridade do objeto, permitindo validar regras de negócio (ex: não aceitar salário negativo) e manter o encapsulamento."
      },
      {
        id: 12,
        type: "choice",
        title: "Qual opção define corretamente sobrecarga de métodos (overloading)?",
        options: [
          "Criar vários métodos com o mesmo nome, mas parâmetros diferentes",
          "Criar métodos iguais em classes diferentes",
          "Substituir métodos da superclasse na subclasse",
          "Criar métodos sem retorno"
        ],
        answer: 0,
        explanation: "Sobrecarga (overloading) é criar na mesma classe métodos com o mesmo nome, mas assinaturas distintas (quantidade ou tipos de parâmetros diferentes)."
      },
      {
        id: 13,
        type: "text",
        title: "Explique a vantagem de usar herança em projetos Java.",
        sampleAnswer: "A herança promove reaproveitamento de código, diminuindo a duplicidade. Permite que subclasses herdem atributos e métodos da superclasse, facilitando a manutenção e viabilizando o polimorfismo.",
        explanation: "A herança modela relações do tipo 'é um' e centraliza regras comuns na superclasse."
      },
      {
        id: 14,
        type: "choice",
        title: "Qual das opções abaixo representa corretamente o conceito de polimorfismo?",
        options: [
          "Vários objetos da mesma classe",
          "Vários métodos com o mesmo nome, mas comportamentos diferentes",
          "Um objeto sem atributos",
          "Um método que nunca é chamado"
        ],
        answer: 1,
        explanation: "Polimorfismo ('muitas formas') permite tratar objetos de classes filhas por meio de uma referência comum da superclasse, respondendo de formas distintas à mesma chamada de método."
      },
      {
        id: 15,
        type: "text",
        title: "Explique o que acontece no seguinte código:\n\nAnimal a = new Cachorro();\na.emitirSom();",
        sampleAnswer: "Ocorre polimorfismo com ligação tardia (dynamic dispatch). Uma variável do tipo mais genérico Animal aponta para uma instância concreta de Cachorro. Ao executar `a.emitirSom()`, o Java chama em tempo de execução a implementação específica sobrescrita na classe Cachorro.",
        explanation: "A decisão de qual método executar é tomada em tempo de execução com base no tipo real da instância."
      },
      {
        id: 16,
        type: "choice",
        title: "O que é uma classe em Java?",
        options: [
          "Um objeto específico criado na memória",
          "Um modelo ou molde para criação de objetos",
          "Uma variável de instância",
          "Um método estático"
        ],
        answer: 1,
        explanation: "Uma classe define a estrutura, atributos e comportamentos padrão a partir da qual múltiplos objetos podem ser instanciados."
      },
      {
        id: 17,
        type: "text",
        title: "Por que é considerado uma boa prática usar getters e setters em vez de deixar os atributos public em uma classe?",
        sampleAnswer: "Garante o encapsulamento, ocultando a representação interna dos dados. Permite adicionar validações (ex: impedir valores nulos ou negativos), controle de acesso (apenas leitura ou escrita) e reduz o acoplamento entre classes.",
        explanation: "Atributos públicos quebram o encapsulamento e deixam a classe desprotegida contra alterações externas indevidas."
      },
      {
        id: 18,
        type: "choice",
        title: "Qual palavra-chave é usada em Java para indicar que uma classe implementa uma interface?",
        options: [
          "extends",
          "interface",
          "implements",
          "abstract"
        ],
        answer: 2,
        explanation: "A palavra-chave `implements` é utilizada na declaração da classe para indicar que ela cumprirá o contrato da interface."
      },
      {
        id: 19,
        type: "text",
        title: "Crie um construtor para a classe Carro que receba como parâmetros o modelo e o ano.",
        sampleAnswer: "public Carro(String modelo, int ano) {\n    this.modelo = modelo;\n    this.ano = ano;\n}",
        explanation: "O construtor possui o mesmo nome da classe, não define tipo de retorno e utiliza `this` para diferenciar o atributo da classe do parâmetro recebido."
      },
      {
        id: 20,
        type: "text",
        title: "Explique por que não é possível em Java uma classe herdar de duas superclasses ao mesmo tempo.",
        sampleAnswer: "O Java não suporta herança múltipla de classes para evitar ambiguidades e problemas de conflito como o 'Problema do Diamante' (Diamond Problem), onde duas classes pai possuem implementações distintas do mesmo método. Para flexibilidade, o Java permite implementar múltiplas interfaces.",
        explanation: "Essa decisão de projeto do Java priorizou a simplicidade e a segurança do código."
      },
      {
        id: 21,
        type: "true-false",
        title: "O encapsulamento em Java é obtido através do uso de modificadores de acesso e métodos getters e setters.",
        options: [
          "Verdadeiro",
          "Falso"
        ],
        answer: 0,
        explanation: "Correto! O encapsulamento oculta a estrutura interna de dados (com modificadores como `private`) e fornece portas controladas de acesso através de métodos públicos."
      },
      {
        id: 22,
        type: "text",
        title: "Crie uma classe abstrata Veiculo com o método abstrato mover().",
        sampleAnswer: "public abstract class Veiculo {\n    public abstract void mover();\n}",
        explanation: "A classe abstrata usa a palavra `abstract` e o método abstrato termina com ponto e vírgula sem corpo `{}`."
      },
      {
        id: 23,
        type: "true-false",
        title: "Uma classe abstrata pode ter tanto métodos abstratos quanto métodos implementados.",
        options: [
          "Verdadeiro",
          "Falso"
        ],
        answer: 0,
        explanation: "Correto! Ao contrário de interfaces clássicas, classes abstratas podem conter tanto métodos com corpo (implementação concreta) quanto métodos sem corpo (abstratos) que as filhas devem implementar."
      }
    ]
  },

  "sql": {
    id: "sql",
    title: "Prova SQL",
    subtitle: "Consultas, Cláusulas WHERE, ORDER BY, Funções de Agregação, MER e DER",
    badgeClass: "badge-blue",
    badgeText: "Consultas & DML",
    desc: "26 questões abrangendo conceitos teóricos de modelagem e escrita prática de consultas SQL (filtros, ordenação, DISTINCT, TOP/LIMIT).",
    questions: [
      {
        id: 1,
        type: "text",
        title: "Explique brevemente o que é um MER e um DER em banco de dados. Dê um exemplo de cada.",
        sampleAnswer: "MER (Modelo Entidade-Relacionamento) é o modelo conceitual de alto nível que descreve a visão do negócio (ex: Entidade CLIENTE se relaciona com PEDIDO).\n\nDER (Diagrama Entidade-Relacionamento) é a representação visual/gráfica do MER através de símbolos padronizados (retângulos para entidades, losangos para relacionamentos e elipses para atributos).",
        explanation: "MER é o modelo conceitual; DER é a sua representação gráfica."
      },
      {
        id: 2,
        type: "text",
        title: "Para que serve o comando DISTINCT em uma consulta SQL? Dê um exemplo de uso.",
        sampleAnswer: "O comando DISTINCT elimina valores duplicados no resultado retornado pela consulta.\n\nExemplo:\nSELECT DISTINCT departamento FROM Funcionarios;",
        explanation: "Garante que apenas valores únicos apareçam na listagem resultante."
      },
      {
        id: 3,
        type: "text",
        title: "O que os comandos ASC e DESC fazem em uma cláusula ORDER BY?",
        sampleAnswer: "ASC (Ascending) classifica os registros em ordem crescente (do menor para o maior / A-Z), sendo o padrão caso omitido.\n\nDESC (Descending) classifica em ordem decrescente (do maior para o menor / Z-A).",
        explanation: "Controlam o sentido da ordenação definida na cláusula ORDER BY."
      },
      {
        id: 4,
        type: "choice",
        title: "Qual o comando SQL para renomear uma coluna em uma consulta?",
        options: [
          "AS",
          "RENAME",
          "ALTER",
          "MODIFY"
        ],
        answer: 0,
        explanation: "A palavra-chave `AS` cria um alias (apelido) temporário para a coluna ou tabela na consulta (ex: `SELECT nome AS funcionario`)."
      },
      {
        id: 5,
        type: "text",
        title: "Explique o que faz o comando TOP em uma consulta SQL. Dê um exemplo.",
        sampleAnswer: "O comando TOP (usado no SQL Server) limita a quantidade máxima de linhas retornadas pela consulta.\n\nExemplo:\nSELECT TOP 5 * FROM Funcionarios ORDER BY salario DESC;",
        explanation: "No SQL Server usa-se `TOP n`, enquanto no MySQL/PostgreSQL usa-se `LIMIT n` ao final da consulta."
      },
      {
        id: 6,
        type: "choice",
        title: "O que é uma chave primária em um banco de dados relacional?",
        options: [
          "Um identificador único para cada registro",
          "Um índice que melhora o desempenho da consulta",
          "Uma restrição que permite valores duplicados",
          "Uma tabela temporária"
        ],
        answer: 0,
        explanation: "A chave primária garante que cada registro seja único e não nulo na tabela."
      },
      {
        id: 7,
        type: "text",
        title: "Explique o que é um índice em banco de dados e por que ele é importante.",
        sampleAnswer: "Um índice é uma estrutura de dados auxiliar (frequentemente árvore B-Tree) criada sobre uma ou mais colunas para acelerar a busca e recuperação de registros em consultas SELECT, evitando a varredura sequencial completa da tabela (Full Table Scan).",
        explanation: "Melhora expressivamente o desempenho de consultas frequentes."
      },
      {
        id: 8,
        type: "text",
        title: "O que é uma chave primária e para que serve?",
        sampleAnswer: "É uma coluna ou conjunto de colunas que identifica de forma exclusiva cada linha em uma tabela. Serve para garantir a integridade da entidade, prevenir duplicatas e servir como base para relacionamentos com chaves estrangeiras.",
        explanation: "Propriedades essenciais: UNIQUE e NOT NULL."
      },
      {
        id: 9,
        type: "text",
        title: "O que é uma chave estrangeira? Como ela funciona em um banco de dados relacional?",
        sampleAnswer: "É uma coluna que faz referência à chave primária de outra tabela. Funciona estabelecendo uma ligação entre as tabelas e assegurando a integridade referencial, impedindo a inserção de registros que apontem para entidades inexistentes.",
        explanation: "Garante a consistência relacional entre tabelas dependentes."
      },
      {
        id: 10,
        type: "choice",
        title: "Qual comando SQL é usado para agrupar linhas que tenham valores iguais em colunas específicas?",
        options: [
          "GROUP BY",
          "ORDER BY",
          "WHERE",
          "HAVING"
        ],
        answer: 0,
        explanation: "A cláusula `GROUP BY` agrupa linhas com os mesmos valores para uso com funções de agregação (COUNT, SUM, AVG, MAX, MIN)."
      },
      {
        id: 11,
        type: "text",
        title: "Explique o conceito de normalização em banco de dados.",
        sampleAnswer: "A normalização é uma técnica formal de estruturação de tabelas e colunas com o objetivo de reduzir a redundância de dados e evitar anomalias de atualização, inserção e exclusão, aplicando as Formas Normais (1FN, 2FN, 3FN).",
        explanation: "Organiza o modelo para máxima integridade e consistência."
      },
      {
        id: 12,
        type: "text",
        title: "Escreva uma consulta SQL que retorne todos os funcionários do departamento \"TI\".",
        sampleAnswer: "SELECT * FROM Funcionarios WHERE departamento = 'TI';",
        explanation: "Utiliza a cláusula WHERE para filtrar os funcionários cujo campo departamento é igual a 'TI'."
      },
      {
        id: 13,
        type: "text",
        title: "Escreva uma consulta SQL que retorne os nomes distintos dos departamentos da tabela Funcionarios.",
        sampleAnswer: "SELECT DISTINCT departamento FROM Funcionarios;",
        explanation: "O modificador DISTINCT garante que cada departamento apareça apenas uma vez no resultado."
      },
      {
        id: 14,
        type: "text",
        title: "Escreva uma consulta que retorne os 5 funcionários com maior salário.",
        sampleAnswer: "-- No SQL Server:\nSELECT TOP 5 * FROM Funcionarios ORDER BY salario DESC;\n\n-- No MySQL / PostgreSQL:\nSELECT * FROM Funcionarios ORDER BY salario DESC LIMIT 5;",
        explanation: "Ordena os funcionários de forma decrescente pelo salário (ORDER BY salario DESC) e limita aos 5 primeiros."
      },
      {
        id: 15,
        type: "text",
        title: "Escreva uma consulta que retorne a quantidade total de funcionários na tabela.",
        sampleAnswer: "SELECT COUNT(*) AS total_funcionarios FROM Funcionarios;",
        explanation: "A função de agregação COUNT(*) calcula o número total de linhas na tabela."
      },
      {
        id: 16,
        type: "text",
        title: "Escreva uma consulta que retorne todos os funcionários ordenados pelo nome em ordem crescente.",
        sampleAnswer: "SELECT * FROM Funcionarios ORDER BY nome ASC;",
        explanation: "ORDER BY nome ASC (ou simplesmente ORDER BY nome, já que ASC é o padrão) ordena alfabeticamente."
      },
      {
        id: 17,
        type: "text",
        title: "Escreva uma consulta que retorne todos os funcionários ordenados pelo salário em ordem decrescente.",
        sampleAnswer: "SELECT * FROM Funcionarios ORDER BY salario DESC;",
        explanation: "ORDER BY salario DESC garante que os maiores salários fiquem no topo da listagem."
      },
      {
        id: 18,
        type: "choice",
        title: "Qual comando SQL é usado para filtrar linhas com base em uma condição?",
        options: [
          "WHERE",
          "ORDER BY",
          "GROUP BY",
          "HAVING"
        ],
        answer: 0,
        explanation: "A cláusula `WHERE` especifica a condição de filtro sobre as linhas da tabela."
      },
      {
        id: 19,
        type: "choice",
        title: "O que o comando COUNT(*) retorna?",
        options: [
          "O número de linhas de uma tabela",
          "A soma dos valores de uma coluna",
          "A média dos valores de uma coluna",
          "Os valores únicos de uma coluna"
        ],
        answer: 0,
        explanation: "`COUNT(*)` retorna a quantidade total de linhas que atendem aos critérios da consulta."
      },
      {
        id: 20,
        type: "choice",
        title: "Qual comando retorna os valores únicos de uma coluna?",
        options: [
          "DISTINCT",
          "TOP",
          "COUNT",
          "GROUP BY"
        ],
        answer: 0,
        explanation: "`DISTINCT` elimina duplicidades da listagem de uma ou mais colunas."
      },
      {
        id: 21,
        type: "choice",
        title: "O que faz a cláusula ORDER BY em uma consulta SQL?",
        options: [
          "Ordena o resultado de uma consulta",
          "Filtra as linhas que atendem uma condição",
          "Agrupa as linhas",
          "Limita o número de linhas retornadas"
        ],
        answer: 0,
        explanation: "`ORDER BY` define a sequência de apresentação dos resultados (crescente ou decrescente)."
      },
      {
        id: 22,
        type: "choice",
        title: "O que significa ASC em uma cláusula ORDER BY?",
        options: [
          "Ordem crescente",
          "Ordem decrescente",
          "Ordenar por valores absolutos",
          "Ordenar por valores únicos"
        ],
        answer: 0,
        explanation: "`ASC` (Ascending) classifica em ordem crescente (menor para maior / A-Z)."
      },
      {
        id: 23,
        type: "choice",
        title: "O que significa DESC em uma cláusula ORDER BY?",
        options: [
          "Ordem decrescente",
          "Ordem crescente",
          "Filtra resultados",
          "Agrupa resultados"
        ],
        answer: 0,
        explanation: "`DESC` (Descending) classifica em ordem decrescente (maior para menor / Z-A)."
      },
      {
        id: 24,
        type: "choice",
        title: "Qual comando SQL é usado para limitar o número de linhas retornadas? (Considere SQL Server e MySQL)",
        options: [
          "TOP (no SQL Server) ou LIMIT (no MySQL)",
          "ORDER BY",
          "DISTINCT",
          "WHERE"
        ],
        answer: 0,
        explanation: "Tanto TOP quanto LIMIT são as cláusulas fundamentais para limitar registros no SQL Server e MySQL respectivamente."
      },
      {
        id: 25,
        type: "choice",
        title: "O que significa MER no contexto de banco de dados?",
        options: [
          "Modelo Entidade-Relacionamento",
          "Modelo de Execução de Rotina",
          "Modelo Estático Relacional",
          "Modelo de Elementos Relacionais"
        ],
        answer: 0,
        explanation: "MER significa Modelo Entidade-Relacionamento, proposto por Peter Chen em 1976."
      },
      {
        id: 26,
        type: "choice",
        title: "O que é um Diagrama Entidade-Relacionamento (DER)?",
        options: [
          "Representação gráfica do modelo de dados",
          "Consulta SQL complexa",
          "Banco de dados físico",
          "Linguagem de programação"
        ],
        answer: 0,
        explanation: "O DER é o diagrama visual padronizado que esquematiza as entidades, atributos e relacionamentos de um MER."
      }
    ]
  }
};

// ============================================================================
// CONTROLE DE ESTADO DA APLICAÇÃO (SPA)
// ============================================================================

let currentExamId = null;
let currentExamState = {
  answeredCount: 0,
  score: 0,
  totalQuestions: 0
};

// ============================================================================
// RENDERIZAÇÃO DO MENU PRINCIPAL
// ============================================================================

function renderMainMenu() {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;

  menuGrid.innerHTML = "";

  Object.values(examsData).forEach((exam) => {
    const card = document.createElement("div");
    card.className = "exam-card";

    const questionsCount = exam.questions.length;
    const maxScore = questionsCount * 10;

    card.innerHTML = `
      <div>
        <span class="exam-badge ${exam.badgeClass}">${exam.badgeText}</span>
        <h2 class="exam-title">${exam.title}</h2>
        <p class="exam-desc">${exam.desc}</p>
      </div>
      <div>
        <div class="exam-meta">
          <span><strong>${questionsCount}</strong> questões</span>
          <span>Até <strong>${maxScore}</strong> pts</span>
        </div>
        <button class="btn-start-exam" onclick="startExam('${exam.id}')">
          Iniciar Avaliação →
        </button>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

function goToMainMenu() {
  currentExamId = null;
  document.getElementById("menu-screen").style.display = "block";
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("btn-back-menu").style.display = "none";
  document.getElementById("header-tag").style.display = "none";

  document.getElementById("app-title").textContent = "Portal de Simulados";
  document.getElementById("app-subtitle").textContent = "Selecione uma avaliação para praticar com correção imediata e gabarito comentado.";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================================
// RENDERIZAÇÃO E EXECUÇÃO DA PROVA SELECIONADA
// ============================================================================

function startExam(examId) {
  const exam = examsData[examId];
  if (!exam) return;

  currentExamId = examId;
  currentExamState = {
    answeredCount: 0,
    score: 0,
    totalQuestions: exam.questions.length
  };

  // Alterna as telas
  document.getElementById("menu-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  document.getElementById("btn-back-menu").style.display = "inline-flex";

  const headerTag = document.getElementById("header-tag");
  headerTag.style.display = "inline-block";
  headerTag.className = `exam-badge ${exam.badgeClass}`;
  headerTag.textContent = exam.badgeText;

  document.getElementById("app-title").textContent = exam.title;
  document.getElementById("app-subtitle").textContent = exam.subtitle;

  // Atualiza banner de pontuação
  document.getElementById("progress").textContent = `0/${currentExamState.totalQuestions}`;
  document.getElementById("score").textContent = "0";
  document.getElementById("max-score").textContent = (currentExamState.totalQuestions * 10);

  renderQuizQuestions(exam);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuizQuestions(exam) {
  const container = document.getElementById("quiz-container");
  if (!container) return;
  container.innerHTML = "";

  exam.questions.forEach((q) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-${q.id}`;

    // Badge do tipo de questão
    let typeName = "Múltipla Escolha";
    if (q.type === "true-false") typeName = "Verdadeiro ou Falso";
    if (q.type === "text") typeName = "Resposta Dissertativa";

    // Imagem de apoio (se houver)
    let imageHtml = q.image ? `
      <div class="question-image-container">
        <img src="${q.image}" alt="Imagem de apoio para a questão ${q.id}" class="question-image" />
      </div>
    ` : '';

    // Referência visual descritiva (se houver)
    let visualHtml = q.visual ? `
      <div class="visual-reference">
        <strong>Referência Visual:</strong> ${q.visual}
      </div>
    ` : '';

    // Bloco interativo conforme o tipo
    let interactiveHtml = "";

    if (q.type === "choice" || !q.type) {
      const optionsHtml = q.options.map((opt, optIdx) => `
        <button class="option-btn" data-qid="${q.id}" data-opt="${optIdx}">
          <span>${opt}</span>
        </button>
      `).join("");

      interactiveHtml = `
        <div class="options-group" id="opt-group-${q.id}">
          ${optionsHtml}
        </div>
      `;
    } else if (q.type === "true-false") {
      const optionsHtml = q.options.map((opt, optIdx) => `
        <button class="option-btn" data-qid="${q.id}" data-opt="${optIdx}">
          <span>${opt}</span>
        </button>
      `).join("");

      interactiveHtml = `
        <div class="options-group true-false-group" id="opt-group-${q.id}">
          ${optionsHtml}
        </div>
      `;
    } else if (q.type === "text") {
      interactiveHtml = `
        <div class="text-answer-box" id="text-box-${q.id}">
          <textarea class="answer-textarea" id="textarea-${q.id}" placeholder="Escreva sua resposta ou código aqui..."></textarea>
          <button class="btn-submit-text" id="btn-submit-${q.id}" onclick="submitTextAnswer(${q.id})">
            Conferir Gabarito e Salvar
          </button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="question-header">
        <span>Questão ${q.id} de ${exam.questions.length} · 10 Pontos</span>
        <span class="question-type-badge">${typeName}</span>
      </div>
      <div class="question-title">${q.title.replace(/\n/g, '<br>')}</div>
      ${imageHtml}
      ${visualHtml}
      ${interactiveHtml}
      <div class="feedback" id="feedback-${q.id}"></div>
    `;

    container.appendChild(card);
  });

  // Atribui ouvintes de clique nas opções de múltipla escolha e verdadeiro/falso
  container.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", handleOptionSelection);
  });
}

// ============================================================================
// TRATAMENTO DE RESPOSTAS - MÚLTIPLA ESCOLHA & V/F
// ============================================================================

function handleOptionSelection(e) {
  const btn = e.currentTarget;
  const qId = parseInt(btn.dataset.qid);
  const selectedOpt = parseInt(btn.dataset.opt);

  const exam = examsData[currentExamId];
  if (!exam) return;

  const qData = exam.questions.find(q => q.id === qId);
  if (!qData) return;

  const optGroup = document.getElementById(`opt-group-${qId}`);
  const allBtns = optGroup.querySelectorAll(".option-btn");
  const fbDiv = document.getElementById(`feedback-${qId}`);

  // Bloqueia as opções após resposta
  allBtns.forEach(b => b.setAttribute("disabled", "true"));

  if (selectedOpt === qData.answer) {
    btn.classList.add("correct");
    currentExamState.score += 10;
    fbDiv.className = "feedback visible correct-fb";
    fbDiv.innerHTML = `
      <strong>Resposta Correta! (+10 pontos)</strong>
      ${qData.explanation || "Muito bem! Resposta exata."}
    `;
  } else {
    btn.classList.add("wrong");
    allBtns[qData.answer].classList.add("correct");
    fbDiv.className = "feedback visible wrong-fb";
    fbDiv.innerHTML = `
      <strong>Resposta Incorreta.</strong> A opção correta é a destacada em verde.<br><br>
      <strong>Explicação técnica:</strong> ${qData.explanation || "Revise o conceito correspondente."}
    `;
  }

  currentExamState.answeredCount++;
  updateProgressBanner();
}

// ============================================================================
// TRATAMENTO DE RESPOSTAS - DISSERTATIVAS / CÓDIGO
// ============================================================================

function submitTextAnswer(qId) {
  const exam = examsData[currentExamId];
  if (!exam) return;

  const qData = exam.questions.find(q => q.id === qId);
  if (!qData) return;

  const textarea = document.getElementById(`textarea-${qId}`);
  const submitBtn = document.getElementById(`btn-submit-${qId}`);
  const fbDiv = document.getElementById(`feedback-${qId}`);

  const userAnswer = textarea.value.trim();

  // Desabilita textarea e botão
  textarea.setAttribute("disabled", "true");
  submitBtn.setAttribute("disabled", "true");

  fbDiv.className = "feedback visible info-fb";
  fbDiv.innerHTML = `
    <strong>Gabarito Oficial / Resposta Modelo:</strong>
    <div class="code-snippet">${qData.sampleAnswer}</div>
    ${qData.explanation ? `<br><strong>Explicação técnica:</strong> ${qData.explanation}` : ''}
    
    <div class="self-eval-box" id="eval-box-${qId}">
      <span>Avalie sua resposta com base no modelo acima:</span>
      <div class="self-eval-buttons">
        <button class="btn-eval-correct" onclick="evaluateTextAnswer(${qId}, true)">✓ Minha resposta está correta (+10 pts)</button>
        <button class="btn-eval-wrong" onclick="evaluateTextAnswer(${qId}, false)">✗ Preciso revisar (+0 pts)</button>
      </div>
    </div>
  `;

  currentExamState.answeredCount++;
  updateProgressBanner();
}

function evaluateTextAnswer(qId, isCorrect) {
  const evalBox = document.getElementById(`eval-box-${qId}`);
  if (!evalBox) return;

  if (isCorrect) {
    currentExamState.score += 10;
    evalBox.innerHTML = `<span style="color: #4ade80; font-weight: 700;">✓ Pontuação computada (+10 pontos) com sucesso!</span>`;
  } else {
    evalBox.innerHTML = `<span style="color: #f87171; font-weight: 600;">Questão marcada para revisão posterior (+0 pts).</span>`;
  }

  updateProgressBanner();
}

// ============================================================================
// ATUALIZAÇÃO DO BANNER DE PROGRESSO
// ============================================================================

function updateProgressBanner() {
  const progressElem = document.getElementById("progress");
  const scoreElem = document.getElementById("score");

  if (progressElem) {
    progressElem.textContent = `${currentExamState.answeredCount}/${currentExamState.totalQuestions}`;
  }
  if (scoreElem) {
    scoreElem.textContent = currentExamState.score;
  }
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderMainMenu();
});
