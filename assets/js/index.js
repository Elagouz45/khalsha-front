
//add dropdown icon for select  =====> service details
let selects = Array.from(document.querySelectorAll('select'))
selects.forEach(ele => {
    ele.parentElement.classList.add("position-relative")
    let span = document.createElement("span");
    ele.after(span);
})

//add +- icon for input[type='number']   =======> service details
let inputNumbers = Array.from(document.querySelectorAll('input[type="number"]'))
inputNumbers.forEach(ele => {
    ele.value = 0
    ele.parentElement.classList.add("position-relative")
    let plus = document.createElement("span");
    plus.innerText = '+'
    let minus = document.createElement("span");
    minus.innerText = '-'
    ele.after(plus);
    plus.after(minus);
    plus.addEventListener('click', () => {
        ele.value++
    })
    minus.addEventListener('click', () => {
        ele.value--
    })

})

function calcPositionOfSpan(className) {
    if (document.querySelector(`${className} .two-input td:nth-child(2)`) != undefined) {
        let twoInputParent = document.querySelector(`${className} .two-input td:nth-child(2)`).clientWidth
        let inputWidth = (document.querySelector(`${className} .two-input td:nth-child(2) input`).clientWidth) * 2
        document.querySelector(`${className}  .two-input  input+span`).style.right = ((twoInputParent - inputWidth) / 2) - 10 + 'px'
    }
}
calcPositionOfSpan('.service-details.service-four')
calcPositionOfSpan('.service-details.service-three')
window.addEventListener('resize', () => {
    calcPositionOfSpan('.service-details.service-four')
    calcPositionOfSpan('.service-details.service-three')
})


//show back and forward content   =======> service details
function back() {
    if (document.querySelector('.buttons .back')) {
        let back = document.querySelector('.buttons .back');
        let stepContents = document.querySelectorAll('.step-content');
        back.onclick = function () {
            let stepsActive = Array.from(document.querySelectorAll('.steps div.active'));
            let lastActive = stepsActive[stepsActive.length - 1]
            let lastHeaderTextActive = document.querySelector('.header .text.d-block')

            if ((stepsActive.length - 1) > 0) {
                lastActive.classList.remove('active');

                lastActive.children[0].children[0].classList.add('d-none')
                lastActive.children[0].children[0].classList.remove('d-block')
                lastActive.previousElementSibling.children[0].children[0].classList.remove('d-none')
                lastActive.previousElementSibling.children[0].children[0].classList.add('d-block')

                stepsActive = Array.from(document.querySelectorAll('.steps div.active'));
                stepContents.forEach(ele => {
                    ele.classList.add('d-none')
                    ele.classList.remove('d-block')
                })

                stepContents[stepsActive.length - 1].classList.add('d-block')
                stepContents[stepsActive.length - 1].classList.remove('d-none')

                lastHeaderTextActive.previousElementSibling.classList.remove('d-none')
                lastHeaderTextActive.previousElementSibling.classList.add('d-block')
                lastHeaderTextActive.classList.remove('d-block')
                lastHeaderTextActive.classList.add('d-none')
            }
        }
    }

}
function next() {
    if (document.querySelector('.buttons .next') != undefined) {
        let next = document.querySelector('.buttons .next');
        let stepsLength = document.querySelectorAll('.steps div').length;
        let stepContents = document.querySelectorAll('.step-content');
        next.onclick = function () {
            let stepsActive = Array.from(document.querySelectorAll('.steps div.active'));
            let lastActive = stepsActive[stepsActive.length - 1]
            let lastHeaderTextActive = document.querySelector('.header .text.d-block')

            if ((stepsActive.length - 1) < (stepsLength - 1)) {
                lastActive.nextElementSibling.classList.add('active')
                lastActive.children[0].children[0].classList.add('d-none')
                lastActive.children[0].children[0].classList.remove('d-block')
                lastActive.nextElementSibling.children[0].children[0].classList.remove('d-none')
                lastActive.nextElementSibling.children[0].children[0].classList.add('d-block')
                stepsActive = Array.from(document.querySelectorAll('.steps div.active'));
                stepContents.forEach(ele => {
                    ele.classList.add('d-none')
                    ele.classList.remove('d-block')
                })

                stepContents[stepsActive.length - 1].classList.add('d-block')
                stepContents[stepsActive.length - 1].classList.remove('d-none')

                lastHeaderTextActive.nextElementSibling.classList.remove('d-none')
                lastHeaderTextActive.nextElementSibling.classList.add('d-block')
                lastHeaderTextActive.classList.remove('d-block')
                lastHeaderTextActive.classList.add('d-none')
            }
        }
    }

}

