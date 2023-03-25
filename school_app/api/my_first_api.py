import frappe
import json

@frappe.whitelist()
def get_student_details(id_number):
    return frappe.db.get_value("Test Student", {"name": id_number}, "first_name")


@frappe.whitelist()
def get_subject_details():
    return frappe.db.get_list("Test Subjects", "*")


@frappe.whitelist()
def create_subjects():
    try:
        d = json.loads(frappe.request.data)
        new_doc = frappe.get_doc({
            "doctype": "Test Subjects",
            "subject_code": d['subject_code'],
            "subject_name": d['subject_name']
        })
        new_doc.save()
        return d
    except:
        frappe.log_error(frappe.get_traceback(), "subject failed")
        return {
            "message": "Error"
        }