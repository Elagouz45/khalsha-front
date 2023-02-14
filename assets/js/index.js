
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

function determineCertificates(confirm, button, text) {
    if (document.querySelector(confirm) != undefined) {
        document.querySelector(confirm).addEventListener('click', () => {
            if (confirm == '.certifications .confirm') {
                document.querySelector('.other-certificate').classList.remove('d-none')
            }
            document.querySelector(button).classList.remove('text-main-brown')
            document.querySelector(button).classList.add('text-main-blue')
            document.querySelector(button).innerHTML = text
        })
    }
}

determineCertificates('.data-entry .confirm', '.data-text div', 'تعديل البيانات المطلوبة')
determineCertificates('.certifications .confirm', '.certificate-text div', 'تعديل الشهادات المختارة')


// add container   =========> service four details
function addContainer() {
    const newForm = document.createElement("form");
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let i = 0; i < 5; i++) {
        const newCol = document.createElement("div");
        newCol.classList.add("col-6");
        if (i === 1) {
            newCol.classList.add("order-1", "position-relative");
            const newLabel1 = document.createElement("label");
            newLabel1.textContent = "موقع الشحنة";
            newLabel1.classList.add("text-bold-gray", "fs-16", "font-bold", "d-block");

            const newselect1 = document.createElement("select");
            const newoption = document.createElement("option");
            newselect1.classList.add("fs-14", "text-center", "w-100");
            newoption.setAttribute("value", "");

            let span = document.createElement("span");


            newselect1.append(newoption)
            newCol.appendChild(newLabel1);
            newCol.appendChild(newselect1);
            newCol.appendChild(span);
        }

        else if (i === 2) {
            newCol.classList.add('order-sm-2', 'order-4')
            const newLabel2 = document.createElement("label");
            newLabel2.textContent = "أضف صورة";
            newLabel2.classList.add("text-bold-gray", "fs-16", "font-bold", "d-block");
            const newLabel3 = document.createElement("label");

            newLabel3.textContent = "تحميل";
            const newi = document.createElement("i");
            newi.classList.add("fa-solid", "fa-cloud-arrow-up");
            newLabel3.appendChild(newi);
            const newInput1 = document.createElement("input");
            newLabel3.classList.add("upload");
            newInput1.setAttribute("type", "file");
            newInput1.setAttribute("hidden", true);
            newInput1.setAttribute("id", "upload2");
            newLabel3.setAttribute("for", "upload2");
            newCol.appendChild(newLabel2);
            newCol.appendChild(newLabel3);
            newCol.appendChild(newInput1);
        }

        else if (i === 3) {
            newCol.classList.add("position-relative", 'order-sm-3', 'order-2');
            const newLabel1 = document.createElement("label");
            newLabel1.textContent = " نوع الحاوية";
            newLabel1.classList.add("text-bold-gray", "fs-16", "font-bold", "d-block");

            const newselect1 = document.createElement("select");
            const newoption = document.createElement("option");
            newselect1.classList.add("fs-14", "text-center", "w-100");
            newoption.setAttribute("value", "");

            let span = document.createElement("span");


            newselect1.append(newoption)
            newCol.appendChild(newLabel1);
            newCol.appendChild(newselect1);
            newCol.appendChild(span);
        }

        else if (i === 4) {
            newCol.classList.add("order-sm-4", "order-3", "position-relative")
            const newLabel3 = document.createElement("label");
            const newInput45 = document.createElement("input");

            newInput45.classList.add("fs-14", "text-center", "w-100")
            newLabel3.textContent = "عدد الحاويات";
            newLabel3.classList.add("fs-16", "text-bold-gray", "font-bold", "d-block")
            newInput45.setAttribute("type", "number");
            newInput45.value = 0

            let plus = document.createElement("span");
            plus.innerText = '+'
            let minus = document.createElement("span");
            minus.innerText = '-'

            newCol.append(newLabel3)
            newCol.append(newInput45)
            newCol.appendChild(plus);
            newCol.appendChild(minus);

            plus.addEventListener('click', () => {
                newInput45.value++
            })
            minus.addEventListener('click', () => {
                newInput45.value--
            })
        }

        else {
            // create delete button
            const deleteButton = document.createElement("i");
            deleteButton.classList.add("delete-form-button", "fa", "fa-times", "color-white", "delete-icon");
            newCol.classList.remove("col-6");
            newCol.classList.add("col-12");
            newCol.style.textAlign = "left"
            newCol.style.paddingLeft = 0
            newCol.appendChild(deleteButton);

            // add event listener to delete button
            deleteButton.addEventListener("click", function (event) {
                event.preventDefault();
                const formToDelete = event.target.closest("form");
                formToDelete.remove();
            });
        }

        newRow.appendChild(newCol);
    }

    newForm.appendChild(newRow);
    $("#containerDialog .form-container").append(newForm);



}

