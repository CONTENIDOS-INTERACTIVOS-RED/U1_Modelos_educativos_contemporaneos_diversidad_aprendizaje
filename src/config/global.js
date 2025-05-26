export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Enfoques y modelos educativos actuales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Evolución y fundamentos de los modelos educativos contemporáneos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Modelos educativos contemporáneos',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Enfoques pedagógicos centrados en el estudiante',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Características de los enfoques centrados en el estudiante',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Evaluación y adaptación de modelos educativos en distintos contextos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Méndez Estrada, V., Villalobos-Pérez, A., D’Alton Kirkby, C., Cartín Quesda, J. & Piedra García, L. A. (2012). Los modelos pedagógicos centrados en el estudiante: apuntes sobre los procesos de aprendizaje y enseñanza. Universidad Nacional de Educación a Distancia (UNED). ',
      link:
        'https://www.researchgate.net/publication/305220235_LOS_MODELOS_PEDAGOGICOS_CENTRADOS_EN_EL_ESTUDIANTE_APUNTES_SOBRE_LOS_PROCESOS_DE_APRENDIZAJE_Y_ENSENANZA',
    },
    {
      referencia:
        'Cantor y Alvaz (2019) Los modelos pedagógicos contemporáneos y su influencia  en el modo de actuación profesional pedagógico. VARONA, Revista Científico-Metodológica No. 68, enero-junio de 2019.',
      link: 'http://scielo.sld.cu/pdf/vrcm/n68/1992-8238-vrcm-68-e19.pdf',
    },
    {
      referencia:
        'Sánchez Bobadilla V. & Martínez Otero Pérez, V. (2024). Modelos educativos para el siglo XX. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275496',
    },
    {
      referencia:
        'Inhelder, B. & Piaget, J. (1969). Psicología del Niño (18ª ed.). Ediciones Morata, S. L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/116205',
    },
    {
      referencia:
        'FAU, M. E. (2011). Jean Piaget: clásicos resumidos. La Bisagra. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/76826',
    },
    {
      referencia:
        'ABA (2015). Meeting the Challenge of Child Maltreatment in Rural Areas. ',
      link:
        'https://www.americanbar.org/groups/public_interest/child_law/resources/child_law_practiceonline/child_law_practice/vol-34/march-2015/meeting-the-challenge-of-child-maltreatment-in-rural-areas/',
    },
    {
      referencia:
        'Ángeles Gutiérrez, O. (2003). Enfoques y modelos educativos centrados en el aprendizaje. Estado del arte y propuestas para su operativización en las instituciones de educación superior nacionales.',
      link:
        'https://guao.org/sites/default/files/portafolio%20docente/Enfoques%20y%20modelos%20educativos%20centrados%20en%20el%20aprendizaje.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso mediante el cual adquirimos y desarrollamos conocimientos, habilidades, valores y conductas, resultado de la atención, la experiencia, la instrucción y la interacción con el entorno.',
    },
    {
      termino: 'Autoestructurante',
      significado:
        'El modelo pedagógico auto estructurante, también conocido como Escuela Activa o Escuela Nueva, concibe la educación como un proceso de construcción interna, donde el estudiante es el protagonista de su propio aprendizaje. El conocimiento se construye desde el interior del estudiante, a partir de la experiencia, la manipulación, la experimentación y la resolución de problemas reales, privilegiando el aprendizaje por descubrimiento y la autonomía.',
    },
    {
      termino: 'Conductismo',
      significado:
        'Es una corriente de la psicología que se centra en el estudio y análisis de la conducta observable, dejando de lado los procesos mentales internos y subjetivos.',
    },
    {
      termino: 'Constructivismo',
      significado:
        'Es una corriente pedagógica y epistemológica que sostiene que el conocimiento no se recibe pasivamente, sino que es construido activamente por el sujeto, a partir de su interacción con el entorno y sus conocimientos previos.',
    },
    {
      termino: 'Contemporáneo',
      significado:
        'En historia, la Edad Contemporánea es el periodo que comienza con la Revolución Francesa (1789) y llega hasta la actualidad, caracterizado por grandes transformaciones sociales, políticas y tecnológicas.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Rama de la pedagogía que estudia y organiza los métodos, técnicas y estrategias, para optimizar los procesos de enseñanza y aprendizaje. Combina teoría y práctica para facilitar la formación integral del estudiante y mejorar la interacción entre docente y alumno. Su objetivo es lograr un aprendizaje efectivo adaptado a contextos y necesidades específicas.',
    },
    {
      termino: 'Enfoque pedagógico',
      significado:
        'Es una conceptualización o paradigma que guía el proceso educativo, definiendo qué es educar, cómo lograrlo y qué rol tiene el docente y el estudiante en ese proceso.',
    },
    {
      termino: 'Enseñanza',
      significado:
        'Es la acción y el resultado de compartir conocimientos, valores, estrategias y destrezas con otras personas, con el objetivo de facilitar el aprendizaje. Involucra tres elementos claves: el profesor, el alumno y el contenido a transmitir.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso sistemático que permite determinar el mérito, valor o significado de un trabajo, capacidad o acción, comparando resultados con criterios establecidos para emitir un juicio y tomar decisiones.',
    },
    {
      termino: 'Modelo educativo',
      significado:
        'Conjunto de teorías, principios, normas y enfoques pedagógicos que guían la organización, planificación y ejecución del proceso de enseñanza y aprendizaje, en una institución educativa.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'Ciencia que estudia la educación y los procesos de enseñanza-aprendizaje, con el objetivo de mejorar y legitimar las prácticas educativas en todos los ámbitos y etapas de la vida.',
    },
  ],
}
