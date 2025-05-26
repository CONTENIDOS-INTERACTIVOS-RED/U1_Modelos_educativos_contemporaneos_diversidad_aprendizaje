<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Enfoques pedagógicos centrados en el estudiante'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center            
        .col-lg.order-lg-2
          .p-4
            p.mb-0(data-aos="fade-up") El aprendizaje centrado en el estudiante, pone énfasis en la persona que aprende como protagonista activa de su proceso formativo. Este enfoque prioriza la autonomía, la autogestión del conocimiento y la construcción de aprendizajes significativos. El estudiante organiza sus tiempos, desarrolla sus capacidades, implementa estrategias propias y se convierte en creador de su aprendizaje.
        .col-lg-auto.mb-3.mb-lg-0.order-lg-1
          figure
            img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='')    


    h3(data-aos="fade-down") Transformación del rol docente

    .row.mb-5
      .col-lg-7.mb-3.mb-lg-0 
        p(data-aos="fade-down") En este modelo, el profesor, sea como mentor, facilitador o instructor, asume un papel de acompañante del proceso y co-creador de experiencias. Su función se aleja de la autoridad tradicional para convertirse en guía, inspirador y mediador de aprendizajes contextualizados y relevantes.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/29.svg")
            .col-lg
              p.mb-0 Este enfoque trasciende la jerarquización y normatividad propias del modelo tradicional, promoviendo relaciones horizontales, basadas en la colaboración y el diálogo.
      .col-lg-5
        figure
          img.img-a.img-t(src="@/assets/curso/temas/30.png", data-aos="zoom-in")     


    h3(data-aos="fade-down") Corriente autoestructurante del aprendizaje
    p(data-aos="fade-down") Los enfoques centrados en el estudiante, pertenecen a la llamada corriente autoestructurante, que sostiene que, el aprendizaje debe surgir de condiciones adecuadas para que el estudiante gestione su propio proceso formativo. Dentro de esta perspectiva se destacan:

    .row.justify-content-center.align-items-stretch.text-center.mb-4
      .col-lg-4.mb-4(data-aos="fade-left")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/31.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Aprendizaje individual
      .col-lg-4.mb-4(data-aos="fade-right")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/32.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Aprendizaje autodirigido  

      .col-lg-4.mb-4(data-aos="fade-right")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/33.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Autoaprendizaje

    p(data-aos="fade-down") En este contexto, aunque el rol del profesor no desaparece, se redefine como facilitador del aprendizaje significativo.
    h3(data-aos="fade-down") Concepciones filosóficas y científicas del enfoque centrado en el estudiante
    p(data-aos="fade-down") Estas prácticas se fundamentan en tres grandes concepciones epistemológicas y psicológicas, que agrupan las tendencias contemporáneas de la educación autoestructurante:

               
    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/17.png")           
            .col-lg-7
              h5 Experiencial
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 También conocida como naturalista o romántica.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Valora la libertad individual.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Promueve el desarrollo en etapas según los intereses del estudiante.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/18.png")           
            .col-lg-7
              h5 Conductista
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Basada en la observación y medición de conductas.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 El aprendizaje se define como adquisición de respuestas ante estímulos.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Valora la repetición y la práctica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/19.png")           
            .col-lg-7
              h5 Constructivista
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Enfatiza la construcción activa del conocimiento.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Integra aspectos cognitivos y afectivos.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Considera el contexto como parte esencial del aprendizaje.
    .bg-full-width.bg-color-2.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/37.svg")
          .col-lg
            p.mb-0 Este enfoque pedagógico permite una educación más inclusiva, flexible y adaptada a las necesidades de cada estudiante, en contraposición a los modelos rígidos y estandarizados del pasado.     
    h3(data-aos="fade-down") Representantes históricos de los modelos pedagógicos
    p(data-aos="fade-down") La evolución de los modelos pedagógicos ha sido influenciada por pensadores que, desde distintas perspectivas, han formulado teorías sobre cómo se aprende y cómo debe enseñarse. A continuación, se presenta una síntesis de modelos representativos, sus autores claves y los principios fundamentales de sus propuestas:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.my-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/38.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="17.2%" y="79.1%" numero="+")
                  h5 Conductismo            
                  p Iván P. Pavlov (1849–1936)
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 El aprendizaje se basa en la asociación entre estímulo y respuesta.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 El comportamiento es una consecuencia directa de experiencias previas.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 El diseño de la instrucción recae en el docente, quien organiza y dirige el proceso educativo.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 El aprendizaje es acumulativo: el estudiante debe demostrar dominio previo antes de avanzar.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Métodos experimentales permiten describir, predecir y controlar el comportamiento.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Se enfatiza el refuerzo y la evaluación externa.                   
                  
                .bg-color-white.box-shadow.p-3(x="61.2%" y="25.5%" numero="+")
                  h5 Constructivismo           
                  p Jean Piaget, Lev Vygotsky, David Ausubel, Humberto Maturana 
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 La realidad es un constructo social, mediado por el lenguaje y la experiencia.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Se construyen significados y representaciones del mundo.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 El aprendizaje se enriquece con la interacción social y cultural.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Se valora el aprendizaje por descubrimiento, significatividad y coordinación lingüística.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Procesos cognitivos complejos emergen de las experiencias compartidas y la reflexión personal.     

                .bg-color-white.box-shadow.p-3(x="73.4%" y="54.4%" numero="+")
                  h5 Experiencial / Romántico / Naturalista            
                  p Jean-Jacques Rousseau (1712–1778)
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 El niño es el centro del proceso educativo: un ser total, no un adulto en miniatura.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 El desarrollo natural es tanto meta como método de la educación.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 La pedagogía debe adaptarse a la singularidad de cada niño.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Participación activa de educadores, familia y sociedad.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Fomenta la autogestión, la formación de valores y la innovación.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Requiere ambientes pedagógicos flexibles que respeten el ritmo de desarrollo del estudiante.                            

    .bg-full-width.bg-color-5.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg
            p.mb-0 Esta perspectiva histórica permite comprender cómo los modelos educativos han evolucionado desde posturas naturalistas hasta enfoques sociocognitivos complejos, siempre en función del rol asignado al estudiante, el docente y el conocimiento.
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/39.svg")


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Características de los enfoques centrados en el estudiante

    p(data-aos="fade-down") Los enfoques centrados en el estudiante priorizan lo significativo y valioso para quien aprende, promoviendo el desarrollo de habilidades para la vida, competencias transversales y destrezas propias del siglo XXI. Estas propuestas transforman tanto el rol del estudiante como el del docente y redefinen el proceso de evaluación.

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/40.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Aprendizaje activo y práctico")
            p El estudiante realiza tareas reales y contextualizadas, lo que favorece la adquisición de habilidades prácticas y transferibles.
          .div(titulo="Desarrollo de habilidades cognitivas complejas")
            p Fomenta el pensamiento crítico, la resolución de problemas, la toma de decisiones, el análisis de argumentos, la generación de hipótesis y la evaluación de pruebas.
          .div(titulo="Metacognición y autorreflexión")
            p Se invita a los estudiantes a reflexionar sobre qué aprenden y cómo lo hacen, promoviendo la conciencia de sus propios procesos cognitivos.
          .div(titulo="Evaluación entre pares y autoevaluación")
            p Los estudiantes aprenden a hablar de su aprendizaje, intercambiar retroalimentación y participar activamente en la evaluación.                                                                                 
 
    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Autonomía y responsabilidad")
            p Los docentes alientan a los estudiantes a asumir la responsabilidad en las decisiones sobre su aprendizaje, promoviendo la autogestión y la autorregulación.
          .div(titulo="Colaboración y aprendizaje social")
            p Se potencia el trabajo en equipo y el aprendizaje entre iguales, destacando el valor de aprender de y con otros.
          .div(titulo="Evaluación formativa y herramientas variadas")
            p La evaluación se integra como parte del proceso de aprendizaje. Se utilizan instrumentos como rúbricas, portafolios y herramientas TIC, que permiten valorar el progreso de forma integral.                        
                                                         
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/41.png", alt="")     


    .bg-full-width.bg-color-2.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/43.svg")
          .col-lg
            p.mb-0 Este enfoque implica una transformación profunda del paradigma educativo, al situar al estudiante como agente activo de su aprendizaje y al docente como mediador y facilitador de experiencias significativas.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="Lafarga, J. (s f.). La educación centrada en el estudiante. " target="_blank" rel="noopener noreferrer") Lafarga, J. (s f.). La educación centrada en el estudiante. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://sites.google.com/view/observatoriodetei/inicio" target="_blank" rel="noopener noreferrer") Observatorio de Tecnología e Innovación educativa. (s.f.). Observatorio de Tecnología e Innovación educativa. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
