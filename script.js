
// let addBtn = document.getElementById('add-btn');
// let body = document.querySelector('body');
// let count = 0

// addBtn.addEventListener('click',()=>{
//     let timerCont = document.createElement('div');
//     count++;

//     timerCont.innerHTML = `
    
//     `
    
//     let startButton = document.createElement('button');
//     startButton.setAttribute('id',`start${count}`);
//     startButton.textContent='start';
//     timerCont.appendChild(startButton);

//     body.appendChild(timerCont);

    

   
//     startButton.addEventListener('click',()=>{
//         console.log(count);

//         let timerCountDown = document.getElementById('timer-cont');
//         let test = 'event-timer'+count;
//         console.log(test)
//         let value = document.getElementById(test).value;
//         console.log(value)
//         let countDown = value
//         // console.log(value)
        
//     let interval = setInterval(()=>{
//         timerCountDown.textContent = --countDown;
//         if(countDown==0){
//             alert('Meeting Started')
//             clearInterval(interval);
//         }
//     },value*1000)

    
    
    
// })
    
// })



let addBtn = document.getElementById('add-btn');
let container = document.getElementById('cont');


let count=1;

addBtn.addEventListener('click',()=>{
    let div = createEventCard(count);
    
    // div.addEventListener('click',(event)=>{
    //     console.log(event)
    // })
    count++;
})



function createEventCard(count){
    let div = document.createElement('div');
    div.classList.add('card');
    div.id=count;

    let h2 = document.createElement('h2');
    h2.classList.add('card-head');
    h2.textContent=` Event Number ${count}`
    div.append(h2);


    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    let inputEventName = document.createElement('input');
    inputEventName.id = `event-name${count}`
    inputEventName.classList.add('input');
    inputEventName.setAttribute('placeholder','Event Name')
    div1.append(inputEventName);

    let inputEventTime = document.createElement('input');
    inputEventTime.id = `event-time${count}`
    inputEventTime.classList.add('input');
    inputEventTime.setAttribute('placeholder','Event Time')
    div2.append(inputEventTime);

    let btn1 = document.createElement('button');
    btn1.textContent = 'Start'
    btn1.classList.add('btnStart')

    let btn2 = document.createElement('button');
    btn2.textContent = 'Delete'
    btn2.classList.add('btnDel')

    let result = document.createElement('div');

    div.append(div1);
    div.append(div2);
    div.append(btn1);
    div.append(btn2);
    div.append(result)
    container.append(div)



    btn1.addEventListener('click',()=>{
        let time = inputEventTime.value;
        let countDown = time;

        console.log(time)
        let timer = setInterval(()=>{
            result.textContent = `Meeting starts in ${countDown} `
            
            if(countDown<=0){
                clearInterval(timer);
                alert(`Event ${inputEventName.textContent} has started`)
            }
            countDown--;
        },1000)
    })

    btn2.addEventListener('click',()=>{
        div.remove();
    })


    
    return div;
}