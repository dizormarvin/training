import frappe

def auto_create_subject(doc, method):
    new_doc = frappe.new_doc("Test Subjects")
    new_doc.subject_code = doc.item_code
    new_doc.subject_name = doc.item_name
    new_doc.save()

