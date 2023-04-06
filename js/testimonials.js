document.addEventListener('DOMContentLoaded', () => {
    // select elements
    const mainText = document.querySelector('.main-text p');
    const writtenBy = document.querySelector('.written-by');
  
    // set initial values
    let index = 0;
    const testimonials = [
      {
        mainText: '"Filip went above and beyond! His ideas and passion for the project were second to none. He truly took the task on as his own. Grab him while he\'s still available! Thank you Filip for making this project a pleasure!"',
        name: 'Dr. Katherine Iscoe',
        title: 'Co-Founder & CEO of Advanced Human Imaging Limited'
      },
      {
        mainText: '"Communicates regularly, and frequently. Communication is everything. Filip is capable expressing complete and coherent thoughts vs. just "sound bytes" that you may experience with other freelances. Additionally, when client conveys intentions, Filip does well to interpret the vision and bring it to life. Pleasure to work with."',
        name: 'Jay Ballantine',
        title: 'Founder of IconicRV Solar Services'
      },
      {
        mainText: '"Filip did an outstanding job with our new UI. He overexceeded my expectations enormously. He finessed his ways through the details yet carried the essence of the app with his incorporation of abstract design ideas. Would definitely hire again!!"',
        name: 'Niels Deckers',
        title: 'Founder of Zenyouga and The Shot Games'
      }
    ];
  
    // add event listeners
    document.querySelector('.right-arrow').addEventListener('click', () => {
      index = (index + 1) % testimonials.length;
      updateTestimonial();
    });
  
    document.querySelector('.left-arrow').addEventListener('click', () => {
      index = (index - 1 + testimonials.length) % testimonials.length;
      updateTestimonial();
    });
  
    // update the testimonial
    function updateTestimonial() {
      mainText.textContent = testimonials[index].mainText;
      writtenBy.querySelector('p:first-child').textContent = testimonials[index].name;
      writtenBy.querySelector('p:last-child').textContent = testimonials[index].title;
    }
  });
  