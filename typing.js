/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  

theater
  .addActor('client', { speed: 2, accuracy: 0.6 })
  .addActor('Aysh',{ speed: 2, accuracy: 0.6 } )
  .addActor('chat',{ speed: 2, accuracy: 0.6 } )
  .addScene('client:', 600)
  .addScene('Hi there', 400)
  .addScene('client:Welcome to Aysh (ugfire.com)', 400)
  .addScene('chat: The Leading website, Desktop App, mobile App and Database Systems developers in Africa. Stationed in Uganda.', 600)
     .addScene('chat:', 100)
   .addScene('client:WE BUILD LIVING...', 400)
  .addScene('Aysh: Websites, Web Apps, Database Systems, Mobile Apps, Desktop Apps...', 600)

  .addScene('client:', 100)
    .addScene('Aysh:', 100)
     .addScene('chat:YES , OUR SYSTEMS ARE ALIVE!', 400)
      .addScene('chat:', 100)
  .addScene('client:WE USE', 400)
    .addScene('Aysh: Java, HTML, CSS, Javascript,& MYSQL, MariaDB databases', 600)
  .addScene('Aysh:', 100)
   .addScene('client:', 100)
  .addScene('chat:Please contact us now for a design offer !', 400)
   .addScene('Chat:', 100)
    .addScene(theater.replay.bind(theater))