back()
next()





//show abacus dialog  =======> service details
function showAbacusDialog() {
    if (document.querySelector('#abacus') != undefined) {
        document.querySelector('#abacus').addEventListener('click', () => {
            document.querySelector('.update-button').classList.remove('d-none')
            document.querySelector('.update-button').classList.add('d-block')
        })
    }
}

showAbacusDialog()

//change inner text of determine certificates  =======> service details

function determineCertificates() {
    if (document.querySelector('.certifications .confirm') != undefined) {
        document.querySelector('.certifications .confirm').addEventListener('click', () => {
            document.querySelector('.other-certificate').classList.remove('d-none')
            document.querySelector('.certificate-text button').classList.remove('text-main-brown')
            document.querySelector('.certificate-text button').classList.add('text-main-blue')
            document.querySelector('.certificate-text button').innerHTML = 'تعديل الشهادات المختارة'
        })
    }
}

determineCertificates()



// intit map   =======> home
function initMap(className) {
    if ($(className) != undefined) {
        setTimeout(function () {
            $(className).timezonePicker({
                hoverText: function (e, data) {
                    return (data.timezone);
                },
                selectBox: false,
                defaultValue: { value: "SA", attribute: "country" }
            });
        }, 1000)
    }
}
initMap('.map')



// drawing chart    ========> my-account-logistic
function drawingChart(idName, data, labels) {
    if (document.getElementById(idName) != undefined) {
        const item = document.getElementById(idName);
        new Chart(item, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'الاحصائيات',
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        // display:false
                    }
                }
            }
        });
    }
}
drawingChart('week', [12, 8, 11, 5, 3, 6], ['السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس'])
drawingChart('month', [12, 19, 3, 5, 2], ['6/2022', '7/2022', '8/2022', '9/2022', '10/2022'])
drawingChart('year', [12, 19, 3, 5, 2], ['6/2022', '7/2022', '8/2022', '9/2022', '10/2022'])


// change content of steps   ==========> order-steper-details
function changeOrderStatus() {
    let order_status = [{
        name: 'استلام الورق',
        status: 'done'
    }, {
        name: 'استلام التفويض',
        status: 'inproccess'
    }, {
        name: 'التدقيق في الاوراق',
        status: 'none'
    }, {
        name: 'وصول الشحنة',
        status: 'none'
    }, {
        name: 'تحضير الحاويات',
        status: 'none'
    }]

    let y = Array.from(document.querySelectorAll('.slideinner .circle'))
    y.forEach((ele, index) => {
        ele.classList.add(order_status[index].status);
    });

}

function downloadPill() {
    $('.bill-paper h2').addClass('print')
    let ele = $(".bill-paper");
    html2canvas(ele, {
        onrendered: function (canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL()
            a.download = 'الفاتورة.jpg';
            a.click();
            $('.bill-paper h2').removeClass('print')
        }
    })

}

function navigation(item1) {
    console.log(item1)
    var linksList = Array.from(document.querySelectorAll('.account-details .steper .steps span:nth-child(odd)'));
    var contentList = Array.from(document.querySelectorAll('.account-details .steper .content'));
    linksList.forEach(ele => {
        if (ele.getAttribute('data-target') == item1) {
            ele.classList.add('active');
            console.log(ele)
        } else {
            ele.classList.remove('active');
        }
    })

    contentList.forEach((content) => {
        if (content.classList.contains(item1)) {
            content.classList.add('d-block');
            content.classList.remove('d-none');
        } else {
            content.classList.add('d-none');
            content.classList.remove('d-block');
        }
    });
}

