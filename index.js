gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    },
    defaults: {duration: 2}, 
    extendTimeline: true, 
  });


//cambio de texto español - inglés
gsap.registerPlugin(ScrambleTextPlugin);
function ingles(){
    gsap.to("#name2",{duration:1.5,text:"Computer Engineer"});
    gsap.to("#name3",{duration:1.5,text:"Python Developer"});
    document.getElementById("btn1").innerHTML="Download Resume";
    gsap.to("#name4",{duration:1.5,text:"About Me"});
    gsap.to("#name5",{duration:1.5,text:"21 years - Software Developer"});
    gsap.to("#name6",{duration:1.5,text:"I´m a computer engineering student, i have excelent habilities about analisis, team work and planning and even a very good programming logic and some experience in the software projects development that i´ve done for the university and due to some practices. Also i´ve and have been complementing that habilities and learning new from my own.<br> I´ve done some projects like a freelancer for third parties based on Python and also some web pages. I would like to do practices in a company to expand my knwoledge or, if it´s possible, start to work<br>Actually, i´m about to finish my computer engineering studies in the Instituto Politécnico Nacional in México, in the Escuela Superior de Cómputo"});
    gsap.to("#name7",{duration:1.5,text:"Professional and personal skills"});
    gsap.to("#subtitle1",{duration:1.5,text:"Professional skills"});
    gsap.to("#subtitle2",{duration:1.5,text:"Personal skills"});
    gsap.to("#skill1",{duration:1.5,text:"Data Analisis"});
    gsap.to("#skill2",{duration:1.5,text:"Analitical tought"});
    gsap.to("#skill3",{duration:1.5,text:"Responsability"});
    gsap.to("#skill4",{duration:1.5,text:"Pressure Tolerance"});
    gsap.to("#skill5",{duration:1.5,text:"Organization"});
    gsap.to("#skill6",{duration:1.5,text:"Adaptability"});
    gsap.to("#skill7",{duration:1.5,text:"Team Work"});
    gsap.to("#skill8",{duration:1.5,text:"Leadership"});
    gsap.to("#skill9",{duration:1.5,text:"Creativity"});
}
function espanol(){
    gsap.to("#name2",{duration:1.5,text:"Ingeniero en <br>Sistemas Computacionales"});
    gsap.to("#name3",{duration:1.5,text:"Desarrollador Python"});
    document.getElementById("btn1").innerHTML="Descargar curriculum";
    gsap.to("#name4",{duration:1.5,text:"Acerca de mí"});
    gsap.to("#name5",{duration:1.5,text:"21 años  -       Desarrollador de Software"});
    gsap.to("#name6",{duration:1.5,text:"Soy estudiante de ingeniería en sistemas computacionales, poseo excelentes habilidades de análisis, planificación y trabajo en equipo, así como una muy buena lógica de programación y experiencia en el desarrollo de proyectios de software gracias a las prácticas y proyectos de la universidad así como el refuerzo de estos mismos y la adquisición de nuevos por cuenta propia fuera del entorno universitario.<br><br>He desarrollado proyectos de software basados en Python como Freelance, así como páginas web para terceros. Me gustaría hacer prácticas en una empresa de desarrollo de software para poder ampliar mis conocimientos, o de ser posible, empezar en el mudno laboral para seguir desarrollandome en el área.<br><br> Actualmente por terminar mis estudios superiores en ingenieria en sistemas Computacionales en el Instituto Politécnico Nacional en la Escuela Superior de Cómputo."});
    gsap.to("#name7",{duration:1.5,text:"Competencias personales y profesionales"});
    gsap.to("#subtitle1",{duration:1.5,text:"Competencias profesionales"});
    gsap.to("#subtitle2",{duration:1.5,text:"Competencias personales"});
    gsap.to("#skill1",{duration:1.5,text:"Análisis de datos"});
    gsap.to("#skill2",{duration:1.5,text:"Pensamiento analítico"});
    gsap.to("#skill3",{duration:1.5,text:"Responsabilidad"});
    gsap.to("#skill4",{duration:1.5,text:"Tolerancia a la presión"});
    gsap.to("#skill5",{duration:1.5,text:"Organización"});
    gsap.to("#skill6",{duration:1.5,text:"Adaptabilidad"});
    gsap.to("#skill7",{duration:1.5,text:"Trabajo en equipo"});
    gsap.to("#skill8",{duration:1.5,text:"Liderazgo"});
    gsap.to("#skill9",{duration:1.5,text:"Creatividad"});
}