// add  product  =========> service sex details
function addOtherProduct() {
    document.querySelector('.fill-application div').innerHTML += `
    <form>
    <table class="w-100">
    <P class=" text-center fs-22 text-main-blue font-bold">المنتج الثاني</p>
                    <tbody>
                
                        <tr>
                            <td class=" fs-22 text-center text-bold-gray font-bold">مجال الخدمة</td>
                            <td class=" fs-22 text-center text-bold-gray" colspan="2">
                                <input type="text" placeholder="إصدار شهادة سابر" class="fs-18">
                            </td>
                            <td class=" fs-22 text-center text-bold-gray"> 
                                <span class="msg-icn">؟</span>
                            </td>
                        </tr>

                        <tr>
                            <td class=" fs-22 text-center text-bold-gray font-bold">                                        الغرض من الخدمة
                                الغرض من الخدمة
                            </td>
                            <td class=" fs-22 text-center text-bold-gray" colspan="2">
                                <input type="text" value="إصدار شهادة سابر" class="fs-18">
                            </td>
                            <td class=" fs-22 text-center text-bold-gray">
                                <span class="msg-icn">؟</span>
                            </td>
                        </tr>


                        <tr class="two-input">
                            <td class=" fs-22 text-center text-bold-gray font-bold">اسم الصنف</td>
                            <td class=" fs-22 text-center text-bold-gray" colspan="2">
                                <input type="text" value="عربي" class="fs-18">
                                <input type="text" value="انجليزي" class="fs-18">
                            </td>
                            <td class=" fs-22 text-center text-bold-gray">
                                <span class="msg-icn">؟</span>
                            </td>
                        </tr>

                        <tr>
                            <td class=" fs-22 text-center text-bold-gray font-bold">الرمز الجمركي</td>
                            <td class=" fs-22 text-center text-bold-gray" colspan="2">
                                <input type="text" class="fs-18">
                            </td>
                            <td class=" fs-22 text-center text-bold-gray">
                                <span class="msg-icn">؟</span>
                            </td>
                        </tr>

                        <tr>
                            <td class=" fs-22 text-center text-bold-gray font-bold">اسم المصنع / المورد</td>
                            <td class=" fs-22 text-center text-bold-gray" colspan="2">
                                <input type="text" class="fs-18">
                            </td>
                            <td class=" fs-22 text-center text-bold-gray">
                                <span class="msg-icn">؟</span>
                            </td>
                        </tr>

                

                        <tr>
                            <td class=" fs-22 text-center text-bold-gray font-bold">صورة من البطاقة الإيضاحية</td>
                            <td class=" fs-22 text-center text-bold-gray" colspan="2">

                                <label for="upload1" class="upload">
                                    تحميل
                                    <i class="fa-solid fa-cloud-arrow-up"></i>
                                </label>
                                <input type="file" hidden id="upload1">

                            </td>
                            <td class=" fs-22 text-center text-bold-gray">
                                <span class="msg-icn">؟</span>
                            </td>
                        </tr>


                        <tr>
                            <td class=" fs-22 text-center text-bold-gray font-bold">صورة المنتج</td>
                            <td class=" fs-22 text-center text-bold-gray" colspan="2">

                                <label for="upload2" class="upload">
                                    تحميل
                                    <i class="fa-solid fa-cloud-arrow-up"></i>
                                </label>
                                <input type="file" hidden id="upload2">

                            </td>
                            <td class=" fs-22 text-center text-bold-gray">
                                <span class="msg-icn">؟</span>
                            </td>
                        </tr>


                    </tbody>
                </table></form>`
}