function activeAndDisActiveRow() {
    if ($('.offers table tbody tr td a') != undefined) {
        $('.offers table tbody tr td a').click(function (ele) {
            $('.modal .modal-footer .agree').click(function () {
                $('.offers table tbody tr').addClass('addLine').removeClass('active')
                $(ele.target).parents('tr').removeClass('addLine').addClass('active')
            })

            $('.modal .modal-footer .disagree').click(function () {
                $('.offers table tbody tr').removeClass('addLine').removeClass('active')
                $(ele.target).parents('tr').addClass('addLine').removeClass('active')
            })
        })
    }

}
activeAndDisActiveRow()
























$(document).ready(function () {
    $(".home-header-slider").owlCarousel({
        autoplay: true,
        smartSpeed: 800,
        dots: true,
        mouseDrag: true,
        margin: 10,
        navigation: true,
        slideBy: 1,
        items: 1,
    });
    $(".about-us-slider").owlCarousel({
        autoplay: true,
        smartSpeed: 800,
        dots: true,
        mouseDrag: true,
        margin: 10,
        navigation: true,
        slideBy: 1,
        items: 1,
    })
    $(".full-slider-services").owlCarousel({
        autoplay: true,
        smartSpeed: 800,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots: false,
        mouseDrag: true,
        loop: true,
        margin: 10,
        navigation: true,
        slideBy: 1,
        items: 1,
    })
});
$(document).ready(function () {
    function changeContent(links, content, className) {

        var linksList = Array.from(document.querySelectorAll(links));
        var contentList = Array.from(document.querySelectorAll(content));


        linksList.forEach((element) => {
            element.addEventListener('click', () => {
                let href = element.getAttribute('data-target')?.toString();

                contentList.forEach((content) => {
                    if (content.classList.contains(href)) {
                        content.classList.add(className);
                        content.classList.remove('d-none');
                    } else {
                        content.classList.add('d-none');
                        content.classList.remove(className);
                    }
                });
            });
        });
    }

    function toggleActiveClass(item) {
        $(item).click(function () {
            $(item).removeClass("active");
            $(this).addClass("active");
        });
    }

    // account-steper-detais
    changeContent('.leaflets.two span', '.mini-table.two', 'd-block')
    changeContent('.leaflets.one span', '.mini-table.one', 'd-block')
    changeContent('.leaflets.three span', '.chart', 'd-block')
    toggleActiveClass('.leaflets.two span')
    toggleActiveClass('.leaflets.one span')
    toggleActiveClass('.leaflets.three span')
    changeContent('.account-details .steps span:nth-child(odd)', '.account-details .steper .content', 'd-block')
    toggleActiveClass('.account-details .steper .steps span:nth-child(odd)')
    changeContent('.account-details button.creation-price', '.account-details .content', 'd-block')

    var step = 300;

    $(".preSlide").bind("click", function (event) {
        event.preventDefault();
        $(".slideouter").animate({
            scrollLeft: "+=" + step + "px"
        });
    });

    $(".nextSlide").bind("click", function (event) {
        event.preventDefault();
        $(".slideouter").animate({
            scrollLeft: "-=" + step + "px"
        });
    })


    //my-account page
    toggleActiveClass(".sidebar ul li")
    changeContent('.sidebar ul li', '.my-account  .content')
    //register page
    toggleActiveClass(".toggle-active-btn")
    // using-way
    $(".using-way .owl-carousel").owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        padding: 0,
        stagePadding: 0,
        smartSpeed: 800,
        navs: true,
        loop: true,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true
    })
    // home counter
    // Initialize PureCounter by Default. It also can be stored on variable
    new PureCounter();
    // Initialize PureCounter using custom selector and custom default configuration.
    // It also can be stored on variable
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });
});


