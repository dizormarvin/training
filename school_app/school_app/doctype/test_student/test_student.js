// Copyright (c) 2023, Ossphinc and contributors
// For license information, please see license.txt

frappe.ui.form.on('Test Student', {

	refresh(frm){
		if (!frm.is_new()){
			frm.add_custom_button(__('Click me'), function() {
				frappe.msgprint("test")
			})
		}
	},
	last_name(frm){
        var first_name = frm.doc.first_name
        var middle_name = frm.doc.middle_name
        var last_name = frm.doc.last_name
        var full_name = first_name + " " + middle_name + " " + last_name
		var no_middle_name = first_name + " " + last_name
		if(middle_name){
			frm.set_value('full_name', full_name)
		}else{
			frm.set_value('full_name', no_middle_name)
		}
    }

});

frappe.ui.form.on('Test Subject Grades', {
	percent_grade: (frm, cdt, cdn)=>{
		var d = locals[cdt][cdn]
		var grade =  d.percent_grade
		console.log(grade)
		if(grade>100 || grade < 0){
			frappe.msgprint("Invalid Input")
			this.remove(d)
		}else{
			if(grade>90){
				d.letter_grade = "A"
			}
			else if(grade > 80 && grade < 91 ){d.letter_grade = "B"}
			else if(grade > 70 && grade < 81 ){d.letter_grade = "C"}
			else if(grade > 60 && grade < 71 ){d.letter_grade = "D"}
			else if(grade > 50 && grade < 61 ){d.letter_grade = "E"}
			else if(grade < 51){d.letter_grade="F"}
			frm.refresh_fields("grades")
		}
	},
	
	grades_add:(frm)=>{
		var total = parseInt(frm.doc.total_subject_grades)
		frm.set_value('total_subject_grades', total + 1)
	},

	grades_remove:(frm)=>{
		var total = parseInt(frm.doc.total_subject_grades)
		frm.set_value('total_subject_grades', total - 1)
	}
})

