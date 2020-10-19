(function() {
  var FEHelper = {
    onLoadElement: function(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if ( 
          document &&
          document.querySelectorAll &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval); 
          trigger(); 
        }
      }, delayInterval); 
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    },
    waitforMarketo: function(trigger){
      var interval = setInterval(function() {
        if ( 
          window.MktoForms2
        ) {
          clearInterval(interval); 
          trigger(); 
        }
      }, 50); 
      setTimeout(function() {
        clearInterval(interval);
      }, 10000);
    }
  };  

  var renderForm = {
    formSteps: function() {
      var StepsSection = document.createElement("div");
      StepsSection.className = "StepsSection";
      StepsSection.innerHTML = 
      '   <div class="StepsSection_bar">'+ 
      '     <span class="step1">&#10003;</span>'+ 
      '     <span class="step2">&#10003;</span>'+ 
      '     <span class="progressBar"></span>'+
      '   </div>';
      return StepsSection;
    }
  };

  /*=====================MULTI STEP FORM=======================*/

  var step = 1;
  var modifyForm = {
    addPlaceholder: function(formLabel) {
      for(var i = 0 ; i < formLabel.length ; i++ ) {
        var formRow = formLabel[i].parentNode;
        var formInput = formRow.querySelector(".mktoRequired");
        if(formInput != null) {
          formInput.classList.add("bmInput");
          formInput.addEventListener("focus", this.labelAnim);
          formInput.addEventListener("blur", this.noLabelAnim);
          formLabel[i].classList.add("bmLabel");
        }
      } 
    },
    labelAnim: function() {
      var formRow = this.parentNode;
      if(formRow.querySelector("label").classList.contains("bmLabel")) {
        formRow.querySelector(".bmLabel").classList.add("bmAnim");
      }
    },
    noLabelAnim: function() {
      var formRow = this.parentNode;
      if(!this.value.length && formRow.querySelector("label").classList.contains("bmLabel")) {
        if(!this.hasAttribute("placeholder")) {
          formRow.querySelector(".bmLabel").classList.remove("bmAnim");
        }
      }
    },
    addClass: function(formLabel) {
      for(var i = 0 ; i < formLabel.length; i++ ) {
        if(i >= 0 && i <= 2 ) {
          formLabel[i].closest(".mktoFormRow").classList.add("fe_step1");
          formLabel[i].closest(".mktoFormRow").classList.add("fe_show"); // show step1 field
        } else if (i >= 3 && i<= 6 ) {
          formLabel[i].closest(".mktoFormRow").classList.add("fe_step2");
        }
      }
    },
    removeError: function(formRow) {
      setTimeout(function() {
        for(var i = 0 ; i < formRow.length ; i++) {
          if(formRow[i].querySelector(".mktoError") != null) {
            formRow[i].querySelector(".mktoError").remove();
            formRow[i].querySelector("input").blur();
          } 
        }
      }, 20);
    },
    changeButtonText: function() {
      var button = document.querySelector("form .mktoButtonRow");
      if(step === 1) {
        button.querySelector("button").textContent = "Next step";
      } else {
        button.querySelector("button").textContent = "Register";
        document.querySelector(".form-container").classList.add("step1Complete");
      }
    },
    checkCompanySize: function() {
      document.querySelector("html body .mktoFormRow #Company").addEventListener("blur", function() {
        var companySize = document.querySelector("#inputCompanySize").value;
        if(companySize.length) {
          document.querySelector("label[for='inputCompanySize']").classList.add("bmAnim");
        }
      })
    },
    showSecondStep: function(formLabel) {
      for(var i = 0 ; i < formLabel.length; i++ ) {
        var field = formLabel[i].closest(".mktoFormRow");
        if(field.classList.contains("fe_step1")) {
          field.classList.remove("fe_show");
        } else {
          field.classList.add("fe_show");
          var fieldInput = field.querySelector("input");
          var fieldSelect = field.querySelector("select");
          if( (fieldInput != null && fieldInput.value.length) || (fieldSelect != null && fieldSelect.value.length) ) {
            formLabel[i].classList.add("bmAnim");
          }
          document.querySelector("label[for='Company']").classList.add("bmAnim"); 
          document.querySelector("label[for='inputCompanySize']").classList.add("bmAnim"); 
        }
      }

    },
    checkFieldValidate: function(steps) {
      for(var i = 0 ; i < steps.length; i++) {
        var input = steps[i].querySelector("input");
        if(input.classList.contains("mktoInvalid") || input.value.length === 0) {
          return false;
        } 
      }
      return true;
    },
    triggerNextStep: function(steps, formRow, formLabel) {
      setTimeout(function() {
        var isValid = modifyForm.checkFieldValidate(steps);
        if(isValid && step === 1) {
          modifyForm.showSecondStep(formLabel);
          modifyForm.removeError(formRow);
          //trigger hotjar event 
          hotJarcheck('Box_124_1_VarB_Step2');
          step++;
          modifyForm.changeButtonText();
        } 
      }, 20);
    }
  };

  FEHelper.waitforMarketo(function() {
    MktoForms2.whenReady(function(form) {
      modifyForm.changeButtonText();
    });
  });


  function init() {

    FEHelper.waitforMarketo(function() {
      MktoForms2.whenReady(function(form) {
    
        // form label
        var formLabel = document.querySelectorAll("form .mktoFormRow label");
        // addClass to form row
        modifyForm.addClass(formLabel);
        // adding placeholder  
        modifyForm.addPlaceholder(formLabel);
        // visible form field
        var steps = document.querySelectorAll("form .mktoFormRow.fe_show");
        // form field
        var formRow = document.querySelectorAll("form .mktoFormRow");
        // on button click
        document.querySelector(".mktoButtonRow button").addEventListener("click", function() {
          modifyForm.triggerNextStep(steps, formRow, formLabel);
        });
        modifyForm.checkCompanySize();
        var formTitle = document.querySelector(".form-container #Form-Title");

        /* adding step section */
        var stepSec = renderForm.formSteps();
        formTitle.parentNode.insertBefore(stepSec, formTitle);
        document.querySelector("html body .form-container").classList.add("bmForm-show");
//trigger hotjar event 
     hotJarcheck('Box_124_1_VarB_Step1');
      });
    });

  }

  function moveHeading() {
    var bannerTitle = document.querySelector(".banner-background .banner-text");
    bannerTitle.classList.remove("row");
    bannerTitle.classList.add("col-md-10");
    bannerTitle.classList.add("col-md-offset-1");
  }
   //hotjar event
    function hotJarcheck(jsName) {
      var waitForHJ = setInterval(function () {
        if (typeof window.hj == 'function') {
          window.hj('trigger', jsName);
          clearInterval(waitForHJ);
        }
      }, 30);
      setTimeout(function () {
        clearInterval(waitForHJ);
      }, 5000);
    }
  //wait for element
  FEHelper.onLoadElement(
    '.form-container form .mktoFormRow input',
    init,
    50,
    10000
  );
  FEHelper.onLoadElement(
    '#Section3 .agenda-section > div > div',
    moveHeading,
    50,
    10000
  );
})();