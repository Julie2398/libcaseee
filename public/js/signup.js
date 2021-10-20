$(document).ready(function () {
    $("form").submit(function () {
        let name = $("#name").val();
        let email = $("#email").val();
        let mobile = $("#mobile").val();
        let pass1 = $("#pass1").val();
        let pass2 = $("#pass2").val();
        
        let regexp = /^([a-zA-Z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
        let flag = 0;
        let flag1 = 0;
        console.log(check);


        if (name.search(/[0-9]/) != -1) {
            document.getElementById("name_msg").innerHTML = "Name should contain only characters";
            document.getElementById("name_msg").style.color = "red";
            flag++;
        }
        else {
            document.getElementById("name_msg").innerHTML = "";
            if (name.length < 3) {
                document.getElementById("name_msg").innerHTML = "Name should be atleast 3 characters long";
                document.getElementById("name_msg").style.color = "red";
                flag++;
            }
            else {
                document.getElementById("name_msg").innerHTML = "";
            }
        }

        if (!regexp.test(email)) {
            document.getElementById("email_msg").innerHTML = "Invalid Email ID";
            document.getElementById("email_msg").style.color = "red";
            flag++;
        }
        else {
            document.getElementById("email_msg").innerHTML = "";
        }

        if (mobile.length != 10) {
            document.getElementById("mobile_msg").innerHTML = "Mobile Number should contain 10 numbers only";
            document.getElementById("mobile_msg").style.color = "red";
            flag++;
        }
        else {
            document.getElementById("mobile_msg").innerHTML = "";
        }

        if (pass1.length < 8) {
            document.getElementById("pass1_msg").innerHTML = "Password should be minimum 8 characters long";
            document.getElementById("pass1_msg").style.color = "red";
            flag++;
            flag1++;
        }
        else {
            if (pass1.search(/[a-z]/) == -1) {
                document.getElementById("pass1_msg").innerHTML = "Password should contain atleast one lowercase letter";
                document.getElementById("pass1_msg").style.color = "red";
                flag++;
                flag1++;
            }

            if (pass1.search(/[0-9]/) == -1) {
                document.getElementById("pass1_msg").innerHTML = "Password should contain atleast one number";
                document.getElementById("pass1_msg").style.color = "red";
                flag++;
                flag1++;
            }

            if (pass1.search(/[A-Z]/) == -1) {
                document.getElementById("pass1_msg").innerHTML = "Password should contain atleast one Uppercase letter";
                document.getElementById("pass1_msg").style.color = "red";
                flag++;
                flag1++;
            }
        }






        console.log(pass1);
        console.log(pass2);
        if ((flag1 == 0) && (pass1 != pass2)) {
            document.getElementById("pass1_msg").innerHTML = "Password does not match";
            document.getElementById("pass1_msg").style.color = "red";
            document.getElementById("pass2_msg").innerHTML = "Password does not match";
            document.getElementById("pass2_msg").style.color = "red";
            flag++;
        }


        if ((flag1 == 0) && (pass1 == pass2)) {
            document.getElementById("pass1_msg").innerHTML = "";
            document.getElementById("pass2_msg").innerHTML = "";
        }

        
        if (!document.getElementById("check").checked) {
            document.getElementById("check_msg").innerHTML = "Please accept the T&C to signup";
            document.getElementById("check_msg").style.color = "red";
            flag++;
        }
        else {
            document.getElementById("check_msg").innerHTML = "";
        }


        if (flag == 0)
            return true;
        else
            return false;

    });
});