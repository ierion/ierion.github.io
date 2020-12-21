refreshScroll(20);
refreshtime();
slideFromCenter('line-hp', 0, 90);
slideFromCenter('line2-hp', 199, 20);
slideFromCenter('line3-hp', 499, 60);
setTimeout(() => {
  fadeInById('cta-hp', 2000, 500, 5, 0);
  fadeInById('question1-hp', 2000, 1000, 5, 0);
  fadeInById('answer1-hp', 3200, 1250, 10, 0);
  fadeInById('answer1.2-hp', 3200, 0, 10, 101)
  fadeInById('question2-hp', 2000, 0, 5, 301);
  fadeInById('answer2-hp', 3200, 250, 10, 399);
}, 0);