//add container   ==========> service three details
function addContainer3() {
    const newForm = document.createElement("form");
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let i = 0; i < 5; i++) {
        const newCol = document.createElement("div");
        const deleteDiv = document.createElement("div");
        newCol.classList.add("col-6");
        if (i === 1) {
            newCol.classList.add("order-1", "position-relative");
            const newLabel1 = document.createElement("label");
            newLabel1.textContent = "موقع الشحنة";
            newLabel1.classList.add("text-bold-gray", "fs-16", "font-bold", "d-block");

            const newselect1 = document.createElement("select");
            const newoption = document.createElement("option");
            newselect1.classList.add("fs-14", "text-center", "w-100");
            newoption.setAttribute("value", "");

            let span = document.createElement("span");


            newselect1.append(newoption)
            newCol.appendChild(newLabel1);
            newCol.appendChild(newselect1);
            newCol.appendChild(span);
        }

        else if (i === 2) {
            newCol.classList.add('order-sm-2', 'order-4')
            const newLabel2 = document.createElement("label");
            newLabel2.textContent = "أضف صورة";
            newLabel2.classList.add("text-bold-gray", "fs-16", "font-bold", "d-block");
            const newLabel3 = document.createElement("label");

            newLabel3.textContent = "تحميل";
            const newi = document.createElement("i");
            newi.classList.add("fa-solid", "fa-cloud-arrow-up");
            newLabel3.appendChild(newi);
            const newInput1 = document.createElement("input");
            newLabel3.classList.add("upload");
            newInput1.setAttribute("type", "file");
            newInput1.setAttribute("hidden", true);
            newInput1.setAttribute("id", "upload2");
            newLabel3.setAttribute("for", "upload2");
            newCol.appendChild(newLabel2);
            newCol.appendChild(newLabel3);
            newCol.appendChild(newInput1);
        }

        else if (i === 3) {
            newCol.classList.add("position-relative", 'order-sm-3', 'order-2');
            const newLabel1 = document.createElement("label");
            newLabel1.textContent = " نوع الحاوية";
            newLabel1.classList.add("text-bold-gray", "fs-16", "font-bold", "d-block");

            const newselect1 = document.createElement("select");
            const newoption = document.createElement("option");
            newselect1.classList.add("fs-14", "text-center", "w-100");
            newoption.setAttribute("value", "");

            let span = document.createElement("span");


            newselect1.append(newoption)
            newCol.appendChild(newLabel1);
            newCol.appendChild(newselect1);
            newCol.appendChild(span);
        }

        else if (i === 4) {
            newCol.classList.add("order-sm-4", "order-3", "position-relative")
            const newLabel3 = document.createElement("label");
            const newInput45 = document.createElement("input");

            newInput45.classList.add("fs-14", "text-center", "w-100")
            newLabel3.textContent = "عدد الحاويات";
            newLabel3.classList.add("fs-16", "text-bold-gray", "font-bold", "d-block")
            newInput45.setAttribute("type", "number");
            newInput45.value = 0

            let plus = document.createElement("span");
            plus.innerText = '+'
            let minus = document.createElement("span");
            minus.innerText = '-'

            newCol.append(newLabel3)
            newCol.append(newInput45)
            newCol.appendChild(plus);
            newCol.appendChild(minus);

            plus.addEventListener('click', () => {
                newInput45.value++
            })
            minus.addEventListener('click', () => {
                newInput45.value--
            })
        }

        else {
            // create delete button
            const deleteButton = document.createElement("i");
            deleteButton.classList.add("delete-form-button", "fa", "fa-times", "color-white", "delete-icon");
            newCol.classList.remove("col-6");
            newCol.classList.add("col-12");
            newCol.style.textAlign = "left"
            newCol.style.paddingLeft = 0
            newCol.appendChild(deleteButton);

            // add event listener to delete button
            deleteButton.addEventListener("click", function (event) {
                event.preventDefault();
                const formToDelete = event.target.closest("form");
                formToDelete.remove();
            });
        }

        newRow.appendChild(newCol);
    }

    newForm.appendChild(newRow);
    $("#containerDialog .form-container").append(newForm);
}

