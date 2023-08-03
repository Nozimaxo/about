const seconds = document.querySelector('.s'),
    minutes = document.querySelector('.m'),
    hours = document.querySelector('.h'),
    numberMin = document.querySelector('.minutes'),
    numberHour = document.querySelector('.hours');


function clock() {
    const second = new Date().getSeconds(),
        min = new Date().getMinutes(),
        hour = new Date().getHours();


    seconds.style.transform = `rotate(${second * 6}deg)`
    minutes.style.transform = `rotate(${min * 6}deg)`
    hours.style.transform = `rotate(${hour * 30}deg)`

    numberHour.innerHTML = hour < 10 ? '0' + hour : hour
    numberMin.innerHTML = min < 10 ? '0' + min : min
    
    setTimeout(() => {
        clock()
    }, 1000)
}
clock()



const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');

tabsItem.forEach((el, i) => {
    el.addEventListener('click', function () {
        tabsItem.forEach(el => el.classList.remove('active'))
        this.classList.add('active')
        tabsContentItem.forEach(el => el.classList.remove('active'))
        tabsContentItem[i].classList.add('active')
    })
})




const watchBtn = document.querySelector('.stopwatch__btn'),
    stopwatch__seconds = document.querySelector('.stopwatch__seconds'),
    stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
    stopwatch__hours = document.querySelector('.stopwatch__hours'),
    tabsLink__span = document.querySelector('.tabsLink__span');


watchBtn.addEventListener('click', function (e) {
    if (this.innerHTML == 'start') {
        tabsLink__span.classList.add('active')
        this.innerHTML = 'stop'


        let i = 0
        setTimeout(() => {
            stopWatch(this, i)
        }, 1000);
    } else if (this.innerHTML == 'stop') {
        tabsLink__span.classList.remove('active')
        tabsLink__span.classList.add('active_clear')
        this.innerHTML = 'clear'
    } else if (this.innerHTML == 'clear') {
        tabsLink__span.classList.remove('active_clear')
        this.innerHTML = 'start'
        stopwatch__seconds.innerHTML = 0
        stopwatch__minutes.innerHTML = 0
        stopwatch__hours.innerHTML = 0
    }
})

function stopWatch(btn, i) {
    if (btn.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            stopwatch__seconds.innerHTML = i
            if (stopwatch__minutes.innerHTML == 59) {
                stopwatch__minutes.innerHTML = 0
                stopwatch__hours.innerHTML++
            }else{
                stopwatch__minutes.innerHTML++
            }
        } else {
            i++
            stopwatch__seconds.innerHTML = i
        }
        setTimeout(() => {
            stopWatch(btn, i)
        }, 1000);
    }
}