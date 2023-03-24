import frappe

@frappe.whitelist()
def get_student_details(id_number):
    return frappe.db.get_value("Test Student", {"name": id_number}, "first_name")