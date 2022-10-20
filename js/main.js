
function addEventHandlerButton() {
    const buttonElements = document.getElementsByClassName('delete-btn');
    let count = 0;
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', function (event) {
            const addNewFieldSection = document.getElementById('add-new-field-section');
            addNewFieldSection.removeChild(event.target.parentNode.parentNode);
            console.log('10');
        });
        count++;
    }
    return count;
}

addEventHandlerButton();

document.getElementById('add-new-subject-btn').addEventListener('click', function () {
    const addNewFieldSection = document.getElementById('add-new-field-section');
    const div = document.createElement('div');
    div.classList.add('row', 'align-items-center', 'mb-3', 'gx-2');
    div.innerHTML = `
    <div class="col-3">
                    <input type="text" class="form-control course-field border border-2 border-primary" disabled placeholder="course 1">
                </div>
                <div class="col-3">
                    <select class="marks-field form-select form-select-lg border border-2 border-primary" aria-label=".form-select-lg example" style="font-size: 16px; padding: 6px 12px;">
                        <option selected>Grade</option>
                        <option value="4.00">A+ (4.00)</option>
                        <option value="3.75">A (3.75)</option>
                        <option value="3.50">A- (3.50)</option>
                        <option value="3.25">B+ (3.25)</option>
                        <option value="3.00">B (3.00)</option>
                        <option value="2.75">B- (2.75)</option>
                        <option value="2.50">C+ (2.50)</option>
                        <option value="2.25">C (2.25)</option>
                        <option value="2.00">D (2.00)</option>
                        <option value="0.00">F (0.00)</option>
                    </select>
                </div>
                <div class="col-3">
                    <input type="number" class="form-control input-credit-field border border-2 border-primary">
                </div>
                <div class="col-3">
                    <button  type="button" class="d-block btn btn-danger w-100 text-white delete-btn">Delete</button>
                </div>
    `

    addNewFieldSection.appendChild(div);
    let i = 1;
    const coursesField = document.getElementsByClassName('course-field');
    for (const field of coursesField) {
        field.setAttribute('placeholder', "course " + i++);
    }
    addEventHandlerButton();

});

document.getElementById('calculate-sgpa-btn').addEventListener('click', function() {
    const marksFields = document.getElementsByClassName('marks-field');
    const creditFields = document.getElementsByClassName('input-credit-field');
    let sum = 0, totalCredit = 0;
    const totalFields = addEventHandlerButton();
    for(let i = 0; i < totalFields; i++) {
        const marks = parseFloat(marksFields[i].value);
        const credit = parseInt(creditFields[i].value);
        if(isNaN(marks) || isNaN(credit) || credit==0) {
            window.alert('Please Fillup The All Required Field!!');
            return;
        }
        sum = sum + (marks * credit);
        totalCredit = totalCredit + credit;
    }

    document.getElementById('set-sgpa').innerText = (sum / totalCredit).toFixed(2);
    document.getElementById('set-credit').innerText = totalCredit;
});