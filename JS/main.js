const input_year=document.getElementById('year');
const input_day=document.getElementById('day');
const input_month=document.getElementById('month');

const output_years=document.getElementById('output-years');
const output_months=document.getElementById('output-months');
const output_days=document.getElementById('output-days');

const err_day=document.getElementById('err-day');
const err_month=document.getElementById('err-month');
const err_year=document.getElementById('err-year');

const err_span_day=document.getElementById('day-span');
const err_span_month=document.getElementById('month-span');
const err_span_year=document.getElementById('year-span');

const submit_btn=document.getElementById("btn-submit");

let isDayValid=false;
let isMonthValid=false;
let isYearValid=false;


function inputDayValidation(){
      input_day.addEventListener('blur', function() {
       if(input_day.value===''){
        err_day.classList.remove('err');
        err_span_day.classList.add('error-span');
        input_day.classList.add('is-invalid');
        isDayValid=false;
       } 
      });
    input_day.addEventListener('input',(e)=>{
        if(input_day.value>31||input_day.value<1){
            err_day.textContent="Must be a valid date";
            err_span_day.classList.add('error-span');
            input_day.classList.add('is-invalid');
            err_day.classList.remove('err');
            isDayValid=false;
        }
        else{
            input_day.classList.remove('is-invalid');
            err_day.classList.add('err');
            err_span_day.classList.remove('error-span');
            isDayValid=true;
            checkDaysMonthValidation();
        }
        
    })
}
function inputMonthValidation(){
    input_month.addEventListener('blur', function() {
        if(input_month.value===''){
         err_month.classList.remove('err');
         err_span_month.classList.add('error-span');
         input_month.classList.add('is-invalid');
         isMonthValid=false;
        } 
       });
    
    input_month.addEventListener('input',(e)=>{
        if((input_month.value>12)||input_month.value<1){
            err_month.textContent="Must be a valid date";
            err_span_month.classList.add('error-span');
            input_month.classList.add('is-invalid');
            err_month.classList.remove('err');
            isMonthValid=false;
        }
        else{
            err_span_month.classList.remove('error-span');
            input_month.classList.remove('is-invalid');
            err_month.classList.add('err');
            isMonthValid=true; 
            checkDaysMonthValidation();
        }
    });
}
function inputYearValidation(){
    input_year.addEventListener('blur', function() {
        if(input_year.value===''){
         err_year.classList.remove('err');
         err_span_year.classList.add('error-span');
         input_year.classList.add('is-invalid');
         isYearValid=false;
        } 
       });

    input_year.addEventListener('input',(e)=>{
        const enteredYear = parseInt(input_year.value);
      const currentYear = new Date().getFullYear();
        if(enteredYear>currentYear || enteredYear<1940){
            err_year.textContent="Must be a valid date";
            err_span_year.classList.add('error-span');
            input_year.classList.add('is-invalid');
            err_year.classList.remove('err');
            isYearValid=false;
        }
        else{
            err_span_year.classList.remove('error-span');
            input_year.classList.remove('is-invalid');
            err_year.classList.add('err');
            isYearValid=true;
        }
    })

    
}
function checkDaysMonthValidation(){
    if(isDayValid&&isMonthValid){
            if((input_day.value>30&&input_month.value===(4||6||9||11))||(input_day.value>28&&input_month.value>2)){
                err_day.textContent="Must be a valid date";
                err_span_day.classList.add('error-span');
                input_day.classList.add('is-invalid');
                err_day.classList.remove('err');
                isDayValid=false;
                err_month.textContent="Must be a valid date";
                err_span_month.classList.add('error-span');
                input_month.classList.add('is-invalid');
                err_month.classList.remove('err');
                isMonthValid=false;
            }else{
                input_day.classList.remove('is-invalid');
            err_day.classList.add('err');
            err_span_day.classList.remove('error-span');
            isDayValid=true;
                err_span_month.classList.remove('error-span');
                input_month.classList.remove('is-invalid');
                err_month.classList.add('err');
                isMonthValid=true;   
            }    
    }
    return false;
}
function inputValidation(){
    
}
inputDayValidation();
inputMonthValidation();
inputYearValidation();





