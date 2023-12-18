let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

document.querySelector('.continue-container').addEventListener('click', function(event) {
    
    function performAddition() {
        if (count < 76) {
          count++;
          document.querySelector(".text-result-of-circle").textContent = `${count}`;
          setTimeout(performAddition, 10);
        }
        else {
            document.querySelector(".great-text").textContent = "Great";
            document.querySelector(".higher-than-text").textContent = "You scored higher than 65% of the people who hace taken these tests.";
        }
      }
    
      performAddition();

      function performAdditionReaction() {
        if (count2 < 80) {
          count2++;
          document.querySelector(".text-result-reaction").textContent = `${count2}`;
          setTimeout(performAdditionReaction, 10);
        }
      }
    
      performAdditionReaction();

      function performAdditionMemory() {
        if (count3 < 92) {
          count3++;
          document.querySelector(".text-result-memory").textContent = `${count3}`;
          setTimeout(performAdditionMemory, 10);
        }
      }
    
      performAdditionMemory();

      function performAdditionVerbal() {
        if (count4 < 61) {
          count4++;
          document.querySelector(".text-result-verbal").textContent = `${count4}`;
          setTimeout(performAdditionVerbal, 10);
        }
      }
    
      performAdditionVerbal();

      function performAdditionVisual() {
        if (count5 < 72) {
          count5++;
          document.querySelector(".text-result-visual").textContent = `${count5}`;
          setTimeout(performAdditionVisual, 10);
        }
      }
    
      performAdditionVisual();
  });
  