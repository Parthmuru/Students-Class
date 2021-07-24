student_name = [];
function submit() {
    var one = document.getElementById("no1").value;
    var two = document.getElementById("no2").value;
    var three = document.getElementById("no3").value;
    var four = document.getElementById("no4").value;

    student_name.push(one);
    student_name.push(two);
    student_name.push(three);
    student_name.push(four);

    console.log(student_name);
    document.getElementById("empty").innerHTML = student_name;
    document.getElementById("but1").style.display = "none";
    document.getElementById("but2").style.display = "inline-block";
}
    
function sort() {
    student_name.sort();
    console.log(student_name);
    document.getElementById("empty").innerHTML = student_name;
}