//add container   ==========> service two details
function addContainer21() {
    const newForm = document.createElement("form");
    const newRow = document.createElement("div");
    newRow.classList.add("row");

    for (let i = 0; i < 4; i++) {
        const newCol = document.createElement("div");
        if (i === 1) {
            newCol.classList.add("col-sm-8", "mb-4");
            const newInput1 = document.createElement("input");
            const newLabel1 = document.createElement("label");
            newLabel1.textContent = "الصنف ";
            newInput1.classList.add("fs-14", "text-center", "w-100");
            newInput1.setAttribute("type", "text");
            newLabel1.classList.add("d-block", 'font-bold', "fs-16", "text-bold-gray", "w-100");
            newCol.appendChild(newLabel1);
            newCol.appendChild(newInput1);
        } else if (i === 2) {
            newCol.classList.add("col-sm-4", "mb-4", "position-relative");
            const newLabel2 = document.createElement("label");
            newLabel2.textContent = "أضف صورة";
            newLabel2.classList.add("text-bold-gray", "fs-16", "font-bold", "d-block");
            const newLabel3 = document.createElement("label");

            newLabel3.textContent = "تحميل";
            const newi = document.createElement("i");
            newi.classList.add("fa-solid", "fa-cloud-arrow-up");
            newLabel3.appendChild(newi);
            const newInput1 = document.createElement("input");
            newLabel3.classList.add("upload");
            newInput1.setAttribute("type", "file");
            newInput1.setAttribute("hidden", true);
            newInput1.setAttribute("id", `upload${i}`);
            newLabel3.setAttribute("for", `upload${i}`);
            newCol.appendChild(newLabel2);
            newCol.appendChild(newLabel3);
            newCol.appendChild(newInput1);
        } else if (i === 3) {
            newCol.classList.add("col-12", "d-flex", "justify-content-between", "mb-4");
            for (let index = 0; index < 3; index++) {
                if (index === 0) {
                    const div = document.createElement("div");
                    div.classList.add("w-25");
                    const newLabel4 = document.createElement("label");
                    newLabel4.textContent = "فك";
                    newLabel4.classList.add("fs-16", "text-center", "text-bold-gray", "font-bold")
                    const newInput2 = document.createElement("input");
                    newInput2.setAttribute("type", "checkbox");
                    newInput2.setAttribute("id", `assemble${index}`);
                    newLabel4.setAttribute("for", `assemble${index}`)
                    div.appendChild(newInput2);
                    div.appendChild(newLabel4);
                    newCol.appendChild(div)
                }
                else if (index === 1) {
                    const div = document.createElement("div");
                    div.classList.add("w-25");
                    const newLabel5 = document.createElement("label");
                    newLabel5.textContent = " تغليف";
                    newLabel5.classList.add("fs-16", "text-center", "text-bold-gray", "font-bold")
                    const newInput2 = document.createElement("input");
                    newInput2.setAttribute("type", "checkbox");
                    newInput2.setAttribute("id", `cover${index}`);
                    newLabel5.setAttribute("for", `cover${index}`)
                    div.appendChild(newInput2);
                    div.appendChild(newLabel5);
                    newCol.appendChild(div)
                }
                else if (index === 2) {
                    const div = document.createElement("div");
                    div.classList.add("w-25");
                    const newLabel6 = document.createElement("label");
                    newLabel6.textContent = " تركيب";
                    newLabel6.classList.add("fs-16", "text-center", "text-bold-gray", "font-bold")
                    const newInput2 = document.createElement("input");
                    newInput2.setAttribute("type", "checkbox");
                    newInput2.setAttribute("id", `reassemble${index}`);
                    newLabel6.setAttribute("for", `reassemble${index}`)
                    div.appendChild(newInput2);
                    div.appendChild(newLabel6);
                    newCol.appendChild(div)
                }
            }

        }
        else {
            // create delete button
            const deleteButton = document.createElement("i");
            deleteButton.classList.add("delete-form-button", "fa", "fa-times", "color-white", "delete-icon");
            newCol.classList.remove("col-6");
            newCol.classList.add("col-12");
            newCol.style.textAlign = "left"
            newCol.style.paddingLeft = 0
            newCol.appendChild(deleteButton);

            // add event listener to delete button
            deleteButton.addEventListener("click", function (event) {
                event.preventDefault();
                const formToDelete = event.target.closest("form");
                formToDelete.remove();
            });
        }

        newRow.appendChild(newCol);
    }

    newForm.appendChild(newRow);
    $(".formContainer").append(newForm);
}

