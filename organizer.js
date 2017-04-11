(function() {
    'use strict';

    function initTemplate(templateSelector) {
        var templateText = document.querySelector(templateSelector).innerHTML;
        return Handlebars.compile(templateText);
    }

    var filterTemplate = initTemplate('.filterTemplate');
    var filters = document.querySelector('.filters');

    var teachersTemplate = initTemplate('.teachersTemplate');
    var teachersElement = document.querySelector('.teacherList');

    var addButton = document.querySelector('.addButton');
    var filterButton = document.querySelector('.filterButton');

    var teacherName = document.querySelector('.teacherName');
    var subject = document.querySelector('.subject');
    var grade = document.querySelector('.grade');

    var teachers = [{
        name: 'Andre',
        subject: 'History',
        grade: 7
    }];

    function showData(data) {

        var teachers = [];
        var subjects = [];
        var grades = [];

        for (var i = 0; i < data.length; i++) {
            var teacherData = data[i];
            teachers.push(teacherData.name);
            subjects.push(teacherData.subject);
            grades.push(teacherData.grade);
        }

        filters.innerHTML = filterTemplate({
            teachers: teachers.sort(),
            subjects: subjects.sort(),
            grades: grades.sort()
        });

        teachersElement.innerHTML = teachersTemplate({
            teachers: data
        });
    }

    filters.addEventListener('click', function(evt){
        if (evt.target.name === 'filterButton'){
            alert('filter!');

            // get the references in the Event Listener as these elements are added dynamically
            var teacherFilter = document.querySelector('.teacherFilter');
            var subjectFilter = document.querySelector('.subjectFilter');
            var gradesFilter = document.querySelector('.gradesFilter');

        }
    });

    addButton.addEventListener('click', function() {
        var teacherValue = teacherName.value;
        var subjectValue = subject.value;
        var gradeValue = grade.value;

        if (teacherValue !== ''
            && subjectValue !== ''
            && gradeValue !== '') {
            teachers.push({
                name: teacherValue,
                subject: subjectValue,
                grade: gradeValue
            });
        }

        showData(teachers);
    });

    showData(teachers)

})();
