import sqlite3

conn = sqlite3.connect("company.db")
cursor = conn.cursor()

# Create the table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS employee (
        first_name TEXT,
        last_name TEXT,
        age INTEGER,
        department TEXT,
        salary REAL
    )
""")
conn.commit()


class Employee:
    all_employees = []

    def __init__(self, first_name, last_name, age, department, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.department = department
        self.salary = salary

        Employee.all_employees.append(self)

        cursor.execute(
            "INSERT INTO employee VALUES (?, ?, ?, ?, ?)",
            (first_name, last_name, age, department, salary)
        )
        conn.commit()

    def transfer(self, new_department):
        self.department = new_department
        cursor.execute(
            "UPDATE employee SET department = ? WHERE first_name = ? AND last_name = ?",
            (new_department, self.first_name, self.last_name)
        )
        conn.commit()

    def fire(self):
        if self in Employee.all_employees:
            Employee.all_employees.remove(self)
            cursor.execute(
                "DELETE FROM employee WHERE first_name = ? AND last_name = ?",
                (self.first_name, self.last_name)
            )
            conn.commit()

    def show(self):
        print(f"{self.first_name} {self.last_name} - Age: {self.age} - Dept: {self.department} - Salary: {self.salary}")

    @staticmethod
    def list_employees():
        cursor.execute("SELECT * FROM employee")
        rows = cursor.fetchall()
        for row in rows:
            print(f"{row[0]} {row[1]} - Age: {row[2]} - Dept: {row[3]} - Salary: {row[4]}")


class Manager(Employee):
    def __init__(self, first_name, last_name, age, department, salary, managed_dept):
        super().__init__(first_name, last_name, age, department, salary)
        self.managed_dept = managed_dept

    def show(self):
        print(f"{self.first_name} {self.last_name} - Age: {self.age} - Dept: {self.department} - Salary: Confidential - Manages: {self.managed_dept}")


def menu():
    while True:
        print("--- Company System ---")
        print("add : Add new employee or manager")
        print("transfer : Transfer department")
        print("fire    : Fire employee")
        print("list   : Show all employees")
        print("show  : Show details for one person")
        print("q  :  Quit")

        cmd = input("Enter command: ").strip().lower()

        if cmd == 'add':
            role = input("Type 'e' for employee or 'm' for manager: ").strip().lower()
            fname = input("First name: ")
            lname = input("Last name: ")
            age = int(input("Age: "))
            dept = input("Department: ")
            salary = float(input("Salary: "))

            if role == 'm':
                managed = input("Managed department: ")
                Manager(fname, lname, age, dept, salary, managed)
            else:
                Employee(fname, lname, age, dept, salary)

            print("Added successfully.")

        elif cmd == 'transfer':
            fname = input("First name: ")
            lname = input("Last name: ")
            new_dept = input("New department: ")
            for emp in Employee.all_employees:
                if emp.first_name == fname and emp.last_name == lname:
                    emp.transfer(new_dept)
                    print("department updated.")
                    break
            else:
                print("employee not found.")

        elif cmd == 'fire':
            fname = input("First name: ")
            lname = input("Last name: ")
            for emp in Employee.all_employees:
                if emp.first_name == fname and emp.last_name == lname:
                    emp.fire()
                    print("Employee fired.")
                    break
            else:
                print("employee not found.")

        elif cmd == 'list':
            Employee.list_employees()

        elif cmd == 'show':
            fname = input("First name: ")
            lname = input("Last name: ")
            for emp in Employee.all_employees:
                if emp.first_name == fname and emp.last_name == lname:
                    emp.show()
                    break
            else:
                print("employee not found.")

        elif cmd == 'q':
            print("Exiting...")
            break

        else:
            print("invalid command, try again.")


if __name__ == "__main__":
    menu()
    conn.close()