//add container   ==========> service two details
function addContainer22() {
    const newForm = document.createElement("form");
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let i = 0; i < 4; i++) {
        const newCol = document.createElement("div", "position-relative");
        if (i === 1) {
            newCol.classList.add("col-6", "position-relative");
            const newLabel1 = document.createElement("label");
            newLabel1.textContent = "نوع الشحنة";
            newLabel1.classList.add("fs-16", "text-bold-gray", "font-bold")

            const newselect1 = document.createElement("select");
            const newoption = document.createElement("option");
            newselect1.classList.add("fs-14", "text-center", "w-100");
            newoption.setAttribute("value", "");

            let span = document.createElement("span");


            newselect1.append(newoption)
            newCol.appendChild(newLabel1);
            newCol.appendChild(newselect1);
            newCol.appendChild(span);


        } else if (i === 2) {
            newCol.classList.add("col-6", "mb-4");

            const newLabel2 = document.createElement("label");
            newLabel2.textContent = "أضف صورة";
            newLabel2.classList.add("fs-16", "d-block", "text-bold-gray", "font-bold")
            const newLabel3 = document.createElement("label");

            newLabel3.textContent = "تحميل";
            const newi = document.createElement("i");
            newi.classList.add("fa-solid", "fa-cloud-arrow-up");
            newLabel3.appendChild(newi);
            const newInput1 = document.createElement("input");
            newLabel3.classList.add("upload");
            newInput1.setAttribute("type", "file");
            newInput1.setAttribute("hidden", true);
            newInput1.setAttribute("id", "upload6");
            newLabel3.setAttribute("for", "upload6");
            newCol.appendChild(newLabel2);
            newCol.appendChild(newLabel3);
            newCol.appendChild(newInput1);
        } else if (i === 3) {
            for (let index = 0; index < 3; index++) {
                if (index === 0) {
                    const newLabel3 = document.createElement("label");
                    const newInput45 = document.createElement("input");
                    const div = document.createElement("div", "position-relative");
                    div.classList.add("w-25", "position-relative");
                    newInput45.classList.add("w-100", "text-center", "fs-14");
                    newLabel3.textContent = "الكمية";
                    newLabel3.classList.add("text-bold-gray", "d-block", "fs-16", "font-bold")
                    newInput45.setAttribute("type", "number");
                    newInput45.value = 0

                    let plus = document.createElement("span");
                    plus.innerText = '+'
                    let minus = document.createElement("span");
                    minus.innerText = '-'

                    div.append(newLabel3)
                    div.append(newInput45)
                    div.appendChild(plus);
                    div.appendChild(minus);

                    plus.addEventListener('click', () => {
                        newInput45.value++
                    })
                    minus.addEventListener('click', () => {
                        newInput45.value--
                    })

                    newCol.appendChild(div);
                } else if (index === 1) {
                    const newLabel3 = document.createElement("label");
                    const newInput45 = document.createElement("input");
                    const div = document.createElement("div");
                    div.classList.add("w-25", "position-relative");
                    newInput45.classList.add("w-100", "text-center", "fs-14");
                    newLabel3.textContent = "الوزن";
                    newLabel3.classList.add("text-bold-gray", "d-block", "fs-16", "font-bold")
                    newInput45.setAttribute("type", "number");
                    newInput45.value = 0

                    let plus = document.createElement("span");
                    plus.innerText = '+'
                    let minus = document.createElement("span");
                    minus.innerText = '-'
                    div.append(newLabel3)
                    div.append(newInput45)
                    div.appendChild(plus);
                    div.appendChild(minus);
                    plus.addEventListener('click', () => {
                        newInput45.value++
                    })
                    minus.addEventListener('click', () => {
                        newInput45.value--
                    })
                    newCol.appendChild(div);

                } else if (index === 2) {
                    const newLabel3 = document.createElement("label");
                    const newInput45 = document.createElement("input");
                    const div = document.createElement("div");
                    div.classList.add("w-25", "position-relative");
                    newInput45.classList.add("w-100", "text-center", "fs-14");
                    newLabel3.textContent = "إجمالى الوزن";
                    newLabel3.classList.add("text-bold-gray", "d-block", "fs-16", "font-bold")
                    newInput45.setAttribute("type", "number");
                    newInput45.value = 0

                    let plus = document.createElement("span");
                    plus.innerText = '+'
                    let minus = document.createElement("span");
                    minus.innerText = '-'
                    div.append(newLabel3)
                    div.append(newInput45)
                    div.appendChild(plus);
                    div.appendChild(minus);
                    plus.addEventListener('click', () => {
                        newInput45.value++
                    })
                    minus.addEventListener('click', () => {
                        newInput45.value--
                    })
                    newCol.appendChild(div);
                }
            }
            // newCol.classList.remove("col-6");
            newCol.classList.add("col-12", "d-flex", "justify-content-between");
            newRow.appendChild(newCol);
        } else {
            // create delete button
            const deleteButton = document.createElement("i");
            deleteButton.classList.add("delete-form-button", "fa", "fa-times", "color-white", "delete-icon");
            newCol.classList.remove("col-6");
            newCol.classList.add("col-12");
            newCol.style.textAlign = "left"
            newCol.style.paddingLeft = 0
            newCol.appendChild(deleteButton);

            // add event listener to delete button
            deleteButton.addEventListener("click", function (event) {
                event.preventDefault();
                const formToDelete = event.target.closest("form");
                formToDelete.remove();
            });
        }

        newRow.appendChild(newCol);
    }

    newForm.appendChild(newRow);
    $(".formContainer2").append(newForm);
}

