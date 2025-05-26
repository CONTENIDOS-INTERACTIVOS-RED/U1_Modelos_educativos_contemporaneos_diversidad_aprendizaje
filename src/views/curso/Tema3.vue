<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Evaluación y adaptación de modelos educativos en distintos contextos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/44.png", data-aos="zoom-in")           
      .col-lg-8
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p.mb-0 Aunque los modelos educativos presentan características teóricas propias, su aplicación práctica requiere un análisis contextualizado, que permita modificarlos y adaptarlos, de acuerdo con las realidades socioculturales, institucionales y pedagógicas de cada entorno. Esta capacidad de adaptación es fundamental para asegurar la pertinencia y efectividad de las prácticas educativas.
    p(data-aos="fade-down") La evaluación, como parte esencial de todo modelo pedagógico, también varía, según el enfoque asumido. A continuación, se presentan las principales características de la evaluación en tres modelos pedagógicos representativos:

    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/45.png")           
            .col-lg-7
              h5 Conductista
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Centrada en objetivos previamente formulados, sin modificaciones durante el proceso.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Evaluación rígida, basada en el rendimiento observable y en la medición de logros específicos.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Se sugiere estructurar la evaluación en tres momentos: antes, durante y después del proceso formativo.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 El propósito es verificar conocimientos previos, progresos y dominio final de habilidades.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/46.png")           
            .col-lg-7
              h5 Constructivista
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 La evaluación está situada en el proceso y se construye junto con el aprendizaje.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Se enfoca en la resolución de problemas, interacción grupal, discusión de ideas, formulación y reformulación de conceptos.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Valora la comprensión, el razonamiento y la creación de significados.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Se adapta a situaciones reales del contexto del estudiante.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/47.png")           
            .col-lg-7
              h5 Naturalista / Romántico / Experiencial
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Busca identificar el desarrollo individual, de acuerdo con las capacidades personales.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 No enfatiza controles o pruebas formales, sino que promueve la libertad de expresión y la espontaneidad.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 La evaluación es flexible, basada en productos generados naturalmente por el estudiante.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Prioriza la observación, el acompañamiento y el respeto por los ritmos personales.                                    

    .bg-full-width.bg-color-2.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/48.svg")
          .col-lg
            p.mb-0 Esta diversidad de perspectivas sobre la evaluación, muestra que no existe un modelo único aplicable a todos los contextos, sino que cada entorno educativo debe ajustar los modelos a sus características y necesidades particulares, promoviendo así una enseñanza significativa y pertinente. 
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://sites.google.com/view/observatoriodetei/inicio" target="_blank" rel="noopener noreferrer") Observatorio de Tecnología e Innovación educativa. (s.f.). Observatorio de Tecnología e Innovación educativa. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=yNTxyohs-YA" target="_blank" rel="noopener noreferrer") Observatorio de Tecnología e Innovación Educativa. (2018). La evaluación en la educación.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema:
          'Modelos Educativos Contemporáneos y Diversidad en el Aprendizaje',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: 'Una definición de modelo pedagógico es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El modelo como una herramienta conceptual para entender mejor algún evento por medio de una representación del conjunto de relaciones que describen un fenómeno, un modelo pedagógico se puede entender como la representación abstracta-conceptual de las relaciones que predominan en el fenómeno de la enseñanza.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'El modelo como un concepto no pragmático sobre lo que implica el desarrollo de nuevas conductas y estructuras mentales en adultos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Una estructura mandataria que reconoce la educación y su obligatoriedad en los centros educativos y que está orientado por las normativas y políticas nacionales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'El reconocimiento de la diferencia y la diversidad en los establecimientos educativos, sin representación teórica, más bien práctica.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'Los modelos educativos',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'No guardan relación con la época en la que se implementan.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Está exclusivamente relacionado con los proyectos educativos institucionales.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Su formulación y fundamentación no guarda relación con otras disciplinas como la psicología, biología y sociología.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Guarda relación con la coherencia en el problema esencial de cada época educacional.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Un modelo pedagógico centrado en el estudiante significa que:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El profesor o maestro solo determina el tipo de estudiante y egresado de su institución educativa.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Promueve la implementación de estrategias situadas en el aprendizaje y modela rutas para facilitar la participación del estudiante en su proceso formativo.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Desplaza por completo al profesor y centraliza el proceso educativo en los intereses y las necesidades exclusivas del estudiante.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Es sinónimo de independencia, educación a distancia y procesos autoformativos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En Colombia los modelos educativos:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'No se evidencian, pues aún existen posturas relacionadas con el conductismo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Se evidencian parcialmente por en Colombia se promueve la educación tradicional.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'De acuerdo con el momento histórico y político, Colombia ha asumido diversos retos asociados a los modelos pedagógicos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'No existe un discurso claro sobre los modelos pedagógicos en el sistema educativo colombiano.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'Los modelos educativos contemporáneos se caracterizan por:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Centralizar el saber y el conocimiento.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Situar las prácticas educativas sobre el aprendizaje y el estudiante.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Incluir tecnologías y herramientas ofimáticas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Promover la deserción y motivar la competencia interinstitucional.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
