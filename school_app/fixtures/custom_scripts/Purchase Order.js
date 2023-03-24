

frappe.ui.form.on('Purchase Order', {
   
    refresh(frm){
        frm.add_custom_button(__('Get Name'), function() {
            console.log("test")
        frappe.call({
            method: "school_app.api.my_first_api.get_student_details",
            args: {id_number: "2023-0000001"},
            callback: (r)=>{
                if(r.message){
                    frappe.msgprint(r.message)
                }
            }
        })
        })
        
    },

    number_1:(frm)=>{
        var num1 = frm.doc.number_1
        var num2 = frm.doc.number_2
        frm.set_value('product', num1 + num2)
        frm.refresh_fields("product")
    },

    number_2:(frm)=>{
        var num1 = frm.doc.number_1
        var num2 = frm.doc.number_2
        frm.set_value('product', num1 + num2)
        frm.refresh_fields("product")
    }
});