//add container   ==========> service two details
function addContainer23() {
    const newForm = document.createElement("form");
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let i = 0; i < 5; i++) {
        const newCol = document.createElement("div");
        newCol.classList.add("col-6", "position-relative");
        if (i === 1) {
            const newLabel1 = document.createElement("label");
            newLabel1.textContent = "نوع الشحنة";
            newLabel1.classList.add("text-bold-gray", "font-bold", "d-block", "fs-16")


            const newselect1 = document.createElement("select");
            const newoption = document.createElement("option");
            newselect1.classList.add("fs-14", "text-center", "w-100");
            newoption.setAttribute("value", "");

            let span = document.createElement("span");


            newselect1.append(newoption)
            newCol.appendChild(newLabel1);
            newCol.appendChild(newselect1);
            newCol.appendChild(span);
        }
        else if (i === 2) {
            newCol.classList.add("mb-4");
            const newLabel2 = document.createElement("label");
            newLabel2.textContent = "أضف صورة";
            newLabel2.classList.add("d-block", "fs-16", "font-bold", "text-bold-gray");
            const newLabel3 = document.createElement("label");
            newLabel3.textContent = "تحميل";
            const newi = document.createElement("i");
            newi.classList.add("fa-solid", "fa-cloud-arrow-up");
            newLabel3.appendChild(newi);
            const newInput1 = document.createElement("input");
            newLabel3.classList.add("upload");
            newInput1.setAttribute("type", "file");
            newInput1.setAttribute("hidden", true);
            newInput1.setAttribute("id", "upload6");
            newLabel3.setAttribute("for", "upload6");
            newCol.appendChild(newLabel2);
            newCol.appendChild(newLabel3);
            newCol.appendChild(newInput1);
        } else if (i === 3) {
            const newLabel3 = document.createElement("label");
            newLabel3.textContent = "وصف الشحنة";
            newLabel3.classList.add("fs-16", "text-bold-gray", "font-bold")
            const newInput1 = document.createElement("input");
            newInput1.classList.add("fs-14", "text-center", "w-100");
            newInput1.setAttribute("type", "text");
            newCol.appendChild(newLabel3);
            newCol.appendChild(newInput1);


        } else if (i === 4) {
            const newLabel3 = document.createElement("label");
            newLabel3.textContent = "نوع الشاحنة";
            newLabel3.classList.add("fs-16", "text-bold-gray", "font-bold")

            const newselect1 = document.createElement("select");
            const newoption = document.createElement("option");
            newselect1.classList.add("fs-14", "text-center", "w-100");
            newoption.setAttribute("value", "");

            let span = document.createElement("span");


            newselect1.append(newoption)
            newCol.appendChild(newLabel3);
            newCol.appendChild(newselect1);
            newCol.appendChild(span);

        } else {
            // create delete button
            const deleteButton = document.createElement("i");
            deleteButton.classList.add("delete-form-button", "fa", "fa-times", "color-white", "delete-icon");
            newCol.classList.remove("col-6");
            newCol.classList.add("col-12");
            newCol.style.textAlign = "left"
            newCol.style.paddingLeft = 0
            newCol.appendChild(deleteButton);

            // add event listener to delete button
            deleteButton.addEventListener("click", function (event) {
                event.preventDefault();
                const formToDelete = event.target.closest("form");
                formToDelete.remove();
            });
        }

        newRow.appendChild(newCol);
    }

    newForm.appendChild(newRow);
    $(".formContainer3").append(newForm);
}

// intit map   =======> home
function initMap(className) {
    console.log($(className))
    if ($(className)) {
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
    changeContent('.sidebar ul li', '.my-account  .content');

    if (location.hash.slice(1)) {
        changeContentRouting('.my-account  .content');
        toggleActiveClassRouting('.sidebar ul li');
        changeContentRouting('.account-details .steper .content', 'd-block')
        toggleActiveClassRouting('.account-details .steper .steps span:nth-child(odd)')
        if(location.hash.slice(1) == 'order-status'){
            changeOrderStatus()
        }
    }



    function toggleActiveClassRouting(item) {
        let list = Array.from(document.querySelectorAll(item))
        list.forEach(ele => {
            if (ele.getAttribute('data-target') == location.hash.slice(1)) {
                ele.classList.add('active')
            } else {
                ele.classList.remove('active')
            }
        })
    }

    function changeContentRouting(content, className) {
        var contentList = Array.from(document.querySelectorAll(content));

        let href = location.hash.slice(1);

        contentList.forEach((content) => {
            if (content.classList.contains(href)) {
                content.classList.add(className);
                content.classList.remove('d-none');
            } else {
                content.classList.add('d-none');
                content.classList.remove(className);
            }
        });
    }




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


